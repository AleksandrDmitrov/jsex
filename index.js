const CORRECT_PASSWORD = 'qwerty';
const TRY_LIMIT = 5;
let tryCount = 0;

while (tryCount++ < TRY_LIMIT) {
    console.log(`WHILE: ${tryCount}`);
}

tryCount = 0;

do {
    isPasswordCorrect = prompt('Enter password') === CORRECT_PASSWORD;
    if (isPasswordCorrect)
        break;
    {
    }

} while (++tryCount < TRY_LIMIT);

alert(tryCount >= TRY_LIMIT
    ? 'Password incorrect'
    : 'Password correct')