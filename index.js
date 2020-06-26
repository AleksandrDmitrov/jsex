'use strict';
//
// function sayHallo(executor, ggeeting) {
//     if (typeof  executor === 'function')
//         executor( ggeeting);
//
// }
//
// sayHallo( console.log, 'Hello my friends');
// sayHallo( alert, 'Hello my friends');



// const arr =[1, 2, 3, 4, 5, 6];
//
// function alertItem(currentItem) {
//     alert( currentItem);
// }
// arr.forEach(alertItem);

// const arr = [1, 2, 3, 4, 5, 6];
// arr.forEach( function ( item, index) {
// console.log( `item value ${item},  item index ${index}`);
// });


function  User(name, surname, isMale, emailAddress, age, isSubscribed = false) {
this.firsrName = name;
this.secondName = surname;
this.isMale = isMale;
this.email = emailAddress;
this.age = age;
this.isSubscribed = isSubscribed;
}
const userProto = new User('','',null, '', 0, true);
userProto.getFullName = function () {
    return `${this.firsrName} ${this.secondName}`;
};
 User.prototype = userProto;
  const users =[];
  for (let i = 0; i < 100; ++i){
      const newUser = new User(
          `Username ${i+1}`,
          `Usersurname ${i+1}`,
          Math.random() > 0.5,
          `user.email${i+1}@gmail.com`,
          Math.ceil( Math.random() * 100),
          Math.random() > 0.5
      );
      users.push(newUser);
  }

  console.table(users);