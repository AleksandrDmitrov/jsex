//
//
// let str = 'Beep!';
//
//
//
//
//
//
// for (let i = 1; i < 10; i++) {
// str += ' Beep!';
// if (i <9){
//     str += ' '
// }
// }
// console.log(str);

function pow(base, power) {
    if (power < 0) {
        return 1 / pow(base,-power);
    }


    let result = 1;
    for (let i = 0; i < power; i++){
        result *= base;
    }

  return result;
}
