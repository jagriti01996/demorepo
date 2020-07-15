/******************************************************
 * Challenge-loop
 *********************************************************/

var avgJohnTeam = (89 + 120 + 103) / 3;
var avgMikeTeam = (89 + 100 + 123) / 3;

if (avgJohnTeam > avgMikeTeam) {
  console.log("Winner is  John's team" + " " + avgJohnTeam);
} else if (avgMikeTeam > avgJohnTeam) {
  console.log("Winner is  Mike's team" + " " + avgMikeTeam);
} else if (avgJohnTeam === avgMikeTeam) {
  console.log("Match is draw" + " " + avgJohnTeam);
} else {
  console.log("nothing");
}

/****************************************************
Coding challenge - 3
******************************************************/

function tipCalculator(bill) {
  // console.log('Bills are' + ' ' +bill);
  // switch (bill) {
  //   case (bill < 50):
  //     {return (bill * 0.2)};
  //   case (bill >= 50 && bill < 200):
  //    { return (bill * 0.15)};
  //   default:
  //     {return (bill * 0.1)};
  // }
  if (bill < 50) {
    return bill * 0.2;
  } else if (bill >= 50 && bill < 200) {
    return bill * 0.15;
  } else {
    return bill * 0.1;
  }
}

var bills = [124, 48, 268];
var tip = new Array();
var totalMoney = new Array();
for (let i = 0; i < bills.length; i++) {
  tip[i] = tipCalculator(bills[i]);
  totalMoney.push(bills[i] + tip[i]);
}

console.log(bills);
console.log("Tips for each hotels" + " " + tip);
console.log("Total money spent:" + " " + totalMoney);

/**********
   * Solution
   
  function tipCalculator(bill) {
    var percentage;
    if (bill < 50) {
      percentage = 0.2;
    } else if (bill >= 50 && bill < 200) {
      percentage = 0.15;
    } else {
      percentage = 0.1;
    }
    return percentage * bill;
  }
  
  var bills = [124, 48, 268];
  var tips = [
    tipCalculator(bills[0]),
    tipCalculator(bills[1]),
    tipCalculator(bills[2]),
  ];
  
  var finalValue = [
    [bills[0] + tips[0]],
    [bills[1] + tips[1]],
    [bills[2] + tips[2]],
  ];
  
  console.log(tips, finalValue);
  */

/****************************************************
Coding challenge - 4
******************************************************/

var john = {
  fullName: "John Smith",
  mass: 70,
  height: 1.8,
  calcBMI: function () {
    return (this.BMI = this.mass / this.height ** 2);
  },
};

var mark = {
  fullName: "Mark Smith",
  mass: 80,
  height: 1.75,
  calcBMI: function () {
    return (this.BMI = this.mass / this.height ** 2);
  },
};

if (john.calcBMI() > mark.calcBMI()) {
  console.log(
    john.fullName + " " + "has greater BMI than Mark with BMI :" + john.BMI
  );
} else if (mark.calcBMI() > john.calcBMI()) {
  console.log(
    mark.fullName + " " + "has greater BMI than John with BMI :" + mark.BMI
  );
} else {
  console.log("Both have same BMI");
}

console.log(`John BMI : ${john.BMI}`);
console.log(`Mark BMI : ${mark.BMI}`);

/******************************************
 * CHALLENGE - 5
 ********************************************/

var john = {
  fullName: "John Smith",
  bills: [124, 48, 268, 180, 42],
  calcTips: function () {
    this.tips = [];
    this.finalValues = [];
    for (var i = 0; i < this.bills.length; i++) {
      //Determine percentage based on tipping rules
      var percentage;
      var bill = this.bills[i];

      if (bill < 50) {
        percentage = 0.2;
      } else if (bill >= 50 && bill < 200) {
        percentage = 0.15;
      } else {
        percentage = 0.1;
      }

      //Add results to the corresponding arrays
      this.tips[i] = bill * percentage;
      this.finalValues[i] = bill + bill * percentage;
    }
  },
};

var mark = {
  fullName: "Mark Miller",
  bills: [77, 475, 110, 45],
  calcTips: function () {
    this.tips = [];
    this.finalValues = [];
    for (var i = 0; i < this.bills.length; i++) {
      //Determine percentage based on tipping rules
      var percentage;
      var bill = this.bills[i];

      if (bill < 100) {
        percentage = 0.2;
      } else if (bill >= 100 && bill < 300) {
        percentage = 0.1;
      } else {
        percentage = 0.25;
      }

      //Add results to the corresponding arrays
      this.tips[i] = bill * percentage;
      this.finalValues[i] = bill + bill * percentage;
    }
  },
};

function calcAverrage(tips) {
  var sum = 0;
  for (var i = 0; i < tips.length; i++) {
    sum = sum + tips[i];
  }
  return sum / tips.length;
}

//Do the calculations
john.calcTips();
mark.calcTips();

john.average = calcAverrage(john.tips);
mark.average = calcAverrage(mark.tips);

console.log(john, mark);

if (john.average > mark.average) {
  console.log(
    john.fullName +
      "'s family pays higher tips, with an average of $" +
      john.average
  );
} else if (mark.average > john.average) {
  console.log(
    mark.fullName +
      "'s family pays higher tips, with an average of $" +
      mark.average
  );
}
