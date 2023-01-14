// Homework 16
// Задание 1 Homework 16
// Вашей задачей будет реализовать функционал приветсвия пользователя на сайте c помощью localStorage.

// При первом входе на сайт просто показывать на экране приветствие Дооро пожаловать!
// Если пользователь уже заходил на сайт (при первом визите), то к базовому приветсвию следует добавить строку Вы заходили раз: N. Где вместо N будет количесво посещений сайта пользователем. Обратите внимание, что первый визит так же считается.
// Функционал должен работать при закрытии вкладки или бразура, обновлении страницы.
console.log('Task 1');


const renderGreeting = () => {
  const greeting = document.createElement('h2');
  greeting.innerText = `Welcome`;
  
  document.body.append(greeting);
  
  let visitsCount;
  
  if (localStorage.getItem("visitsCount") ) {
    visitsCount = JSON.parse(localStorage.getItem("visitsCount")) + 1;
    
    const numberVisitsString = document.createElement('h2');
    numberVisitsString.innerText = `You have logged in ${visitsCount} times`;
    
    document.body.append(numberVisitsString);

  } else {
    visitsCount = 1;
    
  }
  
  localStorage.setItem("visitsCount", visitsCount);
};

renderGreeting();

// localStorage.removeItem("visitsCount");