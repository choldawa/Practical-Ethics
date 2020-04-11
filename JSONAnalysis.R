library(jsonlite)
library(tidyverse)
json.data = fromJSON("./data/sona-34902.json")

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
                           json.data[["trials"]][["chosenData"]][["type"]])
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
                                json.data[["trials"]][["chosenData"]][["type"]])
    temp_dataset$id = json.data[["client"]][["sid"]]
    df_full = rbind(df_full, temp_dataset)
    rm(temp_dataset)
  }
}
 
df = df_full
colnames(df) = c("response","att", "trialNumber", "prompt", "mu", "dataType", "id")
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
df = df %>% 
  filter(att == 0)

#df$dataType = df$chosenData["type"][,1]
#df$mu = df$chosenData["mu"][,1]


ggplot(df, aes(y = response, x = dataType)) +
  geom_boxplot()+ facet_grid(.~prompt.type)



library(ggpubr)
ggerrorplot(df, x = "prompt.type", y = "response", 
            desc_stat = "mean_se")

df %>% mutate(name = fct_relevel(dataType, 
                            "LOW(-50,150)", 
                            "MED(-40,160)", 
                            "HIGH(-30,170)")) %>% 
  ggerrorplot(x = "prompt.type", y = "mu", 
            desc_stat = "mean_se") + 
  facet_grid(.~name)+
  theme(axis.text.x = element_text(angle = 90))


ggplot(df, aes(response)) +
  geom_histogram(bins = 15) +facet_grid(.~dataType)


table(df$mu, df$dataType)
