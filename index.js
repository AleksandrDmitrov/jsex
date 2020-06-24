function MyArray() {
    this.length = 0;
    }

    const  myArrayProto = new MyArray();

myArrayProto.puch = function puch(item) {
this[this.length] = item;
return ++this.length;
};

MyArray.prototype = myArrayProto;
const arr = new Array();
const arr2 = new Array();

const myArray = new MyArray();
const myArray2 = new MyArray();


