// Homework 4

// Task 1 Comparison

// first option of function
function areEqual() {
    let firstComparedNumber = prompt('Give the first number to compare');
    let secondComparedNumber = prompt('Give the second number to compare');

    alert('a = b ' + (firstComparedNumber === secondComparedNumber));
    return firstComparedNumber === secondComparedNumber;
}

// second option of function
const areEqual2 = () => {
    
    let firstComparedNumber = prompt('Give the first number to compare');
    let secondComparedNumber = prompt('Give the second number to compare');
    
    alert('a = b ' + (firstComparedNumber === secondComparedNumber));
    return firstComparedNumber === secondComparedNumber;
}

console.log('areEqual', areEqual());
console.log('areEqual2', areEqual2());

//End of task 1
//Task 2 Sum

// first option of function
function sum() {
    let firstTerm = Number(prompt('Give the first term to sum'));

    if (!firstTerm) {
        alert('Oops!!! It is not number');
        return(false);

    } else {
        let secondTerm = Number(prompt('Give the second term to sum'));

        if (!secondTerm) {
            alert('Oops!!! It is not number');
            return(false);

        } else {
            alert(firstTerm + ' + ' + secondTerm + ' = ' + (firstTerm + secondTerm));
            return firstTerm + secondTerm;
        }
    }
}

// second option of function
const sum2 = () => {
    let firstTerm = Number(prompt('Give the first term to sum'));

    if (!firstTerm) {
        alert('Oops!!! It is not number');
        return(false);

    } else {
        let secondTerm = Number(prompt('Give the second term to sum'));

        if (!secondTerm) {
            alert('Oops!!! It is not number');
            return(false);
            
        } else {
            alert(firstTerm + ' + ' + secondTerm + ' = ' + (firstTerm + secondTerm));
            return firstTerm + secondTerm;
        }
    }
}

console.log('a + b =', sum());
console.log('a + b =', sum2());

//End of task 2
//Task 3 Exponentiation

// first option of function
let base = prompt('Give a base');
let power = prompt('Give a power');

function exponentiation(base, power = 2) {

    if (base === null) {
        alert('Task canceled');
        return(false);

    } else if (!Number(base) && (base !== '0')) {
        alert('Oops!!! It is not number');
        return(false);

    } else if (power === null) {
            alert('Task canceled');
            return(false);

        } else if (power == '') {
            power = 2;

        } else if (!Number(power)) {
            alert('Oops!!! It is not number');
            return(false);
        }
    alert(base + ' to the ' + Number(power) + ' power is ' + (base ** power));
    return base ** power;
}

// second option of function
const exponentiation2 = () => {
    base = prompt('Give a base');

    if (base === null) {
        alert('Task canceled');
        return(false);

    } else if (!Number(base) && (base !== '0')) {
        alert('Oops!!! It is not number');
        return(false);

    } else {
        power = prompt('Give a power');

        if (power === null) {
            alert('Task canceled');
            return(false);

        } else if (power == '') {
            power = 2;

        } else if (!Number(power)) {
            alert('Oops!!! It is not number');
            return(false);
        }
    }
    alert(base + ' to the ' + Number(power) + ' power is ' + (base ** power));
    return base ** power;
} 

exponentiation(base, power);
// exponentiation2();

//End of task 3
//Task 4 Day of week 

function weekDay() {
    let dayNumber = prompt('Give a number of week day');
    switch(dayNumber) {
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
    alert(result);
    return result;
}

console.log(weekDay());

//End of task 4
//Task 5 Greeting type selection

function greetingType() {
    
    let name = prompt('What is your name?');
    let age = Number(prompt('How old are you?'));
    let greeting = 'Hello'

    if (name == '') {
        name = 'Gest';
    }

    if (age > 30 ) {
        alert('Hello, ' + name);
    } else {
        alert('Hey, ' + name);
    }
}

console.log(greetingType());

//End of task 5