// Homework 7

// Task 1 The number of values in the array that are true
// countTrue([true, false, false, true, false]); // -> 2
// countTrue([false, false, false, false]); // -> 0
// countTrue([]); // -> 0

console.log('Task 1');

const numberOfTrue = (booleanValuesArray) => {
    let res = 0;

    for (let index in booleanValuesArray){
        if (booleanValuesArray[index]) res++;
    }

    return res;
}

console.log('The number is', numberOfTrue([true, false, false, true, false]));
console.log('The number is', numberOfTrue([false, false, false, false]));
console.log('The number is', numberOfTrue([]));
    

//End of task 1
//Task 2 Number of occurrences

console.log('Task 2');


const getOccurrencesCount = (stringArray) => {
    const result = {};

    for (let item in stringArray){
        if (result[stringArray[item]]) {
            result[stringArray[item]]++;
        } else {
            result[stringArray[item]] = 1;
        }
    }
    
    for (let rec in result) {
        console.log(`${rec}: ${result[rec]},`);
    }
    
    return(result);
};

console.log(getOccurrencesCount(["a", "v", "a", "b", "b"]));
console.log(getOccurrencesCount(["apples", "oranges", "pears", "pears", "apples", "oranges", "oranges", "pears",]));

//End of task 2
//Task 3 Number of occurrences

console.log('Task 3');

const findExcess = (numberArray) => {
    if (isEven(numberArray)) {
        for (let elem in numberArray) {
            if (numberArray[elem] % 2) {
                return numberArray[elem];
            }
        }

    } else {
        for (let elem in numberArray) {
            if (!(numberArray[elem] % 2)) {
                return numberArray[elem];
            }
        }
    }
};

const isEven = (numbers) => {
    let i = 0;

    for (let item = 0; item < 3; item++) {
        if (numbers[item] % 2) i++;
    }

    if (i > 1) {
        return false;

    } else {
        return true;
    }
};

console.log('findExcess([0, 1, 2])', findExcess([0, 1, 2]));
console.log('findExcess([1, 2, 3])', findExcess([1, 2, 3]));
console.log('findExcess([2, 6, 8, 10, 3])', findExcess([2, 6, 8, 10, 3]));
console.log('findExcess([0, 0, 3, 0, 0])', findExcess([0, 0, 3, 0, 0]));
console.log('findExcess([1, 1, 0, 1, 1])', findExcess([1, 1, 0, 1, 1]));

//End of task 3
//Task 3 V2.0 Number of occurrences V2.0

console.log('Task 3 V2.0');

const findExcess2 = (numberArray) => {
    const even = [];
    const uneven = [];

    for (let item in numberArray) {
        if (numberArray[item] % 2) {
            uneven.push(numberArray[item]);
        } else even.push(numberArray[item]);
    }

    if (even.length == 1) return even[0]
    else return uneven[0];
};

console.log('findExcess2([0, 1, 2])', findExcess2([0, 1, 2]));
console.log('findExcess2([1, 2, 3])', findExcess2([1, 2, 3]));
console.log('findExcess2([2, 6, 8, 10, 3])', findExcess2([2, 6, 8, 10, 3]));
console.log('findExcess2([0, 0, 3, 0, 0])', findExcess2([0, 0, 3, 0, 0]));
console.log('findExcess2([1, 1, 0, 1, 1])', findExcess2([1, 1, 0, 1, 1]));

//End of task 3 V2.0