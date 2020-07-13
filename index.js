'use strict';

// class User {
//     constructor(name, surname, age, email, isBanned = false) {
//         this._name = name;
//         this._surname = surname;
//         this._age = age;
//         this._email = email;
//         this._isBanned = isBanned;
//     }
//
//     set isBanned(v) {
//         if (typeof v !== 'boolean') {
//             throw new TypeError('Not boolean!')
//         }
//         this._isBanned = v;
//     }
//
// }
//
// class Admin extends User {
//     constructor(name, surname, age, email) {
//         super(name, surname, age, email, false);
//     }
//
//     ban(user){
//         user.isBanned = true;
//     }
//
//     reBan(user){
//         user.isBanned = false;
//     }
//
// }

class Squirrel {
    constructor(name) {
        this._name = name;
    }

    eat() {
        return `Squirrel  ${this._name} is eating`
    }

    climbTree() {
        return `Squirrel  ${this._name} is climbing`
    }
}

class FlyingSquirrel extends Squirrel {
    constructor(name, maxDistance) {
        super(name);
        this._maxDistance = maxDistance;
    }

    fly() {
        return `FlyingSquirrel  ${this._name} is flying at a distance ${this._maxDistance}`
    }
}