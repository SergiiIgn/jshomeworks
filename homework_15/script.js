// Homework 15
// Задание 1 Из объекта в примере ниже, с помощью деструктуризации достаньте следующие значения:

// total, из объекта paging, который вложен в объект meta
// значение is_active, которое принадлежит первому объекту в массиве data. Переименуйте переменную в isActive.
console.log('Task 1');

const response = {
  data: [
    {
      username: "samuel",
      is_active: true,
      created_at: "2020-11-20T09:53:50.000000Z",
    },
    {
      username: "john",
      is_active: false,
      created_at: "2020-11-20T09:53:50.000000Z",
    },
    {
      username: "peter",
      is_active: false,
      created_at: "2020-11-20T09:53:50.000000Z",
    },
  ],
  meta: {
    paging: {
      current: 1,
      next: 2,
      prev: null,
      total: 14,
      per_page: 3,
    },
  },
};

const {
  meta: { 
    paging: { total: metaTotal } 
  },
  data: [{
    is_active: isActive,
  }],
} = response;

console.log('metaTotal', metaTotal);
console.log('PrimaryData', isActive)

// Задание 2

// Из объекта в примере ниже, с помощью деструктуризации достаньте следующие значения:

// name
// surname
// все остальные свойста (height, age) должны быть присвоены объекту parameters.
console.log('Task 2');

const user = {
  name: "gabriel",
  surname: "brown",
  age: 17,
  height: 178,
};

const { name: userName, surname: userSurname, ...parameters } = user;

console.log('name', userName);
console.log('surname', userSurname);
console.log('parameters', parameters);

// Задание 3

// const max = (a, b) => {
//   return a > b ? a : b;
// };
// Переделайте функцию max таким образом, что бы она принимала любое количество аргументов (при условии, что все они являются числами, и возвращала максимальное из них). P.S. В данной задаче нельзя использовать Math.max()
console.log('Task 3');

const max = (...numbers) => {
  return numbers.reduce((a, b) => a > b ? a : b);
}

console.log ('max(1, 2, 3, 7, 5, 4) =', max(1, 2, 3, 7, 5, 4));
console.log ('max(3) =', max(3));

// Задание 4 Переделайте функцию createMessage таким образом, что бы на вход передавались не 4 аргумента, а один объект. Деструктузизуйте его в прямо в аргументах или в теле функции, и присвойте значения по умолчанию:

// Guest для поля author
// текущую дату для поля time
// const createMessage = (author, text, reciever, time) => {
//   return `From ${author} to ${reciever}: ${text} (${time.toLocaleDateString()})`;
// };
// const message = createMessage("Peter", "Hello", "Sam", new Date());

// // после выполнения этого задания, функция должна коректно работать с таким аргументом
console.log('Task 4');

const createMessage = (messageObject) => {
  const { author = 'Guest', time =  new Date(), receiver, text} = messageObject;

  return `From ${author} to ${receiver}: ${text} (${time.toLocaleDateString()})`;
};

const message = createMessage({
  receiver: "John",
  text: "Hi!",
});

console.log('message', message);

// Задание 5
console.log('Task 5');

// Напишите регулярное выражение, которое находит подстроки с такими свойствами:
// начинается с буквенного символа
// заканчивает на буквенный символ
// между первым и послденим символом находятя только числовые символы
// для поиска используйте метод match

let str = "x1y 722a 333 a123v1n a55555a qwe1 1zxc";

// // для строки str результат должен быть следующий: 
// // [ 'x1y', '722a', '333', 'a123v', 'a55555a' ]

const findSubstring = str.match(/\w\d+\w/gi);

console.log('findSubstring', findSubstring);

// Напишите регулярное выражение для валидации домена (адреса сайта)
// Валидные домены: ex.ua, google.com, yandex.ru, site.com.ua, my-page.com
// то есть, доменные имена начинаются с любого количества буквенных символов, чисел, символов - _ ., заканчиваются подстрокой, длина которой не менее 2 символов. Начало и конец обязательно разделены точкой
// используйте метод test

const form = document.getElementById("form");
const input = document.getElementById("input");

const DOMEN_REDEX = /(([\.\w-]+\.)+([\w-]{2,}))/gi;

const handleSubmit = (event) => {
  event.preventDefault();

  
  const { value } = input;
  console.log(value);

  const isDomenValid = DOMEN_REDEX.test(value);
  console.log('isDomenValid', isDomenValid);

  // if (isDomenValid) {
  //   alert('Domen name is valid');
  //   return true;
  // } else {
  //   alert('Domen name is not valid');

  // }
}

form.addEventListener("submit", handleSubmit);

// Напишите регулярное выражаение, которое проверяет строку:
// строка не должна содержать ничего кроме числовых символов
// длина строка должна быть не менее 12, но можно и больше
const stringRegex = /\d{12,}/g;

console.log('stringRegex(1234567890123)', stringRegex.test('1234567890123'));


