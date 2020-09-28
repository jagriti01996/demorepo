/************
 * FUNCTIONS
 * A function is an instance of the Object type.
 * A function behaves like any other objects.
 * We can store functions in a variable.
 * We can pass a function as an argument to another function.
 * We can return a function from a function.
 */

/**************************************************************** 
 * function is passsed to a function as callback function
 ****************************************************************/ 
var years = [1990, 1965, 1937, 1998, 2007];

function arrayCalc(arr, fn) {
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return 2020 - el;
}

// function is passsed to a function as callback function
var ages = arrayCalc(years, calculateAge);
console.log(ages);

function isFullAge(el) {
  return el >= 18;
}

var fullAges = arrayCalc(ages, isFullAge);
console.log(fullAges);

function maxHeartRate(el) {
  if (el >= 18 && el <= 81) {
    return Math.round(206.9 - 0.67 * el);
  } else {
    return -1;
  }
}

var rates = arrayCalc(ages, maxHeartRate);
console.log(rates);

/****************************************
 * FUNCTIONS RETURNING FUNCTIONS
 ****************************************/

//Simply returning object , function that are objects
function interviewQuestions(job) {
  if (job === "designer") {
    return function (name) {
      console.log(name + ", can you please explain what the UX design is?");
    };
  } else if (job === "teacher") {
    return function (name) {
      console.log("What subject do you teach, " + name + "?");
    };
  } else {
    return function (name) {
      console.log("Hello " + name + ", what do you do?");
    };
  }
}

var teacherQuestion = interviewQuestions('teacher');
var designerQuestion = interviewQuestions('designer');
designerQuestion('Hemanshu');
teacherQuestion('Riya');

interviewQuestions('teacher')('Mark');
interviewQuestions('')('Riya');

/****************************
 * For understanding
 ******************************/

 var itemPrices = [50, 200, 300, 456, 678, 987, 1000];

 //Passing function to another function
 function checkDiscount(arr, fn){
     var discount = [];
     for(var i = 0; i < arr.length; i++){
          discount.push(fn(arr[i]));
     }
     return discount;
 }

 function calcDiscount(rateOfItem){
     var discountPer;
        if(rateOfItem < 100)
        { discountPer = 0.1;}
        else if( rateOfItem >= 100 && rateOfItem < 500 )
         {discountPer = 0.2;}
        else
        { discountPer = 0.5;}
    return rateOfItem * discountPer;
}

 var allDiscounts = checkDiscount(itemPrices, calcDiscount);
 console.log(allDiscounts);

 // Returning function from one function
 function isEligibleForGifts(arr1, arr2){
     var totalPrice = [];
     for(var i = 0; i < arr1.length; i++){
         totalPrice.push(arr1[i] + arr2[i]);
     }
    console.log(totalPrice);
     if(totalPrice.includes(1500)){
         return function(name){
             console.log('Congratilation ' + name + ' we have some special gifts for you');
         }
     }
     else{
         console.log(totalPrice)
         return function(name){
             console.log(name + ' Thank you for shopping');
         }
     }
 }

 // isGiftThere now pointing towards the isEligibleForGifts OBJECT so all things are now visible in isGiftThere

 var isGiftThere = isEligibleForGifts(allDiscounts, itemPrices);
 isEligibleForGifts(allDiscounts, itemPrices);
 isGiftThere('Riya');
