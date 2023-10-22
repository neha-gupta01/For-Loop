// For loop -  used when you need to loop a specific number of times.

// For...in loop - Used for iterating over the properties (keys) of objects.

// For...of loop - used when you want to work with the values themselves

// For...each loop - used when you want to apply a function to each element of an array


//for ...in

//1
const person = {
  name: "John",
  age: 30,
  city: "New York",
};
for (const key in person) {
  console.log(key + ": " + person[key]);
}

//2
const fruits = ["apple", "banana", "cherry"];
for (const index in fruits) {
  console.log("Index " + index + ": " + fruits[index]);
}

//3
const car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
};
for (const key in car) {
  if (car.hasOwnProperty(key)) {
    console.log(key + ": " + car[key]);
  }
}

//for ...of

//1
const colors = ["red", "green", "blue", "yellow"];
for (const color of colors) {
  console.log(color);
}

//2
const sentence = "Hello, World!";
for (const char of sentence) {
  console.log(char);
}

//3
const fruitss = new Map();
fruitss.set("apple", 5);
fruitss.set("banana", 3);
fruitss.set("cherry", 7);
for (const [fruit, quantity] of fruitss) {
  console.log(`We have ${quantity} ${fruit}.`);
}

//for...each

//1
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (number) {
  console.log(number);
});

//2
const names = ["Alice", "Bob", "Charlie"];
names.forEach(function (name, index, array) {
  array[index] = name.toUpperCase();
});
console.log(names);

//3
const color = ["red", "green", "blue"];
color.forEach(color => {
  console.log(color);
});
