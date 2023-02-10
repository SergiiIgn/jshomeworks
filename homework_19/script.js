console.log('Homework 19');

// Task 1
// Получить информацию о стране, в которой находится пользователь (местонаходжение определяется по IP) и вывести на страницу информацию о ней (название, столицу, валюту и флаг). Для этого вам понадобятся следующие API:

// 1. Для получения названия, столицы и валюты используйте эндпойнт https://ipapi.co/json/ который вернет вам информацию о стране, которой принадлежит ваш текущий IP адрес.
// 2. Для получения флага сделайте запрос по адресу https://restcountries.com/v2/name/NAME где вместо NAME необходимо подставить название страны, которое вы получите из первого запроса.
// Все запросы отправляйте методом GET. Обязательно используйте fetch и async await.

console.log('Task 1');

const IPAPI_URL = 'https://ipapi.co/json/';
const RESTCOUNTRIES_URL = 'https://restcountries.com/v2/name/';

const preloader = document.createElement('div');
preloader.classList.add('preloader');

const renderPreloader = (container, show) => {
  preloader.innerHTML = '';

  const cup = document.createElement('div');
  const cupHandler = document.createElement('div');
  const cupSteam = document.createElement('div');
  const cupSteamFlow = document.createElement('div');
    
  
  cup.classList.add('cup');
  cupHandler.classList.add('cup__handler');
  cupSteam.classList.add('cup__steam');
  cupSteamFlow.classList.add('cup__steam-flow');
  
  cupSteam.append(cupSteamFlow);
  cup.append(cupHandler, cupSteam);
  preloader.append(cup);

  if (show) {
    preloader.style.display = 'grid';
  } else {
    preloader.style.display = 'none';
    
  }
  container.append(preloader);
};

const getInformationByIp = async () => {
  try{
    const response = await fetch(IPAPI_URL);

    if (response.status === 200) {
      const countryInformation = await response.json();
  
      return countryInformation

    } else {
      throw new Error(`There was an error\nError code is ${response.status}`);
    }
  } catch (error) {
    let errorText = error.message;
    alert(errorText);
  }
}

const getRestInformation = async (name) => {
  try{
    const response = await fetch(`${RESTCOUNTRIES_URL}${name}`);

    if (response.status === 200) {
      const countryInformation = await response.json();
  
      return (countryInformation[0]);
    } else {
      throw new Error(`There was an error\nError code is ${response.status}`);
    }

  } catch (error) {
    let errorText = error.message;
    alert(errorText);
  }
}

const renderCountryCard = async (container) => {
    renderPreloader(container, true);

    const { city, currency, country_name } = await getInformationByIp();

    const { flag } = await getRestInformation(country_name);

    const countryCardContainer = document.createElement('div');
    const countryName = document.createElement('h2');
    const countryCapital = document.createElement('h4');
    const countryCurrency = document.createElement('p');

    const countryFlag = document.createElement(`img`);

    countryCardContainer.classList.add('container');
    countryName.classList.add('title');
    countryCapital.classList.add('subtitle');
    countryCurrency.classList.add('text');

    countryFlag.classList.add('img');
    countryFlag.setAttribute('src', flag);

    countryName.innerText = country_name;
    countryCapital.innerText = city;
    countryCurrency.innerText = currency;

    countryCardContainer.append(countryName, countryCapital, countryCurrency, countryFlag);

    renderPreloader (container, false);

    container.append(countryCardContainer);
}

// renderCountryCard(document.body); // Для перевірки завдання 1 розкоментувати цю стрічку

//End of Task 1

// Task 2
// С помощью сервиса swapi.dev запросите информацию о персонаже Звездных войн, а так же все фильмы, в которых он появлялся.

