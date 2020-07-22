'use strict';

const ul = document.querySelector('ul');
const li = document.querySelector('li');
const btn = document.querySelector('button');
const clickHandler = (e) => {
    e.stopPropagation();
    console.dir(e.currentTarget);
};

btn.addEventListener('click', clickHandler,{
    once: true,
});
