// Task 1
const a = 5;
const b = 10;

let sum = a + b;
console.log('sum of a and b is', sum);

let subtraction = a - b;
console.log('subtraction b from a is', subtraction);

let division = a / b;
console.log('dividing a by b is', division);

let multiplication = a * b;
console.log('multiplication a by b is', multiplication);

let exponentiation = a ** b;
console.log('raising a to the power of b is', exponentiation);

//End of task 1
//Task 2

// true && true                              true
// false || true                             true
// true && 'false'                           false
// 0 && 1 || ' ' && 42                       42
// null == undefined                         true
// '' == 0                                   true
// 1 === '1'                                 false
// NaN === NaN && true                       false
// true || false && true || false            true
// (true || false) && (true || false)        true
// 10 || 0 && 'dog' || ''                    10
// (10 || 0) && ('dog' || '')                dog

//End of task 2
//Task 3

let firstNumber = prompt('Please, type your first number');
let secondNumber = prompt('Please, type your second number');

if (firstNumber < secondNumber) {
    alert('the first number ' + firstNumber + ' is less than the second number ' + secondNumber);
} else if (firstNumber > secondNumber) {
        alert('the first number ' + firstNumber + ' is greater than the second number ' + secondNumber);
    } else {
        alert('the first number ' + firstNumber + ' is equal to the second number ' + secondNumber);
}

//End of task 3
//Task 4 Calculator

let firstCalculatedNumber = prompt('Please, type your first number for calculator');
let secondCalculatedNumber = prompt('Please, type your second number for calculator');
let action = prompt('Please, type your action with entered numbers. Actions can be the following: + - / *');
let result;

firstCalculatedNumber = Number(firstCalculatedNumber);
secondCalculatedNumber = Number(secondCalculatedNumber);

switch(action) {
    case '+':
        result = firstCalculatedNumber + secondCalculatedNumber;
        break;
    case '-':
        result = firstCalculatedNumber - secondCalculatedNumber;
        break;
    case '/':
        result = firstCalculatedNumber / secondCalculatedNumber;
        break;     
    case '*':
        result = firstCalculatedNumber * secondCalculatedNumber;
        break;   
    default:
        result = 'Oops!!!';
}

alert(firstCalculatedNumber +  action + secondCalculatedNumber + '=' + result);

//End of task 4
//Task 5 Visitor admission program

let age = prompt('Hello, how old are you?');
let permission;

if (age < 60 && age > 18) {
    alert('Access is allowed');
} else if (age < 12 || age > 80) {
    alert('Access is denied');
} else {
    permission = prompt('You need to additionally ask for permission from adults: for agree type y');
    if (permission == 'y') {
        alert('Access is allowed');
    } else {
        alert('Access is denied');
    }
}

//End of task 5