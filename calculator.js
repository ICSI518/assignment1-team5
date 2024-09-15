// addition function
function add(a, b) {
  // return a + b;
}

function subtraction(a, b) {
  return a - b;
}
function multiply(a, b) {
  // return a * b;

}

// Function to add two numbers


// Function to divide two numbers
function divide(a, b) {
   if (b === 0) {
     return "Error: Division by zero";
   }
   return a / b;
}

// Example usage
const a = 10;
const b = 5;

// Display results on console
console.log(`Addition: ${a} + ${b} = ${add(a, b)}`);
console.log(`Subtraction: ${a} - ${b} = ${subtraction(a, b)}`);
console.log(`Multiplication: ${a} * ${b} = ${multiply(a, b)}`);
console.log(`Division: ${a} / ${b} = ${divide(a, b)}`);
