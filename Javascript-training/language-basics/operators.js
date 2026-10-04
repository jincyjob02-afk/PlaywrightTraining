//Syntax to store data : Declaration variableName=value;

//Operators => Operators are nothing but special characters used in Javascript to perfrom different types of operations.

// There are 5 different types of operators in Javascript.

//1. Arithmetic Operators
//2. Assignment Operators
//3.Comparison Operators
//4. Logical Operators
//5. Ternary Operator

//1. Arithmetic Operators => Arithmetic operators are used to perform arithmetic operations on numbers.(+,-,*,/,%,++,--)
//+ Addition Operator => + operator is used to add two numbers or concatenate two strings.
//- Subtraction Operator => - operator is used to subtract two numbers.
//* Multiplication Operator => * operator is used to multiply two numbers.
// / Division Operator => / operator is used to divide two numbers.
//% Modulus Operator => % operator is used to get the remainder of a division operation.
//++ Increment Operator => ++ operator is used to increment a number by 1.(for ex: let a=5; a++; //a will be 6 after this operation)
//-- Decrement Operator => -- operator is used to decrement a number by 1.(for ex: let a=5; a--; //a will be 4 after this operation)

let a=10;
let b=5;

//placement of ++ and -- also matters. If we place ++ or -- before the variable, it will increment or decrement the value before the operation. If we place ++ or -- after the variable, it will increment or decrement the value after the operation.

//if ++/ -- is written on the right side of the variable , (a++ or b--), it will be treated as post increment ot post derement.

console.log(a++); //10 => a=11 after this operation
console.log(b--); //5 => b=4 after this operation
console.log(a); //11
console.log(b); //4

//if ++/ -- is written on the left side of the variable , (++a or --b), it will be treated as pre increment ot pre derement.
//first decrement or increment the value and then perform the operation.

console.log(++a); //12 => a=12 after this operation
console.log(--b); //3 => b=3 after this operation
console.log(a); //12
console.log(b); //3 

//2. Assignment Operators => Assignment operators are used to assign values to variables.(=,+=,-=,*=,/=,%=)

let i=10;

console.log("Intial value of i is: "+i); //10

i+=10; //i=i+10 => i=20
console.log("Value of i after i+=10 is: "+i); //20

i-=10; //i=i-10 => i=10
console.log("Value of i after i-=10 is: "+i); //10

i*=10; //i=i*10 => i=100
console.log("Value of i after i*=10 is: "+i); //100

i/=10; //i=i/10 => i=10
console.log("Value of i after i/=10 is: "+i); //10

i%=10; //i=i%10 => i=0
console.log("Value of i after i%=10 is: "+i); //0   

//3. Comparison Operators => Comparison operators are used to compare two values and return a boolean value.(true or false).(==,===,!=,!==,>,<,>=,<=)
//== loose equality operator => == operator is used to compare two values for equality. It performs type coercion if the types are different. (ex: 5==5 => true, 5=="5" => true, 5==6 => false)
//==== strict equality operator => === operator is used to compare two values for equality. It does not perform type coercion if the types are different. (ex: 5===5 => true, 5==="5" => false, 5===6 => false) Strict equality compares data along with its data type.

let x=10;
let y=10;
let z="10"; //When we write any value inside the double quotations, it will be treated as a string  data type not a number data type.

console.log(x==y); //true => because both x and y are equal in value and data type.
console.log(x==z); //true => because both x and z are equal in value but not in data type. (x is number and z is string)
console.log(x===y); //true => because both x and y are equal in value and data type.
console.log(x===z); //false => because both x and z are not equal in data type. (x is number and z is string)   

console.log(x!=y); //false => because both x and y are equal in value and data type.
console.log(x!=z);
conosle.log(x!==y); //false => because both x and y are equal in value and data type.
console.log(x!==z); //true => because both x and z are not equal in data type. (x is number and z is string)

console.log(x>y); //false => because both x and y are equal in value and data type.
console.log(x<y); //false => because both x and y are equal in value and data type.
console.log(x>=y); //true => because both x and y are equal in value and data type.
console.log(x<=y); //true => because both x and y are equal in value and data type.     

//4. Logical Operators => Logical operators are used to combine two or more boolean values and return a boolean value.(true or false).(&&,||,!)

//&& Logical AND Operator => && operator is used to combine two or more boolean values and return true if all the values are true. If any one of the value is false, it will return false.
//|| Logical OR Operator => || operator is used to combine two or more boolean values and return true if any one of the value is true. If all the values are false, it will return false.
//! Logical NOT Operator => ! operator is used to reverse the boolean value. If the value is true, it will return false. If the value is false, it will return true.

let p=10;
let q=20;

console.log(p>q && p<q); //false => because p>q is false and p<q is true. So, the result will be false.
console.log(p>q || p<q); //true => because p>q is false and p<q is true. So, the result will be true.
console.log(!(p>q)); //true => because p>q is false. So, the result will be true.

//5. Ternary Operator => Ternary operator is used to perform a conditional operation. It takes three operands. The first operand is a condition, the second operand is the value to be returned if the condition is true, and the third operand is the value to be returned if the condition is false. (condition ? value_if_true : value_if_false)
//used to write a considtion in a single line / shorthand way. It is also called as conditional operator.
//syntax: condition ? value_if_true : value_if_false

let age=18;

let result=age>=18 ? "You are eligible to vote" : "You are not eligible to vote";

console.log(result); //You are eligible to vote => because age is greater than or equal to 18. So, the result will be "You are eligible to vote".
