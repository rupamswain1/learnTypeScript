
const num:number=10;
const str:String="Hello TypeScript";
const bool:boolean=true;

const arr:String[]=['this','is','an','array'];
const numArr:number[]=[1,4,7,9];

const date:Date=new Date();


//Annotation for classes

class Bike{
    name:String = 'Apache RTR 2004v';
    brand:String="TVS";
    engineCC:number=200;
    yearOfMfg:number=2016

}

const bike:Bike=new Bike();
console.log(bike.name);

//Anotation for object

const obj:{x:number,y:String}={
    x:100,
    y:"y"
}

//annotation for functions:
const func:(name:String,age:number)=>String=(name:String,age:number)=>{
    return `${name} is ${age} years old`
}
console.log(func("TypeScript",15));
//OR
//Annotation around function
const func2=(name:String,age:number):String=>{
    return `${name} is ${age} years old`
}
console.log(func("TypeScript",15));
console.log(func2("JavaScript",20));
//or
function multiply(a:number,b:number):number{
    return a*b;
}
console.log("multipliaction result: ",multiply(2,3));

//if a function return none or throws an error

const logging=(message:string):void=>{
    console.log(message);
}
logging("This function will not return anything");

//Destructuring with annotation
const destructureWithAnnotation=({name,age}:{name:string,age:number}):void=>{
    console.log("destructure method: ",`${name} is ${age} years old`);
}

console.log(destructureWithAnnotation({name:"typescript",age:20}));

//delayed Initialization
const strArr:String[]=['A','B','C'];
let result:boolean;
for(let i in strArr){
    if(strArr[i]==='B'){
        result=true;
    }
    else{
        result=false;
    }
    console.log(result)
}

//A variable whose type cannot be infferred correctly:
console.log('>>>>>>A variable whose type cannot be infferred correctly<<<<<')
const numbs:number[]=[11,12,-13,14,17,18];
let numberAboveZero:boolean|number=false;
for(let i=0;i<numbs.length;i++){
    if(numbs[i]>0){
        numberAboveZero=numbs[i];
    }
    else{
        numberAboveZero=false;
    }
    console.log(numberAboveZero);
}
