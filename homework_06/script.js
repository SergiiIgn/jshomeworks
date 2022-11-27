// Homework 5

// Task 1 User registration with password validation

// 1. Спрашивать у пользователя имя, фамилию и пароль до тех пор, пока он не введет корректные значения.
// 2. Валидными именем и фамилией явлются любые строки, которые содержат хотя бы 1 символ.
// 3. Валидный пароль - это любая строка длинеее чем 6 символов и содержащая символы разного регистра. 
//    Примеры корректных паролей: AbCxx12, 1234xY, abcdeF. Примеры НЕ корректных паролей: 1q2w3e, 123456, xyzxyz.
// 4. После валидации данных необходимо отформатировать имя и фамилию и вывести на экран с помощью alert полное имя 
//    пользователся в правильном формате. Под форматированием имеется ввиду написание имени и фамилии с большой буквы. 
//    Например, если юзер ввел jOhn bROWN, то в результате форматирования должно получится John Brown.


console.log('Registration');

const checkPasswordValidation = (userPassword) => {
    let upDetector = 0;
    let lowDetector = 0;

    if (userPassword.length <= 6) return false;

    for (let i = 0; i < userPassword.length; i++) {
        if (userPassword[i] >= 'a' && userPassword[i] <= 'z') lowDetector++;

        if (userPassword[i] >= 'A' && userPassword[i] <= 'Z') upDetector++;

        if (upDetector && lowDetector) {
            return true;
            break;
        }
    }

    return false;
}

const registration = () => {
    let userName;
    let userSurname;
    let userPassword;
    let isRegSuccess = false;

    do {
        userName = prompt('Name:');
        if (!userName) {
            alert('The entered name is invalid. Please enter a valid name.');
            continue;
        }

        userSurname = prompt('Surname:');
        if (!userSurname) {
            alert('The entered surname is invalid. Please enter a valid surname.');
            continue;
        }

        userPassword = prompt('Password:');
        if (!checkPasswordValidation(userPassword)) {
            alert('The entered password is invalid. Please enter a valid password.');
            continue;
        }

        isRegSuccess = true;

    } while (!isRegSuccess);

    let str = userName[0].toUpperCase() + userName.slice(1).toLowerCase();

    str += ' ' + userSurname[0].toUpperCase() + userSurname.slice(1).toLowerCase();

    alert(str);
};

registration();

//End of task 1
//Task 2 Random number generator in a given interval

console.log('Random number generator in a given interval');

let startOfInterval = Number(prompt('Give a start of interval'));
let finishOfInterval = Number(prompt('Give a finish of interval'));

const getRandomNumber = (a, b) => {
    if (a < b) {
        return Math.random() * (b - a + 0.0000000000000001) + a;

    } else {

        alert('Start and finish of the interval are invalid');
        return false;
    }
};

console.log('Random number', getRandomNumber(startOfInterval, finishOfInterval));

//End of task 2