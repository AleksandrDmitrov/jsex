const userValue = prompt('Please input number ');

const userNumber = Number(userValue);

if (isNaN(userNumber)) {
    alert('input NUMBER\! \! \!');
} else if (userNumber % 5 === 0) {
    alert('number multiple of 5');
} else if (userNumber % 3 === 0) {
    alert('number multiple of 3');
} else if (userNumber % 2 === 0) {
    alert('number multiple of 2');
} else {
    alert('number not multiple of 5,2,3');
}


