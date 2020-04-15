var factors = {

  prompts_test: ["A bank must decide who to give <font color='red'> <b>home loans </b> </font> to. Only 10% of the loans can default and some groups are more likely to default than others, so giving loans to some people may result in less loans for others. <font color='red'><b>How should the loans be allocated?</b> </font>",
    "A local newspaper company is trying to decide how to <font color='red'> <b> divide up the paper routes</b></font>. Some groups of delivery people are faster than others, and if too many papers don't get delivered, customers get angry. Giving more to one delivery group may mean less for others. The icons below show how many routes are given to each group. <font color='red'><b>How should they divide up the routes?</b></font>",
    "A <font color='red'> <b> local courthouse is deciding who to give bail to</b></font>. Their goal is to maintain a constant level of public safety. Some groups are more likely to commit crimes than others. Giving bail to some people may mean not giving bail to others. The icons below show the percentage of each group receiving bail. <font color='red'><b>How should they allocate bail?</b></font>",
    "A corporate recruiter is seeking to <font color='red'> <b> fill a position at their company</b></font>. They have limited recruiting budget, and each group uses different job search services, each with different success rates at delivering qualified applicants. The values below show the number of applicants in each group for a fixed advertising budget. <font color='red'><b>How should they allocate their advertising dollars?</b></font>",
    "Meals on Wheels is tasked with delivering <font color='red'> <b> meals to homebound persons</b></font>. Their time and resources are limited, and some groups live further away, so delivering to some groups may mean less deliveries to others. The numbers below represent how many meals are given to each group. <font color='red'><b>How should they allocate their time for deliveries?</b></font>",
    "A local hospital has a shortage of <font color='red'> <b>respirators for patients during the COVID-19 outbreak</b></font>. Some patients are more likely to be on respirators for longer than others, so less patients will be able to use one. The numbers below represent the number of patients receiving respirators. <font color='red'><b>How should the hospital allocate their respirators? </b>  </font>"],

  datasets_test: [[
    {
      "asian": 100,
      "white": 89,
      "black": 6,
      "hispanic": 44,
      "mu": 59.75,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 100,
      "white": 89,
      "black": 7,
      "hispanic": 44,
      "mu": 60,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 99,
      "white": 89,
      "black": 7,
      "hispanic": 44,
      "mu": 59.75,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 99,
      "white": 89,
      "black": 7,
      "hispanic": 45,
      "mu": 60,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 99,
      "white": 89,
      "black": 7,
      "hispanic": 45,
      "mu": 60,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 99,
      "white": 88,
      "black": 7,
      "hispanic": 45,
      "mu": 59.75,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 99,
      "white": 88,
      "black": 7,
      "hispanic": 45,
      "mu": 59.75,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 99,
      "white": 88,
      "black": 8,
      "hispanic": 45,
      "mu": 60,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 99,
      "white": 88,
      "black": 8,
      "hispanic": 45,
      "mu": 60,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 99,
      "white": 88,
      "black": 8,
      "hispanic": 45,
      "mu": 60,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 99,
      "white": 88,
      "black": 8,
      "hispanic": 45,
      "mu": 60,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 99,
      "white": 88,
      "black": 8,
      "hispanic": 45,
      "mu": 60,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 99,
      "white": 88,
      "black": 8,
      "hispanic": 46,
      "mu": 60.25,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 99,
      "white": 87,
      "black": 9,
      "hispanic": 46,
      "mu": 60.25,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 99,
      "white": 87,
      "black": 9,
      "hispanic": 46,
      "mu": 60.25,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 99,
      "white": 87,
      "black": 9,
      "hispanic": 46,
      "mu": 60.25,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 99,
      "white": 87,
      "black": 9,
      "hispanic": 46,
      "mu": 60.25,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 99,
      "white": 87,
      "black": 9,
      "hispanic": 46,
      "mu": 60.25,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 99,
      "white": 87,
      "black": 10,
      "hispanic": 46,
      "mu": 60.5,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 99,
      "white": 87,
      "black": 10,
      "hispanic": 46,
      "mu": 60.5,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 99,
      "white": 86,
      "black": 10,
      "hispanic": 46,
      "mu": 60.25,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 99,
      "white": 86,
      "black": 10,
      "hispanic": 47,
      "mu": 60.5,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 99,
      "white": 86,
      "black": 10,
      "hispanic": 47,
      "mu": 60.5,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 99,
      "white": 86,
      "black": 11,
      "hispanic": 47,
      "mu": 60.75,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 99,
      "white": 86,
      "black": 11,
      "hispanic": 47,
      "mu": 60.75,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 99,
      "white": 86,
      "black": 11,
      "hispanic": 47,
      "mu": 60.75,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 99,
      "white": 86,
      "black": 11,
      "hispanic": 47,
      "mu": 60.75,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 99,
      "white": 85,
      "black": 12,
      "hispanic": 47,
      "mu": 60.75,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 98,
      "white": 85,
      "black": 12,
      "hispanic": 47,
      "mu": 60.5,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 98,
      "white": 85,
      "black": 12,
      "hispanic": 47,
      "mu": 60.5,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 98,
      "white": 85,
      "black": 12,
      "hispanic": 47,
      "mu": 60.5,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 98,
      "white": 85,
      "black": 12,
      "hispanic": 48,
      "mu": 60.75,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 98,
      "white": 85,
      "black": 13,
      "hispanic": 48,
      "mu": 61,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 98,
      "white": 84,
      "black": 13,
      "hispanic": 48,
      "mu": 60.75,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 98,
      "white": 84,
      "black": 13,
      "hispanic": 48,
      "mu": 60.75,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 98,
      "white": 84,
      "black": 13,
      "hispanic": 48,
      "mu": 60.75,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 98,
      "white": 84,
      "black": 14,
      "hispanic": 48,
      "mu": 61,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 98,
      "white": 84,
      "black": 14,
      "hispanic": 48,
      "mu": 61,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 98,
      "white": 84,
      "black": 14,
      "hispanic": 48,
      "mu": 61,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 98,
      "white": 83,
      "black": 14,
      "hispanic": 48,
      "mu": 60.75,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 98,
      "white": 83,
      "black": 15,
      "hispanic": 48,
      "mu": 61,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 97,
      "white": 83,
      "black": 15,
      "hispanic": 48,
      "mu": 60.75,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 97,
      "white": 83,
      "black": 15,
      "hispanic": 48,
      "mu": 60.75,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 97,
      "white": 83,
      "black": 15,
      "hispanic": 49,
      "mu": 61,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 97,
      "white": 83,
      "black": 16,
      "hispanic": 49,
      "mu": 61.25,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 97,
      "white": 82,
      "black": 16,
      "hispanic": 49,
      "mu": 61,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 97,
      "white": 82,
      "black": 16,
      "hispanic": 49,
      "mu": 61,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 97,
      "white": 82,
      "black": 17,
      "hispanic": 49,
      "mu": 61.25,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 97,
      "white": 82,
      "black": 17,
      "hispanic": 49,
      "mu": 61.25,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 97,
      "white": 82,
      "black": 17,
      "hispanic": 49,
      "mu": 61.25,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 96,
      "white": 81,
      "black": 17,
      "hispanic": 49,
      "mu": 60.75,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 96,
      "white": 81,
      "black": 18,
      "hispanic": 49,
      "mu": 61,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 96,
      "white": 81,
      "black": 18,
      "hispanic": 49,
      "mu": 61,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 96,
      "white": 81,
      "black": 18,
      "hispanic": 49,
      "mu": 61,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 96,
      "white": 81,
      "black": 18,
      "hispanic": 49,
      "mu": 61,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 96,
      "white": 80,
      "black": 19,
      "hispanic": 49,
      "mu": 61,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 96,
      "white": 80,
      "black": 19,
      "hispanic": 49,
      "mu": 61,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 95,
      "white": 80,
      "black": 19,
      "hispanic": 49,
      "mu": 60.75,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 95,
      "white": 80,
      "black": 20,
      "hispanic": 49,
      "mu": 61,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 95,
      "white": 79,
      "black": 20,
      "hispanic": 50,
      "mu": 61,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 95,
      "white": 79,
      "black": 20,
      "hispanic": 50,
      "mu": 61,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 95,
      "white": 79,
      "black": 20,
      "hispanic": 50,
      "mu": 61,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 95,
      "white": 79,
      "black": 21,
      "hispanic": 50,
      "mu": 61.25,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 94,
      "white": 79,
      "black": 21,
      "hispanic": 50,
      "mu": 61,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 94,
      "white": 78,
      "black": 21,
      "hispanic": 50,
      "mu": 60.75,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 94,
      "white": 78,
      "black": 22,
      "hispanic": 50,
      "mu": 61,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 94,
      "white": 78,
      "black": 22,
      "hispanic": 50,
      "mu": 61,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 94,
      "white": 78,
      "black": 22,
      "hispanic": 50,
      "mu": 61,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 93,
      "white": 77,
      "black": 23,
      "hispanic": 50,
      "mu": 60.75,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 93,
      "white": 77,
      "black": 23,
      "hispanic": 50,
      "mu": 60.75,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 93,
      "white": 77,
      "black": 23,
      "hispanic": 50,
      "mu": 60.75,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 93,
      "white": 77,
      "black": 23,
      "hispanic": 50,
      "mu": 60.75,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 92,
      "white": 76,
      "black": 24,
      "hispanic": 50,
      "mu": 60.5,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 92,
      "white": 76,
      "black": 24,
      "hispanic": 50,
      "mu": 60.5,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 92,
      "white": 76,
      "black": 24,
      "hispanic": 50,
      "mu": 60.5,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 92,
      "white": 75,
      "black": 25,
      "hispanic": 50,
      "mu": 60.5,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 91,
      "white": 75,
      "black": 25,
      "hispanic": 50,
      "mu": 60.25,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 91,
      "white": 75,
      "black": 25,
      "hispanic": 50,
      "mu": 60.25,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 91,
      "white": 75,
      "black": 26,
      "hispanic": 50,
      "mu": 60.5,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 90,
      "white": 74,
      "black": 26,
      "hispanic": 50,
      "mu": 60,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 90,
      "white": 74,
      "black": 26,
      "hispanic": 50,
      "mu": 60,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 90,
      "white": 74,
      "black": 27,
      "hispanic": 50,
      "mu": 60.25,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 89,
      "white": 73,
      "black": 27,
      "hispanic": 50,
      "mu": 59.75,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 89,
      "white": 73,
      "black": 27,
      "hispanic": 50,
      "mu": 59.75,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 89,
      "white": 73,
      "black": 27,
      "hispanic": 50,
      "mu": 59.75,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 88,
      "white": 73,
      "black": 28,
      "hispanic": 50,
      "mu": 59.75,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 88,
      "white": 72,
      "black": 28,
      "hispanic": 50,
      "mu": 59.5,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 88,
      "white": 72,
      "black": 28,
      "hispanic": 50,
      "mu": 59.5,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 87,
      "white": 72,
      "black": 29,
      "hispanic": 50,
      "mu": 59.5,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 87,
      "white": 71,
      "black": 29,
      "hispanic": 50,
      "mu": 59.25,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 87,
      "white": 71,
      "black": 29,
      "hispanic": 50,
      "mu": 59.25,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 86,
      "white": 71,
      "black": 30,
      "hispanic": 50,
      "mu": 59.25,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 86,
      "white": 70,
      "black": 30,
      "hispanic": 50,
      "mu": 59,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 85,
      "white": 70,
      "black": 30,
      "hispanic": 50,
      "mu": 58.75,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 85,
      "white": 70,
      "black": 30,
      "hispanic": 50,
      "mu": 58.75,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 84,
      "white": 69,
      "black": 31,
      "hispanic": 50,
      "mu": 58.5,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 84,
      "white": 69,
      "black": 31,
      "hispanic": 50,
      "mu": 58.5,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 83,
      "white": 69,
      "black": 31,
      "hispanic": 50,
      "mu": 58.25,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 83,
      "white": 68,
      "black": 32,
      "hispanic": 50,
      "mu": 58.25,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 82,
      "white": 68,
      "black": 32,
      "hispanic": 50,
      "mu": 58,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 82,
      "white": 68,
      "black": 32,
      "hispanic": 50,
      "mu": 58,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 81,
      "white": 67,
      "black": 33,
      "hispanic": 50,
      "mu": 57.75,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 81,
      "white": 67,
      "black": 33,
      "hispanic": 50,
      "mu": 57.75,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 80,
      "white": 66,
      "black": 33,
      "hispanic": 50,
      "mu": 57.25,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 80,
      "white": 66,
      "black": 33,
      "hispanic": 50,
      "mu": 57.25,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 79,
      "white": 66,
      "black": 34,
      "hispanic": 50,
      "mu": 57.25,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 79,
      "white": 65,
      "black": 34,
      "hispanic": 50,
      "mu": 57,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 78,
      "white": 65,
      "black": 34,
      "hispanic": 50,
      "mu": 56.75,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 78,
      "white": 65,
      "black": 35,
      "hispanic": 49,
      "mu": 56.75,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 77,
      "white": 64,
      "black": 35,
      "hispanic": 49,
      "mu": 56.25,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 76,
      "white": 64,
      "black": 35,
      "hispanic": 49,
      "mu": 56,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 76,
      "white": 63,
      "black": 35,
      "hispanic": 49,
      "mu": 55.75,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 75,
      "white": 63,
      "black": 36,
      "hispanic": 49,
      "mu": 55.75,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 74,
      "white": 62,
      "black": 36,
      "hispanic": 49,
      "mu": 55.25,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 74,
      "white": 62,
      "black": 36,
      "hispanic": 49,
      "mu": 55.25,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 73,
      "white": 62,
      "black": 36,
      "hispanic": 49,
      "mu": 55,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 72,
      "white": 61,
      "black": 37,
      "hispanic": 49,
      "mu": 54.75,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 72,
      "white": 61,
      "black": 37,
      "hispanic": 49,
      "mu": 54.75,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 71,
      "white": 60,
      "black": 37,
      "hispanic": 49,
      "mu": 54.25,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 70,
      "white": 60,
      "black": 38,
      "hispanic": 49,
      "mu": 54.25,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 70,
      "white": 59,
      "black": 38,
      "hispanic": 49,
      "mu": 54,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 69,
      "white": 59,
      "black": 38,
      "hispanic": 48,
      "mu": 53.5,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 68,
      "white": 59,
      "black": 38,
      "hispanic": 48,
      "mu": 53.25,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 67,
      "white": 58,
      "black": 39,
      "hispanic": 48,
      "mu": 53,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 67,
      "white": 58,
      "black": 39,
      "hispanic": 48,
      "mu": 53,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 66,
      "white": 57,
      "black": 39,
      "hispanic": 48,
      "mu": 52.5,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 65,
      "white": 57,
      "black": 39,
      "hispanic": 48,
      "mu": 52.25,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 64,
      "white": 56,
      "black": 40,
      "hispanic": 48,
      "mu": 52,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 64,
      "white": 56,
      "black": 40,
      "hispanic": 48,
      "mu": 52,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 63,
      "white": 55,
      "black": 40,
      "hispanic": 48,
      "mu": 51.5,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 62,
      "white": 55,
      "black": 40,
      "hispanic": 47,
      "mu": 51,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 61,
      "white": 54,
      "black": 41,
      "hispanic": 47,
      "mu": 50.75,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 60,
      "white": 54,
      "black": 41,
      "hispanic": 47,
      "mu": 50.5,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 59,
      "white": 53,
      "black": 41,
      "hispanic": 47,
      "mu": 50,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 59,
      "white": 53,
      "black": 41,
      "hispanic": 47,
      "mu": 50,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 58,
      "white": 52,
      "black": 41,
      "hispanic": 47,
      "mu": 49.5,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 57,
      "white": 52,
      "black": 42,
      "hispanic": 47,
      "mu": 49.5,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 56,
      "white": 51,
      "black": 42,
      "hispanic": 47,
      "mu": 49,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 55,
      "white": 51,
      "black": 42,
      "hispanic": 46,
      "mu": 48.5,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 54,
      "white": 50,
      "black": 42,
      "hispanic": 46,
      "mu": 48,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 53,
      "white": 50,
      "black": 43,
      "hispanic": 46,
      "mu": 48,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 53,
      "white": 49,
      "black": 43,
      "hispanic": 46,
      "mu": 47.75,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 52,
      "white": 49,
      "black": 43,
      "hispanic": 46,
      "mu": 47.5,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 51,
      "white": 48,
      "black": 43,
      "hispanic": 46,
      "mu": 47,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 50,
      "white": 48,
      "black": 43,
      "hispanic": 46,
      "mu": 46.75,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 49,
      "white": 47,
      "black": 44,
      "hispanic": 45,
      "mu": 46.25,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 48,
      "white": 47,
      "black": 44,
      "hispanic": 45,
      "mu": 46,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 47,
      "white": 46,
      "black": 44,
      "hispanic": 45,
      "mu": 45.5,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 46,
      "white": 46,
      "black": 44,
      "hispanic": 45,
      "mu": 45.25,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 45,
      "white": 45,
      "black": 44,
      "hispanic": 45,
      "mu": 44.75,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 45,
      "white": 45,
      "black": 45,
      "hispanic": 45,
      "mu": 45,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 44,
      "white": 44,
      "black": 45,
      "hispanic": 44,
      "mu": 44.25,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 43,
      "white": 43,
      "black": 45,
      "hispanic": 44,
      "mu": 43.75,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 42,
      "white": 43,
      "black": 45,
      "hispanic": 44,
      "mu": 43.5,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 41,
      "white": 42,
      "black": 45,
      "hispanic": 44,
      "mu": 43,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 40,
      "white": 42,
      "black": 45,
      "hispanic": 44,
      "mu": 42.75,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 39,
      "white": 41,
      "black": 46,
      "hispanic": 43,
      "mu": 42.25,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 38,
      "white": 41,
      "black": 46,
      "hispanic": 43,
      "mu": 42,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 37,
      "white": 40,
      "black": 46,
      "hispanic": 43,
      "mu": 41.5,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 37,
      "white": 40,
      "black": 46,
      "hispanic": 43,
      "mu": 41.5,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 36,
      "white": 39,
      "black": 46,
      "hispanic": 43,
      "mu": 41,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 35,
      "white": 39,
      "black": 46,
      "hispanic": 42,
      "mu": 40.5,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 34,
      "white": 38,
      "black": 47,
      "hispanic": 42,
      "mu": 40.25,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 33,
      "white": 37,
      "black": 47,
      "hispanic": 42,
      "mu": 39.75,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 32,
      "white": 37,
      "black": 47,
      "hispanic": 42,
      "mu": 39.5,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 31,
      "white": 36,
      "black": 47,
      "hispanic": 42,
      "mu": 39,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 31,
      "white": 36,
      "black": 47,
      "hispanic": 41,
      "mu": 38.75,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 30,
      "white": 35,
      "black": 47,
      "hispanic": 41,
      "mu": 38.25,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 29,
      "white": 35,
      "black": 48,
      "hispanic": 41,
      "mu": 38.25,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 28,
      "white": 34,
      "black": 48,
      "hispanic": 41,
      "mu": 37.75,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 27,
      "white": 34,
      "black": 48,
      "hispanic": 41,
      "mu": 37.5,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 27,
      "white": 33,
      "black": 48,
      "hispanic": 40,
      "mu": 37,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 26,
      "white": 33,
      "black": 48,
      "hispanic": 40,
      "mu": 36.75,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 25,
      "white": 32,
      "black": 48,
      "hispanic": 40,
      "mu": 36.25,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 24,
      "white": 32,
      "black": 48,
      "hispanic": 40,
      "mu": 36,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 23,
      "white": 31,
      "black": 49,
      "hispanic": 40,
      "mu": 35.75,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 23,
      "white": 31,
      "black": 49,
      "hispanic": 39,
      "mu": 35.5,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 22,
      "white": 30,
      "black": 49,
      "hispanic": 39,
      "mu": 35,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 21,
      "white": 29,
      "black": 49,
      "hispanic": 39,
      "mu": 34.5,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 21,
      "white": 29,
      "black": 49,
      "hispanic": 39,
      "mu": 34.5,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 20,
      "white": 28,
      "black": 49,
      "hispanic": 38,
      "mu": 33.75,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 19,
      "white": 28,
      "black": 49,
      "hispanic": 38,
      "mu": 33.5,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 19,
      "white": 27,
      "black": 49,
      "hispanic": 38,
      "mu": 33.25,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 18,
      "white": 27,
      "black": 50,
      "hispanic": 38,
      "mu": 33.25,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 17,
      "white": 26,
      "black": 50,
      "hispanic": 38,
      "mu": 32.75,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 17,
      "white": 26,
      "black": 50,
      "hispanic": 37,
      "mu": 32.5,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 16,
      "white": 25,
      "black": 50,
      "hispanic": 37,
      "mu": 32,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 16,
      "white": 25,
      "black": 50,
      "hispanic": 37,
      "mu": 32,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 15,
      "white": 24,
      "black": 50,
      "hispanic": 37,
      "mu": 31.5,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 14,
      "white": 24,
      "black": 50,
      "hispanic": 36,
      "mu": 31,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 14,
      "white": 24,
      "black": 50,
      "hispanic": 36,
      "mu": 31,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 13,
      "white": 23,
      "black": 51,
      "hispanic": 36,
      "mu": 30.75,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 13,
      "white": 23,
      "black": 51,
      "hispanic": 36,
      "mu": 30.75,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 12,
      "white": 22,
      "black": 51,
      "hispanic": 35,
      "mu": 30,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 12,
      "white": 22,
      "black": 51,
      "hispanic": 35,
      "mu": 30,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 11,
      "white": 21,
      "black": 51,
      "hispanic": 35,
      "mu": 29.5,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 11,
      "white": 21,
      "black": 51,
      "hispanic": 35,
      "mu": 29.5,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 10,
      "white": 20,
      "black": 51,
      "hispanic": 34,
      "mu": 28.75,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 10,
      "white": 20,
      "black": 51,
      "hispanic": 34,
      "mu": 28.75,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 9,
      "white": 19,
      "black": 51,
      "hispanic": 34,
      "mu": 28.25,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 9,
      "white": 19,
      "black": 51,
      "hispanic": 34,
      "mu": 28.25,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 9,
      "white": 19,
      "black": 52,
      "hispanic": 33,
      "mu": 28.25,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 8,
      "white": 18,
      "black": 52,
      "hispanic": 33,
      "mu": 27.75,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 8,
      "white": 18,
      "black": 52,
      "hispanic": 33,
      "mu": 27.75,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 8,
      "white": 17,
      "black": 52,
      "hispanic": 33,
      "mu": 27.5,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 7,
      "white": 17,
      "black": 52,
      "hispanic": 32,
      "mu": 27,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 7,
      "white": 16,
      "black": 52,
      "hispanic": 32,
      "mu": 26.75,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 7,
      "white": 16,
      "black": 52,
      "hispanic": 32,
      "mu": 26.75,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 6,
      "white": 16,
      "black": 52,
      "hispanic": 32,
      "mu": 26.5,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 6,
      "white": 15,
      "black": 52,
      "hispanic": 31,
      "mu": 26,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 6,
      "white": 15,
      "black": 52,
      "hispanic": 31,
      "mu": 26,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 5,
      "white": 15,
      "black": 52,
      "hispanic": 31,
      "mu": 25.75,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 5,
      "white": 14,
      "black": 53,
      "hispanic": 31,
      "mu": 25.75,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 5,
      "white": 14,
      "black": 53,
      "hispanic": 30,
      "mu": 25.5,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 5,
      "white": 13,
      "black": 53,
      "hispanic": 30,
      "mu": 25.25,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 4,
      "white": 13,
      "black": 53,
      "hispanic": 30,
      "mu": 25,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 4,
      "white": 13,
      "black": 53,
      "hispanic": 30,
      "mu": 25,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 4,
      "white": 12,
      "black": 53,
      "hispanic": 29,
      "mu": 24.5,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 4,
      "white": 12,
      "black": 53,
      "hispanic": 29,
      "mu": 24.5,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 3,
      "white": 12,
      "black": 53,
      "hispanic": 29,
      "mu": 24.25,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    },
    {
      "asian": 3,
      "white": 11,
      "black": 53,
      "hispanic": 29,
      "mu": 24,
      "tradeoff": "HIGH: A:760, W:680, B:440, H:520"
    }
  ],
  [
    {
      "asian": 93,
      "white": 76,
      "black": 21,
      "hispanic": 48,
      "mu": 59.5,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 92,
      "white": 75,
      "black": 21,
      "hispanic": 48,
      "mu": 59,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 92,
      "white": 75,
      "black": 21,
      "hispanic": 48,
      "mu": 59,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 92,
      "white": 75,
      "black": 22,
      "hispanic": 48,
      "mu": 59.25,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 92,
      "white": 75,
      "black": 22,
      "hispanic": 48,
      "mu": 59.25,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 92,
      "white": 75,
      "black": 22,
      "hispanic": 48,
      "mu": 59.25,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 92,
      "white": 75,
      "black": 22,
      "hispanic": 48,
      "mu": 59.25,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 92,
      "white": 75,
      "black": 23,
      "hispanic": 48,
      "mu": 59.5,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 92,
      "white": 75,
      "black": 23,
      "hispanic": 49,
      "mu": 59.75,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 92,
      "white": 75,
      "black": 23,
      "hispanic": 49,
      "mu": 59.75,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 91,
      "white": 75,
      "black": 23,
      "hispanic": 49,
      "mu": 59.5,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 91,
      "white": 75,
      "black": 23,
      "hispanic": 49,
      "mu": 59.5,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 91,
      "white": 75,
      "black": 24,
      "hispanic": 49,
      "mu": 59.75,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 91,
      "white": 75,
      "black": 24,
      "hispanic": 49,
      "mu": 59.75,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 91,
      "white": 74,
      "black": 24,
      "hispanic": 49,
      "mu": 59.5,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 91,
      "white": 74,
      "black": 24,
      "hispanic": 49,
      "mu": 59.5,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 91,
      "white": 74,
      "black": 25,
      "hispanic": 49,
      "mu": 59.75,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 91,
      "white": 74,
      "black": 25,
      "hispanic": 49,
      "mu": 59.75,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 90,
      "white": 74,
      "black": 25,
      "hispanic": 50,
      "mu": 59.75,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 90,
      "white": 74,
      "black": 25,
      "hispanic": 50,
      "mu": 59.75,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 90,
      "white": 74,
      "black": 26,
      "hispanic": 50,
      "mu": 60,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 90,
      "white": 74,
      "black": 26,
      "hispanic": 50,
      "mu": 60,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 90,
      "white": 74,
      "black": 26,
      "hispanic": 50,
      "mu": 60,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 90,
      "white": 74,
      "black": 26,
      "hispanic": 50,
      "mu": 60,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 90,
      "white": 74,
      "black": 26,
      "hispanic": 50,
      "mu": 60,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 90,
      "white": 74,
      "black": 27,
      "hispanic": 50,
      "mu": 60.25,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 89,
      "white": 73,
      "black": 27,
      "hispanic": 50,
      "mu": 59.75,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 89,
      "white": 73,
      "black": 27,
      "hispanic": 50,
      "mu": 59.75,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 89,
      "white": 73,
      "black": 27,
      "hispanic": 50,
      "mu": 59.75,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 89,
      "white": 73,
      "black": 28,
      "hispanic": 51,
      "mu": 60.25,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 89,
      "white": 73,
      "black": 28,
      "hispanic": 51,
      "mu": 60.25,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 89,
      "white": 73,
      "black": 28,
      "hispanic": 51,
      "mu": 60.25,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 88,
      "white": 73,
      "black": 28,
      "hispanic": 51,
      "mu": 60,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 88,
      "white": 73,
      "black": 29,
      "hispanic": 51,
      "mu": 60.25,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 88,
      "white": 73,
      "black": 29,
      "hispanic": 51,
      "mu": 60.25,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 88,
      "white": 73,
      "black": 29,
      "hispanic": 51,
      "mu": 60.25,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 88,
      "white": 72,
      "black": 29,
      "hispanic": 51,
      "mu": 60,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 88,
      "white": 72,
      "black": 30,
      "hispanic": 51,
      "mu": 60.25,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 88,
      "white": 72,
      "black": 30,
      "hispanic": 51,
      "mu": 60.25,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 87,
      "white": 72,
      "black": 30,
      "hispanic": 51,
      "mu": 60,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 87,
      "white": 72,
      "black": 30,
      "hispanic": 51,
      "mu": 60,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 87,
      "white": 72,
      "black": 31,
      "hispanic": 51,
      "mu": 60.25,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 87,
      "white": 72,
      "black": 31,
      "hispanic": 52,
      "mu": 60.5,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 87,
      "white": 72,
      "black": 31,
      "hispanic": 52,
      "mu": 60.5,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 87,
      "white": 72,
      "black": 31,
      "hispanic": 52,
      "mu": 60.5,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 86,
      "white": 72,
      "black": 32,
      "hispanic": 52,
      "mu": 60.5,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 86,
      "white": 71,
      "black": 32,
      "hispanic": 52,
      "mu": 60.25,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 86,
      "white": 71,
      "black": 32,
      "hispanic": 52,
      "mu": 60.25,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 86,
      "white": 71,
      "black": 32,
      "hispanic": 52,
      "mu": 60.25,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 86,
      "white": 71,
      "black": 33,
      "hispanic": 52,
      "mu": 60.5,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 85,
      "white": 71,
      "black": 33,
      "hispanic": 52,
      "mu": 60.25,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 85,
      "white": 71,
      "black": 33,
      "hispanic": 52,
      "mu": 60.25,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 85,
      "white": 71,
      "black": 33,
      "hispanic": 52,
      "mu": 60.25,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 85,
      "white": 71,
      "black": 34,
      "hispanic": 52,
      "mu": 60.5,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 85,
      "white": 71,
      "black": 34,
      "hispanic": 52,
      "mu": 60.5,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 84,
      "white": 70,
      "black": 34,
      "hispanic": 52,
      "mu": 60,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 84,
      "white": 70,
      "black": 34,
      "hispanic": 53,
      "mu": 60.25,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 84,
      "white": 70,
      "black": 34,
      "hispanic": 53,
      "mu": 60.25,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 84,
      "white": 70,
      "black": 35,
      "hispanic": 53,
      "mu": 60.5,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 84,
      "white": 70,
      "black": 35,
      "hispanic": 53,
      "mu": 60.5,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 83,
      "white": 70,
      "black": 35,
      "hispanic": 53,
      "mu": 60.25,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 83,
      "white": 70,
      "black": 35,
      "hispanic": 53,
      "mu": 60.25,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 83,
      "white": 70,
      "black": 36,
      "hispanic": 53,
      "mu": 60.5,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 83,
      "white": 69,
      "black": 36,
      "hispanic": 53,
      "mu": 60.25,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 83,
      "white": 69,
      "black": 36,
      "hispanic": 53,
      "mu": 60.25,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 82,
      "white": 69,
      "black": 36,
      "hispanic": 53,
      "mu": 60,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 82,
      "white": 69,
      "black": 37,
      "hispanic": 53,
      "mu": 60.25,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 82,
      "white": 69,
      "black": 37,
      "hispanic": 53,
      "mu": 60.25,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 82,
      "white": 69,
      "black": 37,
      "hispanic": 53,
      "mu": 60.25,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 81,
      "white": 69,
      "black": 37,
      "hispanic": 53,
      "mu": 60,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 81,
      "white": 69,
      "black": 38,
      "hispanic": 53,
      "mu": 60.25,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 81,
      "white": 68,
      "black": 38,
      "hispanic": 53,
      "mu": 60,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 81,
      "white": 68,
      "black": 38,
      "hispanic": 53,
      "mu": 60,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 80,
      "white": 68,
      "black": 38,
      "hispanic": 54,
      "mu": 60,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 80,
      "white": 68,
      "black": 39,
      "hispanic": 54,
      "mu": 60.25,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 80,
      "white": 68,
      "black": 39,
      "hispanic": 54,
      "mu": 60.25,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 80,
      "white": 68,
      "black": 39,
      "hispanic": 54,
      "mu": 60.25,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 79,
      "white": 68,
      "black": 39,
      "hispanic": 54,
      "mu": 60,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 79,
      "white": 68,
      "black": 40,
      "hispanic": 54,
      "mu": 60.25,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 79,
      "white": 67,
      "black": 40,
      "hispanic": 54,
      "mu": 60,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 79,
      "white": 67,
      "black": 40,
      "hispanic": 54,
      "mu": 60,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 78,
      "white": 67,
      "black": 40,
      "hispanic": 54,
      "mu": 59.75,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 78,
      "white": 67,
      "black": 40,
      "hispanic": 54,
      "mu": 59.75,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 78,
      "white": 67,
      "black": 41,
      "hispanic": 54,
      "mu": 60,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 78,
      "white": 67,
      "black": 41,
      "hispanic": 54,
      "mu": 60,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 77,
      "white": 67,
      "black": 41,
      "hispanic": 54,
      "mu": 59.75,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 77,
      "white": 66,
      "black": 41,
      "hispanic": 54,
      "mu": 59.5,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 77,
      "white": 66,
      "black": 42,
      "hispanic": 54,
      "mu": 59.75,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 77,
      "white": 66,
      "black": 42,
      "hispanic": 54,
      "mu": 59.75,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 76,
      "white": 66,
      "black": 42,
      "hispanic": 54,
      "mu": 59.5,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 76,
      "white": 66,
      "black": 42,
      "hispanic": 54,
      "mu": 59.5,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 76,
      "white": 66,
      "black": 43,
      "hispanic": 54,
      "mu": 59.75,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 75,
      "white": 65,
      "black": 43,
      "hispanic": 54,
      "mu": 59.25,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 75,
      "white": 65,
      "black": 43,
      "hispanic": 54,
      "mu": 59.25,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 75,
      "white": 65,
      "black": 43,
      "hispanic": 54,
      "mu": 59.25,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 75,
      "white": 65,
      "black": 43,
      "hispanic": 54,
      "mu": 59.25,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 74,
      "white": 65,
      "black": 44,
      "hispanic": 54,
      "mu": 59.25,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 74,
      "white": 65,
      "black": 44,
      "hispanic": 54,
      "mu": 59.25,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 74,
      "white": 64,
      "black": 44,
      "hispanic": 54,
      "mu": 59,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 73,
      "white": 64,
      "black": 44,
      "hispanic": 54,
      "mu": 58.75,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 73,
      "white": 64,
      "black": 45,
      "hispanic": 54,
      "mu": 59,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 73,
      "white": 64,
      "black": 45,
      "hispanic": 55,
      "mu": 59.25,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 72,
      "white": 64,
      "black": 45,
      "hispanic": 55,
      "mu": 59,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 72,
      "white": 64,
      "black": 45,
      "hispanic": 55,
      "mu": 59,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 72,
      "white": 64,
      "black": 45,
      "hispanic": 55,
      "mu": 59,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 71,
      "white": 63,
      "black": 46,
      "hispanic": 55,
      "mu": 58.75,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 71,
      "white": 63,
      "black": 46,
      "hispanic": 55,
      "mu": 58.75,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 71,
      "white": 63,
      "black": 46,
      "hispanic": 55,
      "mu": 58.75,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 70,
      "white": 63,
      "black": 46,
      "hispanic": 55,
      "mu": 58.5,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 70,
      "white": 63,
      "black": 47,
      "hispanic": 55,
      "mu": 58.75,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 70,
      "white": 62,
      "black": 47,
      "hispanic": 55,
      "mu": 58.5,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 69,
      "white": 62,
      "black": 47,
      "hispanic": 55,
      "mu": 58.25,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 69,
      "white": 62,
      "black": 47,
      "hispanic": 55,
      "mu": 58.25,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 69,
      "white": 62,
      "black": 47,
      "hispanic": 55,
      "mu": 58.25,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 68,
      "white": 62,
      "black": 48,
      "hispanic": 55,
      "mu": 58.25,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 68,
      "white": 62,
      "black": 48,
      "hispanic": 55,
      "mu": 58.25,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 68,
      "white": 61,
      "black": 48,
      "hispanic": 55,
      "mu": 58,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 67,
      "white": 61,
      "black": 48,
      "hispanic": 55,
      "mu": 57.75,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 67,
      "white": 61,
      "black": 48,
      "hispanic": 55,
      "mu": 57.75,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 67,
      "white": 61,
      "black": 49,
      "hispanic": 55,
      "mu": 58,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 66,
      "white": 61,
      "black": 49,
      "hispanic": 55,
      "mu": 57.75,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 66,
      "white": 60,
      "black": 49,
      "hispanic": 55,
      "mu": 57.5,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 66,
      "white": 60,
      "black": 49,
      "hispanic": 55,
      "mu": 57.5,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 65,
      "white": 60,
      "black": 49,
      "hispanic": 55,
      "mu": 57.25,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 65,
      "white": 60,
      "black": 50,
      "hispanic": 55,
      "mu": 57.5,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 64,
      "white": 60,
      "black": 50,
      "hispanic": 55,
      "mu": 57.25,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 64,
      "white": 59,
      "black": 50,
      "hispanic": 55,
      "mu": 57,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 64,
      "white": 59,
      "black": 50,
      "hispanic": 55,
      "mu": 57,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 63,
      "white": 59,
      "black": 50,
      "hispanic": 55,
      "mu": 56.75,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 63,
      "white": 59,
      "black": 51,
      "hispanic": 55,
      "mu": 57,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 63,
      "white": 59,
      "black": 51,
      "hispanic": 55,
      "mu": 57,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 62,
      "white": 59,
      "black": 51,
      "hispanic": 55,
      "mu": 56.75,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 62,
      "white": 58,
      "black": 51,
      "hispanic": 55,
      "mu": 56.5,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 61,
      "white": 58,
      "black": 51,
      "hispanic": 55,
      "mu": 56.25,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 61,
      "white": 58,
      "black": 52,
      "hispanic": 55,
      "mu": 56.5,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 61,
      "white": 58,
      "black": 52,
      "hispanic": 55,
      "mu": 56.5,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 60,
      "white": 57,
      "black": 52,
      "hispanic": 55,
      "mu": 56,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 60,
      "white": 57,
      "black": 52,
      "hispanic": 55,
      "mu": 56,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 59,
      "white": 57,
      "black": 52,
      "hispanic": 55,
      "mu": 55.75,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 59,
      "white": 57,
      "black": 52,
      "hispanic": 55,
      "mu": 55.75,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 59,
      "white": 57,
      "black": 53,
      "hispanic": 55,
      "mu": 56,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 58,
      "white": 56,
      "black": 53,
      "hispanic": 55,
      "mu": 55.5,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 58,
      "white": 56,
      "black": 53,
      "hispanic": 55,
      "mu": 55.5,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 57,
      "white": 56,
      "black": 53,
      "hispanic": 55,
      "mu": 55.25,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 57,
      "white": 56,
      "black": 53,
      "hispanic": 55,
      "mu": 55.25,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 57,
      "white": 56,
      "black": 54,
      "hispanic": 55,
      "mu": 55.5,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 56,
      "white": 55,
      "black": 54,
      "hispanic": 55,
      "mu": 55,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 56,
      "white": 55,
      "black": 54,
      "hispanic": 55,
      "mu": 55,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 55,
      "white": 55,
      "black": 54,
      "hispanic": 55,
      "mu": 54.75,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 55,
      "white": 55,
      "black": 54,
      "hispanic": 54,
      "mu": 54.5,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 54,
      "white": 54,
      "black": 54,
      "hispanic": 54,
      "mu": 54,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 54,
      "white": 54,
      "black": 55,
      "hispanic": 54,
      "mu": 54.25,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 54,
      "white": 54,
      "black": 55,
      "hispanic": 54,
      "mu": 54.25,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 53,
      "white": 54,
      "black": 55,
      "hispanic": 54,
      "mu": 54,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 53,
      "white": 54,
      "black": 55,
      "hispanic": 54,
      "mu": 54,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 52,
      "white": 53,
      "black": 55,
      "hispanic": 54,
      "mu": 53.5,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 52,
      "white": 53,
      "black": 55,
      "hispanic": 54,
      "mu": 53.5,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 51,
      "white": 53,
      "black": 56,
      "hispanic": 54,
      "mu": 53.5,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 51,
      "white": 53,
      "black": 56,
      "hispanic": 54,
      "mu": 53.5,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 51,
      "white": 52,
      "black": 56,
      "hispanic": 54,
      "mu": 53.25,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 50,
      "white": 52,
      "black": 56,
      "hispanic": 54,
      "mu": 53,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 50,
      "white": 52,
      "black": 56,
      "hispanic": 54,
      "mu": 53,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 49,
      "white": 52,
      "black": 56,
      "hispanic": 54,
      "mu": 52.75,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 49,
      "white": 51,
      "black": 57,
      "hispanic": 54,
      "mu": 52.75,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 48,
      "white": 51,
      "black": 57,
      "hispanic": 54,
      "mu": 52.5,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 48,
      "white": 51,
      "black": 57,
      "hispanic": 54,
      "mu": 52.5,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 48,
      "white": 51,
      "black": 57,
      "hispanic": 54,
      "mu": 52.5,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 47,
      "white": 50,
      "black": 57,
      "hispanic": 54,
      "mu": 52,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 47,
      "white": 50,
      "black": 57,
      "hispanic": 54,
      "mu": 52,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 46,
      "white": 50,
      "black": 58,
      "hispanic": 54,
      "mu": 52,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 46,
      "white": 50,
      "black": 58,
      "hispanic": 54,
      "mu": 52,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 45,
      "white": 50,
      "black": 58,
      "hispanic": 54,
      "mu": 51.75,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 45,
      "white": 49,
      "black": 58,
      "hispanic": 54,
      "mu": 51.5,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 44,
      "white": 49,
      "black": 58,
      "hispanic": 54,
      "mu": 51.25,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 44,
      "white": 49,
      "black": 58,
      "hispanic": 54,
      "mu": 51.25,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 44,
      "white": 49,
      "black": 58,
      "hispanic": 54,
      "mu": 51.25,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 43,
      "white": 48,
      "black": 59,
      "hispanic": 53,
      "mu": 50.75,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 43,
      "white": 48,
      "black": 59,
      "hispanic": 53,
      "mu": 50.75,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 42,
      "white": 48,
      "black": 59,
      "hispanic": 53,
      "mu": 50.5,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 42,
      "white": 48,
      "black": 59,
      "hispanic": 53,
      "mu": 50.5,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 41,
      "white": 47,
      "black": 59,
      "hispanic": 53,
      "mu": 50,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 41,
      "white": 47,
      "black": 59,
      "hispanic": 53,
      "mu": 50,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 40,
      "white": 47,
      "black": 59,
      "hispanic": 53,
      "mu": 49.75,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 40,
      "white": 46,
      "black": 60,
      "hispanic": 53,
      "mu": 49.75,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 40,
      "white": 46,
      "black": 60,
      "hispanic": 53,
      "mu": 49.75,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 39,
      "white": 46,
      "black": 60,
      "hispanic": 53,
      "mu": 49.5,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 39,
      "white": 46,
      "black": 60,
      "hispanic": 53,
      "mu": 49.5,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 38,
      "white": 45,
      "black": 60,
      "hispanic": 53,
      "mu": 49,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 38,
      "white": 45,
      "black": 60,
      "hispanic": 53,
      "mu": 49,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 37,
      "white": 45,
      "black": 60,
      "hispanic": 53,
      "mu": 48.75,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 37,
      "white": 45,
      "black": 61,
      "hispanic": 53,
      "mu": 49,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 36,
      "white": 44,
      "black": 61,
      "hispanic": 53,
      "mu": 48.5,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 36,
      "white": 44,
      "black": 61,
      "hispanic": 53,
      "mu": 48.5,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 36,
      "white": 44,
      "black": 61,
      "hispanic": 52,
      "mu": 48.25,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 35,
      "white": 44,
      "black": 61,
      "hispanic": 52,
      "mu": 48,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 35,
      "white": 43,
      "black": 61,
      "hispanic": 52,
      "mu": 47.75,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 34,
      "white": 43,
      "black": 61,
      "hispanic": 52,
      "mu": 47.5,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 34,
      "white": 43,
      "black": 61,
      "hispanic": 52,
      "mu": 47.5,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 33,
      "white": 43,
      "black": 62,
      "hispanic": 52,
      "mu": 47.5,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 33,
      "white": 42,
      "black": 62,
      "hispanic": 52,
      "mu": 47.25,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 33,
      "white": 42,
      "black": 62,
      "hispanic": 52,
      "mu": 47.25,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 32,
      "white": 42,
      "black": 62,
      "hispanic": 52,
      "mu": 47,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 32,
      "white": 42,
      "black": 62,
      "hispanic": 52,
      "mu": 47,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 31,
      "white": 41,
      "black": 62,
      "hispanic": 52,
      "mu": 46.5,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 31,
      "white": 41,
      "black": 62,
      "hispanic": 52,
      "mu": 46.5,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 30,
      "white": 41,
      "black": 62,
      "hispanic": 52,
      "mu": 46.25,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 30,
      "white": 40,
      "black": 62,
      "hispanic": 52,
      "mu": 46,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 30,
      "white": 40,
      "black": 63,
      "hispanic": 51,
      "mu": 46,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 29,
      "white": 40,
      "black": 63,
      "hispanic": 51,
      "mu": 45.75,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 29,
      "white": 40,
      "black": 63,
      "hispanic": 51,
      "mu": 45.75,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 28,
      "white": 39,
      "black": 63,
      "hispanic": 51,
      "mu": 45.25,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 28,
      "white": 39,
      "black": 63,
      "hispanic": 51,
      "mu": 45.25,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 28,
      "white": 39,
      "black": 63,
      "hispanic": 51,
      "mu": 45.25,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 27,
      "white": 39,
      "black": 63,
      "hispanic": 51,
      "mu": 45,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 27,
      "white": 38,
      "black": 63,
      "hispanic": 51,
      "mu": 44.75,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 26,
      "white": 38,
      "black": 63,
      "hispanic": 51,
      "mu": 44.5,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 26,
      "white": 38,
      "black": 64,
      "hispanic": 51,
      "mu": 44.75,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 26,
      "white": 37,
      "black": 64,
      "hispanic": 51,
      "mu": 44.5,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 25,
      "white": 37,
      "black": 64,
      "hispanic": 51,
      "mu": 44.25,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 25,
      "white": 37,
      "black": 64,
      "hispanic": 50,
      "mu": 44,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    },
    {
      "asian": 24,
      "white": 37,
      "black": 64,
      "hispanic": 50,
      "mu": 43.75,
      "tradeoff": "MEDIUM: A:700, W:650, B:500, H:550"
    }
  ],
  [
    {
      "asian": 73,
      "white": 65,
      "black": 45,
      "hispanic": 55,
      "mu": 59.5,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 73,
      "white": 65,
      "black": 45,
      "hispanic": 55,
      "mu": 59.5,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 73,
      "white": 65,
      "black": 45,
      "hispanic": 55,
      "mu": 59.5,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 73,
      "white": 65,
      "black": 45,
      "hispanic": 55,
      "mu": 59.5,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 73,
      "white": 65,
      "black": 45,
      "hispanic": 55,
      "mu": 59.5,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 73,
      "white": 65,
      "black": 46,
      "hispanic": 55,
      "mu": 59.75,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 73,
      "white": 64,
      "black": 46,
      "hispanic": 55,
      "mu": 59.5,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 73,
      "white": 64,
      "black": 46,
      "hispanic": 55,
      "mu": 59.5,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 73,
      "white": 64,
      "black": 46,
      "hispanic": 55,
      "mu": 59.5,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 73,
      "white": 64,
      "black": 46,
      "hispanic": 55,
      "mu": 59.5,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 73,
      "white": 64,
      "black": 46,
      "hispanic": 55,
      "mu": 59.5,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 73,
      "white": 64,
      "black": 46,
      "hispanic": 55,
      "mu": 59.5,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 72,
      "white": 64,
      "black": 46,
      "hispanic": 55,
      "mu": 59.25,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 72,
      "white": 64,
      "black": 46,
      "hispanic": 55,
      "mu": 59.25,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 72,
      "white": 64,
      "black": 46,
      "hispanic": 56,
      "mu": 59.5,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 72,
      "white": 64,
      "black": 47,
      "hispanic": 56,
      "mu": 59.75,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 72,
      "white": 64,
      "black": 47,
      "hispanic": 56,
      "mu": 59.75,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 72,
      "white": 64,
      "black": 47,
      "hispanic": 56,
      "mu": 59.75,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 72,
      "white": 64,
      "black": 47,
      "hispanic": 56,
      "mu": 59.75,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 72,
      "white": 64,
      "black": 47,
      "hispanic": 56,
      "mu": 59.75,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 72,
      "white": 64,
      "black": 47,
      "hispanic": 56,
      "mu": 59.75,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 72,
      "white": 64,
      "black": 47,
      "hispanic": 56,
      "mu": 59.75,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 72,
      "white": 64,
      "black": 47,
      "hispanic": 56,
      "mu": 59.75,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 72,
      "white": 64,
      "black": 47,
      "hispanic": 56,
      "mu": 59.75,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 71,
      "white": 64,
      "black": 47,
      "hispanic": 56,
      "mu": 59.5,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 71,
      "white": 64,
      "black": 48,
      "hispanic": 56,
      "mu": 59.75,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 71,
      "white": 64,
      "black": 48,
      "hispanic": 56,
      "mu": 59.75,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 71,
      "white": 64,
      "black": 48,
      "hispanic": 56,
      "mu": 59.75,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 71,
      "white": 64,
      "black": 48,
      "hispanic": 56,
      "mu": 59.75,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 71,
      "white": 64,
      "black": 48,
      "hispanic": 56,
      "mu": 59.75,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 71,
      "white": 64,
      "black": 48,
      "hispanic": 56,
      "mu": 59.75,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 71,
      "white": 64,
      "black": 48,
      "hispanic": 56,
      "mu": 59.75,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 71,
      "white": 64,
      "black": 48,
      "hispanic": 56,
      "mu": 59.75,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 71,
      "white": 64,
      "black": 48,
      "hispanic": 56,
      "mu": 59.75,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 71,
      "white": 64,
      "black": 48,
      "hispanic": 56,
      "mu": 59.75,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 71,
      "white": 64,
      "black": 49,
      "hispanic": 56,
      "mu": 60,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 70,
      "white": 64,
      "black": 49,
      "hispanic": 56,
      "mu": 59.75,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 70,
      "white": 64,
      "black": 49,
      "hispanic": 56,
      "mu": 59.75,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 70,
      "white": 63,
      "black": 49,
      "hispanic": 56,
      "mu": 59.5,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 70,
      "white": 63,
      "black": 49,
      "hispanic": 56,
      "mu": 59.5,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 70,
      "white": 63,
      "black": 49,
      "hispanic": 56,
      "mu": 59.5,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 70,
      "white": 63,
      "black": 49,
      "hispanic": 56,
      "mu": 59.5,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 70,
      "white": 63,
      "black": 49,
      "hispanic": 56,
      "mu": 59.5,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 70,
      "white": 63,
      "black": 49,
      "hispanic": 56,
      "mu": 59.5,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 70,
      "white": 63,
      "black": 49,
      "hispanic": 56,
      "mu": 59.5,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 70,
      "white": 63,
      "black": 50,
      "hispanic": 57,
      "mu": 60,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 70,
      "white": 63,
      "black": 50,
      "hispanic": 57,
      "mu": 60,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 69,
      "white": 63,
      "black": 50,
      "hispanic": 57,
      "mu": 59.75,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 69,
      "white": 63,
      "black": 50,
      "hispanic": 57,
      "mu": 59.75,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 69,
      "white": 63,
      "black": 50,
      "hispanic": 57,
      "mu": 59.75,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 69,
      "white": 63,
      "black": 50,
      "hispanic": 57,
      "mu": 59.75,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 69,
      "white": 63,
      "black": 50,
      "hispanic": 57,
      "mu": 59.75,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 69,
      "white": 63,
      "black": 50,
      "hispanic": 57,
      "mu": 59.75,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 69,
      "white": 63,
      "black": 50,
      "hispanic": 57,
      "mu": 59.75,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 69,
      "white": 63,
      "black": 50,
      "hispanic": 57,
      "mu": 59.75,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 69,
      "white": 63,
      "black": 51,
      "hispanic": 57,
      "mu": 60,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 69,
      "white": 63,
      "black": 51,
      "hispanic": 57,
      "mu": 60,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 69,
      "white": 63,
      "black": 51,
      "hispanic": 57,
      "mu": 60,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 68,
      "white": 63,
      "black": 51,
      "hispanic": 57,
      "mu": 59.75,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 68,
      "white": 63,
      "black": 51,
      "hispanic": 57,
      "mu": 59.75,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 68,
      "white": 63,
      "black": 51,
      "hispanic": 57,
      "mu": 59.75,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 68,
      "white": 63,
      "black": 51,
      "hispanic": 57,
      "mu": 59.75,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 68,
      "white": 63,
      "black": 51,
      "hispanic": 57,
      "mu": 59.75,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 68,
      "white": 63,
      "black": 51,
      "hispanic": 57,
      "mu": 59.75,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 68,
      "white": 63,
      "black": 51,
      "hispanic": 57,
      "mu": 59.75,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 68,
      "white": 63,
      "black": 51,
      "hispanic": 57,
      "mu": 59.75,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 68,
      "white": 63,
      "black": 52,
      "hispanic": 57,
      "mu": 60,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 68,
      "white": 62,
      "black": 52,
      "hispanic": 57,
      "mu": 59.75,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 68,
      "white": 62,
      "black": 52,
      "hispanic": 57,
      "mu": 59.75,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 67,
      "white": 62,
      "black": 52,
      "hispanic": 57,
      "mu": 59.5,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 67,
      "white": 62,
      "black": 52,
      "hispanic": 57,
      "mu": 59.5,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 67,
      "white": 62,
      "black": 52,
      "hispanic": 57,
      "mu": 59.5,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 67,
      "white": 62,
      "black": 52,
      "hispanic": 57,
      "mu": 59.5,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 67,
      "white": 62,
      "black": 52,
      "hispanic": 57,
      "mu": 59.5,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 67,
      "white": 62,
      "black": 52,
      "hispanic": 57,
      "mu": 59.5,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 67,
      "white": 62,
      "black": 52,
      "hispanic": 57,
      "mu": 59.5,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 67,
      "white": 62,
      "black": 53,
      "hispanic": 57,
      "mu": 59.75,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 67,
      "white": 62,
      "black": 53,
      "hispanic": 57,
      "mu": 59.75,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 67,
      "white": 62,
      "black": 53,
      "hispanic": 57,
      "mu": 59.75,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 66,
      "white": 62,
      "black": 53,
      "hispanic": 57,
      "mu": 59.5,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 66,
      "white": 62,
      "black": 53,
      "hispanic": 57,
      "mu": 59.5,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 66,
      "white": 62,
      "black": 53,
      "hispanic": 58,
      "mu": 59.75,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 66,
      "white": 62,
      "black": 53,
      "hispanic": 58,
      "mu": 59.75,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 66,
      "white": 62,
      "black": 53,
      "hispanic": 58,
      "mu": 59.75,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 66,
      "white": 62,
      "black": 53,
      "hispanic": 58,
      "mu": 59.75,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 66,
      "white": 62,
      "black": 53,
      "hispanic": 58,
      "mu": 59.75,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 66,
      "white": 62,
      "black": 53,
      "hispanic": 58,
      "mu": 59.75,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 66,
      "white": 62,
      "black": 54,
      "hispanic": 58,
      "mu": 60,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 66,
      "white": 62,
      "black": 54,
      "hispanic": 58,
      "mu": 60,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 65,
      "white": 62,
      "black": 54,
      "hispanic": 58,
      "mu": 59.75,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 65,
      "white": 62,
      "black": 54,
      "hispanic": 58,
      "mu": 59.75,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 65,
      "white": 62,
      "black": 54,
      "hispanic": 58,
      "mu": 59.75,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 65,
      "white": 62,
      "black": 54,
      "hispanic": 58,
      "mu": 59.75,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 65,
      "white": 61,
      "black": 54,
      "hispanic": 58,
      "mu": 59.5,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 65,
      "white": 61,
      "black": 54,
      "hispanic": 58,
      "mu": 59.5,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 65,
      "white": 61,
      "black": 54,
      "hispanic": 58,
      "mu": 59.5,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 65,
      "white": 61,
      "black": 54,
      "hispanic": 58,
      "mu": 59.5,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 65,
      "white": 61,
      "black": 54,
      "hispanic": 58,
      "mu": 59.5,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 65,
      "white": 61,
      "black": 55,
      "hispanic": 58,
      "mu": 59.75,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 64,
      "white": 61,
      "black": 55,
      "hispanic": 58,
      "mu": 59.5,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 64,
      "white": 61,
      "black": 55,
      "hispanic": 58,
      "mu": 59.5,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 64,
      "white": 61,
      "black": 55,
      "hispanic": 58,
      "mu": 59.5,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 64,
      "white": 61,
      "black": 55,
      "hispanic": 58,
      "mu": 59.5,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 64,
      "white": 61,
      "black": 55,
      "hispanic": 58,
      "mu": 59.5,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 64,
      "white": 61,
      "black": 55,
      "hispanic": 58,
      "mu": 59.5,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 64,
      "white": 61,
      "black": 55,
      "hispanic": 58,
      "mu": 59.5,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 64,
      "white": 61,
      "black": 55,
      "hispanic": 58,
      "mu": 59.5,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 64,
      "white": 61,
      "black": 55,
      "hispanic": 58,
      "mu": 59.5,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 64,
      "white": 61,
      "black": 55,
      "hispanic": 58,
      "mu": 59.5,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 63,
      "white": 61,
      "black": 56,
      "hispanic": 58,
      "mu": 59.5,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 63,
      "white": 61,
      "black": 56,
      "hispanic": 58,
      "mu": 59.5,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 63,
      "white": 61,
      "black": 56,
      "hispanic": 58,
      "mu": 59.5,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 63,
      "white": 61,
      "black": 56,
      "hispanic": 58,
      "mu": 59.5,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 63,
      "white": 61,
      "black": 56,
      "hispanic": 58,
      "mu": 59.5,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 63,
      "white": 61,
      "black": 56,
      "hispanic": 58,
      "mu": 59.5,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 63,
      "white": 61,
      "black": 56,
      "hispanic": 58,
      "mu": 59.5,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 63,
      "white": 61,
      "black": 56,
      "hispanic": 58,
      "mu": 59.5,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 63,
      "white": 61,
      "black": 56,
      "hispanic": 58,
      "mu": 59.5,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 63,
      "white": 60,
      "black": 56,
      "hispanic": 58,
      "mu": 59.25,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 62,
      "white": 60,
      "black": 56,
      "hispanic": 58,
      "mu": 59,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 62,
      "white": 60,
      "black": 56,
      "hispanic": 58,
      "mu": 59,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 62,
      "white": 60,
      "black": 57,
      "hispanic": 58,
      "mu": 59.25,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 62,
      "white": 60,
      "black": 57,
      "hispanic": 58,
      "mu": 59.25,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 62,
      "white": 60,
      "black": 57,
      "hispanic": 59,
      "mu": 59.5,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 62,
      "white": 60,
      "black": 57,
      "hispanic": 59,
      "mu": 59.5,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 62,
      "white": 60,
      "black": 57,
      "hispanic": 59,
      "mu": 59.5,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 62,
      "white": 60,
      "black": 57,
      "hispanic": 59,
      "mu": 59.5,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 62,
      "white": 60,
      "black": 57,
      "hispanic": 59,
      "mu": 59.5,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 61,
      "white": 60,
      "black": 57,
      "hispanic": 59,
      "mu": 59.25,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 61,
      "white": 60,
      "black": 57,
      "hispanic": 59,
      "mu": 59.25,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 61,
      "white": 60,
      "black": 57,
      "hispanic": 59,
      "mu": 59.25,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 61,
      "white": 60,
      "black": 57,
      "hispanic": 59,
      "mu": 59.25,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 61,
      "white": 60,
      "black": 58,
      "hispanic": 59,
      "mu": 59.5,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 61,
      "white": 60,
      "black": 58,
      "hispanic": 59,
      "mu": 59.5,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 61,
      "white": 60,
      "black": 58,
      "hispanic": 59,
      "mu": 59.5,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 61,
      "white": 60,
      "black": 58,
      "hispanic": 59,
      "mu": 59.5,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 61,
      "white": 60,
      "black": 58,
      "hispanic": 59,
      "mu": 59.5,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 60,
      "white": 60,
      "black": 58,
      "hispanic": 59,
      "mu": 59.25,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 60,
      "white": 60,
      "black": 58,
      "hispanic": 59,
      "mu": 59.25,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 60,
      "white": 60,
      "black": 58,
      "hispanic": 59,
      "mu": 59.25,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 60,
      "white": 59,
      "black": 58,
      "hispanic": 59,
      "mu": 59,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 60,
      "white": 59,
      "black": 58,
      "hispanic": 59,
      "mu": 59,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 60,
      "white": 59,
      "black": 58,
      "hispanic": 59,
      "mu": 59,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 60,
      "white": 59,
      "black": 58,
      "hispanic": 59,
      "mu": 59,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 60,
      "white": 59,
      "black": 59,
      "hispanic": 59,
      "mu": 59.25,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 60,
      "white": 59,
      "black": 59,
      "hispanic": 59,
      "mu": 59.25,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 59,
      "white": 59,
      "black": 59,
      "hispanic": 59,
      "mu": 59,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 59,
      "white": 59,
      "black": 59,
      "hispanic": 59,
      "mu": 59,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 59,
      "white": 59,
      "black": 59,
      "hispanic": 59,
      "mu": 59,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 59,
      "white": 59,
      "black": 59,
      "hispanic": 59,
      "mu": 59,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 59,
      "white": 59,
      "black": 59,
      "hispanic": 59,
      "mu": 59,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 59,
      "white": 59,
      "black": 59,
      "hispanic": 59,
      "mu": 59,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 59,
      "white": 59,
      "black": 59,
      "hispanic": 59,
      "mu": 59,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 59,
      "white": 59,
      "black": 59,
      "hispanic": 59,
      "mu": 59,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 59,
      "white": 59,
      "black": 59,
      "hispanic": 59,
      "mu": 59,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 58,
      "white": 59,
      "black": 59,
      "hispanic": 59,
      "mu": 58.75,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 58,
      "white": 59,
      "black": 60,
      "hispanic": 59,
      "mu": 59,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 58,
      "white": 59,
      "black": 60,
      "hispanic": 59,
      "mu": 59,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 58,
      "white": 59,
      "black": 60,
      "hispanic": 59,
      "mu": 59,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 58,
      "white": 59,
      "black": 60,
      "hispanic": 59,
      "mu": 59,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 58,
      "white": 59,
      "black": 60,
      "hispanic": 59,
      "mu": 59,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 58,
      "white": 59,
      "black": 60,
      "hispanic": 59,
      "mu": 59,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 58,
      "white": 58,
      "black": 60,
      "hispanic": 59,
      "mu": 58.75,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 58,
      "white": 58,
      "black": 60,
      "hispanic": 59,
      "mu": 58.75,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 57,
      "white": 58,
      "black": 60,
      "hispanic": 59,
      "mu": 58.5,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 57,
      "white": 58,
      "black": 60,
      "hispanic": 59,
      "mu": 58.5,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 57,
      "white": 58,
      "black": 60,
      "hispanic": 59,
      "mu": 58.5,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 57,
      "white": 58,
      "black": 60,
      "hispanic": 59,
      "mu": 58.5,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 57,
      "white": 58,
      "black": 60,
      "hispanic": 59,
      "mu": 58.5,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 57,
      "white": 58,
      "black": 61,
      "hispanic": 59,
      "mu": 58.75,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 57,
      "white": 58,
      "black": 61,
      "hispanic": 59,
      "mu": 58.75,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 57,
      "white": 58,
      "black": 61,
      "hispanic": 59,
      "mu": 58.75,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 57,
      "white": 58,
      "black": 61,
      "hispanic": 59,
      "mu": 58.75,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 56,
      "white": 58,
      "black": 61,
      "hispanic": 59,
      "mu": 58.5,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 56,
      "white": 58,
      "black": 61,
      "hispanic": 59,
      "mu": 58.5,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 56,
      "white": 58,
      "black": 61,
      "hispanic": 59,
      "mu": 58.5,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 56,
      "white": 58,
      "black": 61,
      "hispanic": 59,
      "mu": 58.5,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 56,
      "white": 58,
      "black": 61,
      "hispanic": 59,
      "mu": 58.5,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 56,
      "white": 58,
      "black": 61,
      "hispanic": 59,
      "mu": 58.5,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 56,
      "white": 58,
      "black": 61,
      "hispanic": 59,
      "mu": 58.5,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 56,
      "white": 58,
      "black": 61,
      "hispanic": 60,
      "mu": 58.75,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 55,
      "white": 58,
      "black": 62,
      "hispanic": 60,
      "mu": 58.75,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 55,
      "white": 57,
      "black": 62,
      "hispanic": 60,
      "mu": 58.5,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 55,
      "white": 57,
      "black": 62,
      "hispanic": 60,
      "mu": 58.5,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 55,
      "white": 57,
      "black": 62,
      "hispanic": 60,
      "mu": 58.5,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 55,
      "white": 57,
      "black": 62,
      "hispanic": 60,
      "mu": 58.5,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 55,
      "white": 57,
      "black": 62,
      "hispanic": 60,
      "mu": 58.5,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 55,
      "white": 57,
      "black": 62,
      "hispanic": 60,
      "mu": 58.5,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 55,
      "white": 57,
      "black": 62,
      "hispanic": 60,
      "mu": 58.5,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 55,
      "white": 57,
      "black": 62,
      "hispanic": 60,
      "mu": 58.5,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 54,
      "white": 57,
      "black": 62,
      "hispanic": 60,
      "mu": 58.25,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 54,
      "white": 57,
      "black": 62,
      "hispanic": 60,
      "mu": 58.25,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 54,
      "white": 57,
      "black": 62,
      "hispanic": 60,
      "mu": 58.25,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 54,
      "white": 57,
      "black": 62,
      "hispanic": 60,
      "mu": 58.25,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 54,
      "white": 57,
      "black": 63,
      "hispanic": 60,
      "mu": 58.5,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 54,
      "white": 57,
      "black": 63,
      "hispanic": 60,
      "mu": 58.5,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 54,
      "white": 57,
      "black": 63,
      "hispanic": 60,
      "mu": 58.5,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 54,
      "white": 57,
      "black": 63,
      "hispanic": 60,
      "mu": 58.5,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 53,
      "white": 57,
      "black": 63,
      "hispanic": 60,
      "mu": 58.25,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 53,
      "white": 57,
      "black": 63,
      "hispanic": 60,
      "mu": 58.25,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 53,
      "white": 57,
      "black": 63,
      "hispanic": 60,
      "mu": 58.25,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 53,
      "white": 56,
      "black": 63,
      "hispanic": 60,
      "mu": 58,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 53,
      "white": 56,
      "black": 63,
      "hispanic": 60,
      "mu": 58,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 53,
      "white": 56,
      "black": 63,
      "hispanic": 60,
      "mu": 58,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 53,
      "white": 56,
      "black": 63,
      "hispanic": 60,
      "mu": 58,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 53,
      "white": 56,
      "black": 63,
      "hispanic": 60,
      "mu": 58,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 52,
      "white": 56,
      "black": 63,
      "hispanic": 60,
      "mu": 57.75,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 52,
      "white": 56,
      "black": 63,
      "hispanic": 60,
      "mu": 57.75,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 52,
      "white": 56,
      "black": 64,
      "hispanic": 60,
      "mu": 58,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 52,
      "white": 56,
      "black": 64,
      "hispanic": 60,
      "mu": 58,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 52,
      "white": 56,
      "black": 64,
      "hispanic": 60,
      "mu": 58,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 52,
      "white": 56,
      "black": 64,
      "hispanic": 60,
      "mu": 58,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 52,
      "white": 56,
      "black": 64,
      "hispanic": 60,
      "mu": 58,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 52,
      "white": 56,
      "black": 64,
      "hispanic": 60,
      "mu": 58,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 52,
      "white": 56,
      "black": 64,
      "hispanic": 60,
      "mu": 58,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 51,
      "white": 56,
      "black": 64,
      "hispanic": 60,
      "mu": 57.75,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 51,
      "white": 56,
      "black": 64,
      "hispanic": 60,
      "mu": 57.75,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 51,
      "white": 56,
      "black": 64,
      "hispanic": 60,
      "mu": 57.75,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 51,
      "white": 56,
      "black": 64,
      "hispanic": 60,
      "mu": 57.75,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 51,
      "white": 55,
      "black": 64,
      "hispanic": 60,
      "mu": 57.5,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
    },
    {
      "asian": 51,
      "white": 55,
      "black": 64,
      "hispanic": 60,
      "mu": 57.5,
      "tradeoff": "LOW: A:630, W:610, B:570, H:590"
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


