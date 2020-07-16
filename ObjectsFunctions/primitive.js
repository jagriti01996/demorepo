/*****
 * PRIMITIVE vs OBJECTS
 * 
 * Primitives:-
  1. Number
  2. Boolean
  3. String
  4. Null
  5. Undefined

 */

//Primitives
// Each of the variable holds its data they do not reference anything

var a = 23;
var b = a;
a = 46;
console.log(a, b);

//Objects
// Here the onj1 and obj2 both variables are the reference which points
// to the same object in the memory . There is no creation of new object
// when obj2 set equal to obj1

var obj1 = {
  name: "John",
  age: 26,
};

var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

/**********
* FUNCTIONS
* When we pass primitive to the functions it passed the copy of it so any number of times we can change the 
* that variable in the function but it will not reflected outside the function
* BUT  when we pass objects to the function in reality object reference get passed not the object so whatever 
*  change is done inside function in an object it get reflected outside the function
*/

var age = 27;
var obj = {
  name: "Johnas",
  city: "Lisbon",
};

function change(a, b) {
  a = 30;
  b.city = "Kashmir";
}

change(age, obj);
console.log("age" + age);
console.log(obj.city);
