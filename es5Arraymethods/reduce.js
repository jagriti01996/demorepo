const arr = [1, 2, 3, 4, 5, 6, 7];

const newArr= arr.filter((a)=> a % 2 ===0);
console.log(newArr);

const newArr1= arr.map(a => a*a);
console.log(newArr1);

//reduce all element of original array into single onject or primitive

const numbers = [ 1, 2,3, 4,8];

const sum = numbers.reduce((num1,num2)=>{
    // console.log(num1, num2);
    return  num1 + num2;
});
console.log(sum);

const arrAll = arr.filter(a => a % 2 === 0).map( a => a*a).reduce((num1,num2)=>{
    return num1 + num2;
});

console.log(arrAll);

const orders = [{
    userId : 1,
    amount: 10
},
{
    userId : 1,
    amount: 15 
},
{
    userId : 2,
    amount: 5 
},
{
    userId : 2,
    amount: 100 
},
]

const user = orders.filter(user => user.userId === 2).map(user => user.amount).reduce((am1,am2)=> am1+ am2);

console.log(user);

