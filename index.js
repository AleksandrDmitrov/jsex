const duck = {
    name: 'Duck',
    fly (){
        alert(`${this.name} flying !`);
    },
    speak (){
        alert(`Quack -Quack !!!`);
    },
};
const duckChild = Object.create(duck);

duckChild.name = 987;