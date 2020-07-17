'use strict';

const user1 = {
    name: 'Ivan',
    surname: 'Ivanov',
    age: 24,
};

const { name, surname } = user1;

const  car1 = {
    color: 'white',
    brand: 'BMV',
    engine: {
        volume: 2.0,
        type: 'ICE',
    }
};

const { engine: { volume } } = car1;