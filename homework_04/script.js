// Homework 4

// Task 1 Comparison

// first option of function
function areEqual(a = 0, b = 0) {
    return a === b;
}

// second option of function
const areEqual2 = (a = 0, b = 0) => a === b;

let firstComparedNumber = prompt('Give the first number to compare');
let secondComparedNumber = prompt('Give the second number to compare');

console.log('a = b ', areEqual(firstComparedNumber, secondComparedNumber));
console.log('a = b ', areEqual2(firstComparedNumber, secondComparedNumber));

//End of task 1
//Task 2 Sum

// first option of function
function sum(a = 0, b = 0) {
    return a + b;
}

// second option of function
const sum2 = (a = 0, b = 0) => a + b;

let firstTerm = Number(prompt('Give the first term to sum'));
let secondTerm = Number(prompt('Give the second term to sum'));

console.log('a + b =', sum(firstTerm, secondTerm));
console.log('a + b =', sum2(firstTerm, secondTerm));

//End of task 2
//Task 3 Exponentiation


// first option of function
function exponentiation(a = 0, b = 2) {
    return a ** b;
}

// second option of function
const exponentiation2 = (a = 0, b = 2) => a ** b;

let base = Number(prompt('Give a base'));
let power = Number(prompt('Give a power'));

console.log(base, 'to the', power, 'power is', exponentiation(base, power));
console.log(base , 'to the', power, 'power is', exponentiation(base, power));

//End of task 3
//Task 4 Day of week 

function weekDay(a) {
    switch(a) {
        case '1':
            result = 'Monday';
            break;
        case '2':
            result = 'Tuesday';
            break;
        case '3':
            result = 'Wednesday';
            break;
        case '4':
            result = 'Thursday';
            break;
        case '5':
            result = 'Friday';
            break;
        case '6':
            result = 'Saturday';
            break;
        case '7':
            result = 'Sunday';
            break;
        default:
            result = 'There is no such day';
    }
    return result;
}

let dayNumber = prompt('Give a number of week day');

console.log(weekDay(dayNumber));

//End of task 4
//Task 5 Greeting type selection

function greetingType() {
    
    let name = prompt('What is your name?');
    let age = Number(prompt('Hello, how old are you?'));

    if (age > 30 ) {
        alert('Hello, ' + name);
    } else {
        alert('Hey, ' + name);
    }
}

greetingType();

//End of task 5