'use strict';

const buttons = document.guerySelectorAll('button[data-color]');

const btnColorClickHandler = (e) => {
    const{
        target:{
        parentElement,
        dataset: {color},
    },
} = e;
parentElement.style.setProperty('background-color', color);
};
for(const btn of buttons) {
    btn.addEventListener('click', btnColorClickHandler)
}