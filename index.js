'use strict';

// class User {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     getFullName() {
//         return `${this.name} ${this.age}`;
//     }
// }
//
// const user1 = new User('Petr', '85');
// const user2 = new User('PAlena', '57');
// const user3 = new User('Albert', '22');


// class Worker {
//     constructor(name, surname, rate = 0, days = 0) {
//         this.name = name;
//         this.surname = surname;
//         this.rate = rate;
//         this.days = days;
//     }
//     getSalary(){
//         return this.rate * this.days;
//     }
// }
//
// const worker1 = new Worker('Andrey', 'Sidorov', 45, 28);


// class User {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//
//     getFullName() {
//         return `${this.name} ${this.age}`;
//     }
//
//     isAdult() {
//         return this.age >= 18;
//     }
//
//
// }
//
// const user1 = new User('Petr', '85');
// const user2 = new User('PAlena', '15');
// const user3 = new User('Albert', '22');

class Fuel {
    constructor(volume, density) {
        this.volume = volume;
        this.density = density;
            }
            getWeight(){
        return this.density * this.volume;
            }
}


class Car {
    /**
     *
     * @param {number} volume
     * @param {Fuel} fuel
     */
    constructor(owWeight, fuel) {
        this.owWeight = owWeight;
        this.fuel =  fuel;
    }
    getFullWeight (){
        return this.owWeight + this.fuel.getWeight();
    }
}
 const VW = new Car(1400, new Fuel(100, 0.86))