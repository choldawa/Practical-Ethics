library(jsonlite)
library(tidyverse)
#json.data = fromJSON("./sona-31385.json")

#Read in and merge all json data files
setwd(dirname(rstudioapi::getActiveDocumentContext()$path))
setwd("../data") 
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
df$g1 = round(df$g1,0)
df$g2 = round(df$g2,0)
df$g3 = round(df$g3,0)
df$g4 = round(df$g4,0)
df$mu = round(df$mu,0)
#variance of response
df = df %>% 
  mutate(var = pmap_dbl(list(g1,g2,g3,g4), ~ var(c(...))))
df$sd = sqrt(df$var)



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

df = df %>% 
  filter(att == 0)
glimpse(df)


df_chi = df %>% select(tradeoff, p)
df_chi = df_chi %>% 
  mutate(strategy  = case_when(
    p > -20 & p< 20 ~ "efficiency",
    p > 80 & p< 120 ~ "equality",
    p < 80 & p > 20 ~ "tradeoff",
  ))
tbl = table(df_chi$tradeoff, df_chi$strategy)
chisq.test(tbl)

df_chi = df_chi %>% mutate(ef = as.integer((df$p > -20 & df$p < 20)))
df_chi = df_chi %>% mutate(eq = as.integer((df$p > 80 & df$p < 120)))
df_chi = df_chi %>% mutate(tf = as.integer((df$p > 20 & df$p < 80)))

glimpse(df_chi)



mean((df_chi %>% filter( p > 20 & p < 80 & tradeoff == "high"))$p)
df_chi %>% filter( p > 20 & p < 80)
mean(df_tradeoff$p)

df_tf = df_chi %>% filter( p > 20 & p < 80)
p.aov <- aov(p ~ tradeoff, data = df_tf)
summary(p.aov)

df_chi  %>% 
  filter( p >20 & p <80)
