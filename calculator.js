// Multiply Function
function multiply(a, b) {
  return b * a;
}

//Function to subtract two numbers
function subtraction(a, b) {
  return a - b;
}

// Function to add two numbers
function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return "Error: Both arguments must be numbers";
  }
  return a + b;
}

// Function to divide two numbers
function division(a, b) {
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
console.log(`Division: ${a} / ${b} = ${division(a, b)}`);
