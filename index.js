// 1. Write a loop to print numbers from 1 to 10.
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 2. Write a function that takes an array of numbers and returns the sum.
function sumArray(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

// 3. Write a function to find the largest number in an array.
function findLargest(numbers) {
  return Math.max(...numbers);
}

// 4. Write a function that checks if a number is even or odd.
function isEvenOrOdd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}

// 5. Write a function that reverses a given string.
function reverseString(str) {
  return str.split("").reverse().join("");
}

// 6. Merge two arrays using the spread operator
const a = [1, 2];
const b = [3, 4];
const merged = [...a, ...b];
console.log(merged); // Output: [1, 2, 3, 4]

// 7. Use ES6 filter to return even numbers from an array
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4, 6]

// 8. Rewrite using template literals
const name = "Alice";
const msg = `Hello ${name}, welcome!`;

// 9. Rewrite this function using an arrow function
const greet = (name) => `Hello, ${name}`;
