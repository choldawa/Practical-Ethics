#######################
#Define known values:
#######################
library(tidyverse)
library(patchwork)

def.limit = 0.1

#FICO score distributions

# base_rates
race_rates = c('asian'=0.06, 'white'=0.61, 'black'=0.14, 'hispanic'=0.19)
race_rates = c('asian'=0.25, 'white'=0.25, 'black'=0.25, 'hispanic'=0.25) #equal base rates

# means
race_means = c('asian'=750, 'white'=700, 'black'=450, 'hispanic'=500) #"extreme differences"
mu_type = 'ALTERED: A:750, W:700, B:450, H:500'
race_means = c('asian'=641, 'white'=636, 'black'=528, 'hispanic'=583) #true means
mu_type = 'EMPIRICAL: A:641, W:636, B:528, H:583'
race_sds = c('asian'=115, 'white'=118, 'black'=118, 'hispanic'=120)

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

#Plot FICO by p
p_list = seq(0, 100, by = 1)
out = matrix(ncol = length(find.interp.thresholds(0.5, def.limit)), 
             nrow = length(p_list))
#Find thresholds
for (p in p_list){ 
   out[p+1,] = find.interp.thresholds(p/100, def.limit)
}

df = data.frame(out)
colnames(df) = c('asian','white','black','hispanic')
df$p = p_list
df = df %>% gather(key = 'race', value = 'FICO', 1:4)


theme_set(theme_minimal())
ggplot(data = df, aes(x=p, y = FICO))+
   geom_line(aes(color = race, linetype = race),size = 1)+
   scale_color_manual(values=c("deepskyblue4", "firebrick2","lightseagreen","coral"))+
   ggtitle(paste("Def rate = ", def.limit, "\nBase rates = ", mu_type ))




#Find approval percent
for (p in p_list){ 
   for(i in 1:length(race_means))
      out[p+1,i] = 1-pnorm(find.interp.thresholds(p/100, def.limit)[i], race_means[i], race_sds[i])
}

df = data.frame(out)
df$mu = rowMeans(df[,1:4])
colnames(df) = c('asian','white','black','hispanic', 'mu')
df$p = p_list
df = df %>% gather(key = 'race', value = 'FICO', 1:5)


theme_set(theme_minimal())
p4 = ggplot(data = df, aes(x=p, y = FICO))+
   geom_line(aes(color = race),size = 1)+
   scale_color_manual(values=c("deepskyblue4", "firebrick2","lightseagreen",'black',"coral"))+
   ggtitle(paste("Def rate = ", def.limit, "\nBase rates = ", mu_type ))+
   ylab('Approval %')

#install.packages('devtools')
#devtools::install_github("thomasp85/patchwork")

(p1|p2) /
(p3|p4)

