'use strict';

const user1 = {
    name: 'Ivan',
    surname: 'Ivanov',
    age: 24,
    contacts: ['facebook.com', 'twitter.com','googleplus.com', 'vk.com' ]
};

const {contacts: [ , tw, ...restCont]} = user1;


const  car1 = {
    color: 'white',
    brand: 'BMV',
    engine: {
        volume: 2.0,
        type: 'ICE',
    }
};

const { engine,...vseOst } = car1;

function getUserFullName({name, surname}) {
    return `${name} ${surname}`;

}

const arr = [1,2,3,4,5,6,7];
const [first, , third] = arr;