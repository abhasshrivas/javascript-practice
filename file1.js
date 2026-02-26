"use strict";

//this are primitive data types
//numbers
let num = 1;
let num1 = 2;
console.log(num1 + num); // 3

//boolean
let boolean = true; //true
let boolean1 = false; //false

let boolean2 = 1 > 2;
console.log(boolean2);

console.log(boolean1); //false

let string = "abhas";
console.log(string); //abhas

let x;
console.log(x); //undefined

let data = null;
console.log(data); //null

let sym = Symbol("id");
console.log(sym); //Symbol(id)

let bigInt = 123456789012345678901234567890n;
console.log(bigInt);

//non primitive data types
//object
let obj = {
    name: "abhas",
    age: 23,
};
console.log(obj.name);

//array
let array = ["100", "200", "300"];
console.log(array[2]); //300

//function
function greet() {
    console.log("new function");
}
greet();

//window object
console.log(window);

console.log(window.location.href); //current url
console.log(window.location);
console.log(innerWidth);
console.log(innerHeight);

//let localStorage = "23";
//console.log(localStorage);
//console.log(window.localStorage);

let e = typeof null;
console.log(e);

//difference between null and undefined
let a;
console.log(a);

let b = null;
console.log(b);

const name = "dev";

console.log(window.name);
console.log(location.href);
console.log(localStorage);
console.log(innerHeight);
console.log(innerWidth);
console.log(outerHeight);
console.log(outerWidth);
console.log(window.history);
//console.log(window.confirm("hello"));
//console.log(window.prompt("dev"));

window.setTimeout(function () {
    console.log(localStorage);
}, 3000);

localStorage.setItem("user", "abhas");
console.log(localStorage.getItem("user"));

//hoisting

console.log(host);
var host = "hello";

//console.log(host1);
//let host1 = "hello";
//host1 = "my"; // Assignment stays here

//hoisting function
//host1();
//let host1 = function () {
// console.log("start-host");
//};

greet(); // "Hello!"

function greet() {
    console.log("Hello!");
}

//difference between == and ===

let double = 8 == "8";
console.log(double);

var double1 = 7 === 7;
console.log(double1);

let empty = null == undefined;
console.log(empty);

let thirple = 3 === "3";
console.log(thirple);

//data types
//primitive
let number = 2;
console.log(number);

let string1 = "string";
console.log(string1);

let istready = true;
console.log(istready);

let undefined1;
console.log(undefined1);

let y = null;
console.log(y);

let sym1 = Symbol("class");
console.log(sym1);

let big = 123456789012345678901234567890n;
console.log(big);

//non primitive data types
let book = ["english", "maths", "physics"];
console.log(book);

let object = {
    name: "dev",
    address: 376,
};
console.log(object);

function greet() {
    console.log("greet1");
}
greet();

//what is [[[]]]
let arr = [[[]]];
console.log(arr);

let arr1 = [[[]]];

console.log(arr1);

let arr3 = [[[]]];
console.log(arr3[0]);
console.log(arr3[0].length);
console.log(arr3[0][0].length);

let matrix = [
    [
        [1, 2],
        [3, 4],
    ],
];
console.log(matrix[0][1]);

//This keyword
console.log(this);

//in function
function show() {
    console.log(this);
}
show();

let object1 = {
    name: "kumar",
    say() {
        console.log("hello", this.name);
    },
};
object1.say();

let object2 = {
    surname: "shrivas",
    ask: () => {
        console.log("MR. kumar");
    },
};
object2.ask();

//setInterval
//setInterval(() => {
//  console.log("setinterval");
//}, 4000);

//setTimeout
setTimeout(() => {
    console.log("settimeout");
}, 2000);

//function
let new1 = (a, b) => {
    return a * b;
};
console.log(new1(2, 3));

//arrow function
let new2 = () => {
    console.log("new function");
};
new2();

let normalfun = () => {
    console.log(this);
};
normalfun();

//closure

