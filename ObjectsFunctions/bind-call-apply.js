var john = {
  name: "John",
  age: 26,
  job: "teacher",
  presentation: function (style, timeOfDay) {
    if (style === "formal") {
      console.log(
        "Good " +
          this.timeOfDay +
          ", Ladies and gentlemen! I'm " +
          this.name +
          " I'm a " +
          this.job +
          " and I'm " +
          this.age +
          "years old."
      );
    } else if (style === "friendly") {
      console.log(
        "Hey! What's up? " +
          this.name +
          " I'm a " +
          this.job +
          " and I'm " +
          this.age +
          "years old. Have a nice " +
          timeOfDay
      );
    }
  },
};

var emily = {
  name: "Emily",
  age: 30,
  job: "designer",
};

john.presentation("formal", "morning");

// this is called method borrowning
// CALL method have first argument as this so that we set ot to emily
john.presentation.call(emily, "friendly", "afternoon");

//APPLY method
//here we pass first parameter to set this and other arguments in array
// john.presentation.apply(emily, ['friendly', 'morning']);

//BIND method is very similar to call method difference is here is bind does'nt immedietly call function it make a copy of it
// that it return a function here

var johnFriendly = john.presentation.bind(john, "friendly");

//carrying where we create another function from other function by resetting some values
johnFriendly("evening");
johnFriendly("morning");

/*************
 * PRACTICE
 */

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

function isFullAge(limit, el) {
  return el >= limit;
}

// function is passsed to a function as callback function
var ages = arrayCalc(years, calculateAge);
console.log(ages);

var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(fullJapan);
console.log(ages);
