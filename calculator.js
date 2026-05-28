function add(a, b) { console.log("Addition:", a + b); }
function sub(a, b) { console.log("Subtraction:", a - b); }
function mul(a, b) { console.log("Multiplication:", a * b); }
function div(a, b) { 
    if (b === 0) console.log("Cannot divide by zero");
    else console.log("Division:", a / b);
}
function mod(a, b) { console.log("Modulus:", a % b); }

console.log("Calculator Ready!");
console.log("Try: add(5,3), sub(10,4), mul(6,2), div(8,2), mod(10,3)");