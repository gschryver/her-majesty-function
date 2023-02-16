// HER MAJESTY FUNCTION 
/*
1. You should be able to describe the purpose of a function in software
    * a. Functions are a container for code that completes a specific task.
    * b. Functions are a simple piece of code that we can repeatedly use in our code. 
    * c. You don't have to write this code over & over again. You can instead reuse it whenever you want. 
2. You should be able to identify a parameter in a function definition
    * a. A parameter is within the parantheses of a function.
3. You should be able to describe the purpose of a parameter
    * a. A parameter is a placeholder to receive input values.
4. You should be able to identify where a function is invoked
    * a. The function name followed by a parenthesis. e.g. myName();
5. You should be able to identify an argument
    * a. An argument replaces the placeholder (parameter) by the actual data. 
6. You should be able to describe what purpose an argument serves
    * a. An argument contains the actual values of function parameters to input data.
7. You should be able to describe what a function returns
    * a. A function returns any value from the function. Some may not return a value, but most do. 
    * b. This is the "result" of the function. 
    * c. The value that is returned can be used anywhere later in the code.
*/

// 1. FIRST FUNCTION 
/*
    Define a function with a single parameter. When the function
    is invoked, an argument is required.
*/

// // ARROW FUNCTION 
// const hailTheQueen = (nameString) => {
//     return `Hail Her Majesty, ${nameString}.`  // This function returns a string
// }


const hailTheQueen = function(nameString) {
    return `Hail Her Majesty, ${nameString}.`
}


// 2. INVOKING A FUNCTION 
const athena = hailTheQueen("Athena Perez") // Argument value is "Athena Perez"
console.log(athena)


// 3. ANOTHER QUEEN
const charisse = hailTheQueen("Charisse Ford") // Argument value is "Charisse Ford"
console.log(charisse)

const jenna = hailTheQueen("Jenna Solis") // Argument value is "Jenna Solis"
console.log(jenna)

// 4. THE QUEENS IN YOUR LIFE
const linda = hailTheQueen("Linda K"); // Argument value is "Linda K"
console.log(linda);

const ashley = hailTheQueen("Ashley V"); // Argument value is "Ashley V"
console.log(ashley);

const becky = hailTheQueen("Becky T"); // Argument value is "Becky T"
console.log(becky);