function outer() {
    let count = 0; // variable in outer function

    function inner() {
        count++;
        console.log(count);
    }

    return inner; // return inner function
}

const counters = outer(); // outer() runs once
counters(); // 1
counters(); // 2
counters(); // 3

//pure function
function add(a, b) {
    return a + b;
}

console.log(add(2, 3)); // 5
console.log(add(2, 3)); // 5 (always same result for same inputs)

//impure function
let i = 10;

function newTox(m) {
    i = i + m;
    return i;
}
console.log(newTox(5));
console.log(newTox(5));
console.log(newTox(5));

const numbers = [10, 20, 30];

////Destructuring way
let [M, N, O] = numbers;
console.log(M, N, O);
//console.log(N);
//console.log(O);

let A = ["FOOD", "TAMIL", "FRANCE"];
//normal way
let a1 = A[0];
let b1 = A[1];
let c1 = A[2];

console.log(b1);

//DeStructuring way
//with Array
let [s, g, h] = A;
console.log(s);
console.log(g);
console.log(h);

let [first, , third] = A;
console.log(first, third);

//with object
let person = {
    nickname: "rahat",
    age: 23,
    country: "india",
};
////without DESturcturing
let name1 = person.name;
let age1 = person.age;
console.log(age1);

//with DESturcturing
let { nickname, age, country } = person;
console.log(nickname);
console.log(age);
console.log(country);

//spread opertore
let array1 = [1, 2, 3, 4];
let array2 = [5, 6, 7, 8];

let merge = [...array1, ...array2];
console.log(merge);

let copy = [...array1];
console.log(copy);

//spread with object
let obje = { name: "spread" };
let obje1 = { hobbies: "coding" };

let mergeobject = { ...obje, ...obje1 };
console.log(mergeobject);

//with function
function spreadfunction(a, b, c) {
    return a + b + c;
}

const spreadmerge = ["1000", "2000", "3000"];
console.log(spreadfunction(...spreadmerge));

//rest opertore
let [first1, ...rest] = [1, 2, 3, 4];

console.log(rest);

//event loop
setTimeout(() => {
    console.log("inside timeout");
}, 5000);

//WeakMap
let Object = { name: "dev" };
let weakmap = new WeakMap();

weakmap.set(Object, "frontend developer");

console.log(weakmap.get(Object));
Object = null;

//WeakSet
let Object1 = { name: "abhas" };
let Object2 = { name: "kumar" };

let weakset = new WeakSet();
weakset.add(Object1);

console.log(weakset.has(Object1));

Object1 = null;

//HOW TO CREATE AN ARRAY
let Array1 = [1, 2, 3, 4, 5];
console.log(Array1);

//let Array = new Array(1, 2, 3, 4, 5);
//console.log(Array);

let Array2 = []; //empty array
console.log(Array2);

let car = ["bmw", "audi", "ferrari"];
console.log(car[0]);

car[1] = "tesla";
console.log(car[1]);

let fruits = ["apple", "banana", "mango"];
console.log(fruits.length);

fruits.push("grapes");
console.log(fruits);

fruits.pop();
console.log(fruits[1]);

fruits.shift();
console.log(fruits);

fruits.unshift("orange");
console.log(fruits);

fruits.splice(1, 1, "watermelon");
console.log(fruits);

console.log(fruits.indexOf("mango"));

let num3 = [3, 5, 7, 1, 9];
console.log(num3.sort());

let num4 = [3, 5, 7, 1, 9];
console.log(num4.reverse());

//map
const mapmethod = [1, 2, 3, 4, 5];
const doubled = mapmethod.map((num) => num * 2);
console.log(doubled);

//scope
//global scope
let deathname = "Abhas"; // Global scope

function greet4() {
    console.log(deathname); // ✅ Can access global variable
}

greet4();
console.log(deathname); // ✅ Also accessible here

//function/local scope
function greet5() {
    let deathname1 = "kumar"; //local scope
    console.log(deathname1); //can be accessed here
}
greet5();

//console.log(deathname1); //cannot be accessed here

