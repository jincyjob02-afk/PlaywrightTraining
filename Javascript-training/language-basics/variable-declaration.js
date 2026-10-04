//Syntax -> Declaration variableName=value;

//In javascript , we can decalre variable by using 3 different keywords.

//1. var (var will be used to decalre variable in the global scope and function scope in the old style of javascript.We need to avoid using var in modern javascript latest verisons)
//2. let (let will be used to decalre the values that can be reassigned or modified in the block scope. It is a modern way of declaring variables in javascript)
//3. const (const will be used to decalre the values that cannot be reassigned or modified in the block scope. It is a modern way of declaring variables in javascript)

//These three different variable decalartions will be differ maninly based on four important parameters.

//1. Initialization
//2. Reassignment
//3. Re-declaration
//4. Scope

//Initialization -> It is the process of assigning a value to a variable at the time of declaration.

var a=10; //This is a variable declaration and initialization using var keyword.
var b;//It's not mandatory to initialize at beginning. We can decalre later and initialize it later.
b=30;
let q=20; //This is a variable declaration and initialization using let keyword.
let c;//It's not mandatory to initialize at beginning. We can decalre later and initialize it later.
c=40;
const d=30; //This is a variable declaration and initialization using const keyword.It is mandatory to initialize at the time of declaration.

//Reassignment -> It is the process of changing the value of a variable after it has been initialized.
a=20; //This is a variable reassignment using var keyword.
b=40; //This is a variable reassignment using let keyword.
//d=50; //This is a variable reassignment using const keyword. It will throw an error because const variables cannot be reassigned.

console.log("The value of a is: " + a); //This is a print statement that prints the value of a.
console.log("The value of b is: " + b); //This is a print statement that prints the value of b.
console.log("The value of d is: " + d); //This is a print statement that prints the value of d. 

//Re-declaration -> It is the process of declaring a variable with the same name more than once in the same scope.
var a="Jincy"; //This is a variable re-declaration using var keyword. It will not throw an error because var variables can be re-declared in the same scope.    
//let b="Job"; //This is a variable re-declaration using let keyword. It will throw an error because let variables cannot be re-declared in the same scope.
//const d="Jincy"; //This is a variable re-declaration using const keyword. It will throw an error because const variables cannot be re-declared in the same scope.

console.log("The value of a is: " + a); //This is a print statement that prints the value of a.
console.log("The value of b is: " + b); //This is a print statement that prints the value of b.
console.log("The value of d is: " + d); //This is a print statement that prints the value of d.

//scope -> It is the context in which a variable is defined and can be accessed. There are three types of scope in javascript.
//let and const are block scoped variables. They can be accessed only within the block in which they are defined.
//var is not block scoped variable. It can be accessed outside the block in which it is defined. It is function scoped variable. It can be accessed only within the function in which it is defined.


{
    var x=10;
    let y=20;
    const z=30;
    console.log("The value of x is: " + x); //This is a print statement that prints the value of x.
    console.log("The value of y is: " + y); //This is a print statement that prints the value of y.
    console.log("The value of z is: " + z); //This is a print statement that prints the value of z.
}
console.log("The value of x is outside the block: " + x); //This is a print statement that prints the value of x.
console.log("The value of y is: " + y);
console.log("The value of z is: " + z); //This is a print statement that prints the value of z. It will throw an error because y and z are block scoped variables and cannot be accessed outside the block in which they are defined.

