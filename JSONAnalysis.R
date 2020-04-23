library(jsonlite)
library(tidyverse)
#json.data = fromJSON("./sona-31385.json")

#Read in and merge all json data files
setwd(dirname(rstudioapi::getActiveDocumentContext()$path))
setwd("./data")
file_list = list.files()
setwd(dirname(rstudioapi::getActiveDocumentContext()$path))
setwd("./dataV3V4combined")
file_list = list.files()
for (file in file_list){
  print(file)
  # if the merged dataset doesn't exist, create it
  if (!exists("df_full")){
    json.data = fromJSON(file)
    df_full = data.frame(json.data[["trials"]][["response"]],
                         json.data[["trials"]][["att"]],
                         json.data[["trials"]][["trialNumber"]],
                         json.data[["trials"]][["prompt"]],
                         json.data[["trials"]][["chosenData"]][["g1"]],
                         json.data[["trials"]][["chosenData"]][["g2"]],
                         json.data[["trials"]][["chosenData"]][["g3"]],
                         json.data[["trials"]][["chosenData"]][["g4"]],
                         json.data[["trials"]][["chosenData"]][["mu"]],
                         json.data[["trials"]][["chosenData"]][["tradeoff"]],
                         json.data[["trials"]][["chosenData"]][["p"]],
                         json.data[["trials"]][["jitter"]],
                         json.data[["subjectData"]][["promptCheck1"]],
                         json.data[["subjectData"]][["promptCheck2"]])
    df_full$id = json.data[["client"]][["sid"]]
  }
 
  # if the merged dataset does exist, append to it
  if (exists("df_full")){
    json.data = fromJSON(file)
    temp_dataset = data.frame(json.data[["trials"]][["response"]],
                              json.data[["trials"]][["att"]],
                              json.data[["trials"]][["trialNumber"]],
                              json.data[["trials"]][["prompt"]],
                              json.data[["trials"]][["chosenData"]][["g1"]],
                              json.data[["trials"]][["chosenData"]][["g2"]],
                              json.data[["trials"]][["chosenData"]][["g3"]],
                              json.data[["trials"]][["chosenData"]][["g4"]],
                              json.data[["trials"]][["chosenData"]][["mu"]],
                              json.data[["trials"]][["chosenData"]][["tradeoff"]],
                              json.data[["trials"]][["chosenData"]][["p"]],
                              json.data[["trials"]][["jitter"]],
                              json.data[["subjectData"]][["promptCheck1"]],
                              json.data[["subjectData"]][["promptCheck2"]])
    temp_dataset$id = json.data[["client"]][["sid"]]
    df_full = rbind(df_full, temp_dataset)
    rm(temp_dataset)
  }
}

df = df_full %>% distinct()
colnames(df) = c("response","att", "trialNumber", "prompt", "g1","g2","g3","g4", "mu", "tradeoff", "p", "jitter","check1", "check2", "id")
df$response = as.numeric(as.character(df$response))
#variance of response
df = df %>% 
  mutate(var = pmap_dbl(list(g1,g2,g3,g4), ~ var(c(...))))
df$sd = sqrt(df$var)
#attention checks
# df30 = df %>% select(att, p, id, trialNumber) %>%  filter(att == 1, trialNumber ==5)
# df30$diff = abs(df30$p-30)
# df60 = df %>% select(att, p, id, trialNumber) %>%  filter(att == 1, trialNumber ==25)
# df60$diff = abs(df60$p-60) 
# table(df60$diff)
# ggplot(df60, aes(diff)) +
#   geom_histogram(bins = 15)

# includeID60 = df60[df60$diff<=20,"id"]
# includeID30 = df30[df30$diff<=20,"id"]
# 
# df = df %>% filter(id %in% c(includeID60,includeID30) )
df = df %>% filter(check1+check2 >0)
#json.data[[2]][["promptCheck1"]]+json.data[[2]][["promptCheck2"]]


