'use strict';

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getFullName() {
        return `${this.name} ${this.age}`;
    }
}

const user1 = new User('Petr', 'Ivanov');
const user2 = new User('PAlena', 'Ivanova');
const user3 = new User('Albert', 'sidorov');