//block scope
{
    var deathname1 = "hunk";
    let deathname2 = "shrivas"; //block scope
    const deathname3 = "dev";
    console.log(deathname2, deathname3, deathname1); //can be accessed here
}
//console.log(deathname2); //cannot be accessed here

//lexical/static scope
function outer1() {
    let outerVar = "I am from outer function";

    function inner1() {
        console.log(outerVar);
    }
    inner1();
}
outer1();

//global execution context
let globalVar = "i am global";

function fun1() {
    console.log("inside fun1");
}
console.log(globalVar);
fun1();

//difference between function paramter and an argument
function sum(a, b) {
    // a  and b are parameters
    return a + b;
}
console.log(sum(2, 3)); //2 and 3 are arguments

function interview(developer) {
    //parameters
    console.log("hello " + developer);
    console.log("welcome to the interview");
}
interview("Abhas"); //arguments

//cookies
//document.cookie = "username=Abhas; expires=Fri, 31 Dec 2025 23:59:59 GMT";
//document.cookie = "age=23; expires=Fri, 22 Oct 2025 23:59:59 GMT";
//console.log(document.cookie);

//localStorage
localStorage.setItem("theme", "dark");
console.log(localStorage.getItem("theme")); // "dark"

localStorage.setItem("color", "blue");
console.log(localStorage.getItem("color"));

//sessionStorage
sessionStorage.setItem("user", "Abhas");
console.log(sessionStorage.getItem("user")); // "Abhas"

sessionStorage.setItem("student", "shrivastav");
console.log(sessionStorage.getItem("student"));

//call();
const human = { name: "Abhas" };

function greet(greeting, punctuation) {
    console.log(greeting + "  " + this.name + punctuation);
}

greet.call(human, "Hello", "!");
// Output: Hello Abhas!

//apply();
greet.apply(human, ["Hi", "!!"]);

//bind();
//let greetAbhas = greet.bind(human, "Hey", "!!!");
//greetAbhas("dev");

const greetAbhas = greet.bind(human, "Hey");
greetAbhas("Abhas", "?");
// Output: Hey Abhas?

//call , apply , bind
const user = {
    name: "rahat",
};
function welcome(city, country) {
    console.log(this.name + " welcome to " + city + ", " + country);
}

//call
welcome.call(user, "indore", "india");

//apply
welcome.apply(user, ["indore", "india"]);

//bind
const welcomeUser = welcome.bind(user, "indore", "india");
welcomeUser();

//ES6 classes
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    es6() {
        console.log(
            `Hello, my name is ${this.name} and I’m ${this.age} years old.`,
        );
    }
}
const person1 = new Person("abhas", 23);
person1.es6();

//promises
//let myPromise = new Promise((resolve, reject) => {
//    let success = true;
//
//    if (success) {
//        resolve = "the work is completed";
//    } else {
//        reject = "work is not done";
//    }
//});

//myPromise
//    .then((message) => {
//        console.log("✅ Success:", message);
//    })
//    .catch((error) => {
//        console.log("❌ Error:", error);
//    });

//let fetchData = new Promise((resolve, reject) => {
//    setTimeout(() => {
//        let data = { name: "Abhas", age: 23 };
//        resolve(data);
//    }, 2000);
//});
//
//fetchData
//    .then((result) => {
//        console.log("Data received:", result);
//    })
//    .catch((err) => {
//        console.log("Error:", err);
//    });

let fetchData = new Promise((resolve, reject) => {
    setTimeout(() => {
        let data = { name: "abhas", age: 23 };
        resolve(data);
    }, 2000);
});
fetchData
    .then((result) => {
        console.log("data received:", result);
    })
    .catch((err) => {
        console.log("Error:", err);
    });

//call back
function getData(callback) {
    setTimeout(() => {
        console.log("data received");
        callback();
    }, 6000);
}
getData(() => {
    console.log("processing the data");
});

