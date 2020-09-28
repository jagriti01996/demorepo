/***************
 * CLOSURES
 */

function retirement(retirementAge) {
  var a = " years left until retirement.";
  return function (yearOfBirth) {
    var age = 2020 - yearOfBirth;
    console.log(retirementAge - age + a);
  };
}

var retirementIndia = retirement(62);
retirementIndia(1996);

//An inner function has always access to the variables and parameters of its outer
// function , even after the outer function has returned

var retirementUS = retirement(66);
retirementUS(1996);

/****
 * For Understanding
 */

function interviewQuestions(job) {
  return function (name) {
    if (job === "designer") {
      console.log(
        "Question for " +
          job +
          " : " +
          name +
          ", can you please expalin what UX design is?"
      );
    } else if (job === "teacher") {
      console.log(
        "Question for " +
          job +
          " : " +
          " What subject do you teach, " +
          name +
          "?"
      );
    } else {
      console.log(
        "Question for " + job + " : " + "Hello " + name + ", what do you do?"
      );
    }
  };
}

var teacherQuestions = interviewQuestions("teacher");
teacherQuestions("Kamal");
