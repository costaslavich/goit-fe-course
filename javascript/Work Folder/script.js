//'use strict';

// const names = ['Mango', 'Poly', 'Ajax'];

// console.log(names);
// console.log('lenght: ', names.length);

// console.log(names[2]);
// console.log('lenght: ', names.length);

// names[0] = 'Kiwi';

// console.log(names);
// console.log('lenght: ', names.length);

// names[3] = 'Mango';

// console.log(names);
// console.log('lenght: ', names.length);

// names[4] = 'Chelsey';

// console.log(names);
// console.log('lenght: ', names.length);

// names.length = 2;

// console.log(names);
// console.log('lenght: ', names.length);

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6, ['a', 'b', 'c', [true, false]]],
//   [7, 8, 9],
// ];
// console.log(matrix);
// console.log(matrix[1][1]);
// console.log(matrix[1][3][0]);
// console.log(matrix[1][3][1]);
// console.log(matrix[1][3][2]);
// console.log(matrix[1][3][3][0]);
//
//SPLIT

// const message = 'Hello World!';
// const arr = message.split('');
// console.log(arr);

// const newMessage = arr.join('');
// console.log(newMessage);

//indexOf # includes()

// const numbers = [1, 5, 7, 10, 15, 111, 157];
// const min = numbers[0];
// const max = numbers[numbers.length - 1];

// const input = prompt(`Угадайте число от ${min} до ${max}`);
// console.log('Пользователь ввел ->', input);

// const value = Number(input);

// const isInArray = numbers.includes(value);

// if (isInArray) {
//   console.log('Вы угадали число!');
// } else {
//   console.log('Вы ввели неверное число!');
// }

//push(), pop(), shift(), unshift();

// const names = ['Mango', 'Ajax', 'Poly'];

// names.push('Kiwi', 123);
// console.log(names);
// names.push('goto');
// console.log(names);
// names.pop();
// console.log(names);
// names.pop();
// console.log(names);
// names.pop();
// console.log(names);

// names.unshift('Hello');
// console.log(names);
// names.unshift('Treg');
// console.log(names);
// names.shift();
// console.log(names);
// names.shift();
// console.log(names);

//slice() Array

// const names = ['Mango', 'Poly', 'Ajax', 'Kiwi'];
// console.log(names);

// const newNames = names.slice(0,2);
// console.log('Array newNames', newNames);

//splice() Array

// const names = ['Mango', 'Poly', 'Ajax', 'Kiwi'];
// names.splice(0,1);
// console.log(names);

// const oldNames = ['Mango', 'Poly', 'Ajax', 'Kiwi'];
// console.log('обычый массив ->  ', oldNames);
// names.splice(2,0,'Chelsey', 'Monkong', [1,2,3,4]);
// // console.log('массив + вставка - > ', names);

// names.splice(1,2,'a','b','c');
// console.log(names);

//Array.concat

// const oldNames = ['Mango', 'Poly'];
// const newNames = ['Kiwi', 'Ajax'];
// console.log('обычый массив ->  ', oldNames);
// console.log(newNames);

// const allNames = [].concat(oldNames, newNames);
// console.log(allNames);

// const add = function(x, y) {
//   console.log('x', x);
//   console.log('y', y);

//   const res = x + y;
//   console.log(res);

//  // return res;
// };

// const res1 = add(10, 20);
// const res2 = add(15, 25);

// const num1 = [2, 334, 5, 567];
// const num2 = [17, 3, 555, 567];
// const num3 = [144, 3,0, 56780, 567];

// const findSmallestNumber = function(arr) {
//   let smallestNumber = arr[0];

//   for (let i = 1; i < arr.length; i += 1) {
//     let currentNumber = arr[i];

//     if (currentNumber < smallestNumber) {
//       smallestNumber = currentNumber;
//     }
//   }

//   return smallestNumber;
// };

// console.log(findSmallestNumber(num1));
// console.log(findSmallestNumber(num2));
// console.log(findSmallestNumber(num3));

// const double = function(arr) {
//   for (let i = 0; i < arr.length; i += 1) {
//     arr[i] = arr[i] * 2;
//   }
// };

// const numbers = [1, 2, 3, 4, 5, 6, 7];

// double(numbers);

// console.log(numbers);

// const add = function(...args) {
//   console.log(arguments);
//   // const args = Array.from(arguments);
//   console.log('args  ---  ', args);
//   let total = 0;

//   for (let i = 0; i < args.length; i += 1) {
//     total += args[i];
//   }
//   return total;
// };

// console.log('Our function ', add(5, 10));
// console.log('Our function ', add(5, 10, 15));
// console.log('Our function ', add(5, 10, 15, 20));

// const fn = function(arr, ...argums) {
//   console.log('arr ->> ', arr);
//   console.log('argums ->> ', argums);
// };
// fn([1, 2, 3], 3, 4, 5);
// fn([4, 6, 7], 9, 4, 12, 19);

// const add = (...args) => {

//   console.log(args);

// };
// add(1, 2, 3);

// const names = ['Mango', 'Poly', 'Ajax'];