//callback hell
//getUser(function (user) {
//    getPosts(user.id, function (posts) {
//        getComments(posts[0].id, function (comments) {
//            saveComments(comments, function (response) {
//                console.log("All done!");
//            });
//        });
//    });
//});

//using promises to fix this callback hells
//getUser()
//.then((user) => getPosts(user.id))
//.then((posts) => getComments(posts[0].id))
//.then((comments) => saveComments(comments))
//.then(() => console.log("All done!"))
//.catch((err) => console.log(err));

let d = 5;
let l = 10;
[d, l] = [l, d];

console.log(d, l);

//function curring
function add(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        };
    };
}

console.log(add(2)(3)(4)); // Output: 9

function multi(h) {
    return function (l) {
        return function (s) {
            return h + l + s;
        };
    };
}
console.log(add(89)(90)(91));

//filter method
const evenmethod = [1, 2, 3, 4, 5, 6, 7, 8];
const numbersmethod = evenmethod.filter((num) => num % 2 === 0);
console.log(numbersmethod);

//filter method with another examples
const students = [
    { name: "Abhas", marks: 87 },
    { name: "harshit", marks: 79 },
    { name: "Rajveer", marks: 92 },
];
const toppers = students.filter((students) => students.marks > 80);
console.log(toppers);

//reduce method
const addnumber = [2, 5, 6, 7, 9];
const add1 = addnumber.reduce((acc, curr) => acc + curr, 0);
console.log(add1);

//map method
const numbersm = [1, 2, 34, 75];
const mapdouble = numbersm.map((num) => num * 2);
console.log(mapdouble);

//another examples
const celsices = [1, 2, 3, 4, 5, 6, 7];
const fahrenite = celsices.map((temp) => (temp * 9) / 5 + 32);
console.log(fahrenite);

//templet literal
let shortname = "Abhas";
let message = `HELLO ${shortname} !welcome to templet literal`;
console.log(message);

//templet in nnumbers
let numbers1 = 4;
let numbers2 = 6;

let numbers3 = `the sum of ${numbers1} and ${numbers2} is ${
    numbers1 + numbers2
}. `;

console.log(numbers3);

//templet in 2 line
let line = `this is a line 1
 this is a line 2`;
console.log(line);

//templet in react or webdev
const user1 = {
    Name: "Abhas",
    Age: 23,
};
const id = `Name:  ${user1.Name}, Age: ${user1.Age}`;
console.log(id);

//templet literal in function
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(`Message: ${greet("Abhas")}`);

//reverse string
let str = "harrypotter";
let reverse = str.split("").reverse().join("");
console.log(reverse);

//how to  stop setInterval
let counter = 0;

// Start the interval
let myInterval = setInterval(() => {
    counter++;
    console.log("Counter:", counter);

    // Stop when counter reaches 3
    if (counter === 3) {
        clearInterval(myInterval);
        console.log("Interval stopped!");
    }
}, 1000);

//prototype inheritance
//const teacher = {
//    classrome() {
//        console.log("Abhas come here");
//    },
//};
//
//const Abhas = Object.create(teacher);
//Abhas.classrome();

//Using constructor functions
function Persons(name) {
    this.name = name;
}

Persons.prototype.sayHi = function () {
    console.log("Hi, I'm " + this.name);
};

const user7 = new Persons("Abhas");
user7.sayHi(); // Hi, I'm Abhas

//Prototype Chain Example
console.log(user1.__proto__ === Person.prototype); // true
//console.log(Person.prototype.__proto__ === Object.prototype); // true
//console.log(Object.prototype.__proto__); // null

//use strict
//("use strict");
//wizard = 12;
//console.log(wizard);

//prevent duplicate parameter in use strict
//function addition(a, a, b) {
//    return a + b;
//}
//console.log(addition(1, 3, 3));

//protects keyword like let,package,interface in use strict
//let interface = 124;
//console.log(interface);

//“this” becomes undefined in functions in use strict
function showThis() {
    console.log(this);
}
showThis();

//reversed string
function string0(str) {
    return str.split("").reverse().join("");
}
console.log(string0("hello"));

