console.log("Executing line 1 of the code..");
console.log("Executing line 2 of the code..");
console.log("Executing line 3 of the code..");
sumOfNumbers(5, 10); //This is a function call to the sumOfNumbers function with arguments 5 and 10.    
console.log("Executing line 5 of the code..");
console.log("Executing line 6 of the code..");
console.log("Executing line 7 of the code..");
console.log("Executing line 8 of the code..");
console.log("Executing line 9 of the code..");
console.log("Executing line 10 of the code..");













function sumOfNumbers(a, b) {
    c=a+b;
    console.log("The sum of the two numbers is: " + c); //This is a print statement that prints the sum of the two numbers.
}

//Debugging the programm step-by-step in javascript

/*

1. Add breakpoint (click on a specific line number where you want to start the debugging process)
2. Run the program in debug mode(control+shift+D)
3. Use the debug options to identify and fix the error.

continue(F5)-> Exceutes the program until the next breakpoint.

Restart(ctrl+shift+F5)-> Restarts the program from the beginning.

stop(ctrl+shift+F5)-> Stops the program execution.

step over(F10)-> Executes the next line of code and moves to the next line.

step into(F11)-> Executes the next line of code and moves to the next line. If the next line is a function call, it will step into the function and execute it line by line.

step out(shift+F11)-> Executes the remaining lines of code in the current function and returns to the calling function.

*/