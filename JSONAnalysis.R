library(jsonlite)
library(tidyverse)
#json.data = fromJSON("./sona-31385.json")

#Read in and merge all json data files
setwd(dirname(rstudioapi::getActiveDocumentContext()$path))
setwd("./data") 
file_list = list.files()
# setwd(dirname(rstudioapi::getActiveDocumentContext()$path))
# setwd("./dataV3V4combined")
# file_list = list.files()
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
df30 = df %>% select(att, p, id, trialNumber) %>%  filter(att == 1, trialNumber ==5)
df30$diff = abs(df30$p-30)
df60 = df %>% select(att, p, id, trialNumber) %>%  filter(att == 1, trialNumber ==25)
df60$diff = abs(df60$p-60)
table(df30$diff)
ggplot(df30, aes(diff)) +
  geom_histogram(bins = 15)

# includeID60 = df60[df60$diff<=10,"id"]
# includeID30 = df30[df30$diff<=10,"id"]
# 
# df = df %>% filter(id %in% c(includeID60,includeID30) )

#df = df %>% filter(check1+check2 >0)


#dataframe manipulation (can be done on group df)
df$prompt.type <- ifelse(grepl("loan", df$prompt, ignore.case = T), "loan", 
                         ifelse(grepl("newspaper", df$prompt, ignore.case = T), "newspaper", 
                                ifelse(grepl("bail", df$prompt, ignore.case = T), "bail",
                                       ifelse(grepl("job", df$prompt, ignore.case = T), "job",
                                              ifelse(grepl("meals", df$prompt, ignore.case = T), "meals",
                                                    ifelse(grepl("respirator", df$prompt, ignore.case = T), "respirator","Other"))))))
df$tradeoff <- ifelse(grepl("LOW", df$tradeoff, ignore.case = T), "low", 
                         ifelse(grepl("MED", df$tradeoff, ignore.case = T), "med","high"))
df = df %>% mutate(tradeoff = fct_relevel(tradeoff, 
                                 "low", 
                                 "med", 
                                 "high"))
#df$respJitter = df$response+df$jitter
#df$latentEquality = df$response+df$jitter-50

##remove attention trials
df = df %>% 
  filter(att == 0)

df %>% group_by(tradeoff) %>% summarise(round(max(mu),0))
df %>% group_by(tradeoff) %>% 
  filter(round(mu,0) == round(max(mu),0))%>% 
  filter( p == min(p) | p == max(p)) %>% filter(tradeoff == 'low') %>% 
  select(p, mu) 


df %>% group_by(tradeoff) %>% summarise(mean(p))

#plots of response by datatype and prompt
library(ggpubr)
ggerrorplot(df, x = "tradeoff", y = "p", 
            desc_stat = "mean_se", size  =1)+
  theme(text = element_text(size=20))+
  xlab("Tradeoff Type")

df %>% mutate(name = fct_relevel(prompt.type, 
                                 "loan", 
                                 "bail",
                                 "job",
                                 "newspaper",
                                 "meals",
                                 "respirator")) %>%
ggerrorplot(x = "name", y = "p", 
            desc_stat = "mean_se", size  =1)+
  theme(text = element_text(size=20))+
  xlab("Prompt")

df %>% mutate(prompt = fct_relevel(prompt.type, 
                                   "loan", 
                                   "bail",
                                   "job",
                                   "newspaper",
                                   "meals",
                                   "respirator")) %>% 
  ggerrorplot(x = "tradeoff", y = "p", 
            desc_stat = "mean_se", size = 1) + 
  facet_grid(.~prompt)+
  theme(axis.text.x = element_text(angle = 90), text = element_text(size=20))+
  xlab("Prompt")
#Distribution of responses
ggplot(df,aes(p)) +
  geom_histogram(bins = 15) +facet_grid(.~tradeoff)+ 
  theme(text = element_text(size=20))

ggplot(df, aes(x = trialNumber, y = p))+
  geom_point()+
  facet_grid(.~tradeoff)+
  geom_smooth(method = "lm")
#Mu vs variance
  ggplot(df, aes(x = mu, y = sd, color = tradeoff))+
  theme_minimal()+
  theme(text = element_text(size=18))+
  geom_point()+
  geom_point(aes(x=59.5, y= 3.79), colour="black", size = 5)+
  geom_point(aes(x=54.5, y=12.2), colour="black", size = 5)+
  geom_point(aes(x =  49.2, y=22.5), colour="black", size = 5)
 
#Mu vs variance
df_scaled= df
df_scaled$muScaled =  ave(df_scaled$mu, df_scaled$tradeoff, FUN=function(x) scale(x)) 
df_scaled = (df_scaled %>% group_by(tradeoff) %>% mutate(muScaled = mu/max(mu)))
ggplot(df_scaled, aes(x = sd, y = muScaled, color = tradeoff))+
    theme_minimal()+
    theme(text = element_text(size=18))+
    geom_point() 


df %>% group_by(tradeoff) %>% filter(p == round(mean(p))) %>% summarise(mean(mu), mean(sd))

lin = lm(data = df, p ~ tradeoff+prompt.type+jitter)
summary(lin)
lme = lme4::lmer(data = df, p ~ 1 + (1|tradeoff) + (1|prompt.type) + (1|jitter))
lme_null = lme4::lmer(data = df, p ~ 1 + (1|tradeoff) + (1|jitter))
anova(lme,lme_null, test = "Chisq")
lme4::ranef(lme)
arm::se.ranef(lme)
#lme4
#arm
#broom.mixed
broom.mixed::tidy(lme, effects = c('fixed', 'ran_vals'))
lme.table = broom.mixed::tidy(lme, effects = c('fixed', 'ran_vals'))
xtable(lme.table)
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
# corr_eqn = function(x,y, digits = 2) {
#   corr_coef <- round(cor(x, y), digits = digits)
#   paste("italic(r) == ", corr_coef)
# }

#labels = data.frame(x = 25, y = 55, label = corr_eqn(df_grouped$mu.x, df_grouped$mu.y))
ggplot(df_grouped, aes(x = p.x, y = p.y))+
  geom_point()+
  theme_minimal()+
  facet_grid(.~tradeoff)+
  ggtitle("Correlation of LatentEquality (repeated trials) within subject")+
  xlab("Response (first trial)") +
  ylab("Reponse (second trial)") +
  geom_smooth(method = "lm")
 # geom_text(data = labels, aes(x = 25, y = 55, label = label), parse = TRUE)


cor(df_grouped$p.x,df_grouped$p.y)


