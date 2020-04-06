var factors = {

    prompts_test: ["A bank must decide who to give <font color='red'> <b>home loans </b> </font> to. Only 10% of the loans can default and some groups are more likely to default than others, so giving loans to some people may result in less loans for others. <font color='red'><b>How should the loans be allocated?</b> </font>",
        "A local newspaper company is trying to decide how to <font color='red'> <b> divide up the paper routes</b></font>. Some groups of delivery people are faster than others, and if too many papers don't get delivered, customers get angry. Giving more to one delivery group may mean less for others. The icons below show how many routes are given to each group. <font color='red'><b>How should they divide up the routes?</b></font>",
        "A <font color='red'> <b> local courthouse is deciding who to give bail to</b></font>. Their goal is to maintain a constant level of public safety. Some groups are more likely to commit crimes than others. Giving bail to some people may mean not giving bail to others. The icons below show the percentage of each group receiving bail. <font color='red'><b>How should they allocate bail?</b></font>",
        "A corporate recruiter is seeking to <font color='red'> <b> fill a position at their company</b></font>. They have limited recruiting budget, and each group uses different job search services, each with different success rates at delivering qualified applicants. The values below show the number of applicants in each group for a fixed advertising budget. <font color='red'><b>How should they allocate their advertising dollars?</b></font>",
        "Meals on Wheels is tasked with delivering <font color='red'> <b> meals to homebound persons</b></font>. Their time and reseources are limited, and some groups live further away, so delivering to some groups may mean less deliveries to others. The numbers below represent how many meals are given to each group. <font color='red'><b>How should they allocate their time for deliveries?</b></font>",
        "A local hospital has a shortage of <font color='red'> <b>respirators for patients during the COVID-19 outbreak</b></font>. Some patients are more likely to be on respirators for longer than others, so less patients will be able to use one. The numbers below represent the number of patients receiving respirators. <font color='red'><b>How should the hospital allocate their respirators? </b>  </font>"],

    datasets_test: [[
        {
          "asian": 100,
          "white": 98,
          "black": 12,
          "hispanic": 30,
          "mu": 60,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 100,
          "white": 98,
          "black": 12,
          "hispanic": 30,
          "mu": 60,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 100,
          "white": 98,
          "black": 13,
          "hispanic": 30,
          "mu": 60.25,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 100,
          "white": 98,
          "black": 13,
          "hispanic": 31,
          "mu": 60.5,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 100,
          "white": 97,
          "black": 13,
          "hispanic": 31,
          "mu": 60.25,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 100,
          "white": 97,
          "black": 13,
          "hispanic": 31,
          "mu": 60.25,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 100,
          "white": 97,
          "black": 13,
          "hispanic": 31,
          "mu": 60.25,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 100,
          "white": 97,
          "black": 13,
          "hispanic": 31,
          "mu": 60.25,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 99,
          "white": 97,
          "black": 13,
          "hispanic": 31,
          "mu": 60,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 99,
          "white": 97,
          "black": 14,
          "hispanic": 31,
          "mu": 60.25,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 99,
          "white": 97,
          "black": 14,
          "hispanic": 31,
          "mu": 60.25,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 99,
          "white": 97,
          "black": 14,
          "hispanic": 31,
          "mu": 60.25,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 99,
          "white": 97,
          "black": 14,
          "hispanic": 31,
          "mu": 60.25,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 99,
          "white": 97,
          "black": 14,
          "hispanic": 31,
          "mu": 60.25,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 99,
          "white": 97,
          "black": 14,
          "hispanic": 32,
          "mu": 60.5,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 99,
          "white": 96,
          "black": 15,
          "hispanic": 32,
          "mu": 60.5,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 99,
          "white": 96,
          "black": 15,
          "hispanic": 32,
          "mu": 60.5,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 99,
          "white": 96,
          "black": 15,
          "hispanic": 32,
          "mu": 60.5,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 99,
          "white": 96,
          "black": 15,
          "hispanic": 32,
          "mu": 60.5,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 99,
          "white": 96,
          "black": 15,
          "hispanic": 32,
          "mu": 60.5,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 99,
          "white": 96,
          "black": 15,
          "hispanic": 32,
          "mu": 60.5,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 99,
          "white": 96,
          "black": 16,
          "hispanic": 32,
          "mu": 60.75,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 99,
          "white": 96,
          "black": 16,
          "hispanic": 32,
          "mu": 60.75,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 99,
          "white": 95,
          "black": 16,
          "hispanic": 33,
          "mu": 60.75,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 99,
          "white": 95,
          "black": 16,
          "hispanic": 33,
          "mu": 60.75,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 99,
          "white": 95,
          "black": 16,
          "hispanic": 33,
          "mu": 60.75,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 99,
          "white": 95,
          "black": 16,
          "hispanic": 33,
          "mu": 60.75,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 99,
          "white": 95,
          "black": 17,
          "hispanic": 33,
          "mu": 61,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 99,
          "white": 95,
          "black": 17,
          "hispanic": 33,
          "mu": 61,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 99,
          "white": 95,
          "black": 17,
          "hispanic": 33,
          "mu": 61,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 98,
          "white": 94,
          "black": 17,
          "hispanic": 33,
          "mu": 60.5,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 98,
          "white": 94,
          "black": 17,
          "hispanic": 34,
          "mu": 60.75,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 98,
          "white": 94,
          "black": 18,
          "hispanic": 34,
          "mu": 61,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 98,
          "white": 94,
          "black": 18,
          "hispanic": 34,
          "mu": 61,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 98,
          "white": 94,
          "black": 18,
          "hispanic": 34,
          "mu": 61,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 98,
          "white": 94,
          "black": 18,
          "hispanic": 34,
          "mu": 61,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 98,
          "white": 94,
          "black": 18,
          "hispanic": 34,
          "mu": 61,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 98,
          "white": 93,
          "black": 19,
          "hispanic": 34,
          "mu": 61,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 98,
          "white": 93,
          "black": 19,
          "hispanic": 34,
          "mu": 61,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 98,
          "white": 93,
          "black": 19,
          "hispanic": 35,
          "mu": 61.25,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 98,
          "white": 93,
          "black": 19,
          "hispanic": 35,
          "mu": 61.25,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 98,
          "white": 93,
          "black": 20,
          "hispanic": 35,
          "mu": 61.5,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 97,
          "white": 92,
          "black": 20,
          "hispanic": 35,
          "mu": 61,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 97,
          "white": 92,
          "black": 20,
          "hispanic": 35,
          "mu": 61,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 97,
          "white": 92,
          "black": 20,
          "hispanic": 35,
          "mu": 61,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 97,
          "white": 92,
          "black": 20,
          "hispanic": 35,
          "mu": 61,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 97,
          "white": 92,
          "black": 21,
          "hispanic": 36,
          "mu": 61.5,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 97,
          "white": 92,
          "black": 21,
          "hispanic": 36,
          "mu": 61.5,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 97,
          "white": 91,
          "black": 21,
          "hispanic": 36,
          "mu": 61.25,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 97,
          "white": 91,
          "black": 21,
          "hispanic": 36,
          "mu": 61.25,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 96,
          "white": 91,
          "black": 22,
          "hispanic": 36,
          "mu": 61.25,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 96,
          "white": 91,
          "black": 22,
          "hispanic": 36,
          "mu": 61.25,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 96,
          "white": 90,
          "black": 22,
          "hispanic": 36,
          "mu": 61,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 96,
          "white": 90,
          "black": 22,
          "hispanic": 37,
          "mu": 61.25,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 96,
          "white": 90,
          "black": 23,
          "hispanic": 37,
          "mu": 61.5,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 96,
          "white": 90,
          "black": 23,
          "hispanic": 37,
          "mu": 61.5,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 96,
          "white": 90,
          "black": 23,
          "hispanic": 37,
          "mu": 61.5,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 95,
          "white": 89,
          "black": 23,
          "hispanic": 37,
          "mu": 61,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 95,
          "white": 89,
          "black": 24,
          "hispanic": 37,
          "mu": 61.25,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 95,
          "white": 89,
          "black": 24,
          "hispanic": 37,
          "mu": 61.25,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 95,
          "white": 89,
          "black": 24,
          "hispanic": 38,
          "mu": 61.5,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 95,
          "white": 88,
          "black": 24,
          "hispanic": 38,
          "mu": 61.25,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 94,
          "white": 88,
          "black": 25,
          "hispanic": 38,
          "mu": 61.25,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 94,
          "white": 88,
          "black": 25,
          "hispanic": 38,
          "mu": 61.25,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 94,
          "white": 87,
          "black": 25,
          "hispanic": 38,
          "mu": 61,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 94,
          "white": 87,
          "black": 25,
          "hispanic": 38,
          "mu": 61,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 94,
          "white": 87,
          "black": 26,
          "hispanic": 38,
          "mu": 61.25,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 93,
          "white": 87,
          "black": 26,
          "hispanic": 39,
          "mu": 61.25,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 93,
          "white": 86,
          "black": 26,
          "hispanic": 39,
          "mu": 61,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 93,
          "white": 86,
          "black": 26,
          "hispanic": 39,
          "mu": 61,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 93,
          "white": 86,
          "black": 27,
          "hispanic": 39,
          "mu": 61.25,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 92,
          "white": 85,
          "black": 27,
          "hispanic": 39,
          "mu": 60.75,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 92,
          "white": 85,
          "black": 27,
          "hispanic": 39,
          "mu": 60.75,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 92,
          "white": 85,
          "black": 27,
          "hispanic": 39,
          "mu": 60.75,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 92,
          "white": 85,
          "black": 28,
          "hispanic": 39,
          "mu": 61,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 91,
          "white": 84,
          "black": 28,
          "hispanic": 40,
          "mu": 60.75,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 91,
          "white": 84,
          "black": 28,
          "hispanic": 40,
          "mu": 60.75,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 91,
          "white": 84,
          "black": 28,
          "hispanic": 40,
          "mu": 60.75,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 90,
          "white": 83,
          "black": 29,
          "hispanic": 40,
          "mu": 60.5,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 90,
          "white": 83,
          "black": 29,
          "hispanic": 40,
          "mu": 60.5,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 90,
          "white": 83,
          "black": 29,
          "hispanic": 40,
          "mu": 60.5,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 89,
          "white": 82,
          "black": 29,
          "hispanic": 40,
          "mu": 60,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 89,
          "white": 82,
          "black": 30,
          "hispanic": 40,
          "mu": 60.25,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 89,
          "white": 81,
          "black": 30,
          "hispanic": 41,
          "mu": 60.25,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 88,
          "white": 81,
          "black": 30,
          "hispanic": 41,
          "mu": 60,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 88,
          "white": 81,
          "black": 30,
          "hispanic": 41,
          "mu": 60,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 88,
          "white": 80,
          "black": 31,
          "hispanic": 41,
          "mu": 60,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 87,
          "white": 80,
          "black": 31,
          "hispanic": 41,
          "mu": 59.75,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 87,
          "white": 79,
          "black": 31,
          "hispanic": 41,
          "mu": 59.5,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 86,
          "white": 79,
          "black": 31,
          "hispanic": 41,
          "mu": 59.25,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 86,
          "white": 79,
          "black": 32,
          "hispanic": 41,
          "mu": 59.5,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 86,
          "white": 78,
          "black": 32,
          "hispanic": 41,
          "mu": 59.25,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 85,
          "white": 78,
          "black": 32,
          "hispanic": 42,
          "mu": 59.25,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 85,
          "white": 77,
          "black": 32,
          "hispanic": 42,
          "mu": 59,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 84,
          "white": 77,
          "black": 33,
          "hispanic": 42,
          "mu": 59,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 84,
          "white": 77,
          "black": 33,
          "hispanic": 42,
          "mu": 59,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 83,
          "white": 76,
          "black": 33,
          "hispanic": 42,
          "mu": 58.5,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 83,
          "white": 76,
          "black": 33,
          "hispanic": 42,
          "mu": 58.5,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 82,
          "white": 75,
          "black": 34,
          "hispanic": 42,
          "mu": 58.25,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 82,
          "white": 75,
          "black": 34,
          "hispanic": 42,
          "mu": 58.25,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 81,
          "white": 74,
          "black": 34,
          "hispanic": 42,
          "mu": 57.75,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 81,
          "white": 74,
          "black": 34,
          "hispanic": 42,
          "mu": 57.75,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 80,
          "white": 73,
          "black": 35,
          "hispanic": 42,
          "mu": 57.5,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 80,
          "white": 73,
          "black": 35,
          "hispanic": 43,
          "mu": 57.75,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 79,
          "white": 72,
          "black": 35,
          "hispanic": 43,
          "mu": 57.25,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 79,
          "white": 72,
          "black": 35,
          "hispanic": 43,
          "mu": 57.25,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 78,
          "white": 71,
          "black": 36,
          "hispanic": 43,
          "mu": 57,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 77,
          "white": 71,
          "black": 36,
          "hispanic": 43,
          "mu": 56.75,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 77,
          "white": 70,
          "black": 36,
          "hispanic": 43,
          "mu": 56.5,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 76,
          "white": 70,
          "black": 36,
          "hispanic": 43,
          "mu": 56.25,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 75,
          "white": 69,
          "black": 36,
          "hispanic": 43,
          "mu": 55.75,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 75,
          "white": 69,
          "black": 37,
          "hispanic": 43,
          "mu": 56,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 74,
          "white": 68,
          "black": 37,
          "hispanic": 43,
          "mu": 55.5,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 74,
          "white": 68,
          "black": 37,
          "hispanic": 43,
          "mu": 55.5,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 73,
          "white": 67,
          "black": 37,
          "hispanic": 43,
          "mu": 55,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 72,
          "white": 66,
          "black": 37,
          "hispanic": 43,
          "mu": 54.5,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 72,
          "white": 66,
          "black": 38,
          "hispanic": 43,
          "mu": 54.75,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 71,
          "white": 65,
          "black": 38,
          "hispanic": 43,
          "mu": 54.25,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 70,
          "white": 65,
          "black": 38,
          "hispanic": 43,
          "mu": 54,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 69,
          "white": 64,
          "black": 38,
          "hispanic": 43,
          "mu": 53.5,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 69,
          "white": 63,
          "black": 38,
          "hispanic": 43,
          "mu": 53.25,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 68,
          "white": 63,
          "black": 39,
          "hispanic": 43,
          "mu": 53.25,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 67,
          "white": 62,
          "black": 39,
          "hispanic": 44,
          "mu": 53,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 66,
          "white": 62,
          "black": 39,
          "hispanic": 44,
          "mu": 52.75,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 66,
          "white": 61,
          "black": 39,
          "hispanic": 44,
          "mu": 52.5,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 65,
          "white": 60,
          "black": 39,
          "hispanic": 44,
          "mu": 52,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 64,
          "white": 60,
          "black": 40,
          "hispanic": 44,
          "mu": 52,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 63,
          "white": 59,
          "black": 40,
          "hispanic": 44,
          "mu": 51.5,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 62,
          "white": 58,
          "black": 40,
          "hispanic": 44,
          "mu": 51,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 62,
          "white": 58,
          "black": 40,
          "hispanic": 44,
          "mu": 51,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 61,
          "white": 57,
          "black": 40,
          "hispanic": 44,
          "mu": 50.5,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 60,
          "white": 56,
          "black": 40,
          "hispanic": 44,
          "mu": 50,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 59,
          "white": 56,
          "black": 41,
          "hispanic": 44,
          "mu": 50,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 58,
          "white": 55,
          "black": 41,
          "hispanic": 44,
          "mu": 49.5,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 57,
          "white": 54,
          "black": 41,
          "hispanic": 44,
          "mu": 49,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 57,
          "white": 54,
          "black": 41,
          "hispanic": 44,
          "mu": 49,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 56,
          "white": 53,
          "black": 41,
          "hispanic": 44,
          "mu": 48.5,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 55,
          "white": 52,
          "black": 41,
          "hispanic": 44,
          "mu": 48,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 54,
          "white": 52,
          "black": 42,
          "hispanic": 44,
          "mu": 48,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 53,
          "white": 51,
          "black": 42,
          "hispanic": 44,
          "mu": 47.5,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 52,
          "white": 50,
          "black": 42,
          "hispanic": 44,
          "mu": 47,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 51,
          "white": 50,
          "black": 42,
          "hispanic": 44,
          "mu": 46.75,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 50,
          "white": 49,
          "black": 42,
          "hispanic": 44,
          "mu": 46.25,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 50,
          "white": 48,
          "black": 42,
          "hispanic": 44,
          "mu": 46,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 49,
          "white": 48,
          "black": 42,
          "hispanic": 43,
          "mu": 45.5,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 48,
          "white": 47,
          "black": 43,
          "hispanic": 43,
          "mu": 45.25,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 47,
          "white": 46,
          "black": 43,
          "hispanic": 43,
          "mu": 44.75,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 46,
          "white": 45,
          "black": 43,
          "hispanic": 43,
          "mu": 44.25,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 45,
          "white": 45,
          "black": 43,
          "hispanic": 43,
          "mu": 44,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 44,
          "white": 44,
          "black": 43,
          "hispanic": 43,
          "mu": 43.5,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 43,
          "white": 43,
          "black": 43,
          "hispanic": 43,
          "mu": 43,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 42,
          "white": 43,
          "black": 43,
          "hispanic": 43,
          "mu": 42.75,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 41,
          "white": 42,
          "black": 44,
          "hispanic": 43,
          "mu": 42.5,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 41,
          "white": 41,
          "black": 44,
          "hispanic": 43,
          "mu": 42.25,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 40,
          "white": 40,
          "black": 44,
          "hispanic": 43,
          "mu": 41.75,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 39,
          "white": 40,
          "black": 44,
          "hispanic": 43,
          "mu": 41.5,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 38,
          "white": 39,
          "black": 44,
          "hispanic": 43,
          "mu": 41,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 37,
          "white": 38,
          "black": 44,
          "hispanic": 43,
          "mu": 40.5,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 36,
          "white": 38,
          "black": 44,
          "hispanic": 43,
          "mu": 40.25,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 35,
          "white": 37,
          "black": 44,
          "hispanic": 43,
          "mu": 39.75,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 34,
          "white": 36,
          "black": 44,
          "hispanic": 43,
          "mu": 39.25,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 34,
          "white": 36,
          "black": 45,
          "hispanic": 43,
          "mu": 39.5,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 33,
          "white": 35,
          "black": 45,
          "hispanic": 43,
          "mu": 39,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 32,
          "white": 34,
          "black": 45,
          "hispanic": 43,
          "mu": 38.5,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 31,
          "white": 33,
          "black": 45,
          "hispanic": 42,
          "mu": 37.75,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 30,
          "white": 33,
          "black": 45,
          "hispanic": 42,
          "mu": 37.5,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 29,
          "white": 32,
          "black": 45,
          "hispanic": 42,
          "mu": 37,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 29,
          "white": 31,
          "black": 45,
          "hispanic": 42,
          "mu": 36.75,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 28,
          "white": 31,
          "black": 45,
          "hispanic": 42,
          "mu": 36.5,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 27,
          "white": 30,
          "black": 45,
          "hispanic": 42,
          "mu": 36,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 26,
          "white": 29,
          "black": 45,
          "hispanic": 42,
          "mu": 35.5,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 26,
          "white": 29,
          "black": 45,
          "hispanic": 42,
          "mu": 35.5,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 25,
          "white": 28,
          "black": 46,
          "hispanic": 42,
          "mu": 35.25,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 24,
          "white": 28,
          "black": 46,
          "hispanic": 42,
          "mu": 35,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 23,
          "white": 27,
          "black": 46,
          "hispanic": 42,
          "mu": 34.5,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 23,
          "white": 26,
          "black": 46,
          "hispanic": 42,
          "mu": 34.25,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 22,
          "white": 26,
          "black": 46,
          "hispanic": 42,
          "mu": 34,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 21,
          "white": 25,
          "black": 46,
          "hispanic": 42,
          "mu": 33.5,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 20,
          "white": 24,
          "black": 46,
          "hispanic": 41,
          "mu": 32.75,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 20,
          "white": 24,
          "black": 46,
          "hispanic": 41,
          "mu": 32.75,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 19,
          "white": 23,
          "black": 46,
          "hispanic": 41,
          "mu": 32.25,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 18,
          "white": 23,
          "black": 46,
          "hispanic": 41,
          "mu": 32,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 18,
          "white": 22,
          "black": 46,
          "hispanic": 41,
          "mu": 31.75,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 17,
          "white": 22,
          "black": 47,
          "hispanic": 41,
          "mu": 31.75,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 17,
          "white": 21,
          "black": 47,
          "hispanic": 41,
          "mu": 31.5,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 16,
          "white": 20,
          "black": 47,
          "hispanic": 41,
          "mu": 31,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 15,
          "white": 20,
          "black": 47,
          "hispanic": 41,
          "mu": 30.75,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 15,
          "white": 19,
          "black": 47,
          "hispanic": 41,
          "mu": 30.5,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 14,
          "white": 19,
          "black": 47,
          "hispanic": 41,
          "mu": 30.25,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 14,
          "white": 18,
          "black": 47,
          "hispanic": 40,
          "mu": 29.75,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 13,
          "white": 18,
          "black": 47,
          "hispanic": 40,
          "mu": 29.5,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 13,
          "white": 17,
          "black": 47,
          "hispanic": 40,
          "mu": 29.25,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 12,
          "white": 17,
          "black": 47,
          "hispanic": 40,
          "mu": 29,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 12,
          "white": 16,
          "black": 47,
          "hispanic": 40,
          "mu": 28.75,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 11,
          "white": 16,
          "black": 47,
          "hispanic": 40,
          "mu": 28.5,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 11,
          "white": 15,
          "black": 47,
          "hispanic": 40,
          "mu": 28.25,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 10,
          "white": 15,
          "black": 47,
          "hispanic": 40,
          "mu": 28,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 10,
          "white": 15,
          "black": 48,
          "hispanic": 40,
          "mu": 28.25,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 10,
          "white": 14,
          "black": 48,
          "hispanic": 40,
          "mu": 28,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 9,
          "white": 14,
          "black": 48,
          "hispanic": 40,
          "mu": 27.75,
          "type": "ALTERED(-50,150)"
        },
        {
          "asian": 9,
          "white": 13,
          "black": 48,
          "hispanic": 39,
          "mu": 27.25,
          "type": "ALTERED(-50,150)"
        }
      ],
      [
        {
          "asian": 81,
          "white": 79,
          "black": 21,
          "hispanic": 50,
          "mu": 57.75,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 81,
          "white": 79,
          "black": 21,
          "hispanic": 50,
          "mu": 57.75,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 81,
          "white": 79,
          "black": 21,
          "hispanic": 50,
          "mu": 57.75,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 81,
          "white": 79,
          "black": 22,
          "hispanic": 51,
          "mu": 58.25,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 81,
          "white": 78,
          "black": 22,
          "hispanic": 51,
          "mu": 58,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 81,
          "white": 78,
          "black": 22,
          "hispanic": 51,
          "mu": 58,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 81,
          "white": 78,
          "black": 22,
          "hispanic": 51,
          "mu": 58,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 81,
          "white": 78,
          "black": 22,
          "hispanic": 51,
          "mu": 58,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 81,
          "white": 78,
          "black": 23,
          "hispanic": 51,
          "mu": 58.25,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 81,
          "white": 78,
          "black": 23,
          "hispanic": 51,
          "mu": 58.25,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 81,
          "white": 78,
          "black": 23,
          "hispanic": 51,
          "mu": 58.25,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 81,
          "white": 78,
          "black": 23,
          "hispanic": 51,
          "mu": 58.25,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 81,
          "white": 78,
          "black": 23,
          "hispanic": 51,
          "mu": 58.25,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 80,
          "white": 78,
          "black": 24,
          "hispanic": 51,
          "mu": 58.25,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 80,
          "white": 78,
          "black": 24,
          "hispanic": 51,
          "mu": 58.25,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 80,
          "white": 78,
          "black": 24,
          "hispanic": 52,
          "mu": 58.5,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 80,
          "white": 78,
          "black": 24,
          "hispanic": 52,
          "mu": 58.5,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 80,
          "white": 77,
          "black": 24,
          "hispanic": 52,
          "mu": 58.25,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 80,
          "white": 77,
          "black": 25,
          "hispanic": 52,
          "mu": 58.5,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 80,
          "white": 77,
          "black": 25,
          "hispanic": 52,
          "mu": 58.5,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 80,
          "white": 77,
          "black": 25,
          "hispanic": 52,
          "mu": 58.5,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 80,
          "white": 77,
          "black": 25,
          "hispanic": 52,
          "mu": 58.5,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 80,
          "white": 77,
          "black": 25,
          "hispanic": 52,
          "mu": 58.5,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 80,
          "white": 77,
          "black": 26,
          "hispanic": 52,
          "mu": 58.75,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 79,
          "white": 77,
          "black": 26,
          "hispanic": 52,
          "mu": 58.5,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 79,
          "white": 77,
          "black": 26,
          "hispanic": 52,
          "mu": 58.5,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 79,
          "white": 77,
          "black": 26,
          "hispanic": 52,
          "mu": 58.5,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 79,
          "white": 77,
          "black": 27,
          "hispanic": 52,
          "mu": 58.75,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 79,
          "white": 77,
          "black": 27,
          "hispanic": 52,
          "mu": 58.75,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 79,
          "white": 76,
          "black": 27,
          "hispanic": 53,
          "mu": 58.75,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 79,
          "white": 76,
          "black": 27,
          "hispanic": 53,
          "mu": 58.75,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 79,
          "white": 76,
          "black": 27,
          "hispanic": 53,
          "mu": 58.75,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 79,
          "white": 76,
          "black": 28,
          "hispanic": 53,
          "mu": 59,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 79,
          "white": 76,
          "black": 28,
          "hispanic": 53,
          "mu": 59,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 79,
          "white": 76,
          "black": 28,
          "hispanic": 53,
          "mu": 59,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 78,
          "white": 76,
          "black": 28,
          "hispanic": 53,
          "mu": 58.75,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 78,
          "white": 76,
          "black": 28,
          "hispanic": 53,
          "mu": 58.75,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 78,
          "white": 76,
          "black": 29,
          "hispanic": 53,
          "mu": 59,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 78,
          "white": 76,
          "black": 29,
          "hispanic": 53,
          "mu": 59,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 78,
          "white": 76,
          "black": 29,
          "hispanic": 53,
          "mu": 59,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 78,
          "white": 76,
          "black": 29,
          "hispanic": 53,
          "mu": 59,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 78,
          "white": 75,
          "black": 29,
          "hispanic": 53,
          "mu": 58.75,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 78,
          "white": 75,
          "black": 30,
          "hispanic": 53,
          "mu": 59,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 78,
          "white": 75,
          "black": 30,
          "hispanic": 53,
          "mu": 59,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 77,
          "white": 75,
          "black": 30,
          "hispanic": 54,
          "mu": 59,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 77,
          "white": 75,
          "black": 30,
          "hispanic": 54,
          "mu": 59,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 77,
          "white": 75,
          "black": 31,
          "hispanic": 54,
          "mu": 59.25,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 77,
          "white": 75,
          "black": 31,
          "hispanic": 54,
          "mu": 59.25,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 77,
          "white": 75,
          "black": 31,
          "hispanic": 54,
          "mu": 59.25,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 77,
          "white": 75,
          "black": 31,
          "hispanic": 54,
          "mu": 59.25,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 77,
          "white": 75,
          "black": 31,
          "hispanic": 54,
          "mu": 59.25,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 77,
          "white": 74,
          "black": 32,
          "hispanic": 54,
          "mu": 59.25,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 77,
          "white": 74,
          "black": 32,
          "hispanic": 54,
          "mu": 59.25,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 76,
          "white": 74,
          "black": 32,
          "hispanic": 54,
          "mu": 59,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 76,
          "white": 74,
          "black": 32,
          "hispanic": 54,
          "mu": 59,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 76,
          "white": 74,
          "black": 32,
          "hispanic": 54,
          "mu": 59,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 76,
          "white": 74,
          "black": 33,
          "hispanic": 54,
          "mu": 59.25,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 76,
          "white": 74,
          "black": 33,
          "hispanic": 54,
          "mu": 59.25,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 76,
          "white": 74,
          "black": 33,
          "hispanic": 54,
          "mu": 59.25,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 76,
          "white": 74,
          "black": 33,
          "hispanic": 54,
          "mu": 59.25,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 76,
          "white": 74,
          "black": 34,
          "hispanic": 54,
          "mu": 59.5,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 76,
          "white": 73,
          "black": 34,
          "hispanic": 54,
          "mu": 59.25,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 75,
          "white": 73,
          "black": 34,
          "hispanic": 54,
          "mu": 59,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 75,
          "white": 73,
          "black": 34,
          "hispanic": 55,
          "mu": 59.25,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 75,
          "white": 73,
          "black": 34,
          "hispanic": 55,
          "mu": 59.25,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 75,
          "white": 73,
          "black": 35,
          "hispanic": 55,
          "mu": 59.5,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 75,
          "white": 73,
          "black": 35,
          "hispanic": 55,
          "mu": 59.5,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 75,
          "white": 73,
          "black": 35,
          "hispanic": 55,
          "mu": 59.5,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 75,
          "white": 73,
          "black": 35,
          "hispanic": 55,
          "mu": 59.5,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 75,
          "white": 73,
          "black": 35,
          "hispanic": 55,
          "mu": 59.5,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 74,
          "white": 72,
          "black": 36,
          "hispanic": 55,
          "mu": 59.25,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 74,
          "white": 72,
          "black": 36,
          "hispanic": 55,
          "mu": 59.25,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 74,
          "white": 72,
          "black": 36,
          "hispanic": 55,
          "mu": 59.25,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 74,
          "white": 72,
          "black": 36,
          "hispanic": 55,
          "mu": 59.25,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 74,
          "white": 72,
          "black": 37,
          "hispanic": 55,
          "mu": 59.5,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 74,
          "white": 72,
          "black": 37,
          "hispanic": 55,
          "mu": 59.5,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 74,
          "white": 72,
          "black": 37,
          "hispanic": 55,
          "mu": 59.5,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 73,
          "white": 72,
          "black": 37,
          "hispanic": 55,
          "mu": 59.25,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 73,
          "white": 71,
          "black": 37,
          "hispanic": 55,
          "mu": 59,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 73,
          "white": 71,
          "black": 38,
          "hispanic": 55,
          "mu": 59.25,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 73,
          "white": 71,
          "black": 38,
          "hispanic": 55,
          "mu": 59.25,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 73,
          "white": 71,
          "black": 38,
          "hispanic": 55,
          "mu": 59.25,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 73,
          "white": 71,
          "black": 38,
          "hispanic": 55,
          "mu": 59.25,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 73,
          "white": 71,
          "black": 38,
          "hispanic": 55,
          "mu": 59.25,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 73,
          "white": 71,
          "black": 39,
          "hispanic": 55,
          "mu": 59.5,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 72,
          "white": 71,
          "black": 39,
          "hispanic": 55,
          "mu": 59.25,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 72,
          "white": 70,
          "black": 39,
          "hispanic": 55,
          "mu": 59,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 72,
          "white": 70,
          "black": 39,
          "hispanic": 55,
          "mu": 59,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 72,
          "white": 70,
          "black": 40,
          "hispanic": 55,
          "mu": 59.25,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 72,
          "white": 70,
          "black": 40,
          "hispanic": 56,
          "mu": 59.5,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 72,
          "white": 70,
          "black": 40,
          "hispanic": 56,
          "mu": 59.5,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 72,
          "white": 70,
          "black": 40,
          "hispanic": 56,
          "mu": 59.5,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 71,
          "white": 70,
          "black": 40,
          "hispanic": 56,
          "mu": 59.25,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 71,
          "white": 70,
          "black": 41,
          "hispanic": 56,
          "mu": 59.5,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 71,
          "white": 69,
          "black": 41,
          "hispanic": 56,
          "mu": 59.25,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 71,
          "white": 69,
          "black": 41,
          "hispanic": 56,
          "mu": 59.25,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 71,
          "white": 69,
          "black": 41,
          "hispanic": 56,
          "mu": 59.25,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 71,
          "white": 69,
          "black": 41,
          "hispanic": 56,
          "mu": 59.25,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 70,
          "white": 69,
          "black": 42,
          "hispanic": 56,
          "mu": 59.25,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 70,
          "white": 69,
          "black": 42,
          "hispanic": 56,
          "mu": 59.25,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 70,
          "white": 69,
          "black": 42,
          "hispanic": 56,
          "mu": 59.25,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 70,
          "white": 68,
          "black": 42,
          "hispanic": 56,
          "mu": 59,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 70,
          "white": 68,
          "black": 42,
          "hispanic": 56,
          "mu": 59,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 70,
          "white": 68,
          "black": 43,
          "hispanic": 56,
          "mu": 59.25,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 70,
          "white": 68,
          "black": 43,
          "hispanic": 56,
          "mu": 59.25,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 69,
          "white": 68,
          "black": 43,
          "hispanic": 56,
          "mu": 59,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 69,
          "white": 68,
          "black": 43,
          "hispanic": 56,
          "mu": 59,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 69,
          "white": 68,
          "black": 43,
          "hispanic": 56,
          "mu": 59,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 69,
          "white": 68,
          "black": 44,
          "hispanic": 56,
          "mu": 59.25,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 69,
          "white": 67,
          "black": 44,
          "hispanic": 56,
          "mu": 59,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 69,
          "white": 67,
          "black": 44,
          "hispanic": 56,
          "mu": 59,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 68,
          "white": 67,
          "black": 44,
          "hispanic": 56,
          "mu": 58.75,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 68,
          "white": 67,
          "black": 44,
          "hispanic": 56,
          "mu": 58.75,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 68,
          "white": 67,
          "black": 45,
          "hispanic": 56,
          "mu": 59,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 68,
          "white": 67,
          "black": 45,
          "hispanic": 56,
          "mu": 59,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 68,
          "white": 66,
          "black": 45,
          "hispanic": 56,
          "mu": 58.75,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 68,
          "white": 66,
          "black": 45,
          "hispanic": 56,
          "mu": 58.75,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 67,
          "white": 66,
          "black": 45,
          "hispanic": 56,
          "mu": 58.5,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 67,
          "white": 66,
          "black": 46,
          "hispanic": 56,
          "mu": 58.75,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 67,
          "white": 66,
          "black": 46,
          "hispanic": 56,
          "mu": 58.75,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 67,
          "white": 66,
          "black": 46,
          "hispanic": 56,
          "mu": 58.75,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 67,
          "white": 66,
          "black": 46,
          "hispanic": 56,
          "mu": 58.75,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 67,
          "white": 65,
          "black": 46,
          "hispanic": 56,
          "mu": 58.5,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 66,
          "white": 65,
          "black": 47,
          "hispanic": 56,
          "mu": 58.5,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 66,
          "white": 65,
          "black": 47,
          "hispanic": 56,
          "mu": 58.5,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 66,
          "white": 65,
          "black": 47,
          "hispanic": 56,
          "mu": 58.5,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 66,
          "white": 65,
          "black": 47,
          "hispanic": 56,
          "mu": 58.5,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 66,
          "white": 65,
          "black": 47,
          "hispanic": 56,
          "mu": 58.5,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 66,
          "white": 64,
          "black": 48,
          "hispanic": 56,
          "mu": 58.5,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 65,
          "white": 64,
          "black": 48,
          "hispanic": 56,
          "mu": 58.25,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 65,
          "white": 64,
          "black": 48,
          "hispanic": 56,
          "mu": 58.25,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 65,
          "white": 64,
          "black": 48,
          "hispanic": 56,
          "mu": 58.25,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 65,
          "white": 64,
          "black": 48,
          "hispanic": 56,
          "mu": 58.25,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 65,
          "white": 64,
          "black": 49,
          "hispanic": 56,
          "mu": 58.5,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 64,
          "white": 64,
          "black": 49,
          "hispanic": 56,
          "mu": 58.25,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 64,
          "white": 63,
          "black": 49,
          "hispanic": 56,
          "mu": 58,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 64,
          "white": 63,
          "black": 49,
          "hispanic": 56,
          "mu": 58,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 64,
          "white": 63,
          "black": 49,
          "hispanic": 56,
          "mu": 58,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 64,
          "white": 63,
          "black": 50,
          "hispanic": 56,
          "mu": 58.25,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 63,
          "white": 63,
          "black": 50,
          "hispanic": 56,
          "mu": 58,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 63,
          "white": 63,
          "black": 50,
          "hispanic": 56,
          "mu": 58,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 63,
          "white": 62,
          "black": 50,
          "hispanic": 56,
          "mu": 57.75,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 63,
          "white": 62,
          "black": 50,
          "hispanic": 56,
          "mu": 57.75,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 63,
          "white": 62,
          "black": 51,
          "hispanic": 56,
          "mu": 58,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 63,
          "white": 62,
          "black": 51,
          "hispanic": 56,
          "mu": 58,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 62,
          "white": 62,
          "black": 51,
          "hispanic": 56,
          "mu": 57.75,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 62,
          "white": 61,
          "black": 51,
          "hispanic": 56,
          "mu": 57.5,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 62,
          "white": 61,
          "black": 51,
          "hispanic": 56,
          "mu": 57.5,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 62,
          "white": 61,
          "black": 51,
          "hispanic": 56,
          "mu": 57.5,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 62,
          "white": 61,
          "black": 52,
          "hispanic": 56,
          "mu": 57.75,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 61,
          "white": 61,
          "black": 52,
          "hispanic": 56,
          "mu": 57.5,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 61,
          "white": 61,
          "black": 52,
          "hispanic": 56,
          "mu": 57.5,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 61,
          "white": 60,
          "black": 52,
          "hispanic": 56,
          "mu": 57.25,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 61,
          "white": 60,
          "black": 52,
          "hispanic": 56,
          "mu": 57.25,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 61,
          "white": 60,
          "black": 53,
          "hispanic": 56,
          "mu": 57.5,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 60,
          "white": 60,
          "black": 53,
          "hispanic": 56,
          "mu": 57.25,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 60,
          "white": 60,
          "black": 53,
          "hispanic": 56,
          "mu": 57.25,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 60,
          "white": 60,
          "black": 53,
          "hispanic": 56,
          "mu": 57.25,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 60,
          "white": 59,
          "black": 53,
          "hispanic": 56,
          "mu": 57,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 60,
          "white": 59,
          "black": 53,
          "hispanic": 56,
          "mu": 57,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 59,
          "white": 59,
          "black": 54,
          "hispanic": 56,
          "mu": 57,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 59,
          "white": 59,
          "black": 54,
          "hispanic": 56,
          "mu": 57,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 59,
          "white": 59,
          "black": 54,
          "hispanic": 56,
          "mu": 57,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 59,
          "white": 58,
          "black": 54,
          "hispanic": 56,
          "mu": 56.75,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 59,
          "white": 58,
          "black": 54,
          "hispanic": 56,
          "mu": 56.75,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 58,
          "white": 58,
          "black": 54,
          "hispanic": 56,
          "mu": 56.5,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 58,
          "white": 58,
          "black": 55,
          "hispanic": 56,
          "mu": 56.75,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 58,
          "white": 58,
          "black": 55,
          "hispanic": 56,
          "mu": 56.75,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 58,
          "white": 57,
          "black": 55,
          "hispanic": 56,
          "mu": 56.5,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 57,
          "white": 57,
          "black": 55,
          "hispanic": 56,
          "mu": 56.25,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 57,
          "white": 57,
          "black": 55,
          "hispanic": 56,
          "mu": 56.25,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 57,
          "white": 57,
          "black": 55,
          "hispanic": 56,
          "mu": 56.25,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 57,
          "white": 57,
          "black": 56,
          "hispanic": 56,
          "mu": 56.5,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 57,
          "white": 57,
          "black": 56,
          "hispanic": 56,
          "mu": 56.5,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 56,
          "white": 56,
          "black": 56,
          "hispanic": 56,
          "mu": 56,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 56,
          "white": 56,
          "black": 56,
          "hispanic": 56,
          "mu": 56,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 56,
          "white": 56,
          "black": 56,
          "hispanic": 56,
          "mu": 56,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 56,
          "white": 56,
          "black": 56,
          "hispanic": 56,
          "mu": 56,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 55,
          "white": 56,
          "black": 57,
          "hispanic": 56,
          "mu": 56,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 55,
          "white": 55,
          "black": 57,
          "hispanic": 56,
          "mu": 55.75,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 55,
          "white": 55,
          "black": 57,
          "hispanic": 56,
          "mu": 55.75,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 55,
          "white": 55,
          "black": 57,
          "hispanic": 56,
          "mu": 55.75,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 55,
          "white": 55,
          "black": 57,
          "hispanic": 56,
          "mu": 55.75,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 54,
          "white": 55,
          "black": 57,
          "hispanic": 56,
          "mu": 55.5,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 54,
          "white": 54,
          "black": 58,
          "hispanic": 56,
          "mu": 55.5,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 54,
          "white": 54,
          "black": 58,
          "hispanic": 56,
          "mu": 55.5,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 54,
          "white": 54,
          "black": 58,
          "hispanic": 56,
          "mu": 55.5,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 53,
          "white": 54,
          "black": 58,
          "hispanic": 56,
          "mu": 55.25,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 53,
          "white": 54,
          "black": 58,
          "hispanic": 56,
          "mu": 55.25,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 53,
          "white": 53,
          "black": 58,
          "hispanic": 56,
          "mu": 55,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 53,
          "white": 53,
          "black": 59,
          "hispanic": 56,
          "mu": 55.25,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 53,
          "white": 53,
          "black": 59,
          "hispanic": 56,
          "mu": 55.25,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 52,
          "white": 53,
          "black": 59,
          "hispanic": 56,
          "mu": 55,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 52,
          "white": 53,
          "black": 59,
          "hispanic": 56,
          "mu": 55,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 52,
          "white": 52,
          "black": 59,
          "hispanic": 56,
          "mu": 54.75,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 52,
          "white": 52,
          "black": 59,
          "hispanic": 56,
          "mu": 54.75,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 51,
          "white": 52,
          "black": 59,
          "hispanic": 56,
          "mu": 54.5,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 51,
          "white": 52,
          "black": 60,
          "hispanic": 56,
          "mu": 54.75,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 51,
          "white": 51,
          "black": 60,
          "hispanic": 56,
          "mu": 54.5,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 51,
          "white": 51,
          "black": 60,
          "hispanic": 56,
          "mu": 54.5,
          "type": "EMPIRICAL(-75,125)"
        },
        {
          "asian": 50,
          "white": 51,
          "black": 60,
          "hispanic": 56,
          "mu": 54.25,
          "type": "EMPIRICAL(-75,125)"
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
    lewspapers: factors['prompts_test'][1],
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


  