library(tidyverse)
library(patchwork)
library(jsonlite)

#max at 30 mu = 60
race_means = c(35,25,15,5) 
# -30 = 20
# 0 = 40 25
# 170  = c(0,10,20,30)
#Find approval percent
slider_start = -30
slider_end = slider_start+170
p_list = seq(slider_start, slider_end, by = 1)
out = matrix(ncol = length(race_means),
             nrow = length(p_list))
for (p in slider_start:60){ 
  for(i in 1:length(race_means))
    out[(p-(slider_start-1)),i] =  (p-slider_start)/(2.5)+race_means[i]
for (p in 60:slider_end){
  for(i in 1:length(race_means))
    out[(p-(slider_start-1)),i] =  max((p-slider_start)/(-2)+race_means[i]+80,0)
}
  #out[p+1,i] = (1-pnorm(find.interp.thresholds(p/100, def.limit)[i], race_means[i], race_sds[i]))
}

df = data.frame(out)
df$mu = rowMeans(df[,1:4])
colnames(df) = c('g1','g2','g3','g4', 'mu')
df$tradeoff = "MAX at 60"
df$p = p_list
ggplot(df, aes(x = p, y = mu))+ geom_point()
out.json = toJSON(df, pretty = T)

write(out.json, "./FICOTest.json")





