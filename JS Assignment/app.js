
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

// ---------------------------------------

for (let i = 10; i >= 0; i--) {
    console.log(i);
}

// ---------------------------------------

for (let i = 1; i <= 5; i++) {
    console.log("Hello, JavaScript!");
}

// ---------------------------------------
var fruits = ["Apple", "Banana", "Mango", "Orange"];

for (let i = 0; i < fruits.length; i++) {
    console.log( "Fruits:",fruits[i]);
}
 
// ---------------------------------------

var marks = [50, 60, 70, 80];
var total = 0;

for (var i = 0; i < marks.length; i++) {
    total += marks[i];
}

console.log("Total marks:", total);

// ---------------------------------------

var marks = [50, 60, 70, 80];
var total = 0;

for (var i = 0; i < marks.length; i++) {
    total += marks[i];
}

var average = total / marks.length;

console.log("Average Marks:", average);

// ---------------------------------------

var colors = ["Red", "Green", "Blue", "Yellow"];

for (var i = colors.length - 1; i >= 0; i--) {
    console.log(colors[i]);
}

// ---------------------------------------

var numbers = [5, 10, 15, 20];

for (var i = 0; i < numbers.length; i++) {
    console.log("Index " + i + ": " + numbers[i]);
}

// ---------------------------------------

var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

console.log(cities.length);

// ---------------------------------------

var numbers = [2, 5, 8, 11, 14, 17, 20];

for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i]);
    }
}
