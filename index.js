// const duck = {
//     name: 'Duck',
//     fly (){
//         alert(`${this.name} flying !`);
//     },
//     speak (){
//         alert(`Quack -Quack !!!`);
//     },
// };
// const duckChild = Object.create(duck);
//
// duckChild.name = 987;
//

// const herbivore = {
//     eat (){
//         alert( `This ${this.name} eats plant!`);
//     }
// };
// const carnivorous = {
//     eat (){
//         alert( `This ${this.name} eats  meat!`);
//     }
// };
// const omnivorous = {
//     eat (){
//         alert( `This ${this.name} eats  anything!`);
//     }
// };
//
//
// const  cow = Object.create(herbivore)
//     cow.name = 'cow';
//
// const  tiger = Object.create(carnivorous)
// cow.name = 'tiger';
//
// const  bear = Object.create(omnivorous)
// cow.name = 'bear';


const car = {
    driver: null,
    go(){
        if(!this.driver){
            return;
        }
        return `Car is going Driver is ${this.driver.name}`;
    }
};
const driver1 = {
    name: 'Sasha',
};
const driver2 = {
    name: 'Masha',
};

car.driver = driver1;
alert(car.go());