// 1. Для этого на странице должна быть форма, в которую пользователь может ввести id желаемого персонажа (доступны айди персонажей от 1 до 82).
// 2. После отправки формы, необходио отправить запрос по адресу https://swapi.dev/api/people/ID где вместо ID необходимо подставить значение, которое пользователь ввел в форму.
// 3. Далее, на странице необходимо отрендерить карточку с именем персонажа и кнопкой Фильмы.
// 4. При клике на кнопку в карточке, необходимо добавить в карточку с персонажем названия всех фильмов, в которых он появлялся. Информация о каждом фильме хранится по ссылкам, которые перечисленны в массиве по ключу films в ответе на предыдущий запрос (запрос на /people/ID).
// 5. Все запросы на фильмы необходимо отправлять с помощью метода Promise.all.

console.log('Task 2');

const SWAPI_URL = 'https://swapi.dev/api/people/';

const renderForm = (container) => {
  const form = document.createElement('form');
  const input = document.createElement('input');
  const button = document.createElement('button');

  form.setAttribute('id', 'form');
  form.setAttribute('action', '#');

  input.setAttribute('type', 'text');
  input.setAttribute('id', 'input');
  input.setAttribute('name', 'input');
  input.setAttribute('placeholder', 'Star Wars character ID');

  button.setAttribute('type', 'submit');
  button.innerText = 'Get character';

  form.append(input, button);

  container.append(form);
}

renderForm(document.body);

const getCharacter = async (idCharacter) => {
  try{
    const response = await fetch(`${SWAPI_URL}${idCharacter}`);

    if (response.status === 200) {
      const characterInformation = await response.json();
  
      return characterInformation;

    } else {
      throw new Error(`There was an error\nError code is ${response.status}`);
    }
  } catch (error) {
    let errorText = error.message;
    alert(errorText);
  }
}


const renderCharacterCard = (name, films, container) => {
  const oldCharacterCard = document.getElementById('characterCardContainer');

  if (oldCharacterCard) {
    oldCharacterCard.remove();

  }

  const characterCardContainer = document.createElement('div');
  const characterName = document.createElement('h2');
  const filmsButton = document.createElement('button');

  characterCardContainer.classList.add('container');
  characterName.classList.add('title');

  characterCardContainer.setAttribute('id', 'characterCardContainer');

  characterName.innerText = name;
  filmsButton.innerText = 'Movies';

  characterCardContainer.append(characterName, filmsButton);


  container.append(characterCardContainer);

  filmsButton.addEventListener('click', () => {
    const moviesContainer = document.getElementById('moviesContainer');
    
    if (moviesContainer) {
      moviesContainer.remove();

    } else {
      getAllMovies(films);

    }
  })
}

const getMovieTitle = async (film) => {
  try{
    const response = await fetch(film);

    if (response.status === 200) {
      const { title } = await response.json();
  
      return title;

    } else {
      throw new Error(`There was an error\nError code is ${response.status}`);
    }
  } catch (error) {
    let errorText = error.message;
    alert(errorText);
  }
}

const getAllMovies = async (urls) => {
  renderPreloader(document.body, true);

  const requests = urls.map((url) => getMovieTitle(url));
  const responses = await Promise.all(requests);

  const moviesContainer = document.createElement('div');
  moviesContainer.setAttribute('id', 'moviesContainer');

  renderPreloader(document.body, false);

  const res = responses.map((movieTitle) => renderCharacterMovie(movieTitle, moviesContainer));

};

const renderCharacterMovie = async (movie, container) => {

  const characterCard = document.getElementById('characterCardContainer');
  const movieTitleContainer = document.createElement('div');

  movieTitleContainer.classList.add('text');
  
  movieTitleContainer.append(movie);

  container.append(movieTitleContainer);
  
  characterCard.append(container);

}

const handleSubmit = async (event) => {
  event.preventDefault();
 
  renderPreloader(document.body, true);

  const { value } = input;

  if (value < 1 || value > 82 || !Number(value)) {
    alert('ID is incorrect. Try again');
    return;
  }

  const promises = [
  new Promise((resolve) => setTimeout(() => resolve(getCharacter(value))), 0),
  ]
  const result = await Promise.all(promises);

  const { name: characterName, films } = result[0];

  renderPreloader(document.body, false);

  renderCharacterCard (characterName, films, document.body);

}

form.addEventListener('submit', handleSubmit);

//End of Task 2