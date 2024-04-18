console.log("Day 3");

//Looop

//Write  a js program that prints from 1 to 10

// ++ =>Unary Operator

for (let num = 1; num <= 10; num++) {
  console.log(num);
}

//do while

console.log("======================================");

let result = 1;
do {
  console.log(result);
  result++;
} while (result <= 10);

//WHile loop

console.log("======================================");

let resp = 1;
while (resp <= 10) {
  console.log(resp);
  resp++;
}

console.log("======================================");

//Write a multilplication table  for 3

const  number =  3;
for (let i = 1; i <= 10; i++) {
  console.log(number, "*", i, "=", i * 3);
}
console.log("======================================");
//in do while

// let i = 1;

// const num = 3;
// do {
//   console.log(num * 1);
//   i++;
// } while (i <= 10);

console.log("======================================");
//write a factorial of 5 (5 4 3 2 1)



// let fact = 5;
// do {
//     console.log(fact);
//     fact--;

// }while (i<= 5);

//write a factorial of 5 (5 4 3 2 1)
let temp = 1;
for (let fact = 5; fact >= 0; fact--) {
  if(fact === 0){
    temp = 1 ;
    break;
  }
   temp  =  temp * fact;
  
}
console.log(temp);


//COMPARE SIGN
/*
= assign value
== value compare
=== value and data type compare 
*/