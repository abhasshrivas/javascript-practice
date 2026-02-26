//opeartors
//Operators are symbols that perform operations on values.

//1. Airthmetic operation
let add = 5 + 3;
console.log(add);

let subtraction = 5 - 3;
console.log(subtraction);

let division = 4 / 4;
console.log(division);

let reminder = 2 % 6; //also called Modulus
console.log(reminder);

let increment = 10;
increment++;
console.log(increment);

let decrement = 10;
decrement--;
console.log(decrement);

//Assignment Operators
let X = 10;
X += 5; //10 = 10 + 5
console.log(X);

let y = 10;
y -= 5; //10 = 10 - 5
console.log(y);

let z = 10;
z *= 5; //10 = 10 * 5
console.log(z);

let u = 10;
u /= 5; //10 = 10 / 5
console.log(u);

//Comparison Operators
let copmparevalue = 3 == "3";
console.log(copmparevalue);

let bothvalue = 4 === "4";
console.log(bothvalue);

let notequal = 5 != 5;
console.log(notequal);

let strict = 5 !== "5"; //If value OR type is different → it returns true
console.log(strict);

let strict2 = 4 !== 4; //If value AND type are same → it returns false
console.log(strict2);

let greaterthen = 5 < 6;
console.log(greaterthen);

let lessthan = 7 > 5;
console.log(lessthan);

let greaterequal = 3 >= 5;
console.log(greaterequal);

let lessequal = 3 <= 5;
console.log(lessequal);

//Logical Operators
let age = 23;
if (age > 18 && age < 30) {
    console.log("this is Adult");
} else {
    console.log("this is not adult");
}

let age1 = 24;
if (age1 < !23) {
    console.log("this is Adult");
} else {
    console.log("this is not adult");
}

///Ternary Operator
let age3 = 13;
let result = age3 >= 18 ? "Adult" : "Minor";
console.log(result);

//array method
//map method

let nums = [1, 2, 3, 4];
let double = nums.map((nums) => nums * 2); //👉 Used to transform each element.
//👉 Returns a new array.
console.log(double);

//forEach array()
let num = [1, 2, 3, 4];
num.forEach((num) => {
    console.log(num);
});

//filter()
let num1 = [1, 2, 3, 4, 5, 6, 7, 8];
let even = num1.filter((num1) => num1 % 2 === 0);
console.log(even);

//reduce() array

let num2 = [1, 2, 3, 4];
let sum = num2.reduce((acc, cur) => acc + cur, 0);
console.log(sum);

//find(); array
let users = [
    { id: 1, name: "abhas" },
    { id: 2, name: "dev" },
];
let user = users.find((u) => u.id === 2);
console.log(user);

//some() array
let num3 = [1, 2, 7, 9, 5]; //if any one condition is true it get output true
let haseven = num3.some((num3) => num3 % 2 === 0);
console.log(haseven);

//every() array
let num4 = [2, 4, 6, 8, 12]; //if all consition is true it get the output true
let iseven = num4.every((num4) => num4 % 2 === 0);
console.log(iseven);

//logic task to find the greater or less number
let arr = [-5, 10, 15, 20];
let arr2 = arr.filter((arr) => arr < 0);
console.log(arr2);

//sum of all number
let arr1 = [5, 10, 15, 20];
let sum1 = arr1.reduce((acc, cur) => acc + cur, 0);
console.log(sum1);

//An object stores data in key-value pairs.

let obj = {
    name: "abhas",
    age: 23,
};
console.log(obj);

//new object
let person = new Object();
person.name = "Abhas";
person.age = 23;

//three ways to assign a object
console.log(person);
console.log(person["age"]);
console.log(person.name);

//update object or add new property
person.age = 25;
console.log(person);

person.city = "indore";
console.log(person);

//Delete property
delete person.age;
console.log(person);

//Destructuring object
//Destructuring means extracting values from object.

let extracting = {
    name: "rahat",
    ages: 24,
};

let { name, ages } = extracting;
console.log(name);
console.log(age);

let car = {
    brand: "BMW",
    year: 2022,
};

//add color balck
car.color = "black";
console.log(car);

//delete year
delete car.year;
console.log(car);

//clourser
function outer() {
    let count = 0;

    function inner() {
        count++;
        console.log(count);
    }
    return inner;
}
let counter = outer();
counter();
counter();
counter();

//callback function
//call back function is a function that pass as an argument to another
//function and execute later

function greet(name) {
    console.log("hello " + name);
}

function processUser(callback) {
    let name = "abhas";
    callback(name);
}
processUser(greet);

//another example of callback
setTimeout(function () {
    console.log("hello after 2 second");
}, 2000);

//another example of callback in map()
let nums1 = [1, 2, 3];

nums1.map(function (num) {
    return num * 2;
});
console.log(num);

//scope
//Scope decides where you can use a variable.
//1. Global scope

let global = "prime";

function fun() {
    // console.log(global);
}
fun();
console.log(global);

//function scope
function fun1() {
    let message = "Hello";
    console.log(message);
}

fun1();
//console.log(message); // ❌ Error

//block scope
{
    let nickname = "dev";
    const fisrtname = "rahat";

    console.log(nickname, fisrtname);
}
//console.log(nickname);

if (true) {
    let address = "indore";
   console.log(address);
}
//console.log(address);


if (true) {
  var x = 10;
}

console.log(x); // ✅ Works