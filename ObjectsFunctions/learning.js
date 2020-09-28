/****
 * CONSTRUCTOR FUNCTION AND INHERITANCE
 */

// CONSTRUCTOR FUNCTION

var john = {
  name: "John",
  yearOfBirth: 1990,
  job: "teacher",
};

//Always write function constructors with captal letter it's like a blue print for same type of objects
// function constructor is like a pattern for rest objects blue print which is going to instansiate from this

var Person = function (name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

//WHAT NEW keyword do:
// 1. A new empty object is created.
// 2. The cunstructor function i.e Person is called with the arguments that are specified
// 3. Calling a function will create a new EXECUTION CONTEXT which also contain "this" variable
// in case of regular function call THIS variable points towards the global object but here
// the NEW operator points to the empty object which was created by it in the beginning
// so when name, yearOfBirth, job are passed to the constructor function parameters it get set to
// that empty object and assigned to variable JOHN

// INHERITANCE
// We can simply write that method in function constructor but for evey object that we instantiate
// will going to have that method assigned evry time means repeatiton of code for all objects intantiiated
// So better to put those methods in PROTOTYPE of parent object so that its not in constructor function not assigned evrytime
// but these are accesseble to objects those are intantiated because these are peresnt in the prototype property of function
// constructor and inherited from there.

Person.prototype.calculateAge = function () {
  console.log(2020 - this.yearOfBirth);
};

Person.prototype.lastName = "Smith";

var john = new Person("John", 1990, "teacher"); // is called instansiation
var jane = new Person("Jane", 1969, "designer");
var mark = new Person("Mark", 1948, "retired");

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);

/*******
 * PRACTICE FOR UNDERSTANDING
 */

var Student = function (name, enrollementId, yearOfAdmission, courseDuration) {
  this.name = name;
  this.enrollementId = enrollementId;
  this.yearOfAdmission = yearOfAdmission;
  this.courseDuration = courseDuration;
};

var shweta = new Student("Shweta", "0201IP151039", 2015, 4);
var avi = new Student("Avi", "0201EC151049", 1996, 5);
var riya = new Student("Riya", "123MB1050", 2018, 4);

Student.prototype.passingYear = function () {
  console.log(this.yearOfAdmission + this.courseDuration);
};

shweta.passingYear();
avi.passingYear();
riya.passingYear();

//PROTOTYPE of JOHN is the PROTOTYPE PROPERTY of Person constructor
// john.__proto__ === Person.prototype // true
// Person fucntion constructor is an instance of OBJECT function constructor

/****
 * Object.create METHOD
 */

var personProto = {
  calculateRetirement: function () {
    console.log(65 - this.yearOfBirth);
  },
};

var juhi = Object.create(personProto);
juhi.name = "Juhi";
juhi.yearOfBirth = 1996;
juhi.job = "teacher";

var reecha = Object.create(personProto, {
  name: { value: "Reecha" },
  yearOfBirth: { value: 1999 },
  job: { value: "developer" },
});

console.log(reecha);
console.log(juhi);
