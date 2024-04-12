console.log("Day 2");

//data Types

//Primitive data type

//Strning

const person = "ram";
let female = "babita";
const user = "bossika";
const user2 = "nischya"; //backstick ,  tilde sign
var num = 20000;

console.log({ person, female, user, user2, num });

//Number

//Boolean(true/false)

const isDipershanBoy = true; //Camel Case
const isDipershanMan = false;

console.log({ isDipershanBoy, isDipershanMan });


//undefined

let test;
var test2;

console.log({test , test2});

//null
const data = null;
console.log({data});


// type Conersion & type coercion


const nul1 =  prompt("Enter 1st number");//string
const nul2 = prompt("Enter 2nd number");//string

//type coversion

const result  = Number(nul1) * Number(nul2) ;
const stringOnly = String(nul1);


console.log({result});

//Type Conversion meethod 2

const result2 = +mul * +mul2;
console.log({result2});



const age  =  Number(prompt("Enter Your Age"));

if(age >= 30){

    alert("YOu r old");
}
else{
    alert("Yor r young");
}

