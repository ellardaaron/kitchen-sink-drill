// This variable is my name
var myName = 'Aaron';

// This constant is the number of US states
const usStates = 50;

// This variable is a function that adds 5 and 4 together which gives us 7
var simpleAdd = 5 + 4;

//------------------------------------------------

function sayHello() {
    alert('Hello World!');
}

sayHello()

//------------------------------------------------

function checkAge(age, name) {
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!")
    }
    else if (age >= 21) {
        alert("Welcome to the party " + name + "!")
    }
}

checkAge(21, 'Charles')

checkAge(27, 'Abby')

checkAge(18, 'James')

checkAge(17, 'John')

//------------------------------------------------

var favoriteVegetables = ['Spinach' , 'Garlic' , 'Potatoes', 'Onions' , 'Beans']

for(var i = 0; i < favoriteVegetables.length; i++) {
    console.log(favoriteVegetables[i])
}

//------------------------------------------------

var person = [ 
    
    {name : "Brad" , age : 12}, 
    {name : "Chad" , age : 27},
    {name : "uMad" , age : 45},
    {name : "getGlad" , age : 19},
    {name : "madLad" , age : 13},

]

for(var i = 0; i < person.length; i++) {
    checkAge(person[i].age, person[i].name)
};

//------------------------------------------------

var anyWord = 'Hello World';

function getLength() {
    if (anyWord.length % 2 == 0) {
        console.log ('The world is nice and even!');
    }
    else {
        console.log ('The world is an odd place!');
    }
};

getLength ()

//------------------------------------------------

