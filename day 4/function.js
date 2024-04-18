/*
Types of Functions
-Parameterized function
-Default Function
-Explicit Function
-Implicit Function
-Anonymous Function
-Inline Function
-Closure
-IIFE
-Pure Function

*/

/*
Es5

//funciton hi(user){
    const hello  = `HI , ${user}
    return hello;

}

Es6 (Arrow Function)

const hi =  (name)=>{
    return `HI , ${name}`
}

*/
//Basic Function
// const hello = () => {
//     return "HELLO";
// }

//Write a js function to add 2 numbers
//ask user for numbers using prompt


//function define
const add = (num1, num2) => {
    
  return num1 + num2;
};

//function variable
// const num1 = Number(prompt("First number "));
// const num2 =  Number(prompt("First number "));
// const sum = add(num1, num2);
// console.log({sum});

//Parameterized Function
// const getFirstName =  (name)=>{
// const words =  name.split(" ");
// const result  =  words[0];
// return result;
// }

// getFirstName(); //function
// "dipershan".trim();  //method => BUilt  in function
// Number(234).valueOf

//Default function

//Real world example : Pagination
// const sayHi  = (topic =  user) => {
//      alert(`HI ${topic}`);

// };
// sayHi("Dipershan");




//Explicit Function
const  geName =  () => {
  return "dipershan"; //explicit means return keywords is mentioned
}

//Implicit Function

const getName = () => "dipershan";


//Write a  js function that join first that returns lastname of the user


const getLName = (name) => name.split(" ");
// {
  // const words = name.splits(" ");
  // console.log(words); //["Dipershan" , "Shrestha"]
  // console.log(words[0] , words[1])
// };

// const getTemp  =  ( temp  , type = "c") => {

//     if(type === "c"){
//         return 1.8 * temp + 32;

//     }
//     else {
//         return ( 5 * temp)/9 - 17.78;
//     }

// };

// console.log(getTemp(32)  , "F");
// console.log(getTemp(100 ,  "f") , "C");

const checkPrime = (num) => {
  if(num <= 1)   return "it is not prime";
  

  for(let i=2; i<num ; i++){
    if(num%i === 0){
      return " prime"
    }
    else  {
      return "it  not prime";
    }
    
  }
 
};

console.log(checkPrime(3));
console.log("============")


/*

Write a implict js function that converts 
a long sentence to '...' statement

-truncate

*/


//Alternative
// let truncated = str.slice(0, 16); 


const  truncate = ( sentence) => sentence.substring(0 , 28).concat("...");

console.log(
  truncate("My name is dipershan shreestha currently living in a kathmandu nepal for the better life woww")
);

//Function Chaining

//Anonymous Function

const sayHi  = function () {};

//INline Function

const sayHello  = () => {
  console.log("HI Dipershan"); //lexical scope
};

//IIFEs
//Immediate Invoked Functional Expression
//Devops (SCript RUn , )


(function () {
  console.log("hei");
  console.log("he");
  console.log("hel");
  console.log("ho");
}) ();

//CLosure FUnction 

const getMyVars = () => {
  return {
    email_pw : "'",
    email_un: "rsss",

  };
}
// console.log(getMyVars());

// packages ndoe ks (dot env)

//Pure Function

//YOu can always expect same answer


//CallBack FUnction


// getFirstName()
// .then((result) => result )
// .then((result) => `hi ${result}`);


//WRite a js function that if the user inputed email is valid or not?

//  


const checkEmail = (email) => {
  if(!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    return false;
  }
  else{
    return true;
  }
}

const user = prompt("Enter the email");
console.log(checkEmail(user));












