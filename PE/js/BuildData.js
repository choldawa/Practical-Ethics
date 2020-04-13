var factors = {

    prompts_test: ["A bank must decide who to give <font color='red'> <b>home loans </b> </font> to. Only 10% of the loans can default and some groups are more likely to default than others, so giving loans to some people may result in less loans for others. <font color='red'><b>How should the loans be allocated?</b> </font>",
        "A local newspaper company is trying to decide how to <font color='red'> <b> divide up the paper routes</b></font>. Some groups of delivery people are faster than others, and if too many papers don't get delivered, customers get angry. Giving more to one delivery group may mean less for others. The icons below show how many routes are given to each group. <font color='red'><b>How should they divide up the routes?</b></font>",
        "A <font color='red'> <b> local courthouse is deciding who to give bail to</b></font>. Their goal is to maintain a constant level of public safety. Some groups are more likely to commit crimes than others. Giving bail to some people may mean not giving bail to others. The icons below show the percentage of each group receiving bail. <font color='red'><b>How should they allocate bail?</b></font>",
        "A corporate recruiter is seeking to <font color='red'> <b> fill a position at their company</b></font>. They have limited recruiting budget, and each group uses different job search services, each with different success rates at delivering qualified applicants. The values below show the number of applicants in each group for a fixed advertising budget. <font color='red'><b>How should they allocate their advertising dollars?</b></font>",
        "Meals on Wheels is tasked with delivering <font color='red'> <b> meals to homebound persons</b></font>. Their time and reseources are limited, and some groups live further away, so delivering to some groups may mean less deliveries to others. The numbers below represent how many meals are given to each group. <font color='red'><b>How should they allocate their time for deliveries?</b></font>",
        "A local hospital has a shortage of <font color='red'> <b>respirators for patients during the COVID-19 outbreak</b></font>. Some patients are more likely to be on respirators for longer than others, so less patients will be able to use one. The numbers below represent the number of patients receiving respirators. <font color='red'><b>How should the hospital allocate their respirators? </b>  </font>"],

    datasets_test: [[
      {
        "asian": 85,
        "white": 70,
        "black": 32,
        "hispanic": 51,
        "mu": 59.5,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 85,
        "white": 70,
        "black": 32,
        "hispanic": 51,
        "mu": 59.5,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 84,
        "white": 70,
        "black": 32,
        "hispanic": 51,
        "mu": 59.25,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 84,
        "white": 70,
        "black": 32,
        "hispanic": 51,
        "mu": 59.25,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 84,
        "white": 70,
        "black": 32,
        "hispanic": 51,
        "mu": 59.25,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 84,
        "white": 70,
        "black": 33,
        "hispanic": 51,
        "mu": 59.5,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 84,
        "white": 70,
        "black": 33,
        "hispanic": 51,
        "mu": 59.5,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 84,
        "white": 70,
        "black": 33,
        "hispanic": 51,
        "mu": 59.5,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 84,
        "white": 70,
        "black": 33,
        "hispanic": 52,
        "mu": 59.75,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 84,
        "white": 70,
        "black": 33,
        "hispanic": 52,
        "mu": 59.75,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 84,
        "white": 69,
        "black": 34,
        "hispanic": 52,
        "mu": 59.75,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 83,
        "white": 69,
        "black": 34,
        "hispanic": 52,
        "mu": 59.5,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 83,
        "white": 69,
        "black": 34,
        "hispanic": 52,
        "mu": 59.5,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 83,
        "white": 69,
        "black": 34,
        "hispanic": 52,
        "mu": 59.5,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 83,
        "white": 69,
        "black": 34,
        "hispanic": 52,
        "mu": 59.5,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 83,
        "white": 69,
        "black": 34,
        "hispanic": 52,
        "mu": 59.5,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 83,
        "white": 69,
        "black": 35,
        "hispanic": 52,
        "mu": 59.75,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 83,
        "white": 69,
        "black": 35,
        "hispanic": 52,
        "mu": 59.75,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 83,
        "white": 69,
        "black": 35,
        "hispanic": 52,
        "mu": 59.75,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 82,
        "white": 69,
        "black": 35,
        "hispanic": 52,
        "mu": 59.5,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 82,
        "white": 69,
        "black": 35,
        "hispanic": 52,
        "mu": 59.5,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 82,
        "white": 69,
        "black": 36,
        "hispanic": 52,
        "mu": 59.75,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 82,
        "white": 69,
        "black": 36,
        "hispanic": 52,
        "mu": 59.75,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 82,
        "white": 69,
        "black": 36,
        "hispanic": 53,
        "mu": 60,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 82,
        "white": 69,
        "black": 36,
        "hispanic": 53,
        "mu": 60,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 82,
        "white": 69,
        "black": 36,
        "hispanic": 53,
        "mu": 60,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 81,
        "white": 69,
        "black": 37,
        "hispanic": 53,
        "mu": 60,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 81,
        "white": 68,
        "black": 37,
        "hispanic": 53,
        "mu": 59.75,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 81,
        "white": 68,
        "black": 37,
        "hispanic": 53,
        "mu": 59.75,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 81,
        "white": 68,
        "black": 37,
        "hispanic": 53,
        "mu": 59.75,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 81,
        "white": 68,
        "black": 37,
        "hispanic": 53,
        "mu": 59.75,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 81,
        "white": 68,
        "black": 37,
        "hispanic": 53,
        "mu": 59.75,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 81,
        "white": 68,
        "black": 38,
        "hispanic": 53,
        "mu": 60,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 81,
        "white": 68,
        "black": 38,
        "hispanic": 53,
        "mu": 60,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 80,
        "white": 68,
        "black": 38,
        "hispanic": 53,
        "mu": 59.75,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 80,
        "white": 68,
        "black": 38,
        "hispanic": 53,
        "mu": 59.75,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 80,
        "white": 68,
        "black": 38,
        "hispanic": 53,
        "mu": 59.75,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 80,
        "white": 68,
        "black": 39,
        "hispanic": 53,
        "mu": 60,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 80,
        "white": 68,
        "black": 39,
        "hispanic": 53,
        "mu": 60,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 80,
        "white": 68,
        "black": 39,
        "hispanic": 54,
        "mu": 60.25,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 79,
        "white": 68,
        "black": 39,
        "hispanic": 54,
        "mu": 60,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 79,
        "white": 68,
        "black": 39,
        "hispanic": 54,
        "mu": 60,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 79,
        "white": 67,
        "black": 39,
        "hispanic": 54,
        "mu": 59.75,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 79,
        "white": 67,
        "black": 40,
        "hispanic": 54,
        "mu": 60,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 79,
        "white": 67,
        "black": 40,
        "hispanic": 54,
        "mu": 60,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 79,
        "white": 67,
        "black": 40,
        "hispanic": 54,
        "mu": 60,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 79,
        "white": 67,
        "black": 40,
        "hispanic": 54,
        "mu": 60,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 78,
        "white": 67,
        "black": 40,
        "hispanic": 54,
        "mu": 59.75,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 78,
        "white": 67,
        "black": 41,
        "hispanic": 54,
        "mu": 60,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 78,
        "white": 67,
        "black": 41,
        "hispanic": 54,
        "mu": 60,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 78,
        "white": 67,
        "black": 41,
        "hispanic": 54,
        "mu": 60,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 78,
        "white": 67,
        "black": 41,
        "hispanic": 54,
        "mu": 60,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 78,
        "white": 67,
        "black": 41,
        "hispanic": 54,
        "mu": 60,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 77,
        "white": 67,
        "black": 41,
        "hispanic": 54,
        "mu": 59.75,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 77,
        "white": 67,
        "black": 42,
        "hispanic": 54,
        "mu": 60,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 77,
        "white": 67,
        "black": 42,
        "hispanic": 54,
        "mu": 60,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 77,
        "white": 66,
        "black": 42,
        "hispanic": 54,
        "mu": 59.75,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 77,
        "white": 66,
        "black": 42,
        "hispanic": 55,
        "mu": 60,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 77,
        "white": 66,
        "black": 42,
        "hispanic": 55,
        "mu": 60,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 77,
        "white": 66,
        "black": 43,
        "hispanic": 55,
        "mu": 60.25,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 76,
        "white": 66,
        "black": 43,
        "hispanic": 55,
        "mu": 60,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 76,
        "white": 66,
        "black": 43,
        "hispanic": 55,
        "mu": 60,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 76,
        "white": 66,
        "black": 43,
        "hispanic": 55,
        "mu": 60,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 76,
        "white": 66,
        "black": 43,
        "hispanic": 55,
        "mu": 60,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 76,
        "white": 66,
        "black": 43,
        "hispanic": 55,
        "mu": 60,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 75,
        "white": 66,
        "black": 44,
        "hispanic": 55,
        "mu": 60,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 75,
        "white": 66,
        "black": 44,
        "hispanic": 55,
        "mu": 60,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 75,
        "white": 66,
        "black": 44,
        "hispanic": 55,
        "mu": 60,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 75,
        "white": 66,
        "black": 44,
        "hispanic": 55,
        "mu": 60,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 75,
        "white": 65,
        "black": 44,
        "hispanic": 55,
        "mu": 59.75,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 75,
        "white": 65,
        "black": 45,
        "hispanic": 55,
        "mu": 60,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 74,
        "white": 65,
        "black": 45,
        "hispanic": 55,
        "mu": 59.75,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 74,
        "white": 65,
        "black": 45,
        "hispanic": 55,
        "mu": 59.75,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 74,
        "white": 65,
        "black": 45,
        "hispanic": 55,
        "mu": 59.75,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 74,
        "white": 65,
        "black": 45,
        "hispanic": 55,
        "mu": 59.75,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 74,
        "white": 65,
        "black": 45,
        "hispanic": 55,
        "mu": 59.75,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 74,
        "white": 65,
        "black": 46,
        "hispanic": 55,
        "mu": 60,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 73,
        "white": 65,
        "black": 46,
        "hispanic": 55,
        "mu": 59.75,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 73,
        "white": 65,
        "black": 46,
        "hispanic": 55,
        "mu": 59.75,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 73,
        "white": 65,
        "black": 46,
        "hispanic": 56,
        "mu": 60,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 73,
        "white": 65,
        "black": 46,
        "hispanic": 56,
        "mu": 60,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 73,
        "white": 64,
        "black": 46,
        "hispanic": 56,
        "mu": 59.75,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 72,
        "white": 64,
        "black": 47,
        "hispanic": 56,
        "mu": 59.75,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 72,
        "white": 64,
        "black": 47,
        "hispanic": 56,
        "mu": 59.75,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 72,
        "white": 64,
        "black": 47,
        "hispanic": 56,
        "mu": 59.75,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 72,
        "white": 64,
        "black": 47,
        "hispanic": 56,
        "mu": 59.75,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 72,
        "white": 64,
        "black": 47,
        "hispanic": 56,
        "mu": 59.75,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 71,
        "white": 64,
        "black": 47,
        "hispanic": 56,
        "mu": 59.5,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 71,
        "white": 64,
        "black": 48,
        "hispanic": 56,
        "mu": 59.75,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 71,
        "white": 64,
        "black": 48,
        "hispanic": 56,
        "mu": 59.75,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 71,
        "white": 64,
        "black": 48,
        "hispanic": 56,
        "mu": 59.75,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 71,
        "white": 64,
        "black": 48,
        "hispanic": 56,
        "mu": 59.75,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 70,
        "white": 63,
        "black": 48,
        "hispanic": 56,
        "mu": 59.25,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 70,
        "white": 63,
        "black": 48,
        "hispanic": 56,
        "mu": 59.25,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 70,
        "white": 63,
        "black": 49,
        "hispanic": 56,
        "mu": 59.5,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 70,
        "white": 63,
        "black": 49,
        "hispanic": 56,
        "mu": 59.5,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 70,
        "white": 63,
        "black": 49,
        "hispanic": 56,
        "mu": 59.5,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 69,
        "white": 63,
        "black": 49,
        "hispanic": 56,
        "mu": 59.25,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 69,
        "white": 63,
        "black": 49,
        "hispanic": 56,
        "mu": 59.25,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 69,
        "white": 63,
        "black": 49,
        "hispanic": 56,
        "mu": 59.25,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 69,
        "white": 63,
        "black": 50,
        "hispanic": 56,
        "mu": 59.5,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 69,
        "white": 63,
        "black": 50,
        "hispanic": 56,
        "mu": 59.5,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 68,
        "white": 63,
        "black": 50,
        "hispanic": 56,
        "mu": 59.25,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 68,
        "white": 62,
        "black": 50,
        "hispanic": 56,
        "mu": 59,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 68,
        "white": 62,
        "black": 50,
        "hispanic": 56,
        "mu": 59,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 68,
        "white": 62,
        "black": 50,
        "hispanic": 56,
        "mu": 59,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 68,
        "white": 62,
        "black": 51,
        "hispanic": 56,
        "mu": 59.25,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 67,
        "white": 62,
        "black": 51,
        "hispanic": 56,
        "mu": 59,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 67,
        "white": 62,
        "black": 51,
        "hispanic": 57,
        "mu": 59.25,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 67,
        "white": 62,
        "black": 51,
        "hispanic": 57,
        "mu": 59.25,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 67,
        "white": 62,
        "black": 51,
        "hispanic": 57,
        "mu": 59.25,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 66,
        "white": 62,
        "black": 51,
        "hispanic": 57,
        "mu": 59,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 66,
        "white": 62,
        "black": 52,
        "hispanic": 57,
        "mu": 59.25,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 66,
        "white": 61,
        "black": 52,
        "hispanic": 57,
        "mu": 59,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 66,
        "white": 61,
        "black": 52,
        "hispanic": 57,
        "mu": 59,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 66,
        "white": 61,
        "black": 52,
        "hispanic": 57,
        "mu": 59,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 65,
        "white": 61,
        "black": 52,
        "hispanic": 57,
        "mu": 58.75,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 65,
        "white": 61,
        "black": 52,
        "hispanic": 57,
        "mu": 58.75,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 65,
        "white": 61,
        "black": 53,
        "hispanic": 57,
        "mu": 59,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 65,
        "white": 61,
        "black": 53,
        "hispanic": 57,
        "mu": 59,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 64,
        "white": 61,
        "black": 53,
        "hispanic": 57,
        "mu": 58.75,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 64,
        "white": 61,
        "black": 53,
        "hispanic": 57,
        "mu": 58.75,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 64,
        "white": 60,
        "black": 53,
        "hispanic": 57,
        "mu": 58.5,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 64,
        "white": 60,
        "black": 53,
        "hispanic": 57,
        "mu": 58.5,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 64,
        "white": 60,
        "black": 53,
        "hispanic": 57,
        "mu": 58.5,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 63,
        "white": 60,
        "black": 54,
        "hispanic": 57,
        "mu": 58.5,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 63,
        "white": 60,
        "black": 54,
        "hispanic": 57,
        "mu": 58.5,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 63,
        "white": 60,
        "black": 54,
        "hispanic": 57,
        "mu": 58.5,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 63,
        "white": 60,
        "black": 54,
        "hispanic": 57,
        "mu": 58.5,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 62,
        "white": 60,
        "black": 54,
        "hispanic": 57,
        "mu": 58.25,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 62,
        "white": 60,
        "black": 54,
        "hispanic": 57,
        "mu": 58.25,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 62,
        "white": 59,
        "black": 55,
        "hispanic": 57,
        "mu": 58.25,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 62,
        "white": 59,
        "black": 55,
        "hispanic": 57,
        "mu": 58.25,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 61,
        "white": 59,
        "black": 55,
        "hispanic": 57,
        "mu": 58,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 61,
        "white": 59,
        "black": 55,
        "hispanic": 57,
        "mu": 58,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 61,
        "white": 59,
        "black": 55,
        "hispanic": 57,
        "mu": 58,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 61,
        "white": 59,
        "black": 55,
        "hispanic": 57,
        "mu": 58,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 60,
        "white": 59,
        "black": 55,
        "hispanic": 57,
        "mu": 57.75,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 60,
        "white": 59,
        "black": 56,
        "hispanic": 57,
        "mu": 58,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 60,
        "white": 59,
        "black": 56,
        "hispanic": 57,
        "mu": 58,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 60,
        "white": 58,
        "black": 56,
        "hispanic": 57,
        "mu": 57.75,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 60,
        "white": 58,
        "black": 56,
        "hispanic": 57,
        "mu": 57.75,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 59,
        "white": 58,
        "black": 56,
        "hispanic": 57,
        "mu": 57.5,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 59,
        "white": 58,
        "black": 56,
        "hispanic": 57,
        "mu": 57.5,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 59,
        "white": 58,
        "black": 56,
        "hispanic": 57,
        "mu": 57.5,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 59,
        "white": 58,
        "black": 57,
        "hispanic": 57,
        "mu": 57.75,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 58,
        "white": 58,
        "black": 57,
        "hispanic": 57,
        "mu": 57.5,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 58,
        "white": 58,
        "black": 57,
        "hispanic": 57,
        "mu": 57.5,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 58,
        "white": 57,
        "black": 57,
        "hispanic": 57,
        "mu": 57.25,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 58,
        "white": 57,
        "black": 57,
        "hispanic": 57,
        "mu": 57.25,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 57,
        "white": 57,
        "black": 57,
        "hispanic": 57,
        "mu": 57,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 57,
        "white": 57,
        "black": 57,
        "hispanic": 57,
        "mu": 57,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 57,
        "white": 57,
        "black": 58,
        "hispanic": 57,
        "mu": 57.25,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 56,
        "white": 57,
        "black": 58,
        "hispanic": 57,
        "mu": 57,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 56,
        "white": 57,
        "black": 58,
        "hispanic": 57,
        "mu": 57,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 56,
        "white": 57,
        "black": 58,
        "hispanic": 57,
        "mu": 57,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 56,
        "white": 57,
        "black": 58,
        "hispanic": 57,
        "mu": 57,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 55,
        "white": 56,
        "black": 58,
        "hispanic": 57,
        "mu": 56.5,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 55,
        "white": 56,
        "black": 58,
        "hispanic": 57,
        "mu": 56.5,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 55,
        "white": 56,
        "black": 58,
        "hispanic": 57,
        "mu": 56.5,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 55,
        "white": 56,
        "black": 59,
        "hispanic": 57,
        "mu": 56.75,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 54,
        "white": 56,
        "black": 59,
        "hispanic": 57,
        "mu": 56.5,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 54,
        "white": 56,
        "black": 59,
        "hispanic": 57,
        "mu": 56.5,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 54,
        "white": 56,
        "black": 59,
        "hispanic": 57,
        "mu": 56.5,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 54,
        "white": 55,
        "black": 59,
        "hispanic": 57,
        "mu": 56.25,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 53,
        "white": 55,
        "black": 59,
        "hispanic": 57,
        "mu": 56,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 53,
        "white": 55,
        "black": 59,
        "hispanic": 57,
        "mu": 56,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 53,
        "white": 55,
        "black": 60,
        "hispanic": 57,
        "mu": 56.25,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 53,
        "white": 55,
        "black": 60,
        "hispanic": 57,
        "mu": 56.25,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 52,
        "white": 55,
        "black": 60,
        "hispanic": 57,
        "mu": 56,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 52,
        "white": 55,
        "black": 60,
        "hispanic": 57,
        "mu": 56,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 52,
        "white": 55,
        "black": 60,
        "hispanic": 57,
        "mu": 56,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 52,
        "white": 54,
        "black": 60,
        "hispanic": 57,
        "mu": 55.75,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 51,
        "white": 54,
        "black": 60,
        "hispanic": 57,
        "mu": 55.5,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 51,
        "white": 54,
        "black": 60,
        "hispanic": 57,
        "mu": 55.5,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 51,
        "white": 54,
        "black": 61,
        "hispanic": 57,
        "mu": 55.75,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 50,
        "white": 54,
        "black": 61,
        "hispanic": 57,
        "mu": 55.5,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 50,
        "white": 54,
        "black": 61,
        "hispanic": 57,
        "mu": 55.5,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 50,
        "white": 54,
        "black": 61,
        "hispanic": 57,
        "mu": 55.5,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 50,
        "white": 53,
        "black": 61,
        "hispanic": 57,
        "mu": 55.25,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 49,
        "white": 53,
        "black": 61,
        "hispanic": 57,
        "mu": 55,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 49,
        "white": 53,
        "black": 61,
        "hispanic": 57,
        "mu": 55,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 49,
        "white": 53,
        "black": 61,
        "hispanic": 57,
        "mu": 55,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 49,
        "white": 53,
        "black": 62,
        "hispanic": 57,
        "mu": 55.25,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 48,
        "white": 53,
        "black": 62,
        "hispanic": 57,
        "mu": 55,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 48,
        "white": 53,
        "black": 62,
        "hispanic": 57,
        "mu": 55,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 48,
        "white": 52,
        "black": 62,
        "hispanic": 57,
        "mu": 54.75,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 47,
        "white": 52,
        "black": 62,
        "hispanic": 57,
        "mu": 54.5,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 47,
        "white": 52,
        "black": 62,
        "hispanic": 57,
        "mu": 54.5,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 47,
        "white": 52,
        "black": 62,
        "hispanic": 57,
        "mu": 54.5,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 47,
        "white": 52,
        "black": 62,
        "hispanic": 57,
        "mu": 54.5,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 46,
        "white": 52,
        "black": 62,
        "hispanic": 57,
        "mu": 54.25,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 46,
        "white": 52,
        "black": 63,
        "hispanic": 57,
        "mu": 54.5,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 46,
        "white": 51,
        "black": 63,
        "hispanic": 57,
        "mu": 54.25,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 45,
        "white": 51,
        "black": 63,
        "hispanic": 57,
        "mu": 54,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 45,
        "white": 51,
        "black": 63,
        "hispanic": 57,
        "mu": 54,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 45,
        "white": 51,
        "black": 63,
        "hispanic": 57,
        "mu": 54,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 45,
        "white": 51,
        "black": 63,
        "hispanic": 57,
        "mu": 54,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 44,
        "white": 51,
        "black": 63,
        "hispanic": 57,
        "mu": 53.75,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 44,
        "white": 51,
        "black": 63,
        "hispanic": 57,
        "mu": 53.75,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 44,
        "white": 50,
        "black": 63,
        "hispanic": 57,
        "mu": 53.5,
        "tradeoff": "LOW",
        "sliderRange": "[-50,150]"
      }
    ],
    [
      {
        "asian": 97,
        "white": 81,
        "black": 13,
        "hispanic": 46,
        "mu": 59.25,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 97,
        "white": 81,
        "black": 14,
        "hispanic": 46,
        "mu": 59.5,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 97,
        "white": 81,
        "black": 14,
        "hispanic": 46,
        "mu": 59.5,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 97,
        "white": 81,
        "black": 14,
        "hispanic": 46,
        "mu": 59.5,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 97,
        "white": 81,
        "black": 14,
        "hispanic": 46,
        "mu": 59.5,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 97,
        "white": 81,
        "black": 14,
        "hispanic": 46,
        "mu": 59.5,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 97,
        "white": 81,
        "black": 15,
        "hispanic": 46,
        "mu": 59.75,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 97,
        "white": 81,
        "black": 15,
        "hispanic": 46,
        "mu": 59.75,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 96,
        "white": 80,
        "black": 15,
        "hispanic": 46,
        "mu": 59.25,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 96,
        "white": 80,
        "black": 15,
        "hispanic": 47,
        "mu": 59.5,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 96,
        "white": 80,
        "black": 15,
        "hispanic": 47,
        "mu": 59.5,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 96,
        "white": 80,
        "black": 16,
        "hispanic": 47,
        "mu": 59.75,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 96,
        "white": 80,
        "black": 16,
        "hispanic": 47,
        "mu": 59.75,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 96,
        "white": 80,
        "black": 16,
        "hispanic": 47,
        "mu": 59.75,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 96,
        "white": 80,
        "black": 16,
        "hispanic": 47,
        "mu": 59.75,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 96,
        "white": 80,
        "black": 17,
        "hispanic": 47,
        "mu": 60,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 96,
        "white": 80,
        "black": 17,
        "hispanic": 47,
        "mu": 60,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 96,
        "white": 80,
        "black": 17,
        "hispanic": 48,
        "mu": 60.25,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 96,
        "white": 79,
        "black": 17,
        "hispanic": 48,
        "mu": 60,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 95,
        "white": 79,
        "black": 18,
        "hispanic": 48,
        "mu": 60,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 95,
        "white": 79,
        "black": 18,
        "hispanic": 48,
        "mu": 60,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 95,
        "white": 79,
        "black": 18,
        "hispanic": 48,
        "mu": 60,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 95,
        "white": 79,
        "black": 18,
        "hispanic": 48,
        "mu": 60,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 95,
        "white": 79,
        "black": 19,
        "hispanic": 48,
        "mu": 60.25,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 95,
        "white": 79,
        "black": 19,
        "hispanic": 48,
        "mu": 60.25,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 95,
        "white": 79,
        "black": 19,
        "hispanic": 48,
        "mu": 60.25,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 95,
        "white": 78,
        "black": 19,
        "hispanic": 48,
        "mu": 60,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 95,
        "white": 78,
        "black": 20,
        "hispanic": 49,
        "mu": 60.5,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 94,
        "white": 78,
        "black": 20,
        "hispanic": 49,
        "mu": 60.25,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 94,
        "white": 78,
        "black": 20,
        "hispanic": 49,
        "mu": 60.25,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 94,
        "white": 78,
        "black": 20,
        "hispanic": 49,
        "mu": 60.25,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 94,
        "white": 78,
        "black": 21,
        "hispanic": 49,
        "mu": 60.5,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 94,
        "white": 78,
        "black": 21,
        "hispanic": 49,
        "mu": 60.5,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 94,
        "white": 78,
        "black": 21,
        "hispanic": 49,
        "mu": 60.5,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 94,
        "white": 77,
        "black": 21,
        "hispanic": 49,
        "mu": 60.25,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 94,
        "white": 77,
        "black": 22,
        "hispanic": 49,
        "mu": 60.5,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 93,
        "white": 77,
        "black": 22,
        "hispanic": 49,
        "mu": 60.25,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 93,
        "white": 77,
        "black": 22,
        "hispanic": 50,
        "mu": 60.5,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 93,
        "white": 77,
        "black": 22,
        "hispanic": 50,
        "mu": 60.5,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 93,
        "white": 77,
        "black": 23,
        "hispanic": 50,
        "mu": 60.75,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 93,
        "white": 77,
        "black": 23,
        "hispanic": 50,
        "mu": 60.75,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 93,
        "white": 77,
        "black": 23,
        "hispanic": 50,
        "mu": 60.75,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 92,
        "white": 76,
        "black": 24,
        "hispanic": 50,
        "mu": 60.5,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 92,
        "white": 76,
        "black": 24,
        "hispanic": 50,
        "mu": 60.5,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 92,
        "white": 76,
        "black": 24,
        "hispanic": 50,
        "mu": 60.5,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 92,
        "white": 76,
        "black": 24,
        "hispanic": 50,
        "mu": 60.5,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 92,
        "white": 76,
        "black": 25,
        "hispanic": 50,
        "mu": 60.75,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 92,
        "white": 76,
        "black": 25,
        "hispanic": 50,
        "mu": 60.75,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 91,
        "white": 76,
        "black": 25,
        "hispanic": 50,
        "mu": 60.5,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 91,
        "white": 75,
        "black": 25,
        "hispanic": 51,
        "mu": 60.5,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 91,
        "white": 75,
        "black": 26,
        "hispanic": 51,
        "mu": 60.75,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 91,
        "white": 75,
        "black": 26,
        "hispanic": 51,
        "mu": 60.75,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 91,
        "white": 75,
        "black": 26,
        "hispanic": 51,
        "mu": 60.75,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 91,
        "white": 75,
        "black": 27,
        "hispanic": 51,
        "mu": 61,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 90,
        "white": 75,
        "black": 27,
        "hispanic": 51,
        "mu": 60.75,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 90,
        "white": 74,
        "black": 27,
        "hispanic": 51,
        "mu": 60.5,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 90,
        "white": 74,
        "black": 27,
        "hispanic": 51,
        "mu": 60.5,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 90,
        "white": 74,
        "black": 28,
        "hispanic": 51,
        "mu": 60.75,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 90,
        "white": 74,
        "black": 28,
        "hispanic": 51,
        "mu": 60.75,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 89,
        "white": 74,
        "black": 28,
        "hispanic": 51,
        "mu": 60.5,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 89,
        "white": 74,
        "black": 29,
        "hispanic": 51,
        "mu": 60.75,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 89,
        "white": 73,
        "black": 29,
        "hispanic": 51,
        "mu": 60.5,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 89,
        "white": 73,
        "black": 29,
        "hispanic": 51,
        "mu": 60.5,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 88,
        "white": 73,
        "black": 29,
        "hispanic": 51,
        "mu": 60.25,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 88,
        "white": 73,
        "black": 30,
        "hispanic": 52,
        "mu": 60.75,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 88,
        "white": 73,
        "black": 30,
        "hispanic": 52,
        "mu": 60.75,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 88,
        "white": 73,
        "black": 30,
        "hispanic": 52,
        "mu": 60.75,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 87,
        "white": 72,
        "black": 30,
        "hispanic": 52,
        "mu": 60.25,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 87,
        "white": 72,
        "black": 31,
        "hispanic": 52,
        "mu": 60.5,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 87,
        "white": 72,
        "black": 31,
        "hispanic": 52,
        "mu": 60.5,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 87,
        "white": 72,
        "black": 31,
        "hispanic": 52,
        "mu": 60.5,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 86,
        "white": 72,
        "black": 32,
        "hispanic": 52,
        "mu": 60.5,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 86,
        "white": 72,
        "black": 32,
        "hispanic": 52,
        "mu": 60.5,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 86,
        "white": 71,
        "black": 32,
        "hispanic": 52,
        "mu": 60.25,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 86,
        "white": 71,
        "black": 32,
        "hispanic": 52,
        "mu": 60.25,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 85,
        "white": 71,
        "black": 33,
        "hispanic": 52,
        "mu": 60.25,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 85,
        "white": 71,
        "black": 33,
        "hispanic": 52,
        "mu": 60.25,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 85,
        "white": 71,
        "black": 33,
        "hispanic": 52,
        "mu": 60.25,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 84,
        "white": 70,
        "black": 34,
        "hispanic": 52,
        "mu": 60,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 84,
        "white": 70,
        "black": 34,
        "hispanic": 52,
        "mu": 60,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 84,
        "white": 70,
        "black": 34,
        "hispanic": 52,
        "mu": 60,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 84,
        "white": 70,
        "black": 34,
        "hispanic": 52,
        "mu": 60,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 83,
        "white": 70,
        "black": 35,
        "hispanic": 52,
        "mu": 60,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 83,
        "white": 69,
        "black": 35,
        "hispanic": 52,
        "mu": 59.75,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 83,
        "white": 69,
        "black": 35,
        "hispanic": 52,
        "mu": 59.75,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 82,
        "white": 69,
        "black": 35,
        "hispanic": 52,
        "mu": 59.5,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 82,
        "white": 69,
        "black": 36,
        "hispanic": 52,
        "mu": 59.75,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 82,
        "white": 69,
        "black": 36,
        "hispanic": 52,
        "mu": 59.75,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 81,
        "white": 68,
        "black": 36,
        "hispanic": 53,
        "mu": 59.5,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 81,
        "white": 68,
        "black": 37,
        "hispanic": 53,
        "mu": 59.75,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 81,
        "white": 68,
        "black": 37,
        "hispanic": 53,
        "mu": 59.75,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 80,
        "white": 68,
        "black": 37,
        "hispanic": 53,
        "mu": 59.5,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 80,
        "white": 67,
        "black": 37,
        "hispanic": 53,
        "mu": 59.25,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 80,
        "white": 67,
        "black": 38,
        "hispanic": 53,
        "mu": 59.5,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 79,
        "white": 67,
        "black": 38,
        "hispanic": 53,
        "mu": 59.25,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 79,
        "white": 67,
        "black": 38,
        "hispanic": 53,
        "mu": 59.25,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 78,
        "white": 67,
        "black": 38,
        "hispanic": 53,
        "mu": 59,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 78,
        "white": 66,
        "black": 39,
        "hispanic": 53,
        "mu": 59,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 78,
        "white": 66,
        "black": 39,
        "hispanic": 53,
        "mu": 59,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 77,
        "white": 66,
        "black": 39,
        "hispanic": 53,
        "mu": 58.75,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 77,
        "white": 66,
        "black": 40,
        "hispanic": 53,
        "mu": 59,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 76,
        "white": 65,
        "black": 40,
        "hispanic": 53,
        "mu": 58.5,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 76,
        "white": 65,
        "black": 40,
        "hispanic": 53,
        "mu": 58.5,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 76,
        "white": 65,
        "black": 40,
        "hispanic": 53,
        "mu": 58.5,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 75,
        "white": 65,
        "black": 41,
        "hispanic": 53,
        "mu": 58.5,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 75,
        "white": 64,
        "black": 41,
        "hispanic": 53,
        "mu": 58.25,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 74,
        "white": 64,
        "black": 41,
        "hispanic": 53,
        "mu": 58,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 74,
        "white": 64,
        "black": 41,
        "hispanic": 53,
        "mu": 58,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 73,
        "white": 64,
        "black": 42,
        "hispanic": 53,
        "mu": 58,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 73,
        "white": 63,
        "black": 42,
        "hispanic": 53,
        "mu": 57.75,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 73,
        "white": 63,
        "black": 42,
        "hispanic": 53,
        "mu": 57.75,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 72,
        "white": 63,
        "black": 42,
        "hispanic": 53,
        "mu": 57.5,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 72,
        "white": 63,
        "black": 43,
        "hispanic": 53,
        "mu": 57.75,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 71,
        "white": 62,
        "black": 43,
        "hispanic": 53,
        "mu": 57.25,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 71,
        "white": 62,
        "black": 43,
        "hispanic": 53,
        "mu": 57.25,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 70,
        "white": 62,
        "black": 43,
        "hispanic": 53,
        "mu": 57,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 70,
        "white": 61,
        "black": 44,
        "hispanic": 53,
        "mu": 57,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 69,
        "white": 61,
        "black": 44,
        "hispanic": 53,
        "mu": 56.75,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 69,
        "white": 61,
        "black": 44,
        "hispanic": 53,
        "mu": 56.75,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 68,
        "white": 61,
        "black": 44,
        "hispanic": 52,
        "mu": 56.25,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 68,
        "white": 60,
        "black": 44,
        "hispanic": 52,
        "mu": 56,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 67,
        "white": 60,
        "black": 45,
        "hispanic": 52,
        "mu": 56,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 67,
        "white": 60,
        "black": 45,
        "hispanic": 52,
        "mu": 56,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 66,
        "white": 59,
        "black": 45,
        "hispanic": 52,
        "mu": 55.5,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 66,
        "white": 59,
        "black": 45,
        "hispanic": 52,
        "mu": 55.5,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 65,
        "white": 59,
        "black": 46,
        "hispanic": 52,
        "mu": 55.5,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 65,
        "white": 59,
        "black": 46,
        "hispanic": 52,
        "mu": 55.5,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 64,
        "white": 58,
        "black": 46,
        "hispanic": 52,
        "mu": 55,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 64,
        "white": 58,
        "black": 46,
        "hispanic": 52,
        "mu": 55,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 63,
        "white": 58,
        "black": 47,
        "hispanic": 52,
        "mu": 55,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 63,
        "white": 57,
        "black": 47,
        "hispanic": 52,
        "mu": 54.75,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 62,
        "white": 57,
        "black": 47,
        "hispanic": 52,
        "mu": 54.5,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 61,
        "white": 57,
        "black": 47,
        "hispanic": 52,
        "mu": 54.25,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 61,
        "white": 56,
        "black": 47,
        "hispanic": 52,
        "mu": 54,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 60,
        "white": 56,
        "black": 48,
        "hispanic": 52,
        "mu": 54,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 60,
        "white": 56,
        "black": 48,
        "hispanic": 52,
        "mu": 54,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 59,
        "white": 56,
        "black": 48,
        "hispanic": 52,
        "mu": 53.75,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 59,
        "white": 55,
        "black": 48,
        "hispanic": 52,
        "mu": 53.5,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 58,
        "white": 55,
        "black": 49,
        "hispanic": 52,
        "mu": 53.5,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 57,
        "white": 55,
        "black": 49,
        "hispanic": 52,
        "mu": 53.25,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 57,
        "white": 54,
        "black": 49,
        "hispanic": 52,
        "mu": 53,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 56,
        "white": 54,
        "black": 49,
        "hispanic": 52,
        "mu": 52.75,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 56,
        "white": 54,
        "black": 49,
        "hispanic": 51,
        "mu": 52.5,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 55,
        "white": 53,
        "black": 50,
        "hispanic": 51,
        "mu": 52.25,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 54,
        "white": 53,
        "black": 50,
        "hispanic": 51,
        "mu": 52,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 54,
        "white": 53,
        "black": 50,
        "hispanic": 51,
        "mu": 52,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 53,
        "white": 52,
        "black": 50,
        "hispanic": 51,
        "mu": 51.5,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 53,
        "white": 52,
        "black": 50,
        "hispanic": 51,
        "mu": 51.5,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 52,
        "white": 52,
        "black": 51,
        "hispanic": 51,
        "mu": 51.5,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 51,
        "white": 51,
        "black": 51,
        "hispanic": 51,
        "mu": 51,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 51,
        "white": 51,
        "black": 51,
        "hispanic": 51,
        "mu": 51,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 50,
        "white": 51,
        "black": 51,
        "hispanic": 51,
        "mu": 50.75,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 50,
        "white": 50,
        "black": 51,
        "hispanic": 51,
        "mu": 50.5,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 49,
        "white": 50,
        "black": 51,
        "hispanic": 51,
        "mu": 50.25,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 48,
        "white": 49,
        "black": 52,
        "hispanic": 51,
        "mu": 50,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 48,
        "white": 49,
        "black": 52,
        "hispanic": 50,
        "mu": 49.75,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 47,
        "white": 49,
        "black": 52,
        "hispanic": 50,
        "mu": 49.5,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 47,
        "white": 48,
        "black": 52,
        "hispanic": 50,
        "mu": 49.25,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 46,
        "white": 48,
        "black": 52,
        "hispanic": 50,
        "mu": 49,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 45,
        "white": 48,
        "black": 53,
        "hispanic": 50,
        "mu": 49,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 45,
        "white": 47,
        "black": 53,
        "hispanic": 50,
        "mu": 48.75,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 44,
        "white": 47,
        "black": 53,
        "hispanic": 50,
        "mu": 48.5,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 43,
        "white": 47,
        "black": 53,
        "hispanic": 50,
        "mu": 48.25,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 43,
        "white": 46,
        "black": 53,
        "hispanic": 50,
        "mu": 48,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 42,
        "white": 46,
        "black": 53,
        "hispanic": 50,
        "mu": 47.75,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 42,
        "white": 46,
        "black": 54,
        "hispanic": 50,
        "mu": 48,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 41,
        "white": 45,
        "black": 54,
        "hispanic": 49,
        "mu": 47.25,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 40,
        "white": 45,
        "black": 54,
        "hispanic": 49,
        "mu": 47,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 40,
        "white": 44,
        "black": 54,
        "hispanic": 49,
        "mu": 46.75,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 39,
        "white": 44,
        "black": 54,
        "hispanic": 49,
        "mu": 46.5,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 39,
        "white": 44,
        "black": 54,
        "hispanic": 49,
        "mu": 46.5,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 38,
        "white": 43,
        "black": 54,
        "hispanic": 49,
        "mu": 46,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 37,
        "white": 43,
        "black": 55,
        "hispanic": 49,
        "mu": 46,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 37,
        "white": 43,
        "black": 55,
        "hispanic": 49,
        "mu": 46,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 36,
        "white": 42,
        "black": 55,
        "hispanic": 49,
        "mu": 45.5,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 35,
        "white": 42,
        "black": 55,
        "hispanic": 48,
        "mu": 45,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 35,
        "white": 41,
        "black": 55,
        "hispanic": 48,
        "mu": 44.75,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 34,
        "white": 41,
        "black": 55,
        "hispanic": 48,
        "mu": 44.5,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 34,
        "white": 41,
        "black": 56,
        "hispanic": 48,
        "mu": 44.75,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 33,
        "white": 40,
        "black": 56,
        "hispanic": 48,
        "mu": 44.25,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 33,
        "white": 40,
        "black": 56,
        "hispanic": 48,
        "mu": 44.25,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 32,
        "white": 40,
        "black": 56,
        "hispanic": 48,
        "mu": 44,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 31,
        "white": 39,
        "black": 56,
        "hispanic": 48,
        "mu": 43.5,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 31,
        "white": 39,
        "black": 56,
        "hispanic": 47,
        "mu": 43.25,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 30,
        "white": 38,
        "black": 56,
        "hispanic": 47,
        "mu": 42.75,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 30,
        "white": 38,
        "black": 57,
        "hispanic": 47,
        "mu": 43,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 29,
        "white": 38,
        "black": 57,
        "hispanic": 47,
        "mu": 42.75,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 28,
        "white": 37,
        "black": 57,
        "hispanic": 47,
        "mu": 42.25,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 28,
        "white": 37,
        "black": 57,
        "hispanic": 47,
        "mu": 42.25,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 27,
        "white": 37,
        "black": 57,
        "hispanic": 47,
        "mu": 42,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 27,
        "white": 36,
        "black": 57,
        "hispanic": 47,
        "mu": 41.75,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 26,
        "white": 36,
        "black": 57,
        "hispanic": 46,
        "mu": 41.25,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 26,
        "white": 35,
        "black": 57,
        "hispanic": 46,
        "mu": 41,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 25,
        "white": 35,
        "black": 58,
        "hispanic": 46,
        "mu": 41,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 25,
        "white": 35,
        "black": 58,
        "hispanic": 46,
        "mu": 41,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 24,
        "white": 34,
        "black": 58,
        "hispanic": 46,
        "mu": 40.5,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 24,
        "white": 34,
        "black": 58,
        "hispanic": 46,
        "mu": 40.5,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 23,
        "white": 34,
        "black": 58,
        "hispanic": 46,
        "mu": 40.25,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 23,
        "white": 33,
        "black": 58,
        "hispanic": 45,
        "mu": 39.75,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 22,
        "white": 33,
        "black": 58,
        "hispanic": 45,
        "mu": 39.5,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 22,
        "white": 32,
        "black": 58,
        "hispanic": 45,
        "mu": 39.25,
        "tradeoff": "MED",
        "sliderRange": "[-50,150]"
      }
    ],
    [
      {
        "asian": 100,
        "white": 91,
        "black": 5,
        "hispanic": 44,
        "mu": 60,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 100,
        "white": 91,
        "black": 5,
        "hispanic": 44,
        "mu": 60,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 100,
        "white": 91,
        "black": 5,
        "hispanic": 44,
        "mu": 60,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 100,
        "white": 91,
        "black": 5,
        "hispanic": 44,
        "mu": 60,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 100,
        "white": 91,
        "black": 6,
        "hispanic": 45,
        "mu": 60.5,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 100,
        "white": 91,
        "black": 6,
        "hispanic": 45,
        "mu": 60.5,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 100,
        "white": 90,
        "black": 6,
        "hispanic": 45,
        "mu": 60.25,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 100,
        "white": 90,
        "black": 6,
        "hispanic": 45,
        "mu": 60.25,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 100,
        "white": 90,
        "black": 6,
        "hispanic": 45,
        "mu": 60.25,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 100,
        "white": 90,
        "black": 6,
        "hispanic": 45,
        "mu": 60.25,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 100,
        "white": 90,
        "black": 6,
        "hispanic": 45,
        "mu": 60.25,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 100,
        "white": 90,
        "black": 7,
        "hispanic": 45,
        "mu": 60.5,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 100,
        "white": 90,
        "black": 7,
        "hispanic": 45,
        "mu": 60.5,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 100,
        "white": 90,
        "black": 7,
        "hispanic": 46,
        "mu": 60.75,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 100,
        "white": 89,
        "black": 7,
        "hispanic": 46,
        "mu": 60.5,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 100,
        "white": 89,
        "black": 7,
        "hispanic": 46,
        "mu": 60.5,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 99,
        "white": 89,
        "black": 7,
        "hispanic": 46,
        "mu": 60.25,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 99,
        "white": 89,
        "black": 8,
        "hispanic": 46,
        "mu": 60.5,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 99,
        "white": 89,
        "black": 8,
        "hispanic": 46,
        "mu": 60.5,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 99,
        "white": 89,
        "black": 8,
        "hispanic": 46,
        "mu": 60.5,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 99,
        "white": 89,
        "black": 8,
        "hispanic": 46,
        "mu": 60.5,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 99,
        "white": 88,
        "black": 8,
        "hispanic": 46,
        "mu": 60.25,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 99,
        "white": 88,
        "black": 9,
        "hispanic": 46,
        "mu": 60.5,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 99,
        "white": 88,
        "black": 9,
        "hispanic": 47,
        "mu": 60.75,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 99,
        "white": 88,
        "black": 9,
        "hispanic": 47,
        "mu": 60.75,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 99,
        "white": 88,
        "black": 9,
        "hispanic": 47,
        "mu": 60.75,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 99,
        "white": 88,
        "black": 9,
        "hispanic": 47,
        "mu": 60.75,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 99,
        "white": 88,
        "black": 10,
        "hispanic": 47,
        "mu": 61,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 99,
        "white": 87,
        "black": 10,
        "hispanic": 47,
        "mu": 60.75,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 99,
        "white": 87,
        "black": 10,
        "hispanic": 47,
        "mu": 60.75,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 99,
        "white": 87,
        "black": 10,
        "hispanic": 47,
        "mu": 60.75,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 99,
        "white": 87,
        "black": 10,
        "hispanic": 47,
        "mu": 60.75,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 99,
        "white": 87,
        "black": 11,
        "hispanic": 47,
        "mu": 61,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 99,
        "white": 87,
        "black": 11,
        "hispanic": 47,
        "mu": 61,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 99,
        "white": 86,
        "black": 11,
        "hispanic": 48,
        "mu": 61,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 99,
        "white": 86,
        "black": 11,
        "hispanic": 48,
        "mu": 61,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 99,
        "white": 86,
        "black": 12,
        "hispanic": 48,
        "mu": 61.25,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 99,
        "white": 86,
        "black": 12,
        "hispanic": 48,
        "mu": 61.25,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 99,
        "white": 86,
        "black": 12,
        "hispanic": 48,
        "mu": 61.25,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 98,
        "white": 85,
        "black": 12,
        "hispanic": 48,
        "mu": 60.75,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 98,
        "white": 85,
        "black": 12,
        "hispanic": 48,
        "mu": 60.75,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 98,
        "white": 85,
        "black": 13,
        "hispanic": 48,
        "mu": 61,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 98,
        "white": 85,
        "black": 13,
        "hispanic": 48,
        "mu": 61,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 98,
        "white": 85,
        "black": 13,
        "hispanic": 48,
        "mu": 61,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 98,
        "white": 85,
        "black": 13,
        "hispanic": 48,
        "mu": 61,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 98,
        "white": 84,
        "black": 14,
        "hispanic": 48,
        "mu": 61,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 98,
        "white": 84,
        "black": 14,
        "hispanic": 48,
        "mu": 61,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 98,
        "white": 84,
        "black": 14,
        "hispanic": 48,
        "mu": 61,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 98,
        "white": 84,
        "black": 15,
        "hispanic": 49,
        "mu": 61.5,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 98,
        "white": 83,
        "black": 15,
        "hispanic": 49,
        "mu": 61.25,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 98,
        "white": 83,
        "black": 15,
        "hispanic": 49,
        "mu": 61.25,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 97,
        "white": 83,
        "black": 15,
        "hispanic": 49,
        "mu": 61,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 97,
        "white": 83,
        "black": 16,
        "hispanic": 49,
        "mu": 61.25,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 97,
        "white": 83,
        "black": 16,
        "hispanic": 49,
        "mu": 61.25,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 97,
        "white": 82,
        "black": 16,
        "hispanic": 49,
        "mu": 61,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 97,
        "white": 82,
        "black": 16,
        "hispanic": 49,
        "mu": 61,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 97,
        "white": 82,
        "black": 17,
        "hispanic": 49,
        "mu": 61.25,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 97,
        "white": 82,
        "black": 17,
        "hispanic": 49,
        "mu": 61.25,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 97,
        "white": 81,
        "black": 17,
        "hispanic": 49,
        "mu": 61,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 96,
        "white": 81,
        "black": 18,
        "hispanic": 49,
        "mu": 61,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 96,
        "white": 81,
        "black": 18,
        "hispanic": 49,
        "mu": 61,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 96,
        "white": 81,
        "black": 18,
        "hispanic": 49,
        "mu": 61,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 96,
        "white": 80,
        "black": 18,
        "hispanic": 49,
        "mu": 60.75,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 96,
        "white": 80,
        "black": 19,
        "hispanic": 49,
        "mu": 61,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 96,
        "white": 80,
        "black": 19,
        "hispanic": 49,
        "mu": 61,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 95,
        "white": 80,
        "black": 19,
        "hispanic": 49,
        "mu": 60.75,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 95,
        "white": 79,
        "black": 20,
        "hispanic": 49,
        "mu": 60.75,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 95,
        "white": 79,
        "black": 20,
        "hispanic": 49,
        "mu": 60.75,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 95,
        "white": 79,
        "black": 20,
        "hispanic": 49,
        "mu": 60.75,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 95,
        "white": 79,
        "black": 20,
        "hispanic": 49,
        "mu": 60.75,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 94,
        "white": 78,
        "black": 21,
        "hispanic": 49,
        "mu": 60.5,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 94,
        "white": 78,
        "black": 21,
        "hispanic": 49,
        "mu": 60.5,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 94,
        "white": 78,
        "black": 21,
        "hispanic": 49,
        "mu": 60.5,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 94,
        "white": 78,
        "black": 22,
        "hispanic": 49,
        "mu": 60.75,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 93,
        "white": 77,
        "black": 22,
        "hispanic": 49,
        "mu": 60.25,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 93,
        "white": 77,
        "black": 22,
        "hispanic": 49,
        "mu": 60.25,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 93,
        "white": 77,
        "black": 23,
        "hispanic": 49,
        "mu": 60.5,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 93,
        "white": 76,
        "black": 23,
        "hispanic": 50,
        "mu": 60.5,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 92,
        "white": 76,
        "black": 23,
        "hispanic": 50,
        "mu": 60.25,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 92,
        "white": 76,
        "black": 24,
        "hispanic": 50,
        "mu": 60.5,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 92,
        "white": 75,
        "black": 24,
        "hispanic": 50,
        "mu": 60.25,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 91,
        "white": 75,
        "black": 24,
        "hispanic": 50,
        "mu": 60,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 91,
        "white": 75,
        "black": 24,
        "hispanic": 50,
        "mu": 60,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 91,
        "white": 74,
        "black": 25,
        "hispanic": 49,
        "mu": 59.75,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 90,
        "white": 74,
        "black": 25,
        "hispanic": 49,
        "mu": 59.5,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 90,
        "white": 74,
        "black": 25,
        "hispanic": 49,
        "mu": 59.5,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 90,
        "white": 73,
        "black": 26,
        "hispanic": 49,
        "mu": 59.5,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 89,
        "white": 73,
        "black": 26,
        "hispanic": 49,
        "mu": 59.25,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 89,
        "white": 73,
        "black": 26,
        "hispanic": 49,
        "mu": 59.25,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 89,
        "white": 72,
        "black": 27,
        "hispanic": 49,
        "mu": 59.25,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 88,
        "white": 72,
        "black": 27,
        "hispanic": 49,
        "mu": 59,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 88,
        "white": 72,
        "black": 27,
        "hispanic": 49,
        "mu": 59,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 87,
        "white": 71,
        "black": 28,
        "hispanic": 49,
        "mu": 58.75,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 87,
        "white": 71,
        "black": 28,
        "hispanic": 49,
        "mu": 58.75,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 86,
        "white": 71,
        "black": 28,
        "hispanic": 49,
        "mu": 58.5,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 86,
        "white": 70,
        "black": 28,
        "hispanic": 49,
        "mu": 58.25,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 86,
        "white": 70,
        "black": 29,
        "hispanic": 49,
        "mu": 58.5,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 85,
        "white": 69,
        "black": 29,
        "hispanic": 49,
        "mu": 58,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 85,
        "white": 69,
        "black": 29,
        "hispanic": 49,
        "mu": 58,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 84,
        "white": 69,
        "black": 30,
        "hispanic": 49,
        "mu": 58,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 83,
        "white": 68,
        "black": 30,
        "hispanic": 49,
        "mu": 57.5,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 83,
        "white": 68,
        "black": 30,
        "hispanic": 49,
        "mu": 57.5,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 82,
        "white": 67,
        "black": 31,
        "hispanic": 49,
        "mu": 57.25,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 82,
        "white": 67,
        "black": 31,
        "hispanic": 49,
        "mu": 57.25,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 81,
        "white": 67,
        "black": 31,
        "hispanic": 49,
        "mu": 57,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 81,
        "white": 66,
        "black": 31,
        "hispanic": 49,
        "mu": 56.75,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 80,
        "white": 66,
        "black": 32,
        "hispanic": 49,
        "mu": 56.75,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 79,
        "white": 65,
        "black": 32,
        "hispanic": 48,
        "mu": 56,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 79,
        "white": 65,
        "black": 32,
        "hispanic": 48,
        "mu": 56,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 78,
        "white": 64,
        "black": 33,
        "hispanic": 48,
        "mu": 55.75,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 78,
        "white": 64,
        "black": 33,
        "hispanic": 48,
        "mu": 55.75,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 77,
        "white": 63,
        "black": 33,
        "hispanic": 48,
        "mu": 55.25,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 76,
        "white": 63,
        "black": 33,
        "hispanic": 48,
        "mu": 55,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 75,
        "white": 62,
        "black": 34,
        "hispanic": 48,
        "mu": 54.75,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 75,
        "white": 62,
        "black": 34,
        "hispanic": 48,
        "mu": 54.75,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 74,
        "white": 62,
        "black": 34,
        "hispanic": 48,
        "mu": 54.5,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 73,
        "white": 61,
        "black": 34,
        "hispanic": 48,
        "mu": 54,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 73,
        "white": 61,
        "black": 35,
        "hispanic": 48,
        "mu": 54.25,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 72,
        "white": 60,
        "black": 35,
        "hispanic": 47,
        "mu": 53.5,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 71,
        "white": 60,
        "black": 35,
        "hispanic": 47,
        "mu": 53.25,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 70,
        "white": 59,
        "black": 36,
        "hispanic": 47,
        "mu": 53,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 69,
        "white": 59,
        "black": 36,
        "hispanic": 47,
        "mu": 52.75,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 69,
        "white": 58,
        "black": 36,
        "hispanic": 47,
        "mu": 52.5,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 68,
        "white": 58,
        "black": 36,
        "hispanic": 47,
        "mu": 52.25,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 67,
        "white": 57,
        "black": 37,
        "hispanic": 47,
        "mu": 52,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 66,
        "white": 56,
        "black": 37,
        "hispanic": 47,
        "mu": 51.5,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 65,
        "white": 56,
        "black": 37,
        "hispanic": 46,
        "mu": 51,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 64,
        "white": 55,
        "black": 37,
        "hispanic": 46,
        "mu": 50.5,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 63,
        "white": 55,
        "black": 38,
        "hispanic": 46,
        "mu": 50.5,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 63,
        "white": 54,
        "black": 38,
        "hispanic": 46,
        "mu": 50.25,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 62,
        "white": 54,
        "black": 38,
        "hispanic": 46,
        "mu": 50,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 61,
        "white": 53,
        "black": 38,
        "hispanic": 46,
        "mu": 49.5,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 60,
        "white": 53,
        "black": 39,
        "hispanic": 46,
        "mu": 49.5,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 59,
        "white": 52,
        "black": 39,
        "hispanic": 45,
        "mu": 48.75,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 58,
        "white": 52,
        "black": 39,
        "hispanic": 45,
        "mu": 48.5,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 57,
        "white": 51,
        "black": 39,
        "hispanic": 45,
        "mu": 48,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 56,
        "white": 50,
        "black": 39,
        "hispanic": 45,
        "mu": 47.5,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 55,
        "white": 50,
        "black": 40,
        "hispanic": 45,
        "mu": 47.5,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 54,
        "white": 49,
        "black": 40,
        "hispanic": 45,
        "mu": 47,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 53,
        "white": 49,
        "black": 40,
        "hispanic": 44,
        "mu": 46.5,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 52,
        "white": 48,
        "black": 40,
        "hispanic": 44,
        "mu": 46,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 51,
        "white": 48,
        "black": 40,
        "hispanic": 44,
        "mu": 45.75,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 50,
        "white": 47,
        "black": 41,
        "hispanic": 44,
        "mu": 45.5,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 49,
        "white": 46,
        "black": 41,
        "hispanic": 44,
        "mu": 45,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 48,
        "white": 46,
        "black": 41,
        "hispanic": 43,
        "mu": 44.5,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 47,
        "white": 45,
        "black": 41,
        "hispanic": 43,
        "mu": 44,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 46,
        "white": 45,
        "black": 41,
        "hispanic": 43,
        "mu": 43.75,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 45,
        "white": 44,
        "black": 42,
        "hispanic": 43,
        "mu": 43.5,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 44,
        "white": 43,
        "black": 42,
        "hispanic": 43,
        "mu": 43,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 43,
        "white": 43,
        "black": 42,
        "hispanic": 42,
        "mu": 42.5,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 42,
        "white": 42,
        "black": 42,
        "hispanic": 42,
        "mu": 42,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 41,
        "white": 42,
        "black": 42,
        "hispanic": 42,
        "mu": 41.75,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 40,
        "white": 41,
        "black": 43,
        "hispanic": 42,
        "mu": 41.5,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 39,
        "white": 40,
        "black": 43,
        "hispanic": 42,
        "mu": 41,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 38,
        "white": 40,
        "black": 43,
        "hispanic": 41,
        "mu": 40.5,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 37,
        "white": 39,
        "black": 43,
        "hispanic": 41,
        "mu": 40,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 36,
        "white": 39,
        "black": 43,
        "hispanic": 41,
        "mu": 39.75,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 35,
        "white": 38,
        "black": 43,
        "hispanic": 41,
        "mu": 39.25,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 34,
        "white": 37,
        "black": 44,
        "hispanic": 41,
        "mu": 39,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 34,
        "white": 37,
        "black": 44,
        "hispanic": 40,
        "mu": 38.75,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 33,
        "white": 36,
        "black": 44,
        "hispanic": 40,
        "mu": 38.25,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 32,
        "white": 36,
        "black": 44,
        "hispanic": 40,
        "mu": 38,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 31,
        "white": 35,
        "black": 44,
        "hispanic": 40,
        "mu": 37.5,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 30,
        "white": 34,
        "black": 44,
        "hispanic": 39,
        "mu": 36.75,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 29,
        "white": 34,
        "black": 45,
        "hispanic": 39,
        "mu": 36.75,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 28,
        "white": 33,
        "black": 45,
        "hispanic": 39,
        "mu": 36.25,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 27,
        "white": 33,
        "black": 45,
        "hispanic": 39,
        "mu": 36,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 26,
        "white": 32,
        "black": 45,
        "hispanic": 38,
        "mu": 35.25,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 25,
        "white": 32,
        "black": 45,
        "hispanic": 38,
        "mu": 35,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 25,
        "white": 31,
        "black": 45,
        "hispanic": 38,
        "mu": 34.75,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 24,
        "white": 30,
        "black": 45,
        "hispanic": 38,
        "mu": 34.25,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 23,
        "white": 30,
        "black": 46,
        "hispanic": 37,
        "mu": 34,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 22,
        "white": 29,
        "black": 46,
        "hispanic": 37,
        "mu": 33.5,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 21,
        "white": 29,
        "black": 46,
        "hispanic": 37,
        "mu": 33.25,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 21,
        "white": 28,
        "black": 46,
        "hispanic": 37,
        "mu": 33,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 20,
        "white": 28,
        "black": 46,
        "hispanic": 36,
        "mu": 32.5,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 19,
        "white": 27,
        "black": 46,
        "hispanic": 36,
        "mu": 32,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 18,
        "white": 26,
        "black": 46,
        "hispanic": 36,
        "mu": 31.5,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 18,
        "white": 26,
        "black": 47,
        "hispanic": 36,
        "mu": 31.75,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 17,
        "white": 25,
        "black": 47,
        "hispanic": 35,
        "mu": 31,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 16,
        "white": 25,
        "black": 47,
        "hispanic": 35,
        "mu": 30.75,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 16,
        "white": 24,
        "black": 47,
        "hispanic": 35,
        "mu": 30.5,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 15,
        "white": 24,
        "black": 47,
        "hispanic": 35,
        "mu": 30.25,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 14,
        "white": 23,
        "black": 47,
        "hispanic": 34,
        "mu": 29.5,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 14,
        "white": 23,
        "black": 47,
        "hispanic": 34,
        "mu": 29.5,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 13,
        "white": 22,
        "black": 47,
        "hispanic": 34,
        "mu": 29,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 13,
        "white": 22,
        "black": 47,
        "hispanic": 34,
        "mu": 29,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 12,
        "white": 21,
        "black": 48,
        "hispanic": 33,
        "mu": 28.5,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 12,
        "white": 21,
        "black": 48,
        "hispanic": 33,
        "mu": 28.5,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 11,
        "white": 20,
        "black": 48,
        "hispanic": 33,
        "mu": 28,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 11,
        "white": 20,
        "black": 48,
        "hispanic": 33,
        "mu": 28,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 10,
        "white": 19,
        "black": 48,
        "hispanic": 32,
        "mu": 27.25,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 10,
        "white": 19,
        "black": 48,
        "hispanic": 32,
        "mu": 27.25,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 9,
        "white": 18,
        "black": 48,
        "hispanic": 32,
        "mu": 26.75,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 9,
        "white": 18,
        "black": 48,
        "hispanic": 31,
        "mu": 26.5,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 8,
        "white": 17,
        "black": 48,
        "hispanic": 31,
        "mu": 26,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 8,
        "white": 17,
        "black": 48,
        "hispanic": 31,
        "mu": 26,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 7,
        "white": 16,
        "black": 49,
        "hispanic": 31,
        "mu": 25.75,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 7,
        "white": 16,
        "black": 49,
        "hispanic": 30,
        "mu": 25.5,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 7,
        "white": 16,
        "black": 49,
        "hispanic": 30,
        "mu": 25.5,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      },
      {
        "asian": 6,
        "white": 15,
        "black": 49,
        "hispanic": 30,
        "mu": 25,
        "tradeoff": "HIGH",
        "sliderRange": "[-50,150]"
      }
    ]
    ]
}

var myData_test = jsPsych.randomization.factorial(factors, 2, true);
myData_test['prompts_test'].splice(attentionTrial, 0, "A local hospital has a shortage of <font color='red'> <b>respirators for patients during the COVID-19 outbreak</b></font>. Some patients are more likely to be on respirators for longer than others, so less patients will be able to use one. The numbers below represent the number of patients receiving respirators. <font color='red'><b>This is a test trial to help calibrate your responses. Please move your slider all the way to the left. Thank you. </b>  </font>");
myData_test['datasets_test'].splice(attentionTrial, 0, myData_test['datasets_test'][0]);

//Build mapping here?
var prompts_dict = {
    loans: factors['prompts_test'][0],
    newspapers: factors['prompts_test'][1],
    bail: factors['prompts_test'][2],
    jobs: factors['prompts_test'][3],
    meals: factors['prompts_test'][4],
    respirators: factors['prompts_test'][5]
}

var dataset_dict = {

}

function retrieveKey(val, dict) {
    for (var key in dict) {
        if (dict[key] == val) {
            return key
        }
    }
}


  