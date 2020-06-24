const  userValue = Number(prompt('Input your number'));
if (!isNaN(userValue)){
    for (let i = 0; i <= 100; i+= userValue){
        console.log(i);
    }
}