// const findName = function(allNames, nameToFind) {
//   return allNames.includes(nameToFind);
// };

// const includes = function(arr, value) {
//   const hasValue = false;

//   for (const element of arr) {
//     if (element === value) return true;
//   }
// };

// const findName = (allNames, nameToFind) => allNames.includes(nameToFind);

// const fn = function(str, callback) {
//   callback(str);
// };

// const greet = function(message) {
//   console.log(message);
// };

// fn('Salute!!!!', greet);

// const printMessage = function(callback) {
//   const message = callback();
//   console.log(message);
// };

// const getMessage = function() {
//   return 'Welcome to the Jungle!!!';
// };

// printMessage(getMessage);

// const login = cb => {
//   const input = prompt('Введите что- то');

//   if (input === null) {
//     return false;
//   }

//   cb(input);
// };

// const greet = name => {
//   console.log(`Добро пожаловать,  ${name} !!!`);
// };

// login(greet);

// console.log(
//   [1, 2, 3, 4, 5].map(function(el) {
//     return el * 3;
//   }),
// );

// const map = (arr, cb) => {
//   const newArray = [];

//   for (const element of arr) {
//     const result = cb(element);
//     newArray.push(result);
//   }

//   return newArray;
// };
// // const numbers = [1, 2, 3, 4, 5];

// // const makeDouble = num => {
// //   return num * 2;
// // };

// // const makeTriple = num => {
// //   return num * 3;
// // };

// // const doubleNumbers = map(numbers, makeDouble);
// // const tripleNumbers = map(numbers, makeTriple);

// // console.log(doubleNumbers);
// // console.log(tripleNumbers);

// // console.log(
// //   [1, 2, 3, 4, 5].map(function(num) {
// //     return num * 2;
// //   }),
// // );

// //Global env
// //Record: {}
// //Parent: null

// const makeCounter = () => {
//   //makeCounter env
//   //Record: {}
//   //Parent: Global env

//   let counter = 0;
//   //makeCounter env
//   //Record: {counter: 0}
//   //Parent: Global env

//   return function() {
//     //anon env
//     //Record: {}
//     //Parent: makeCounter env

//     counter += 1;
//     console.log(counter);
//   };
// };

// //Global env
// //Record: {makeCounter: <function>}
// //Parent: null

// const counter = makeCounter();

// counter();
// counter();
// counter();
// counter();
// counter();

// console.dir(counter);

// const dog = {
//   name: 'Mango',
//   age: 3,
// };

// dog.mood = 'mood';
// dog['breed'] = 'овчарка';
// dog.mood = 'gulty';

// dog.age = 7;
// dog['age'] = 18;

// dog.name = 'Mango';
// dog['name'] = 'Poly';
// dog.name = 'Trixi';

// const key = 'name';
// console.log(dog.name);
// console.log(dog[key]);
// console.log(dog['name']);

// delete dog.name;

// console.log(dog);

// console.log(dog.name);

// const key = 'name';

// const user = {
//   age: 5,
//   [key]: 'Mango',
// };

// //user[key] = 'Mango';

// console.log(user);

// const dog = {
//   name: 'Mango',
//   age: 3,
//   mood: 'happy',
//   makeSound(sound) {
//     console.log(sound);
//   },
//   changeAge(newAge) {
//     dog.age = newAge;
//   },
//   changeMood(newMood) {
//     dog.mood = newMood;
//   },
// };

// console.log(dog);

// dog.makeSound('W0000000fff');

// dog.changeAge(10);
// dog.changeMood('Crazy');

// console.log(dog);

// const dog = {
//   name: 'Mango',
//   age: 3,
//   mood: 'happy',
// };

// for (const key in dog) {
// //console.log(key);
// console.log(dog[key]);
// }

// const order = {
//   salad: 100,
//   bread: 30,
//   milk: 40,
// };

// const calculetPrice = order => {
//   console.group('@calculating');
//   let total = 0;

//   for (const key in order) {
//     console.log(key);

//     total += order[key];
//   }
//   console.groupEnd('@calculating');

//   return total;
// };

// console.log(calculetPrice(order));
// console.log(calculetPrice({ bread: 30, milk: 40 }));

// const order = {
//   salad: 100,
//   bread: 30,
//   milk: 40,
// };

// const keys = Object.keys(order);
// const values = Object.values(order);
// const entries = Object.entries(order);

// console.log(keys);
// console.log(values);
// console.log(entries);

// let total = 0;

// for (const value of values) {
//   console.log(value);

//   total += value;
// }
// console.log(total);
// console.log(order.hasOwnProperty('milk'));

// const storage = {
//   products: [
//     { name: 'apples', price: 50, amount: 1000 },
//     { name: 'grapes', price: 40, amount: 500 },
//     { name: 'bread', price: 30, amount: 200 },
//     { name: 'milk', price: 40, amount: 100 },
//     { name: 'cheese', price: 70, amount: 50 },
//   ],

//   getProductByName(name) {
//     for (const product of storage.products) {
//       if (product.name === name) {
//         return product;
//       }
//     }
//   },
//   addProduct(product) {
//     storage.products.push(product);
//   },
//   changeProductPrice(productName, newPrice) {
//     const product = storage.getProductByName(productName);

