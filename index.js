'use strict';

const buttons = document.getElementsByTagName ('button');
const btnClickHandler = ({target: 
    {dataset: {key},
}
})=>{
    console.log(key);
}

for (const btn of buttons){
    btn.onclick = btnClickHandler;
}