console.log("Day 5");


//Objects 
//Primitive Data Types

/*
String
NUmber 
BIg INt
null
undefined
symbol
boolean
*/

//Complex Data TYpe
//(Object  , Array , Date)
//Object
//OBject keyword = {}

const school = {
    name: "NGRA",
    estd : 2201,
    phone:"89898",
    isCollege:true,
}

const car = {
    name:"mercedes",
    model:"X5",
    color:"white",
    own: 2005,
    owner:{
        a:"dipershan",
        b:"Sabin",
    },
    age: function(){
        return 2024 - 2012;
    },
    old: () => {
        return 2024 - 2012;
    },
};

//Create 

//Technique 1
const box = new Object();

//Technique 2
const boxes =  {};

//Read 
//We havve to use dot notation
console.log(car.color , car.model ,  car.age() ,  car.owner.a );

//UPdate
//U can edit existing property /  Create new property

car.own = 2006;
console.log(car);

//Delete

//1 delete the object /  property

delete car.owner.b;
// console.log(car);


const teacher = {
    name:"Raju",
    dob:2012,
    age: function (){
        return 2024 - this.dob;
    },
    old: () => {
        return 2024 - teacher.dob;
    },

}
console.log(teacher.age());
console.log(teacher.old());



let range = {
    start:10,
    end:20,
    check : function(num) {
        if(num>=this.start  && num>=this.end ){
            return true;
        }
        
    },

}

console.log(check.range(20));