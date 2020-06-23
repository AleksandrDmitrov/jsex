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

// function pow(base, power) {
//     if (power < 0) {
//         return 1 / pow(base,-power);
//     }
//
//
//     let result = 1;
//     for (let i = 0; i < power; i++){
//         result *= base;
//     }
//
//   return result;
// }

function getNthFibNumber(n) {
    if (n === 1){
        return 0;
    }
   let prev1 = 0;
   let prev2 = 0;
   let next = prev1 + prev2;

   for (let i=3; i<n; i++){
       prev1 = prev2;
       prev2 = next;
       next = prev1 + prev2;
   }

   return next;
}

