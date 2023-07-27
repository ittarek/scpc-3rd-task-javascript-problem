/*
Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 
*/

const reverseString = (str) => {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
};

// console.log(reverseString("olleh"));

/**
 * Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.
 */

const getPositiveNum = (arr) => {
  let newNum = arr.filter((num) => num > 0);

  let sum = newNum.reduce((prv, current) => prv + current, 0);

  return sum;
};

// console.log(getPositiveNum([1, 2, -2]));

// Task 3: Write a JavaScript program to find the most frequent element in an array and return it.

const frequentElement = (arr) => {
  const frequencyMap = {};
  let maxElement = arr[0];
  let maxCount = 1;

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (frequencyMap[element]) {
      frequencyMap[element]++;
    } else {
      frequencyMap[element] = 1;
    }
    if (frequencyMap[element] > maxCount) {
      maxElement = element;
      maxCount = frequencyMap[element];
    }
  }
  return maxElement;
};
// const arr1 = [2, 2, 2, 2, 20, 1, 5, 6, 8];
// console.log(frequentElement(arr1));

//Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

const printClosest = (arr, n, x) => {
  let res_l;
  let res_r;

  // Variable to store current minimum difference
  let temp = Number.MAX_SAFE_INTEGER;

  // Iterating over array
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      // If found more closest pair
      if (Math.abs(arr[i] + arr[j] - x) < temp) {
        res_l = i;
        res_r = j;
        temp = Math.abs(arr[i] + arr[j] - x);
      }
    }
  }

return ("The closest pair is " + arr[res_l] + " and " + arr[res_r]);
};

let arr2 = [10, 22, 28, 29, 30, 40];
let x = 54;
let n = arr2.length;
console.log("close",printClosest(arr2, n, x));

//Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

const calculator = (a, b, operation) => {
  if (operation === "+") return a + b;
  if (operation === "-") return a - b;
  if (operation === "*") return a * b;
  if (operation === "/") return b === 0 ? "Can't divide by 0!" : a / b;
};

// console.log(calculator(10, 10, "/"));

//  Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

const generatePassword = () => {
  let password = "";
  let str =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz0123456789@#$%&";

  for (let i = 1; i <= 8; i++) {
    let char = Math.floor(Math.random() * str.length + 1);

    password += str.charAt(char);
  }

  return password;
};
// console.log(generatePassword());

//Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

const romanToInt = (romanStr) => {
  let num = 0;
  let objRoman = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 };

  for (let i = 0; i < romanStr.length; i++) {
    if (objRoman[romanStr[i]] < objRoman[romanStr[i + 1]]) {
      num -= objRoman[romanStr[i]];
    } else {
      num += objRoman[romanStr[i]];
    }
  }
  return num;
};
// console.log(romanToInt("XII"));



//Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

