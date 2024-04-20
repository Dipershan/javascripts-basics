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

const  resul = people.sort((a, b) => a.age - b.age);

console.log(resul); 
//sort in Ascending orfer by age 
// const array1 = [1, 30, 4, 21, 100000];
// array1.sort();
// console.log(array1);





// let food = ['Noodle', 'Pasta', 'Ice-cream'];
// let food = ['Fries', 'Ice-cream', 'Pizza'];
// Compare the 2 arrays and find common food if any.


const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];

// Get the total mass of all characters
// Get the total height of all characters
// Get the total number of characters in all the character names
//{blue :}
// Get the total number of characters by eye color (hint. a map of eye color to count)

const callbackFn = (intialValue , currentValue)  =>
 intialValue + Number(currentValue.mass);
const getTotalMass = characters.reduce(callbackFn , 0);

console.log(getTotalMass);

const getMass = (arr) => {
    return arr.reduce(
        (intialValue , currentValue) => intialValue + Number(currentValue.mass),
        0
    );
};


// const eyes  =  characters.reduce((initial , current) =>){
//     if(initial[curren.eye_color])
//     {
//         initial[current.eye_color]++;
//     }
//     else
//     {
//         initial[current.eye_color] = 1;
//     }
//     return newObj;
// }



// const resultA =  getMass(characters);
// console.log({resultA});

// const prices = [5,10,4,6,7,8,19,34];

// const total =  price.reduce(sum);

// function sum(accumulator ,  element){
//     return accumulator + element ; 
// }

// const grades = [5,10,4,6,7,8,19,34];

// const maximum =  grades.reduce();
// console.log(maximum);
// const getMax = (accumulator  ,  element) =>{
//     return Math.max(accumulator , element);
// }



//Get array of objects with just name and height properties

// const objArr =  characters.map((character)=> {
//     return { name : character.name ,  height: character.height};
// });

// console.log(objArr);



//IMMUTABLE JS


//map ,  reduce  ,  sort ,  some  ,  every , filter , find
