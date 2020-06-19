const firstValue = prompt('Input number 1');
const firstNumber = Number(firstValue);
if (!isNaN(firstNumber)) {
    const secondValue = prompt("Input number 2")
    const secondNumber = Number(secondValue);
    if (!isNaN(secondNumber)) {
        const userFunction = prompt('Choice function +; -; *; /');
        switch (userFunction) {
            case '+': {
                alert('answer = ' + sum(firstNumber, secondNumber))
            }
                break;
            case '-': {
                alert('answer = ' + subtraction(firstNumber, secondNumber))
            }
                break;
            case '*': {
                alert('answer = ' + multiplication(firstNumber, secondNumber))
            }
                break;
            case '/': {
                alert('answer = ' + division(firstNumber, secondNumber))
            }
                break;


        }
    }
}


function sum(a, b) {
    return a + b;

}

function subtraction(a, b) {
    return a - b;

}

function multiplication(a, b) {
    return a * b;

}

function division(a, b) {
    return a / b;

}

