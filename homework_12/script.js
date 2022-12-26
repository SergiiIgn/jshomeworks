// Homework 12

// Реализовать функцию, которая показывает подсказку (tooltip) возле необходимого элемента. Функция принимает на вход 2 аргумента - элемент, возле которого нужно отбразить подсказку и текст подсказки, который будет отображен в тултипе. Подсказка должна быть отображена над элементом, так же должна быть отцентрована.

// Элемент подсказки должен иметь абсолютное позиционирование, то есть не влиять на остальную верстку
// Статические стили (цвет, размеры и тд) примените с помощью класса, а координаты с помощью объекта style.
// Елемент с подсказкой(тултип) должен быть добавлен в body
// Для сдачи домашняя работа обязательно должна сожержать html с рабочим примером. Если ваш тултип будет выходить за границы экрана - не страшно, просто передвиньте ваш елемент, к которому прикрепили подсказку, дальше от края вьюпорта.

// Пример работы:

// const button = document.getElementById('example');

// createTooltip(button, 'example text bla bla bla');

const button = document.getElementById('example');

const createTooltip = (element, tooltipText) => {
        
    const tooltip = document.createElement('tooltip');
    tooltip.classList.add('tooltip');
        
    tooltip.innerText = tooltipText;
    document.body.append(tooltip);
        
    const styles = tooltip.getBoundingClientRect();
        
    tooltip.style.top = (element.offsetTop - styles.height - 20) + 'px';
    tooltip.style.left = (element.offsetLeft + element.offsetWidth / 2 - styles.width / 2) + 'px';
}

button.addEventListener("mouseover", () => createTooltip(button, 'example text bla bla bla'), false);
