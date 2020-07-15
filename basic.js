var johnMass = 54;
var markMass = 60;
var johnHeight = 1.76;
var markHeight = 1.86;

var johnBmi = johnMass / johnHeight ** 2;
console.log(johnBmi);

var markBmi = markMass / markHeight ** 2;
console.log(markBmi);

var BMIgreater = markBmi > johnBmi;

console.log(`Is Mark's BMI higher than John's?` + " " + BMIgreater);

/***********
 * ARRAYS
 */

var names = ["John", "Mike", "Jone"];
var years = new Array(1990, 1909, 1870);

console.log(names[2]);
console.log(names.length);

//Mutate array data
names[1] = "Ben";
names[names.length] = "Mary";
names[5] = "Kiti";
console.log(names);

//Different data types
var john = ["John", "Smith", 1996, "designer", false];

john.push("blue");
john.unshift("Mr.");
console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(1996));
console.log(john.indexOf(13));

var isDesigner =
  john.indexOf("designer") === -1
    ? "John is not a designer"
    : "John is designer";
console.log(isDesigner);

//OBJECT LITERALS
var john = {
  firstName: 'John',
  lastName: 'Smith',
  birthYear: 1990,
  family: ['Jane', 'Mark', 'Bob', 'Emily'],
  isMarried: false
};

//new OBJECT SYNTAX
var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1998;
jane['lastName'] = 'Smith';

/**********
 * OBJECTS and METHODS
 */

var john = {
  firstName: 'John',
  lastName: 'Smith',
  birthYear: 1990,
  family: ['Jane', 'Mark', 'Bob', 'Emily'],
  isMarried: false,
  calcAge: function(){ //this is function expression function without name
    this.age = 2020 - this.birthYear;
  }
};

john.calcAge();
console.log(john);

/**********************
 * LOOPS AND ITERATION
 ***********************/

 //FOR LOOP
 var john = ["John", "Smith", 1996, "designer", false];
 var jane = ["Jane", "Smith", 1990, "astronaut", true];
 for(var i=0; i < john.length; i++){
   console.log(john[i]);
 }

 //WHILE LOOP
 var i = 0;
 while( i < jane.length){
   console.log(jane[i]);
   i++;
 }

 //CONTINUE and BREAK statements
 var john = ["John", "Smith", 1996, "designer", false, 'Blue'];
 for(var i=0; i < john.length; i++){
   if(typeof john[i] !== 'string')continue;
   console.log(john[i]);
 }

 for(var i=0; i < john.length; i++){
  if(typeof john[i] !== 'string')break;
  console.log(john[i]);
}

//Looping backwards
for(var i=john.length-1; i >= 0 ; i--){
  console.log(john[i]);
}