#dataframe manipulation (can be done on group df)
df$prompt.type <- ifelse(grepl("loan", df$prompt, ignore.case = T), "loan", 
                         ifelse(grepl("newspaper", df$prompt, ignore.case = T), "newspaper", 
                                ifelse(grepl("bail", df$prompt, ignore.case = T), "bail",
                                       ifelse(grepl("job", df$prompt, ignore.case = T), "job",
                                              ifelse(grepl("meals", df$prompt, ignore.case = T), "meals",
                                                    ifelse(grepl("respirator", df$prompt, ignore.case = T), "respirator","Other"))))))
df$tradeoff <- ifelse(grepl("LOW", df$tradeoff, ignore.case = T), "low", 
                         ifelse(grepl("MED", df$tradeoff, ignore.case = T), "med","high"))

#df$respJitter = df$response+df$jitter
#df$latentEquality = df$response+df$jitter-50

##remove attention trials
df = df %>% 
  filter(att == 0)

#plots of response by datatype and prompt
library(ggpubr)
df %>% mutate(name = fct_relevel(tradeoff, 
                                 "low", 
                                 "med", 
                                 "high")) %>% 
  ggerrorplot(x = "name", y = "p", 
            desc_stat = "mean_se")+
  ggtitle("latentEquality Distribution by Tradeoff")

df %>% mutate(name = fct_relevel(prompt.type, 
                                 "bail", 
                                 "meals",
                                 "newspaper",
                                 "loan",
                                 "respirator",
                                 "job")) %>%
ggerrorplot(x = "name", y = "p", 
            desc_stat = "mean_se")+
  ggtitle("latentEquality Distribution by Prompt")

df %>% mutate(tradeoff = fct_relevel(tradeoff, 
                            "low", 
                            "med", 
                            "high"),
              prompt = fct_relevel(prompt.type, 
                                   "bail", 
                                   "meals",
                                   "newspaper",
                                   "respirator",
                                   "loan",
                                   "job")) %>% 
  ggerrorplot(x = "prompt", y = "p", 
            desc_stat = "mean_se") + 
  facet_grid(.~tradeoff)+
  theme(axis.text.x = element_text(angle = 90))+
  ggtitle("latentEquality by Prompt and Tradeoff")

#Distribution of responses
df %>% mutate(name = fct_relevel(tradeoff, 
                                 "low", 
                                 "med", 
                                 "high")) %>% ggplot(aes(p)) +
  geom_histogram(bins = 15) +facet_grid(.~name)

ggplot(df, aes(x = trialNumber, y = p))+
  geom_point()+
  facet_grid(.~tradeoff)+
  geom_smooth(method = "lm")

#Mu vs variance
ggplot(df, aes(x = mu, y = sd, color = tradeoff))+
  geom_point()+
  facet_grid(.~tradeoff)+
  geom_smooth()

lin = lm(data = df, p ~ tradeoff+prompt.type+jitter)
summary(lin)
##Create DF to compare correlation between trials 
df_first_obs = df %>% 
  arrange(trialNumber) %>% 
  group_by(id, prompt.type, tradeoff) %>% 
  slice(1) %>% 
  select(id, tradeoff, prompt.type, mu, response, p)
df_second_obs = df %>% arrange(trialNumber) %>% 
  group_by(id, prompt.type, tradeoff) %>% slice(n()) %>% 
  select(id, tradeoff, prompt.type, mu, response, p)
df_grouped = left_join(df_first_obs, df_second_obs, by=c("id","tradeoff", "prompt.type")) %>% rowwise()

#create equation for correlation
corr_eqn = function(x,y, digits = 2) {
  corr_coef <- round(cor(x, y), digits = digits)
  paste("italic(r) == ", corr_coef)
}

#labels = data.frame(x = 25, y = 55, label = corr_eqn(df_grouped$mu.x, df_grouped$mu.y))

ggplot(df_grouped, aes(x = p.x, y = p.y))+
  geom_point()+
  facet_grid(.~tradeoff)+
  ggtitle("Correlation of LatentEquality (repeated trials) within subject")+
  xlab("Response (first trial)") +
  ylab("Reponse (second trial)") +
  geom_smooth(method = "lm")
 # geom_text(data = labels, aes(x = 25, y = 55, label = label), parse = TRUE)




