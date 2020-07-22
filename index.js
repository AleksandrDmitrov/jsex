'use strict';

const ul = document.querySelector('ul');
const li = document.querySelector('li');
const btn = document.querySelector('button');
const clickHandler = (e) => {
    console.dir(e.currentTarget);
};

ul.addEventListener('click', clickHandler, true);
li.addEventListener('click', clickHandler, true);
btn.addEventListener('click', clickHandler, true);