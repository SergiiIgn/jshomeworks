// Homework 14
// Из массива с данными создать форму и обработать событие ее отправки.

// 1. Вам предоставляется массив данных, коллекция, где каждый объект характеризует поле ввода, которое необходимо отобразить на экране.

// 2. Поля ввода могут быть следующих типов:

// - текстовое поле (обычный инпут) - text
// - селект - select

// 3. Модель данных, описывающих неободимое поле ввода, следующая:

// element: описывает какой елемент создать: текстовое поле или select
// name: имя для поля ввода (атрибут name)
// label: значение, которое отображается в теге label для текущего поля
// options: массив вариантов option, будет присутсвовать, если значение поля element = 'select', то есть текущее поле ввода - селект

// 4. Массив options представлен в следующей модели данных:

// text: значение, которое показывается пользователю
// value: значение атрибута value тега option

// 5. При сабмите формы страница НЕ должна перезагружаться
// 6. Результатом сабмита формы должен быть объект, в котором хранятся все значения, введенные пользователем. Ключами, по которым хранятся значения, должны быть значения атрибута name соответствущего поля ввода.
// 7. Каждое поле ввода + label к нему требуется завернуть в div.
// 8. В форме обязательно должна содержаться button type=submit.
// 9. Форма должна быть создана полностью средствами JavaScript. В html файле должно быть пусто, максимум только элемент-контейнер, в который вы в последсвии добавите форму.
// 10. Вы можете использовать любые стили и дополнительные элементы. Главное выполнить все по заданию.

// Примеры: Для поля ввода, которое описано следующим образом - результатом должна быть такая верстка:

const formLogin = [{
  element: 'text',
  name: 'login',
  label: 'Логин',
}]
// <div>
//   <label for="login">Логин</label>
//   <input type="text" name="login" id="login" />
// </div>

const formSelect = [{
  element: 'select',
  name: 'fruits',
  label: 'Выберите фрукты',
  options: [
    {
      text: 'Апельсины',
      value: 'oranges',
    },
    {
      text: 'Яблоки',
      value: 'apples',
    },
    {
      text: 'Груши',
      value: 'pears',
    },
  ]
}]
// <div>
//   <label for="fruits">Выберите фрукты</label>
//   <select name="fruits" id="fruits">
//     <option value="oranges">Апельсины</option>
//     <option value="apples">Яблоки</option>
//     <option value="pears">Груши</option>
//   </select>
// </div>

// При следующих вводных данных у вас должен получится примерно такой результат (стили не применялись):

const formConfig = [
  {
    element: "text",
    name: "login",
    label: "Логин",
  },
  {
    element: "text",
    name: "age",
    label: "Возраст",
  },
  {
    element: "select",
    name: "language",
    label: "Выберите язык программирования",
    options: [
      {
        text: "JavaScript",
        value: "js",
      },
      {
        text: "Java",
        value: "java",
      },
      {
        text: "Python",
        value: "python",
      },
    ],
  },
];
// Для тестов используйте этот пример.


const formCreate = (array) => {
  const form = document.createElement('form');
  form.className = 'form';
  form.id = 'form';
  
  
  const btn = document.createElement('button');
  btn.innerText = 'Send';
  btn.type = 'submit';
  btn.id = 'submit';
  
  let input;

    for(let field in array) {
        const div = document.createElement('div');
        const label = document.createElement('label');
        
        label.innerText = array[field].label;
        label.setAttribute('for', array[field].name);
        
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
            input.type = array[field].element;
        }

        input.name = array[field].name;
        input.id = array[field].name;   
        
        form.append(div);
        div.append(label);
        div.append(input);
        
      }
      
    form.append(btn);
    
    document.body.append(form); 
};

// formCreate(formLogin);  //You can only check one example at a time
// formCreate(formSelect); //You can only check one example at a time
formCreate(formConfig); //You can only check one example at a time

const handelForm = document.getElementById("form");

const convertFormDataToObject = (formData) => {
  const formValues = {}

  for (let pair of formData.entries()) {
    formValues[pair[0]] = pair[1] 

  }

  return formValues
}

const handleFormSubmit = (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);

  const preparedData = convertFormDataToObject(formData);
  console.log(`preparedData`, preparedData)

  return preparedData;
};

handelForm.addEventListener("submit", handleFormSubmit);

