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

//Basic Function
const hello = () => {
    return "HELLO";
}




//Parameterized Function
const getFirstName =  (name)=>{
const words =  name.split(" ");
const result  =  words[0];
return result;
}

// getFirstName(); //function
// "dipershan".trim();  //method => BUilt  in function
// Number(234).valueOf

//Default function
//Real world example : Pagination
// const sayHi  = (topic =  user) => {
//     alert(`HI ${topic}`);

// };
// sayHi("Dipershan");



const getTemp  =  ( temp  , type = "c") => {

    if(type === "c"){
        return 1.8 * temp + 32;

    }
    else {
        return ( 5 * temp)/9 - 17.78;
    }

};


console.log(getTemp(32)  , "F");
console.log(getTemp(100 ,  "f") , "C");