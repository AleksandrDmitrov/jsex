function User(firstName, lastName, age) {
    this.name = firstName;
    this.surname = lastName;
    this.age = age;

}

const user3 = new User('Pavel', 'Petrov', 464);
const user4 = new User('Macha', 'Petrova', 25);
const user5 = new User('Mickel', 'Sidorov', 33);

function Country(name, population, area) {
    this.name = name;
    this.population = population;
    this.area = area;
    this.denisty = function denisty() {
        return (this.population / this.area);
    };

}

const country1 = new Country('Canada', 150554, 4647);
const country2 = new Country('Australia', 45554, 85647);
const country3 = new Country('Ganduras', 2561, 3647);

const USA = {
    name: 'USA',
    population: 328000,
    area: 676687,
    denisty() {
        return this.population / this.area;

    },
};

const car = {
    speed: 120,
    acceleration: 20,
    newSpeed(){
        return this.speed + this.acceleration;
    },
};