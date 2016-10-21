var mySingletonPattern = require('./singletonPattern');
var myBadSingletonPattern = require('./badSingleton');

var singleA = mySingletonPattern.getInstance();
var singleB = mySingletonPattern.getInstance();

var badSingleA = myBadSingletonPattern.getInstance();
var badSingleB = myBadSingletonPattern.getInstance();

singleA.log('Here it goes');
singleA.log(singleA.getProperty());
singleA.log(singleA.getRandomNumber());

// same instance
singleA.log(singleA.getRandomNumber() === singleB.getRandomNumber());

// different instances
singleA.log(badSingleA.getRandomNumber() === badSingleB.getRandomNumber());
