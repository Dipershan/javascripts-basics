
//function define
function sum(a , b){
    const result  =  a + b;
    return result;
}

function mul(a , b){
    return a * b;
}

//function call
const sumResult = sum(2 , 3);


//print

console.log({sumResult});



const sum  = (a , b ) => {
    return a + b;
};

console.log(sum(2 , 3));


//write js program to calculate principal


const simpleIntrest  = ( p , t, r) => {
    return p*t*r/100;


}

console.log(simpleIntrest(2 , 3 , 4));

const birthYear  =  2005;
 function calAge(year){
    return 2024 - year;
 }

 const age = calAge(birthYear);

 console.log(age);


 const reverse  = (word) =>{
    let newString = "";
    for( let i=word.length-1 ; i>= 0 ;  i--){
    newString += word[i];
    }
    return newString;
 }

 console.log(reverse("3210"));

 //write a js function to chexk if the word is palindromme

 //write a js funciton to fins the largest word in the sentence



 const palindromme  = (word) =>{
    let newString = "";
    for( let i=word.length-1 ; i>= 0 ;  i--){
    newString += word[i];
    }
    if(newString === word){
        return true;
    }
    else return false;
 }

 console.log(palindromme("mom"));

// Write a js function to convert the tempersture to and from celcius  , fahrenheit 