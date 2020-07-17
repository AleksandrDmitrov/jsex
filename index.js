'use strict';

const myFirstSet = new Set();

for (let i = 0; i < 20; i++){
    myFirstSet.add( i );
}


const notUniq = [1,1,1,1,2,2,2,2,3,3,3,3,4,4];
const setFromArr = new Set(notUniq);
const Uniq = [...setFromArr];

const mapFromSet = new Map(myFirstSet.entries());