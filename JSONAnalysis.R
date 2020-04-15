library(jsonlite)
library(tidyverse)
#json.data = fromJSON("./sona-31385.json")

#Read in and merge all json data files
setwd("./data")
file_list <- list.files()
for (file in file_list){
  print(file)
  # if the merged dataset doesn't exist, create it
  if (!exists("df_full")){
    json.data = fromJSON(file)
    df_full = data.frame(json.data[["trials"]][["response"]],
                         json.data[["trials"]][["att"]],
                         json.data[["trials"]][["trialNumber"]],
                         json.data[["trials"]][["prompt"]],
                         json.data[["trials"]][["chosenData"]][["mu"]],
                         json.data[["trials"]][["chosenData"]][["tradeoff"]],
                         json.data[["trials"]][["jitter"]])
    df_full$id = json.data[["client"]][["sid"]]
  }
 
  # if the merged dataset does exist, append to it
  if (exists("df_full")){
    json.data = fromJSON(file)
    temp_dataset = data.frame(json.data[["trials"]][["response"]],
                                json.data[["trials"]][["att"]],
                                json.data[["trials"]][["trialNumber"]],
                                json.data[["trials"]][["prompt"]],
                                json.data[["trials"]][["chosenData"]][["mu"]],
                                json.data[["trials"]][["chosenData"]][["tradeoff"]],
                                json.data[["trials"]][["jitter"]])
    temp_dataset$id = json.data[["client"]][["sid"]]
    df_full = rbind(df_full, temp_dataset)
    rm(temp_dataset)
  }
}

df = df_full
colnames(df) = c("response","att", "trialNumber", "prompt", "mu", "tradeoff", "jitter", "id")
df$response = as.numeric(df$response)
#attention checks
df %>% select(att,response) %>%  filter(att == 1)
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

df$respJitter = df$response+df$jitter
##remove attention trials
df = df %>% 
  filter(att == 0)

#plots of response by datatype and prompt
library(ggpubr)
df %>% mutate(name = fct_relevel(tradeoff, 
                                 "low", 
                                 "med", 
                                 "high")) %>% 
  ggerrorplot(x = "name", y = "respJitter", 
            desc_stat = "mean_se")+
  ggtitle("Response Distribution by Tradeoff")

df %>% mutate(name = fct_relevel(prompt.type, 
                                 "meals", 
                                 "loan", 
                                 "job",
                                 "bail",
                                 "newspaper",
                                 "respirator")) %>%
ggerrorplot(x = "name", y = "respJitter", 
            desc_stat = "mean_se")+
  ggtitle("Response Distribution by Prompt")

df %>% mutate(tradeoff = fct_relevel(tradeoff, 
                            "low", 
                            "med", 
                            "high"),
              prompt = fct_relevel(prompt.type, 
                                   "meals", 
                                   "job", 
                                   "loan",
                                   "newspaper",
                                   "respirator",
                                   "bail")) %>% 
  ggerrorplot(x = "prompt", y = "mu", 
            desc_stat = "mean_se") + 
  facet_grid(.~tradeoff)+
  theme(axis.text.x = element_text(angle = 90))+
  ggtitle("Response by Prompt and Tradeoff")

#Distribution of responses
ggplot(df, aes(respJitter)) +
  geom_histogram(bins = 15) +facet_grid(.~tradeoff)
table(df$mu, df$dataType)

lin = lm(data = df, respJitter ~ tradeoff*prompt.type+jitter)
summary(lin)
##Create DF to compare correlation between trials 
df_first_obs = df %>% 
  arrange(trialNumber) %>% 
  group_by(id, prompt.type, tradeoff) %>% 
  slice(1) %>% 
  select(id, tradeoff, prompt.type, mu, response, respJitter)
df_second_obs = df %>% arrange(trialNumber) %>% 
  group_by(id, prompt.type, tradeoff) %>% slice(n()) %>% 
  select(id, tradeoff, prompt.type, mu, response, respJitter)
df_grouped = left_join(df_first_obs, df_second_obs, by=c("id","tradeoff", "prompt.type")) %>% rowwise()

#create equation for correlation
corr_eqn = function(x,y, digits = 2) {
  corr_coef <- round(cor(x, y), digits = digits)
  paste("italic(r) == ", corr_coef)
}

labels = data.frame(x = 25, y = 55, label = corr_eqn(df_grouped$mu.x, df_grouped$mu.y))

ggplot(df_grouped, aes(x = respJitter.x, y = respJitter.y))+
  geom_point()+
  facet_grid(.~tradeoff)+
  ggtitle("Correlation of Mu (repeated trials) within subject")+
  xlab("Response (first trial)") +
  ylab("Reponse (second trial)") +
  geom_smooth(method = "lm")
 # geom_text(data = labels, aes(x = 25, y = 55, label = label), parse = TRUE)




