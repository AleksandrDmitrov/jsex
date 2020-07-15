'use strict';


function binarySearch(arr, value) {

    let start = 0;
    let end = arr.length - 1;

    let middle = Math.ceil( (start + end) / 2 );

    while (true) {
        if (value === arr[middle]) {
            return middle;
        }
        if (end - start === 1) {
            break;
        }
        if (value > arr[middle]) {
            start = middle;
            middle = Math.ceil( (start + end) / 2 );
        } else {
            end = middle;
            middle = Math.floor( (start + end) / 2 );
        }
    }
    return -1;
}