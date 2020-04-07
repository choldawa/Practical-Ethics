library(jsonlite)
df <- fromJSON("test.json")

df[[2]][["promptCheck1"]]+df[[2]][["promptCheck2"]]

df[["trials"]][[5]]