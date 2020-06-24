//
// const propName = prompt();
// const test ={
//     [propName] : 'Value',
// };

const multiplicationTable ={};
for (let i =2; i < 10; i++){
    for (let j =2; j < 10; j++){
multiplicationTable[`${i} * ${j} = `] = i * j;
    }
}

console.log(multiplicationTable);
console.log(multiplicationTable[`${9} * ${7} = `]);