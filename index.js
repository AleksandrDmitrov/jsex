'use strict';

// const  myFirstMap = new Map();
//
// myFirstMap.set('key', 'value');
//
// const keyValue = myFirstMap.get('key');
//
// console.log( keyValue);


const vocabulary = new Map();
vocabulary.set('cat', 'кот');
vocabulary.set('dog', 'собака');


function translate(str, separator = ' ') {
    const englishWords = str.split(separator);
    const russianWords = englishWords.map(function (word) {
        return vocabulary.has(word)
            ? vocabulary.get(word)
            : word;
    });
    return russianWords.join(separator);
}
//упрощенная запись
const translate2 = (str, separator = ' ') => str
    .split(separator)
    .map(w => vocabulary.has(w)
        ? vocabulary.get(w)
        : w)
    .join(separator);

alert(translate2('cat'));