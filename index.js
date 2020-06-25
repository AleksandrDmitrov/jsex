'use strict';

function Car(name) {
    if (!new.target){
        return new  Car(name);
    }
this.name = name;

}

const car1 = new Car( 'Batmobile');
const car2 = Car( 'VW');