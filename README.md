# Simple Dice Roll 

This app was done to demonstrate how Node.js HTTP API is used to handle HTTP requests to a server. As well as applying what we learned about about URL query parameters to utilize them when provided in a URL.

This demo app works by specifying URL query parameters rolls and sides where each parameter references a number. We then extract the query parameters from the URL and generate a random number 1 being the lowest and at most the value of `sides`. We keep generating a random number within that range for the number of rolls specified.