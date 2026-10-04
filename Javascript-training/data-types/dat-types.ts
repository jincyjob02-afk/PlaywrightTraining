// Data types are two different categories
// 1. Primitive data types-> immutable data types -> String, Number, Boolean, Null, Undefined, Symbol, BigInt
//2. Non-primitive data types-> mutable data types -> Object, Array, Function

//Numbers--> numbers without decimal points and  numbers with decimal points.

let num1:number=10;
console.log(num1);

//Text/String--> sequence of characters, we have to store inside double quotes or single quotes or backticks.
let firstName:string="Hello world";
console.log(firstName);
let lastName:string='Hello world';
console.log(lastName);
let fullName:string=`Hello world`;
console.log(fullName);

//Boolean--> true or false

let istrue:boolean=true;
console.log(istrue);

//Undefined--> when we declare a variable but not assign any value to it, then the variable is undefined.
let a:number;
a=3;
console.log(a);

//Null--> when we declare a variable and assign null value to it, then the variable is null.
let b:null=null;
console.log(b);

//union->Union represents more than one data type that can be stored within the variable.

let empAddress:string|number;
empAddress="Hyderabad";
console.log(empAddress);
empAddress=500081;
console.log(empAddress);

//Any-->Any represents any data type that can be stored within the variable.

let data:any;
data="Hello world";
console.log(data);
data=10;
console.log(data);
data=true;
console.log(data);

//Non-primitive data types-> mutable data types -> Object, Array, Function.

//Object-->Object is a collection of key-value pairs. The key is a string and the value can be any data type.

interface personInfo{
    name:string;
    age:number;
    empId:number;
    visa:boolean;
    address:{
        city:string;
        state:string;
        country:string;
    }
}

let person:personInfo={
    name:"John",
    age:30,
    empId:12345,
    visa:true,
    address:{
        city:"Hyderabad",
        state:"Telangana",
        country:"India"
    }
}
console.log(person);    

//Array-->Array is a collection of similar data types. The data types can be primitive or non-primitive.

let arr1:number[]=[1,2,3,4,5];
console.log(arr1);
let arr2:string[]=["Hello","World"];
console.log(arr2);
let arr3:boolean[]=[true,false,true];
console.log(arr3);
let arr4:any[]=[1,"Hello",true];
console.log(arr4);
let arr5:(string|number)[]=[1,"Hello",2,"World"];
console.log(arr5);

//Tuples-->Tuple is a orderded array that represents a list of values in a speciifc order.  

//problem statement: we have to store employee name,employee phone number,employee visa status together.

//Array:

let empDetails1:(string|number|boolean)[]=["John",1234567890,true];
console.log(empDetails1);

//if i change the order of the values , in array it will not give any error but in tuple it will give an error.
//in array we can store any number of values but in tuple we can store only fixed number of values. 

//Tuple:

let empDetails2:[string,number,boolean]=["John",1234567890,true];
console.log(empDetails2);

//Function-->Function data type represents a block of code or collection of statements written together to complete a specific task.

function add(num1:number,num2:number):number{
    return num1+num2;
}
console.log(add(10,20));

//set--> Set datatype represents a collection of unique values of any data type.

let empSet=new  Set<string>();
empSet.add("John");
empSet.add("Doe");
empSet.add("Jane");
console.log(empSet);

let rollNumbers: Set<number>=new Set<number>();
rollNumbers.add(1);
rollNumbers.add(2);
rollNumbers.add(3);
console.log(rollNumbers);

//Map--> Map datatype represents a collection of key-value pairs. The key can be of any data type and the value can be of any data type.

let empMap:Map<number,string>=new Map<number,string>();
empMap.set(1,"John");
empMap.set(2,"Doe");
empMap.set(3,"Jane");
console.log(empMap);

let empMap1:Map<string,number>=new Map();
empMap1.set("John",1);
empMap1.set("Doe",2);
empMap1.set("Jane",3);
console.log(empMap1);   

//Date--> Date datatype represents a specific point in time. It is used to store date and time values.

let date1:Date=new Date();
console.log(date1);

//Get Current Year
let currentYear:number=date1.getFullYear(); 
console.log(currentYear);

//Get current month
let currentMonth:number=date1.getMonth();
console.log(currentMonth);

//Get current date
let currentDate:number=date1.getDate();
console.log(currentDate);   

//Get current date
let currentDay:number=date1.getDay();
console.log(currentDay);

//Ge current hours
let currentHours:number=date1.getHours();
console.log(currentHours);  