//     if (!product) return;

//     product.price = newPrice;

//     // for (const product of storage.products) {
//     //   if (product.name === productName) {
//     //     product.price = newPrice;
//     //   }
//     // }
//   },
//   getProductWithAmount(amount) {
//     const result = [];

//     for (const product of storage.products) {
//       if (product.amount >= amount) {
//         result.push(product);
//       }
//     }
//     return result;
//   },
// };

// console.log(storage);
// const product = storage.getProductByName('cheese');
// console.log(product);
// storage.addProduct({ name: 'rabbit', price: 100, amount: 50 });

// storage.changeProductPrice('milk', 3000);
// console.log(storage);

// const result = storage.getProductWithAmount(100);
// console.log(result);

// const obj1 = { a: 1, b: 2, e: { inner: 10 } };
// const obj2 = { a: 10, b: 22, c: 13 };

// const obj = Object.assign({}, obj1, obj2);
// console.log(obj1);
// console.log(obj2);

// console.log(obj);

// const numbers = [1, 2, 3, 4, 5];

// const copy = numbers.slice();

// const copy = [...numbers];

// console.log(numbers);
// console.log(copy);
// console.log(numbers === copy);

// const obj1 = { a: 1, b: 2, e: { inner: 10 } };
// const obj2 = { a: 10, b: 22, c: 13 };

// //const obj = Object.assign({}, obj1, obj2);

// const obj = { ...obj1, ...obj2, name: 'Mango' };

// console.log(obj1);

// console.log(obj2);

// console.log(obj);

// const foo = (a,c,b,...qwe) => {
//   console.log(qwe);
//   console.log(a);
//   console.log(b);
// };

// foo(1, 2, 3, 4, 5);

// const user = {
//   id: 1,
//   name: 'Mango',
//   age: 2,
//   mood: 'happy',
// };

// const name = user.name;
// const age = user.age;
// const mood = user.mood;

// const { name: userName = 'user', age: userAge = 1, mood = 'Hello' } = user;
// const { name, age, mood } = user;

// const message = `Hello ${userName}, you are ${userAge} year old and ${mood}`;

// console.log(message);

// const foo = function(a = 5) {
//   console.log(a);
// };

// const renderUserProfile = ({ id, name, age, frendCount, mood }) => {
//   //const { id, name, age, frendCount, mood } = user;

//   console.log(name);
// };

// const renderUserProfile = user => {
//   const { id, ...qwe } = user;

//   console.log(qwe);
// };

// renderUserProfile({
//   id: 1,
//   name: 'Mango',
//   age: 2,
//   frendCount: 23,
//   mood: 'happy',
// });

// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };
'use strict';

// const dog = {
//   name: 'Mango',
//   showName() {
//     console.log(this);
//     console.log(this.name);
//   },
// };

// //dog.showName();

// const fn = function(callback) {
//   callback();
// };

// fn(dog.showName.bind(dog));

// const fn = function() {
//   console.log(this);
//   console.log(this.name);
// };

// const bind = function(fnToBind, context, ...outerArgs) {
//   return function(...innerArgs) {
//     return fnToBind.apply(context, [...outerArgs, ...innerArgs]);
//   };
// };

// const boundFn = bind(fn, { name: 'Mango' }, 'a', 'b', 'c');

// boundFn(1, 2, 3, 4, 5);

/*
Note Schema
id: integer
title: string
body: string
priority: integer (0-2)


*/

// const priorityTypes = {
//   LOW: 0,
//   NORMAL: 1,
//   HIGH: 2,
// };

// const notebook = {
//   notes: [],
//   getNotes() {
//     return this.notes;
//   },
//   saveNote(note) {
//     this.notes.push(note);
//   },
//   findNoteById(id) {
//     for (const note of this.notes) {
//       if (note.id === id) {
//         return note;
//       }
//     }
//   },
//   deleteNote(id) {
//     for (let i = 0; i < this.notes.length; i += 1) {
//       const note = this.notes[i];

//       if (note.id === id) {
//         console.log('index ->', i);
//         console.log(note);

//         this.notes.splice(i, 1);
//         return;
//       }
//     }
//   },
//   getNotesWithFilter(filter = '') {
//     for (const note of this.notes) {
//       if (note.title === filter) {
//         return console.log(note);
//       }
//     }
//   },
// };

// //console.log(notebook.getNotes());

// notebook.saveNote({
//   id: 1,
//   title: 'HTML service',
//   body: 'kjhasdkj aksdakj aksdhakdh asdkjhask kasdhkh',
//   priority: priorityTypes.LOW,
// });

// notebook.saveNote({
//   id: 2,
//   title: 'CSS service',
//   body: 'kjdf cbmfl ghjgj rtr TouchList l',
//   priority: priorityTypes.NORMAL,
// });

// notebook.deleteNote(1);

// console.log(notebook.getNotes());

// console.log(notebook.findNoteById(2));

//console.log(notebook.deleteNote());

//notebook.getNotesWithFilter('html');

