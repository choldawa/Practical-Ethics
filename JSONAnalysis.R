library(jsonlite)
library(tidyverse)
#json.data = fromJSON("./data/sona-34902.json")

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
##remove attention trials
df = df %>% 
  filter(att == 0)

#plots of response by datatype and prompt
library(ggpubr)
ggerrorplot(df, x = "prompt.type", y = "mu", 
            desc_stat = "mean_se")+
  ggtitle("Mu Distribution by Prompt")

df %>% mutate(name = fct_relevel(dataType, 
                            "LOW(-50,150)", 
                            "MED(-40,160)", 
                            "HIGH(-30,170)")) %>% 
  ggerrorplot(x = "prompt.type", y = "response", 
            desc_stat = "mean_se") + 
  facet_grid(.~name)+
  theme(axis.text.x = element_text(angle = 90))+
  ggtitle("Response by Prompt and Tradeoff")

#Distribution of responses
ggplot(df, aes(response)) +
  geom_histogram(bins = 15) +facet_grid(.~dataType)
table(df$mu, df$dataType)


##Create DF to compare correlation between trials 
df_first_obs = df %>% 
  arrange(trialNumber) %>% 
  group_by(id, prompt.type, dataType) %>% 
  slice(1) %>% 
  select(id, dataType, prompt.type, mu, response)
df_second_obs = df %>% arrange(trialNumber) %>% 
  group_by(id, prompt.type, dataType) %>% slice(n()) %>% 
  select(id, dataType, prompt.type, mu, response)
df_grouped = left_join(df_first_obs, df_second_obs, by=c("id","dataType", "prompt.type")) %>% rowwise()

#create equation for correlation
corr_eqn = function(x,y, digits = 2) {
  corr_coef <- round(cor(x, y), digits = digits)
  paste("italic(r) == ", corr_coef)
}

labels = data.frame(x = 25, y = 55, label = corr_eqn(df_grouped$mu.x, df_grouped$mu.y))

ggplot(df_grouped, aes(x = mu.x, y = mu.y))+
  geom_point()+
  ggtitle("Correlation of Mu (repeated trials) within subject")+
  xlab("Mu (first trial)") +
  ylab("Mu (second trial)")+
  geom_smooth(method = "lm")+
  geom_text(data = labels, aes(x = 25, y = 55, label = label), parse = TRUE)




