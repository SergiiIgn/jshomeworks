// Homework 5

// Task 1

// for
console.log('Cycle for');

let i;

for (i = 1; i <= 10;) {
    console.log(i++);
}

for (i = 20; i >= 10;) {
    console.log(i--);
}

// while
console.log('Cycle while');

let j = 0;

while(j++ < 10) {
    console.log(j);
}

j = 20;

while(j >= 10) {
    console.log(j--);
}

//do while

console.log('Cycle do while');

let k = 0;

do {
    k++;
    console.log(k);
} while (k < 10);

k = 20;

do {
    console.log(k--);
} while (k >= 10);

//End of task 1
//Task 2 Sum

console.log('Prime numbers');

let startOfInterval = Number(prompt('Give a start of interval'));
let finishOfInterval = Number(prompt('Give a finish of interval'));

const primeNumbers = (a, b) => {
    if (a < b) {
        a++;
        for (; a < b; a++) {
            for (let n = 2; n <= a; n++) {
                if (n == a) {
                    console.log(a);
                }
                if (a % n == 0) {
                    break;
                } 
            }
        }
    } else if (a > b) {
        a--;
        for (; a > b; a--) {
            for (let n = 2; n <= a; n++) {
                if (n == a) {
                    console.log(a);
                }
                if (a % n == 0) {
                    break;
                } 
            }
        }
    }
};

primeNumbers(startOfInterval, finishOfInterval);

//End of task 2
//Task 3 Authorization

const LOGIN = 'ADMIN';
const PASSWORD = '1q2w3e';

const authorize = () => {
    let userPassword;
    let userLogin;
    let isAuthSuccess = false;
    let counter = 3;

    do {
        userLogin = prompt('Login:');
        if (!userLogin) {
            alert('Type a login');
            continue;
        }

        userPassword = prompt('Password:');
        if (!userPassword) {
            alert('Type a password');
            continue;
        }

        if (userPassword === PASSWORD && userLogin === LOGIN) {
            isAuthSuccess = true;
        } else {
            counter--;
            alert('The entered data is incorrect! You have ' + counter + ' more tries');
        }
    } while (!isAuthSuccess && counter);

    if (counter) {
        alert('Welcome');
     } else {
        alert('Sorry! Try next time...');
        return(false);
     }
};

authorize();

//End of task 3
//Task 4 Pyramid

console.log('Pyramid');
const drawPyramid = (height) => {
    for (let i = 0; i < height; i++) {
        let spaceBefore = '';
        let stars = '';
        
        for (let j = 0; j < 2 * i +1; j++) {
            stars += '*';
        }

        for (let k = 0; k < height -i -1; k++) {
            spaceBefore += ' ';
        }

        console.log(spaceBefore + stars);
    }
};

const desireHeight = Number(prompt('Get a height of pyramid'));
drawPyramid(desireHeight);

//End of task 4