//isPalindrome
function isPalindrome(str) {
    const reversed = str.split("").reverse().join("");
    return str === reversed;
}
console.log(isPalindrome("madam"));

//count occurrence of each character
function countcharcater(str) {
    const result = {};

    for (let char of str) {
        if (result[char]) {
            result[char]++;
        } else {
            result[char] = 1;
        }
    }
    return result;
}
console.log(countcharcater("abhas"));

function character(string) {
    let answer = {};

    for (let char of string) {
        if (answer[char]) {
            answer[char]++;
        } else {
            answer[char] = 1;
        }
    }
    return answer;
}
console.log(character("rahatkumar"));

//find the largest number and smaller number
function finMinNumber(arr) {
    const largest = Math.max(...arr);
    const smallest = Math.min(...arr);

    console.log("largest:", largest);
    console.log("smallest:", smallest);
}
finMinNumber([1, 4, 6, 89, 3, 8, 7, 2]);

//remove duplicate array
function duplicate(arr) {
    return [...new Set(arr)];
}
console.log(duplicate([1, 1, 2, 2, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6]));

//loop
//for loop
for (i = 1; i <= 5; i++) {
    if (i === 3) continue;
    console.log("DARK KNIGHT", i);
}

//while  loop
let j = 1;
while (j <= 5) {
    console.log("Batman", j);
    j++;
}
//do whiel loop
let k = 1;
do {
    console.log("superman", k);
    k++;
} while (k <= 5);

//for of loop
let fruits1 = ["apple", "banana", "mango"];
for (let fruit of fruits1) {
    console.log(fruit);
}
//for in loop
let person2 = {
    name: "abhas",
    age: 23,
    city: "indore",
};
for (let key in person2) {
    console.log(key + ":" + person2[key]);
}
console.log(0.1 + 0.2 === 0.3);

//how to convert object as a string
let object9 = {
    a: 1,
    b: 2,
};

let string9 = JSON.stringify(object9);
console.log(string9);

let abc = {
    name: "abhas",
    age: 22,
    address: "indore",
};

let xyz = {
    ...abc,
    name5: "kumar",
};

const { name5, ...pqr } = xyz;
console.log(pqr);

for (let p = 1; p <= 100; p++) {
    console.log(p);
    if (p === 100) {
        console.log("100 is reached");
    }
}
//let number1 = prompt("Enter a number:");
//number1 = Number(number1);
let number1 = 7;
if (number1 % 2 === 0) {
    console.log("number is even");
} else {
    console.log("number is odd");
}

let max = 25;
let bin = 42;
let c = 18;

if (max >= bin && max >= c) {
    console.log("The largest number is: " + max);
} else if (bin >= max && bin >= c) {
    console.log("The largest number is: " + bin);
} else {
    console.log("The largest number is: " + c);
}

//map method
//with double the number
let arrmap = [1, 2, 3, 4, 5, 6];
let mapped = arrmap.map((num) => num * 2);
console.log(mapped);

//convert array of string to uppercase
let arrstring = ["apple", "banana", "mango"];
let uppercased = arrstring.map((arrstr) => arrstr.toUpperCase());
console.log(uppercased);

//extract names and ages from array of objects
const users = [
    { name: "Abhas", age: 23 },
    { name: "Rahat", age: 24 },
    { name: "Kumar", age: 22 },
];
let names = users.map((user) => user.name);
let ages = users.map((user) => user.age);
console.log(names, ages);

//reduce method
//sum of all numbers in an array
const reducenumbers = [10, 20, 30, 40, 50];
const total = reducenumbers.reduce((acc, curr) => acc + curr, 0);
console.log(total);

//find the maximum number in an array
const max1 = [2, 3, 4, 5, 6, 7, 8, 9];
const maximum = max1.reduce((acc, curr) => (acc > curr ? acc : curr));
console.log(maximum);

//count total price of items
const products = [
    { product: "laptop", price: 30000 },
    { product: "phone", price: 20000 },
    { product: "tablet", price: 15000 },
];
const totalprice = products.reduce((acc, curr) => acc + curr.price, 0);
console.log(totalprice);

