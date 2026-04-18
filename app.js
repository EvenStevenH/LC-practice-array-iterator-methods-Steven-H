// Lesson 3 - Practice: Array Methods

// Task 1
let fruits = ["apple", "banana", "cherry"];
fruits.push("orange");
fruits.shift(); // remove the first element
fruits.unshift("grape"); // add "grape" to beginning
console.log(fruits);

// Task 2
let colors = ["red", "blue", "green", "blue", "yellow"];
includesResult = colors.includes("blue"); // true
firstIndex = colors.indexOf("blue"); // 1
lastIndex = colors.lastIndexOf("blue"); // 3
console.log([includesResult, firstIndex, lastIndex]);

// Task 3
let teamA = ["Alice", "Bob"];
let teamB = ["Charlie", "Diana"];
let allTeams = [...teamA, ...teamB]; // combine arrays
allTeams.push("Eve");
console.log(allTeams);

// Task 4
let numbers = [10, 20, 30, 40, 50];
let middleNumbers = numbers.slice(1, 3); // new array, only second and third
numbers.splice(-2, 2, 60, 70); // remove last two
console.log("middleNumbers: ", middleNumbers); // [20, 30]
console.log("numbers: ", numbers); // [10, 20, 30, 60, 70]

// Task 5
let scores = [85, 70, 95, 60, 75];
scores.sort((a, b) => a - b); // sort asc order
scores.reverse();
console.log(scores);

/* -------------------------------------------------------------------------- */

// Lesson 5 - Practice: Array Iterator Methods

// Task 1
const favoriteCities = ["New York", "London", "Tokyo", "Paris", "Sydney"];
favoriteCities.forEach((city) => {
	console.log(city.toUpperCase()); // NEW YORK, LONDON, TOKYO, PARIS, SYDNEY
});

// Task 2
const numbers2 = [1, 2, 3, 4, 5];
const squares = numbers2.map((num) => num * num); // [1, 4, 9, 16, 25]
console.log(squares);

// Task 3
const scores2 = [85, 42, 90, 75, 30, 100];
const highScores = scores2.filter((score) => score >= 80); // [85, 90, 100]
console.log(highScores);

// Task 4
const favoriteFood = ["grilled cheese", "sushi", "rice", "ramen", "curry"];
const firstLongWord = favoriteFood.find((food) => food.length > 4);
const firstLongWordIndex = favoriteFood.findIndex((food) => food.length > 4);
console.log(firstLongWord, firstLongWordIndex); // grilled cheese 0

// Task 5
const temperatures = [72, 85, 95, 68, 78];
const above90 = temperatures.some((temp) => temp > 90);
const allAbove50 = temperatures.every((temp) => temp > 50);
console.log([above90, allAbove50]); // [true, true]

// Task 6
const totalBudget = 100;
const prices = [25, 15, 10, 20];
const remainingBudget = prices.reduce((budget, price) => {
	return budget - price;
}, totalBudget);
console.log(remainingBudget); // 30 (remaining budget after purchasing items)
