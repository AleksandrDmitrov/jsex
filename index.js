

function  Cat(name, isMale) {
console.log( this);
}

const cat1 = new Cat('Murz',true);

const user = {
    name: 'Test',
}
user.age = 55;
user.speak = function f() {
alert( 'I am speaking')
};