//flatten an array od arrays
const flatarray = [
    [1, 2],
    [3, 4],
    [5, 6],
];
const flat = flatarray.reduce((acc, curr) => acc.concat(curr), []);
console.log(flat);

const expenses = [
    { name: "Food", amount: 200 },
    { name: "Transport", amount: 100 },
    { name: "Movie", amount: 150 },
];

const total1 = expenses.reduce((acc, item) => acc + item.amount, 0);

console.log(total1); // 450

//filter method
//Filter even numbers
const filter = [12, 34, 56, 78, 90, 77, 3, 13, 233];
const even1 = filter.filter((num) => num % 2 === 0);
console.log(even1);

//Filter numbers greater than 50
const greater = [12, 45, 6, 789];
const greaternumbers = greater.filter((num) => num > 50);
console.log(greaternumbers);

//Filter objects based on property
const students1 = [
    { name: "John", marks: 57 },
    { name: "Jane", marks: 44 },
    { name: "Jim", marks: 78 },
];
const passedstudents = students1.filter((student) => student.marks > 50);
console.log(passedstudents);

console.log(typeof NaN);

let task = "3" - 2;
console.log(task);

console.log("b" + "a" + +"a" + "a");

let str1 = "racecar"; // you can change this word to test others
let reversed = "";

for (let i = str1.length - 1; i >= 0; i--) {
    reversed += str1[i];
}

if (str1 === reversed) {
    console.log(true); // It is a palindrome
} else {
    console.log(false); // Not a palindrome
}

for (i = 1; i <= 5; i++, 0) {
    console.log(i);
}
//type coercion
console.log("5" + 10);
console.log("5" - 5);
console.log("5" * 2);
console.log("10" / 2);
console.log("10" > 5);
console.log("10" < 5);
console.log("10" == 10);
console.log("10" === 10);
console.log(true + 1);
console.log(false + 1);
console.log(true == 1);
console.log(false == 0);
console.log(true === 1);
console.log(false === 0);
console.log(null == undefined);
console.log(null === undefined);

//map
let mapexample = [1, 2, 3, 4, 5];
let mapresult = mapexample.map((num) => num * 2);
console.log(mapresult);

//prime number
function isPrime() {
    let num = 29;
    let isPrime = true;
    if (num <= 1) {
        isPrime = false;
    } else {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }

        console.log(isPrime);
    }
}

let color = ["red", "green", "blue"];
console.log(color);

/*
function App() {
    return <h1>HELLO</h1>;
}
export default App;
*/
function sumnext(a, b, c) {
    return a + b + c;
}
console.log(sumnext(1, 2, 3));

let nums = [1, 2, 3, 4, 5, 6];
let even = nums.filter((num) => num % 2 === 0);
console.log(even, "it is an even number:");

let largestnum = [3, 9, 2];
let laregst = Math.max(...largestnum);
console.log(laregst);

//promises
let mypromise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        console.log("food delivered");
    } else {
        console.log("ordering failed");
    }
});

//reverse string
function myfunction(string) {
    return string.split("").reverse().join("");
}
console.log(myfunction("lnct"));

//find the largest number
function findlargestnumber(arr) {
    let largest = arr[0];

    for (let i = 1; i < arr.length; i++);
    if (arr[1] >= largest) {
        largest = arr[1];
    }
    return largest;
}
console.log(findlargestnumber([5, 12, 4, 9]));

//how many vowels here
function vowels(vowel) {
    console.log(a, a, s);
}

console.log(vowels);

for (let m = 0; m < 3; m++) {
    setTimeout(() => console.log(m), 1000);
}

let myarray = [1, 2, 3];
let yourarray = myarray;
yourarray.push(4);
console.log(myarray);

console.log(1 + "2" + 3);

console.log("start");

setTimeout =
    (() => {
        console.log("inside timeout!");
    },
    0);
console.log("end");
