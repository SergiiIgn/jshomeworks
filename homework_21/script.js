console.log('Homework 21');

// Homework 21
// Реализуйте мини-приложение SWAPI Board для отображения информмационных карточек о звёздных кораблях, планетах и сухопутном транспорте из вселенной Звёздных войн. В реализации вам поможет уже знакомое вам открытое АПИ (swapi).

// Для реализации необходимо использовать ES6 Class.

// На странице должна присутвовать форма, в которой присутствует select для выбора типа необходимого вам объекта (звёздный корабль, сухопутное ТС или планета) и input, текстовое поле для ввода айди ресурса.

// При сабмите формы с выбраным типом и заполенным полем айди, отправляется запрос на сервер, и с полученными данными должна отрисоваться карточка на странице.

// Для получения данных вам понадобятся следующие эндпоинты

// https://swapi.dev/api/starships/${id} для кораблей
// https://swapi.dev/api/vehicles/${id} для сухопутного транспорта
// https://swapi.dev/api/planets/${id} для планет
// Карточки для каждого типа сущности должна отрисовать уникальные данные. Для звездных кораблей (starships) это:

// название (name)
// модель (model)
// производитель (manufacturer)
// максимальная скорость (max_atmosphering_speed) 
// Для планет:
// название (name)
// климат (climate)
// поверхность (terrain)
// население (population) 
// Для сухопутного транспорта (vehicles):
// название (name)
// стоимость (cost_in_credits)
// количество человек в команде (crew)
// возможное количество пассажиров (passengers)
// Если неообходимого ресурса с переданным айди не существует, то должен быть показан alert с соответсвующим текстом.

// Каждая карточка должна может быть удалена с доски. Для этого в ней должна присутствовать кнопка-крестик.

// Обязательно должны быть реализованы следующие классы:

// Сard - базовый класс для карточки, cодержит базовую логику отрисовки и удаления карточки.
// PlanetCard, StarshipCard и VehicleCard которые содержат в себе логику рендера необходимых полей для конкретного типа карточки
// API - класс содержащий в себе логику работы с сервером. Должны быть реальзованы методы для получения каждого ресурса и метод для отправки запроса / обработки ошибок.
// Необязательное задание продвинутой сложности: При обновлении страницы / закрытии вкладки, карточки должны сохраняться. То есть, при повторном входе пользователь должен увидеть ту же доску с карточками, что и при последнем визите.

const formConfig = [
    {
      element: "select",
      name: "cardType",
      options: [
        {
          text: "Starship",
          value: "starship",
        },
        {
          text: "Planet",
          value: "planet",
        },
        {
          text: "Vehicle",
          value: "vehicle",
        },
      ],
    },
    {
      element: "id",
      name: "id",
    },
  ];

const formCreate = (array) => {
    const form = document.createElement('form');
    form.className = 'form';
    form.id = 'form';
    
    
    const btn = document.createElement('button');
    btn.innerText = 'Add';
    btn.type = 'submit';
    btn.id = 'submit';
    btn.classList.add('input');
    
    let input;
  
      for(let field in array) {
          const div = document.createElement('div');
          
          if(array[field].element === 'select') {
              input = document.createElement('select');
  
              let options = array[field].options;
  
              for(let item in options) {
                  const option = document.createElement('option');
  
                  option.innerText = options[item].text;
                  option.value = options[item].value;
                  input.append(option);
              }
          } else {
              input = document.createElement('input');
              input.setAttribute('placeholder', 'Type the ID');
              input.type = array[field].element;
          }
  
          input.name = array[field].name;
          input.id = array[field].name; 
          
          input.classList.add('input');
          
          form.append(div);
          div.append(input);
          
        }
        
      form.append(btn);
      
      document.body.append(form); 
  };

formCreate(formConfig); 

const handelForm = document.getElementById("form");

const convertFormDataToObject = (formData) => {
  const formValues = {}

  for (let pair of formData.entries()) {
    formValues[pair[0]] = pair[1] 

  }

  return formValues
}

