// Task 1
let fruits = ["apple", "banana", "cherry"];
fruits.push("orange");
fruits.shift(); // remove the first element
fruits.unshift("grape"); // add "grape" to  beginning
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
