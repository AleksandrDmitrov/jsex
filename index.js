// const GOOD_PASSWORD = 'qwerty';
//
// let counts = 0
//
// while (counts < 5) {
//     const pass = prompt('enter your password');
//     if (pass === GOOD_PASSWORD) {
//         alert('password is correct')
//         break;
//     } else {
//         alert('password is wrong \!\!\!');
//         counts++
//     }
// }
//  if (counts >= 5) {
//      alert('Закончились попытки')
//  }


const GOOD_PASSWORD = 'qwerty';

let counts = 0
let isPasswordEgual = false;

while (counts++ < 5) {

    isPasswordEgual = prompt('enter your password') === GOOD_PASSWORD;
    if (isPasswordEgual) {
        break;
    }

}
const (`Password $ {isPasswordEgual ? 'Cood' : 'Bad'}`);
