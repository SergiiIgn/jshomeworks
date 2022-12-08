// Homework 9

// Task 1 Number array to boolean values array (map)

console.log('Task 1.1');

let arr = [1, 2, -10, -2, 7];

let booleanArr = arr.map(item => item > 0);

console.log('booleanArr', booleanArr);

//End of task 1.1
//Task 1.2 Adult admins (filter and map)

console.log('Task 1.2')

const users = [
    {
      name: 'Sam',
      role: 'admin',
      age: 25,
    },
      {
      name: 'Peter',
      role: 'admin',
      age: 16,
    },
      {
      name: 'Pablo',
      role: 'admin',
      age: 32,
    },
      {
      name: 'Enrico',
      role: 'client',
      age: 43,
    },
      {
      name: 'Mary',
      role: 'client',
      age: 34,
    },
      {
      name: 'Katerine',
      role: 'guest',
      age: 17,
    },
  ];

let adultAdminsChoice = users.filter(item => item.age > 18 && item.role === 'admin');
  
const adultAdmins = adultAdminsChoice.map(item => item.name); // [Sam, Pablo]

console.log('adultAdmins', adultAdmins);

//End of task 1.2
//Task 1.3 Arithmetic mean in array

console.log('Task 1.3');

const numbers = [1, 10, 17, 24, 45];

let result = numbers.reduce((sum, current) => sum + current) / numbers.length;

console.log('The arithmetic mean of array is', result);

//End of task 1.3
//Task 2 Own array methods

console.log('Task 2');

const isNegative = (number) => number < 0;
const increment = (number) => number + 1;
const logger = (element, index, array) => {
  console.log(`In array [${array}] on position ${index}: ${element}`);
};

const ownMap = (numberArray, func) => {
    let res = [];

    for (i = 0; i < numberArray.length; i++) {
        result = func(numberArray[i], i, numberArray);

        if (typeof result === 'boolean' && result){
            res.push(numberArray[i]);

        } else if (result) res.push(result);
    }
    return res;
}

const ownForEach = (numberArray, func) => {
    for (i = 0; i < numberArray.length; i++) {
        console.log(func(numberArray[i], i, numberArray));
    }
}

const ownFilter = (numberArray, func) => {
    let res = [];

    for (i = 0; i < numberArray.length; i++) {
        result = func(numberArray[i], i, numberArray);

        if (typeof result === 'boolean' && result){
            res.push(numberArray[i]);

        } else if (result) res.push(result);
    }
    return res;
}

console.log('ownMap');
ownMap([1, 2, 3], logger);
console.log('res', ownMap([1, 2, 3], increment));
console.log('res', ownMap([-2, 4, -1], isNegative));

console.log('ownForEach');
ownForEach([1, 2, 3], logger);
ownForEach([1, 2, 3], increment);
ownForEach([-2, 4, -1], isNegative);

console.log('ownFilter');
ownFilter([1, 2, 3], logger);
console.log('res', ownFilter([1, 2, 3], increment));
console.log('res', ownFilter([-2, 4, -1], isNegative));

//End of task 2
//Task 3

console.log('Task 3');

const data = [
    {
      name: "John",
      age: 24,
      position: "senior",
      isActive: false,
    },
    {
      name: "Peter",
      age: 33,
      position: "middle",
      isActive: false,
    },
    {
      name: "Sam",
      age: 29,
      position: "junior",
      isActive: true,
    },
    {
      name: "Mary",
      age: 24,
      position: "middle",
      isActive: false,
    },
    {
      name: "Steve",
      age: 23,
      position: "middle",
      isActive: true,
    },
    {
      name: "Kate",
      age: 31,
      position: "middle",
      isActive: false,
    },
    {
      name: "Sally",
      age: 19,
      position: "junior",
      isActive: false,
    },
    {
      name: "Jack",
      age: 19,
      position: "middle",
      isActive: true,
    },
  ];

  const filterData = (array, filterDataObject) => {
    let res = array.slice();

    for (let elem in filterDataObject) {
      res = res.filter(item  =>  (item[elem] === filterDataObject[elem]));
    };

    console.log('res', res);
    return res;
    
  }
  
  filterData(data, { age: 23 });
  // [
  //     {
  //         "name": "Steve",
  //         "age": 23,
  //         "position": "middle",
  //         "isActive": true
  //     }
  // ]
  
  filterData(data, { age: 24 });
  
  // [
  //     {
  //         "name": "John",
  //         "age": 24,
  //         "position": "senior",
  //         "isActive": false
  //     },
  //     {
  //         "name": "Mary",
  //         "age": 24,
  //         "position": "middle",
  //         "isActive": false
  //     }
  // ]
  
  filterData(data, { age: 19, position: "junior" });
  // [
  //     {
  //         "name": "Sally",
  //         "age": 19,
  //         "position": "junior",
  //         "isActive": false
  //     }
  // ]
  
  // то есть, функция вернула массив со всеми работниками на позиции junior и всеми работниками, которым 19 лет