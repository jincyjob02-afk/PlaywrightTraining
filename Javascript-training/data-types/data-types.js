// Datatypes in Javascript are divided into two categories: 

//1. Primitive Datatypes (Immutable) => Primitive datatypes are the most basic datatypes in Javascript. They are immutable, which means that their values cannot be changed once they are created. There are 7 primitive datatypes in Javascript.
//2. Non-Primitive Datatypes (Mutable) => Non-primitive datatypes are more complex datatypes in Javascript. They are mutable, which means that their values can be changed after they are created. There are 3 non-primitive datatypes in Javascript.

//1. Primitive Datatypes => There are 7 primitive datatypes in Javascript. They are:

//1. Number => Number datatype is used to represent numeric values in Javascript. It can be an integer or a floating-point number. For example: 10, 3.14, -5, etc.
//2. String => String datatype is used to represent textual data in Javascript. It is a sequence of characters enclosed in single quotes, double quotes, or backticks. For example: 'Hello', "World", `Hello World`, etc.
//3. Boolean => Boolean datatype is used to represent logical values in Javascript. It can have only two values: true or false.
//4. Undefined => Undefined datatype is used to represent a variable that has not been assigned a value yet. When a variable is declared but not initialized, it has the value of undefined.
//5. Null => Null datatype is used to represent the intentional absence of any object value. It is a primitive value that represents the null or empty value.
//6. Symbol => Symbol datatype is used to create unique identifiers for objects. It is a new datatype introduced in ES6. Each symbol value is unique and immutable.
//7. BigInt => BigInt datatype is used to represent integers that are larger than the maximum safe integer value in Javascript. It can be created by appending 'n' to the end of an integer literal or by using the BigInt() constructor.

//2. Non-Primitive Datatypes => There are 3 non-primitive datatypes in Javascript. They are:

//1. Object => Object datatype is used to represent complex data structures in Javascript. It is a collection of key-value pairs, where each key is a string and each value can be any datatype (primitive or non-primitive). Objects can be created using object literals, constructors, or classes.
//2. Array => Array datatype is a special type of object that is used to represent ordered collections of values in Javascript. It can hold values of any datatype (primitive or non-primitive) and can be created using array literals or the Array() constructor. Arrays have a length property that represents the number of elements in the array and can be accessed using index numbers starting from 0.
//3. Function => Function datatype is a special type of object that is used to represent reusable blocks of code in Javascript. Functions can be created using function declarations, function expressions, or arrow functions. Functions can take parameters and return values.    

let num=10;//Number datatype
console.log(typeof num);//number

let str="Hello World";//String datatype
console.log(typeof str);//string
let str1='Hello world';//String datatype
console.log(typeof str1);//string

let str2=`Hello world`;//String datatype
console.log(typeof str2);//string
