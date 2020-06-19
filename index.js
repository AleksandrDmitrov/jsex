const userValue = prompt('Chose drink: 1 - Coffe; 2 - Tea; 3 - Water ');


switch (userValue) {
    case '1': {
        alert('Your choice is Coffe');
    }
        break;
    case '2': {
        alert('Your choice is Tea');

    }
        break;
    case '5':
    case '3': {
        alert('Your choice is Water');
    }
        break;
    default: {
        alert('EROR');
    }
}



