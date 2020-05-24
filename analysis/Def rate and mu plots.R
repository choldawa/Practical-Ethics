library(ggplot2)
p = ggplot(data = data.frame(x = 0), mapping = aes(x = x))
def_rate_fico = function(x){(1-1/(1+exp(-.16*(x-50))))}
p + stat_function(fun = def_rate_fico, size = 1) +
  xlim(0,100) +
  theme_minimal()+
  theme(text = element_text(size=20))+
  ggtitle("Likelihood of Defaulting")



ggplot(data = data.frame(x = c(0, 100)), aes(x)) +
  stat_function(fun = dnorm, n = 101, args = list(mean = 75, sd = 10), aes(color = "group 1")) +
  stat_function(fun = dnorm, n = 101, args = list(mean = 60, sd = 10), aes(color = "group 2")) +
  stat_function(fun = dnorm, n = 101, args = list(mean = 45, sd = 10), aes(color = "group 3")) +
  stat_function(fun = dnorm, n = 101, args = list(mean = 30, sd = 10), aes(color = "group 4")) +
  scale_color_manual(values=c("deepskyblue4", "firebrick2","lightseagreen","coral"))+
                       ylab("") +
  scale_y_continuous(breaks = NULL)


n_critical_75 <- qnorm(0.70, mean = 75, sd = 10)
n_critical_60 <- qnorm(0.70, mean = 60, sd = 10)
n_critical_45 <- qnorm(0.70, mean = 45, sd = 10)
n_critical_30 <- qnorm(0.70, mean = 30, sd = 10)


ggplot(NULL, aes(x = c(0, 100))) +
  # T-distribution with 5 degrees of freedom
  #   Non-significant area
  stat_function(fun = dnorm,
                geom = "line",
                xlim = c(0, 100),
                args = list(
                  mean = 75, sd = 10
                )) +
  #   Significant area
  stat_function(fun = dnorm,
                geom = "area",
                xlim = c(n_critical_75, 100),
                alpha = .3,
                fill = "deepskyblue4",
                args = list(
                  mean = 75, sd = 10
                )) +
  # t-distribution with 25 degrees of freedom
  #   Non-significant area
  stat_function(fun = dnorm,
                geom = "line",
                xlim = c(0, 100),
                args = list(
                  mean = 60, sd = 10
                )) +
  #   Significant area
  stat_function(fun = dnorm,
                geom = "area",
                xlim = c(n_critical_60, 100),
                alpha = .3,
                fill = "firebrick2",
                args = list(
                  mean = 60, sd = 10
                )) +
  stat_function(fun = dnorm,
                geom = "line",
                xlim = c(0, 100),
                args = list(
                  mean = 45, sd = 10
                )) +
  #   Significant area
  stat_function(fun = dnorm,
                geom = "area",
                xlim = c(n_critical_45, 100),
                alpha = .3,
                fill = "lightseagreen",
                args = list(
                  mean = 45, sd = 10
                )) +
  stat_function(fun = dnorm,
                geom = "line",
                xlim = c(0, 100),
                args = list(
                  mean = 30, sd = 10
                )) +
  #   Significant area
  stat_function(fun = dnorm,
                geom = "area",
                xlim = c(n_critical_30, 100),
                alpha = .3,
                fill = "coral",
                args = list(
                  mean = 30, sd = 10
                )) +
  geom_vline(xintercept = n_critical_75, linetype="dotted")+
  geom_vline(xintercept = n_critical_60, linetype="dotted")+
  geom_vline(xintercept = n_critical_45, linetype="dotted")+
  geom_vline(xintercept = n_critical_30, linetype="dotted")+
  theme_minimal()+
  theme(text = element_text(size=20))+
  xlab("Fitness")+
  ylab("Probability Density")+
  xlim(0, 100)


#Same threshold
n_critical_equal <- qnorm(0.003, mean = 75, sd = 10)


ggplot(NULL, aes(x = c(0, 100))) +
  # T-distribution with 5 degrees of freedom
  #   Non-significant area
  stat_function(fun = dnorm,
                geom = "line",
                xlim = c(0, 100),
                args = list(
                  mean = 75, sd = 10
                )) +
  #   Significant area
  stat_function(fun = dnorm,
                geom = "area",
                xlim = c(n_critical_equal, 100),
                alpha = .3,
                fill = "deepskyblue4",
                args = list(
                  mean = 75, sd = 10
                )) +
  # t-distribution with 25 degrees of freedom
  #   Non-significant area
  stat_function(fun = dnorm,
                geom = "line",
                xlim = c(0, 100),
                args = list(
                  mean = 60, sd = 10
                )) +
  #   Significant area
  stat_function(fun = dnorm,
                geom = "area",
                xlim = c(n_critical_equal, 100),
                alpha = .3,
                fill = "firebrick2",
                args = list(
                  mean = 60, sd = 10
                )) +
  stat_function(fun = dnorm,
                geom = "line",
                xlim = c(0, 100),
                args = list(
                  mean = 45, sd = 10
                )) +
  #   Significant area
  stat_function(fun = dnorm,
                geom = "area",
                xlim = c(n_critical_equal, 100),
                alpha = .3,
                fill = "lightseagreen",
                args = list(
                  mean = 45, sd = 10
                )) +
  stat_function(fun = dnorm,
                geom = "line",
                xlim = c(0, 100),
                args = list(
                  mean = 30, sd = 10
                )) +
  #   Significant area
  stat_function(fun = dnorm,
                geom = "area",
                xlim = c(n_critical_equal, 100),
                alpha = .3,
                fill = "coral",
                args = list(
                  mean = 30, sd = 10
                )) +
  geom_vline(xintercept = n_critical_equal, linetype="dotted")+
  theme_minimal()+
  theme(text = element_text(size=20))+
  xlab("Score")+
  ylab("Probability Density")+
  xlim(0, 100)


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
