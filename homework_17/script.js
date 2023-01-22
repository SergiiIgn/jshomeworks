// Реализуйте таймер обратного отсчета на JS.

// При запуске приложения на странице должно находиться 2 кнопки Start и Stop.
// При нажатии пользователем на кнопку Start, на странице должен появиться таймер обратного отсчета. (Количесво секунд, которые будет "идти" таймер можете спросить у пользователя через инпут, prompt или записать в коде).
// Длительность таймера обязательно должна быть указана в секундах.
// Элемент таймера обязательно сожержать часы минуты и секунды. То есть, если пользователь длительность таймера 3600 секунд, изначально на странице должно отобразиться 01:00:00, если 10 секунд, то 00:00:10.
// Каждую секунду таймер должен уменьшаться на секунду.
// При нажатии на кнопку Pause таймер должен остановиться, а при повторном нажатии - продолжиться с того же места.
// По истечению таймера, должна быть возможность обработать возвращенный из функции промис. То есть, при выполнении следующего кода, в консоли через 30 секунд должна появиться строка Timer end!

console.log('Task 1');

let timerDuration = prompt('Set the duration of the timer in seconds');
let intervalId = null;
// let isPause = true;

const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const timerText = document.getElementById('timer');

const transformToFormatHMS = (duration) => {
    const hours = Math.floor(duration / 3600);
    const minutes = Math.floor((duration % 3600) / 60);
    const seconds = duration % 60;

    console.log('H M S', hours, minutes, seconds);

    return {
        hours, 
        minutes, 
        seconds,
    }
}

const formatTime = (timerItem) => {
    return String(timerItem).length < 2 ? `0${timerItem}` : timerItem;

}

const renderTimer = ({hours, minutes, seconds}) => {
    console.log ('hours, minutes, seconds', hours, minutes, seconds);

    const timeString = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
    timerText.innerText = timeString;
    console.log('timeString', timeString);
}

renderTimer(transformToFormatHMS(timerDuration));

const startTimer = () => {
    return new Promise((resolve) => {
    // if (!intervalId) {
        intervalId = setInterval (() => {
            if (timerDuration) {
                renderTimer(transformToFormatHMS(--timerDuration));
                
            }
            
        }, 1000);
    // }
    
    setTimeout(() => {
        resolve();
            
    }, 3000);
    
    });
    
};

const pauseTimer = () => {
    clearInterval(intervalId);
    intervalId = null;
}

startBtn.addEventListener('click', () => {
    if (!timerDuration) {
        return
    }
        
    startTimer().then(() => {
        console.log('Timer end!')
            
    })
})


// });

pauseBtn.addEventListener('click', pauseTimer);
