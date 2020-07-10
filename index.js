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

const user1 = new User('Petr', '85');
const user2 = new User('PAlena', '57');
const user3 = new User('Albert', '22');