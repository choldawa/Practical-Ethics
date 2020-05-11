library(ggplot2)
p = ggplot(data = data.frame(x = 0), mapping = aes(x = x))
def_rate_fico = function(x){(1-1/(1+exp(-.16*(x-50))))}
p + stat_function(fun = def_rate_fico, size = 1) +
  xlim(0,100) +
  theme_minimal()+
  theme(text = element_text(size=20))+
  ggtitle("Likelihood of Defaulting")


####ACTUAL (FOR PRESENTATION I WILL USE SIMPLIFIED)

# library(ggplot2)
# p = ggplot(data = data.frame(x = 0), mapping = aes(x = x)) 
# def_rate_fico = function(x){(1-1/(1+exp(-.016*(x-550))))}
# p + stat_function(fun = def_rate_fico, size = 1) +
#   xlim(250,1000) +
#   theme_minimal()+
#   theme(text = element_text(size=20))+
#   ggtitle("Likelihood of Defaulting")
# 
# 
# ggplot(data = data.frame(x = c(0, 1300)), aes(x)) +
#   stat_function(fun = dnorm, n = 101, args = list(mean = 660, sd = 200), aes(color = "group 1")) + 
#   stat_function(fun = dnorm, n = 101, args = list(mean = 620, sd = 200), aes(color = "group 2")) +
#   stat_function(fun = dnorm, n = 101, args = list(mean = 580, sd = 200), aes(color = "group 3")) +
#   stat_function(fun = dnorm, n = 101, args = list(mean = 540, sd = 200), aes(color = "group 4")) +
#   scale_color_manual(values=c("deepskyblue4", "firebrick2","lightseagreen","coral"))+
#                        ylab("") +
#   scale_y_continuous(breaks = NULL)
# 
# 
# ggplot(data = data.frame(x = c(0, 1500)), aes(x)) +
#   stat_function(fun = dnorm, n = 101, args = list(mean = 800, sd = 200), aes(color = "group 1")) + 
#   stat_function(fun = dnorm, n = 101, args = list(mean = 633, sd = 200), aes(color = "group 2")) +
#   stat_function(fun = dnorm, n = 101, args = list(mean = 567, sd = 200), aes(color = "group 3")) +
#   stat_function(fun = dnorm, n = 101, args = list(mean = 400, sd = 200), aes(color = "group 4")) +
#   scale_color_manual(values=c("deepskyblue4", "firebrick2","lightseagreen","coral"))+
#   ylab("") +
#   scale_y_continuous(breaks = NULL)
# 
# ggplot(data = data.frame(x = c(0, 1500)), aes(x)) +
#   stat_function(fun = dnorm, n = 101, args = list(mean = 920, sd = 200), aes(color = "group 1")) + 
#   stat_function(fun = dnorm, n = 101, args = list(mean = 707, sd = 200), aes(color = "group 2")) +
#   stat_function(fun = dnorm, n = 101, args = list(mean = 493, sd = 200), aes(color = "group 3")) +
#   stat_function(fun = dnorm, n = 101, args = list(mean = 280, sd = 200), aes(color = "group 4")) +
#   scale_color_manual(values=c("deepskyblue4", "firebrick2","lightseagreen","coral"))+
#   ylab("") +
#   scale_y_continuous(breaks = NULL)
