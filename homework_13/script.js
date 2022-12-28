// Homework 13
// Реализовать слайд-шоу из фото на javascript. Ваша задача сделать реализовать функционал переключения изображений с помощью кнопок.

// Заранее в верстке должны быть добавлены все изображения.
// При загрузке страницы - прячутся все изображения кроме первого (вы также можете спрятать их заранее).
// Под картикой должны быть оборажены 2 кнопки - Prev и Next.
// При нажатии на кнопку Next изображение должно переключиться на следующее. Соотвественно при нажатии на Prev - на предыдущее.
// ВАЖНО! Переключение должно происходить бесконечно. То есть, если в данный момент отображено последнее изображение, то при попытке переключиться на следующее, пользователю должно показаться первое изображение. То же самое наоборот, если отображено первое изображение - при переключении назад показывать последнее.
// ЕЩЕ ВАЖНО! Ваш код должен рабоать для любого количества слайдов. Верстка может измениться, при этом js код должен оставаться универсальным.
// Изображения находятся в папке /images но вы также можете взять любые. Стили так же остаются на ваше усмотрение, но помните, что вы фронтенд-разработчики, и у вас должно быть чувство прекрасного :)


const eventButtonPrev = document.getElementById('prev');
const eventButtonNext = document.getElementById('next');

const sliderItem = document.querySelectorAll('.slider__item');

let slideNumber = 0;

const buttonNextClickHandler = (event) =>{
    sliderItem[slideNumber].classList.toggle("slider__item--appear");

    if(slideNumber < sliderItem.length - 1){
        slideNumber++;
    } else slideNumber = 0;

    sliderItem[slideNumber].classList.toggle("slider__item--appear");

}

const buttonPrevClickHandler = (event) =>{
    sliderItem[slideNumber].classList.toggle("slider__item--appear");

    if(slideNumber > 0){
        slideNumber--;
    } else slideNumber = sliderItem.length - 1;

    sliderItem[slideNumber].classList.toggle("slider__item--appear");

}

const slider = () => {
    sliderItem[slideNumber].classList.toggle("slider__item--appear");
    
    eventButtonNext.addEventListener('click', buttonNextClickHandler);
    eventButtonPrev.addEventListener('click', buttonPrevClickHandler);
}

slider();