const cardContainer = document.createElement('div');
cardContainer.classList.add('card-container');
document.body.append(cardContainer);

class Card {
    constructor({name}){
        this.card = document.createElement('div');
        this.name = name;
    }

    render(){
        const buttonClose = document.createElement('button');
        const cardName = document.createElement('h4');

        this.card.classList.add('card');
        buttonClose.classList.add('close');
        cardName.classList.add('card-name');

        cardName.innerHTML = this.name;
        buttonClose.innerHTML = 'X';

        buttonClose.addEventListener('click', () => {
            this.remove();
        })

        this.card.append(cardName, buttonClose);
        
    }

    show(){
        const container = cardContainer;
        container.append(this.card);
    }

    remove(){
        this.card.remove();
    }
}

class StarshipCard extends Card{
    constructor({model, manufacturer, max_atmosphering_speed, ...rest}){

        super(rest);
        this.model = model;
        this.manufacturer = manufacturer;
        this.maxSpeed = max_atmosphering_speed;

        this.render();
    }

    render(){
        super.render();

        const textModel = document.createElement('p');
        const textManufacturer = document.createElement('p');
        const textMaxSpeed = document.createElement('p');

        textModel.innerHTML = 'Model: ' + this.model;
        textManufacturer.innerHTML = 'Manufacturer: ' + this.manufacturer;
        textMaxSpeed.innerHTML = 'Max atmosphering speed: ' + this.maxSpeed;

        this.card.append(textModel, textManufacturer, textMaxSpeed);
    }
}

class PlanetCard extends Card{
    constructor({ climate, terrain, population, ...rest }){

        super(rest);
        this.climate = climate;
        this.terrain = terrain;
        this.population = population;

        this.render();
    }

    render(){
        super.render();

        const textClimate = document.createElement('p');
        const textTerrain = document.createElement('p');
        const textPopulation = document.createElement('p');

        textClimate.innerHTML = 'Climate: ' + this.climate;
        textTerrain.innerHTML = 'Terrain: ' + this.terrain;
        textPopulation.innerHTML = 'Population: ' + this.population;

        this.card.append(textClimate, textTerrain, textPopulation);
    }
}

class VehicleCard extends Card{
    constructor({ cost_in_credits, crew, passengers, ...rest }){

        super(rest);
        this.cost = cost_in_credits;
        this.crew = crew;
        this.passengers = passengers;

        this.render();
    }

    render(){
        super.render();

        const textCost = document.createElement('p');
        const textCrew = document.createElement('p');
        const textPassengers = document.createElement('p');

        textCost.innerHTML = 'Cost in credits: ' + this.cost;
        textCrew.innerHTML = 'Crew: ' + this.crew;
        textPassengers.innerHTML = 'Passengers: ' + this.passengers;

        this.card.append(textCost, textCrew, textPassengers);
    }
}

class API{
    constructor(){
        this.BASE_URL = 'https://swapi.dev/api/';
    }

    findErrors = async (response) => {
        if(!response.ok){
            const { detail } = await response.json();
            throw new Error(detail);
        }

        return response;
    }

    getSubject = async(type, id) => {
        const subject = await this.sendRequest(`${this.BASE_URL}${type}s/${id}`);
        return subject;
    }

    sendRequest = async(url) => {
        const response = await this.findErrors(await fetch(url));
        const result = await response.json();

        return result;
    }
}

const api = new API();

const hahdleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const preparedData = convertFormDataToObject(formData);

    const type = preparedData.cardType;
    const id = preparedData.id;

    try{
        const item = await api.getSubject(type, id);

        let card;

        switch (type) {
            case 'starship':
                card = new StarshipCard(item);
              break;
            case 'planet':
                card = new PlanetCard(item);
              break;
            case 'vehicle':
                card = new VehicleCard(item);
              break;
            default:
              console.log('Sorry, we are out of  '+ type + '.');
          }

        card.show();

    }catch(error){
        alert(error.message);
    }
}

form.addEventListener('submit', hahdleSubmit);