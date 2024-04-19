console.log("DAY 6");

//ARRAY



//Create

//Technique 1
const firstArr = [];

//Technique 2

const secondArr =  new Array();


const thirdArr = [
    "toyota",
    { name: "hyundai"},
    "neta",
    "mercedes",
    function age(){
        return "I have been pagal"
    }

]

console.log(thirdArr);


//Read


console.log(thirdArr[3]);
console.log(thirdArr[1].name);

//Update 

thirdArr[0] = "Mitsubhi";
thirdArr[1].name = "Shrestha";
console.log(thirdArr);


//Delete
//Spread Operator ...

const [a , b ,  ...rest] = thirdArr;
console.log(rest);


//Use Spread oPerator
const first  = [1,2,3];
const second = [4,5,6];

const result =  [...first , ...second ];
// console.log({result});


//Loop and print all the values of the result array

for(let i =  0;  i<=result.length ; i++){
    console.log(result[i]);
}


//Write a js array solution to add new element  in the array

const newArr  =  [1 , 2];

console.log(newArr.unshift(0));
console.log(newArr);


//Write a js array method solution to convert Array to String

//Output :1 , 2

// console.log(toString(newArr));

const str  =  '1,2,3,4,5'
const words =  str.split('');
console.log(words);

const stry  =  [1,2,3,4,5];

const wrk =  stry.toString();
console.log(wrk);



const people  = [
    {name:"Dipershsn" ,  age:  10},
    {name:"sam" ,  age:  20},
    {name:"ram" ,  age:  15},
]

//sort in Ascending orfer by age 


// let food = ['Noodle', 'Pasta', 'Ice-cream'];
// let food = ['Fries', 'Ice-cream', 'Pizza'];
// Compare the 2 arrays and find common food if any.
