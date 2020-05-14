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

#sort by tradeoff (different df?)
#check if they have sd ==0, or mu == max(mu)
# if not, what is max /min  p on this range, what p did they select


df_low = df %>% filter(tradeoff == "low")
df_med = df %>% filter(tradeoff == "med")
df_high = df %>% filter(tradeoff == "high")


sum((df_low$mu == max(df_low$mu)))/length(df_low$mu)
sum(df_low$sd == 0)/length(df_low$sd)
sum((df_med$mu == max(df_med$mu)))/length(df_med$mu)
sum(df_med$sd == 0)/length(df_med$sd)
sum((df_high$mu == max(df_high$mu)))/length(df_high$mu)
sum(df_high$sd == 0)/length(df_high$sd)

mean((df_high  %>% 
  filter(mu != max(mu) & sd != 0 & p<100 &p >0))$p)

df_med  %>% 
        filter(mu != max(mu) & sd != 0 & p<100)%>% 
  ggplot(aes(x = mu, y = sd))+
  geom_bin2d() +
  theme_minimal()+
  ylim(0,35)+
  theme(text = element_text(size=28))
lm(data = df_med, sd~mu)


df_musd = data.frame("mu" = 10:100)
df_musd$sd = df_musd$mu - 10
df_musd$sd1 = 1.2*df_musd$mu - 12
df_musd$sd2 = 0.5*df_musd$mu - 5
df_musd$sd3 = 0.1*df_musd$mu - 1
ggplot(data = df_musd)+
  geom_line(aes(x = mu, y = sd))+
  geom_line(aes(x = mu, y = sd1))+
  geom_line(aes(x = mu, y = sd2))+
  geom_line(aes(x = mu, y = sd3))+
  theme_minimal()+
  theme(text = element_text(size=28))

