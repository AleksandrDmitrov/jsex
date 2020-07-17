'use strict';

const map = new Map();

map.set('key', 'value');
map.set('key1', 'value1');
map.set('key2', 'value2');
map.set('key3', 'value3');
const iter = map.entries();
console.log( iter);

const map2 = new Map([
    ['key1', 'value1'],
    ['key2', 'value2'],
    ['key3', 'value3'],
    ['key4', 'value4'],
    ['key5', 'value5'],
    ['key6', 'value6'],
]);

const map2Copy = new Map(map2);

map.forEach((value, key, f) =>{
    console.log(value,key,f)
});