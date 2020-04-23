#######################
#Define known values:
#######################
library(tidyverse)
library(patchwork)
library(jsonlite)

def.limit = 0.1
#FICO score distributions

# base_rates
race_rates = c('g1'=0.25, 'g2'=0.25, 'g3'=0.25, 'g4'=0.25) #equal base rates

# # means
# race_means = c('g1'=630, 'g2'=610, 'g3'=570, 'g4'=590) #low diff
# mu_type = 'LOW: g1:630, g2:610, g3:570, g4:590 (SD:120)'
# race_means = c('g1'=700, 'g2'=650, 'g3'=500, 'g4'=550) #med diff
# mu_type = 'MED: g1:750, g2:650, g3:500, g4:550 (SD:120)'
# race_means = c('g1'=760, 'g2'=680, 'g3'=440, 'g4'=520) #high diff
# mu_type = 'HIGH: g1:760, g2:680, g3:440, g4:520 (SD = 120)'
# race_sds = c('g1'=120, 'g2'=120, 'g3'=120, 'g4'=120)

race_means = c('g1'=660, 'g2'=620, 'g3'=580, 'g4'=540) #low diff
mu_type = 'LOW: g1:660, g2:620, g3:580, g4:540 (SD:200)'
race_means = c('g1'=800, 'g2'=633, 'g3'=567, 'g4'=400) #med diff
mu_type = 'MED: g1:800, g2:633, g3:567, g4:400 (SD:200)'
race_means = c('g1'=920, 'g2'=707, 'g3'=493, 'g4'=280) #high diff
mu_type = 'HIGH: g1:920, g2:707, g3:493, g4:280 (SD = 200)'
race_sds = c('g1'=200, 'g2'=200, 'g3'=200, 'g4'=200)
# pdf of fico score given the fico truncation.
dtnorm = function(x, m, s){
  dnorm(x, m, s) / (pnorm(850, m, s) - pnorm(300, m, s))
}

# default-rate for fico
def_rate_fico = function(x){(1-1/(1+exp(-.016*(x-550))))}

# default rate for threshold, mu, sd
default_rate = function(threshold, m, s){
  integrate(function(x){
    dtnorm(x,m,s)*def_rate_fico(x)
  },
  threshold,850)$val
}

# total default rate with baserates
default_rate_total = function(thresholds){
  dr = purrr::pmap_dbl(data.frame(threshold = thresholds, m = race_means, s = race_sds), 
                       default_rate)
  sum(dr*race_rates)/sum(race_rates) # in case we dont have it sum to 1
}

# find constant thresholds
find.constant.thresholds = function(def.limit){
  t = uniroot(function(t){ 
    default_rate_total(rep(t, 4))-def.limit
  }, 
  lower=300, 
  upper=850)$root
  rep(t, 4)
}

# find constant conditional probability
find.equal.thresholds = function(def.limit){
  p = uniroot(function(p){
    default_rate_total(qnorm(1-p, race_means, race_sds))-def.limit}, 
    lower=0.001, 
    upper=0.999)$root
  qnorm(1-p, race_means, race_sds)
}

# find threshold for interpolated p
thresholds_p1 = find.equal.thresholds(def.limit)
deltas = thresholds_p1 - mean(thresholds_p1)

find.interp.thresholds = function(p, def.limit){
  mu = uniroot(function(mu){ 
    thresholds = deltas*p + mu
    default_rate_total(thresholds)-def.limit
  }, lower=300, 
  upper=850)$root
  mu+deltas*p
}


#Find approval percent
slider_start = -30
slider_end = slider_start+170
p_list = seq(slider_start, slider_end, by = 1)
out = matrix(ncol = length(find.interp.thresholds(0.5, def.limit)),
             nrow = length(p_list))
for (p in p_list){ 
  for(i in 1:length(race_means))
    out[(p-(slider_start-1)),i] = round((1-pnorm(find.interp.thresholds(p/100, def.limit)[i], race_means[i], race_sds[i]))*100,0)
  #out[p+1,i] = (1-pnorm(find.interp.thresholds(p/100, def.limit)[i], race_means[i], race_sds[i]))
}

df = data.frame(out)
df$mu = rowMeans(df[,1:4])
colnames(df) = c('g1','g2','g3','g4', 'mu')
df$tradeoff = mu_type
df$p = p_list
out.json = toJSON(df, pretty = T)

write(out.json, "./FICOTest.json")
df = df %>% gather(key = 'race', value = 'FICO', 1:5)

df %>% filter(p %in% c(0,25,50,75,100), race == "mu") %>% select(FICO)
theme_set(theme_minimal())
ggplot(data = df, aes(x=p, y = FICO))+
  geom_line(aes(color = race),size = 1)+
  scale_color_manual(values=c("deepskyblue4", "firebrick2","lightseagreen","coral",'black'))+
  ggtitle(paste("Def rate = ", def.limit, "\n", mu_type ))+
  ylab('Approval %')

# (t1|t2|t3)/
#   (p1|p2|p3)




