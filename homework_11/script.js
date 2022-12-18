// Homework 11

// Реализовать функцию, которая принимает на вход массив с данными (товары) и рендерит на страницу карточки товаров.
// Пример масисива данных, с которыми должна работать функция, используйте их для теста:
// Для реализации задачи используйте разные способы, как и innerHTML с шаблонными строками, так и метод append()

const products = [
  {
    name: "Iphone 12",
    brand: "Apple",
    price: 3200000,
    properties: ["Best camera", "Fast memory", "Apple A12 Processor"],
  },
  {
    name: "Galaxy S20 Ultra",
    brand: "Samsung",
    price: 2900000,
    properties: ["120 hz screen", "Water resistance"],
  },
  {
    name: "MI 9",
    brand: "Xiaomi",
    price: 1300000,
    properties: ["Best price", "Pay less - get more!"],
  },
];

const renderGoodsCardList = (arr) => {

  if (arr.length == 0) {
    console.log(`This array is empty`);
    return false;
  }

  const goosCardList = document.createElement('div');

  arr.forEach ((item) => {
    const containerCard = document.createElement('div');

    const name = document.createElement('h2');
    name.innerText = item.name;

    const brand = document.createElement('h3');
    brand.innerText = item.brand;

    const list = document.createElement('ul');

    item.properties.forEach((elem) => {
          list.innerHTML += `<li>${elem}</li>`
        })

    containerCard.append(name, brand, list);
    goosCardList.append(containerCard);

  })

  document.body.append(goosCardList);
}

const result = renderGoodsCardList(products);