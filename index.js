'use strict';

const values = [];




const form = document.getElementById('vForm');
const list = document.getElementById('vList');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const { target } = event;
    const { value } = target.VALUE_HERE;
    values.push(value);
    list.append(createListItem( value ));
    target.reset();
  });


  /**
   * 
   * @param {string} str 
   * @returns {HTMLElement} 
   */
function createListItem(str){
    const li = document.createElement('li');


const btn = document.createElement('button');
btn.append(document.createTextNode('delete'));

li.append(document.createTextNode(str), btn);


    li.append(document.createTextNode(str));
    
    return li;
}
