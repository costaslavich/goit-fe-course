'use strict';

// const animal = { eats: true, barks: false };

// const dog = Object.create(animal);

// console.log(dog.barks);
// console.log(dog.eats);

// console.log(dog);

// const Hero = function(name, xp) {
//   this.name = name;
//   this.xp = xp;
// };

// Hero.prototype.gainXp = function(amount) {
//   console.log(`${this.name} gained ${amount} experience points`);
//   this.xp += amount;
// };

// const Warrior = function(name, xp, weapon) {
//   /* this = {};

//     Во время выполнения функции Warrior вызываем функцию Hero
//     в контексте объекта создающегося в Warrior, а так же передаем
//     аргументы для инициализации полей this.name и this.xp

//     this это будущий экземпляр Warrior
//   */
//   Hero.call(this, name, xp);

//   this.weapon = weapon;

//   //return this;
// };

// Warrior.prototype = Object.create(Hero.prototype);
// //{__proto__: Hero.prototype}

// Warrior.prototype.constructor = Warrior;

// //{__proto__: Hero.prototype, constructor: Warrior}
// Warrior.prototype.attack = function() {
//   console.log(`${this.name} attacks with ${this.weapon}`);
// };

// //{__proto__: Hero.prototype, constructor: Warrior, attack:f}

// const mango = new Warrior('Mango', 1000, 'axe');

//{__proto__: Warrior.prototype}

// mango.gainXp(1234);
// console.table(mango);

// const Mage = function Mage(name, xp, spells) {
//   Hero.call(this, name, xp);

//   this.spells = spells;
// };

// Mage.prototype = Object.create(Hero.prototype);
// Mage.prototype.constructor = Mage;
// Mage.prototype.castSpell = function() {
//   console.log(`Available spells ${this.spells}`);
// };

// const poly = new Mage('Poly', 100, ['fireball', ' cold snap']);

// console.table(poly);

// poly.castSpell();
// poly.gainXp(2555);

// class Hero {
//   constructor(name, xp) {
//     this.name = name;
//     this.xp = xp;
//   }
//   gainXp(amount) {
//     console.log(`${this.name} gained ${amount} experience points !!!`);
//   }
// }

// class Warrior extends Hero {
//   constructor(name, xp, weapon) {
//     super(name, xp);
//     this.weapon = weapon;
//   }
//   attack() {
//     console.log(`${this.name} attacks with ${this.weapon} !!!`);
//   }
// }
// console.dir(Warrior);

// const mango = new Warrior('Mango', 1000, 'axe');
// console.log(mango);

// mango.gainXp(1234);

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
//   { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
// ];

// console.table(players);

//   метод Array.forEach

// players.forEach((player, index) => {
//   console.log(index, player);
// });

// const playerId = 'player-3';

// Array.map //

// const updatedPlayers = players.map(player => {
//   if (player.id === playerId) {
//     return { ...player, timePlayed: player.timePlayed + 100 };
//   }
//   return player;
// });
// console.table(updatedPlayers);

// const updatedPlayers = players.map(player => {
//   return player.id === playerId
//     ? {
//         ...player,
//         timePlayed: player.timePlayed + 100,
//       }
//     : player;
// });

// console.table(players);

// console.table(updatedPlayers);

// const playerNames = players.map(player => player.name);
// console.table(playerNames);
// const playerId = players.map(player => player.id);
// console.table(playerId);

// const updatedPlayerById = (allPlayers, playerId) =>{
// return allPlayers.map(player =>{
// if(player.id === playerId) {
// return { ...player, timePlayed: player.timePlayed + 100}
// };
// return player;
// });
// };

// const rtt = updatedPlayerById(players, 'player-2')

// console.table(rtt);

//  Array.Filter //

// const onlinePlayers = players.filter(player => player.online);
// console.table(onlinePlayers);

// const playersGames = players.filter(player => player.timePlayed >= 230);
// console.table(playersGames);

//   Array.find //

// const p = players.find(player => player.name === 'Chelsey');
// console.log(p);

// Array.every Array.some //

// const numbers = [1, 2, 3, 4, 5];

// const res = numbers.every(number => number >= 1);

// console.log(res);

// const res1 = numbers.some(number => number >= 3);
// console.log(res1);

// Chaining //

// const onlinePlayers = players.filter(player => player.online);
// console.table(onlinePlayers);

// const playerNames = onlinePlayers.map(player => player.name);
// console.table(playerNames);

// const numbers = [1, 2, 3, 4, 5];

// const resDoubleNum = numbers
//   .filter(number => number > 2)
//   .map(number => number * 2);
// console.log(resDoubleNum);

// const sum = numbers.reduce((call, num) => {
//   call += num;
//   return call;
// }, 0);

// console.log(sum);

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
//   { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
// ];

// console.table(players);

// const totalTimePlayed = players.reduce((totalHours, player) => {
//   totalHours += player.timePlayed;

//   return totalHours;
// }, 0);

// console.log(totalTimePlayed);

// function reduce(arr, callback, acc) {
//   let accumulator = acc;

//   for (let i = 0; i < arr.lenght; i += 1) {
//    accumulator = callback(accumulator, arr[i]);
//   }

// }

// const totalTimePlayed = players.reduce(
//   (totalHours, player) => (totalHours += player.timePlayed),
//   0,
// );

// console.log(totalTimePlayed);

// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// const allTags = tweets.reduce((acc, tweet) => {
//   acc.push(...tweet.tags);

//   return acc;
// }, []).sort();
// console.table(allTags);

// const tagStats = allTags.reduce((acc, tag) => {
// console.group('keys');
// Object.keys(acc).forEach(key => console.log(`${key}:  ${acc[key]}`));
// console.groupEnd('keys');

// console.group('keys');
// Object.entries(acc).forEach(entry =>
//   console.log(`${entry[0]}:  ${entry[1]}`),
// );
// console.groupEnd('keys');

// console.group('keys');
// Object.entries(acc).forEach(([key, value]) =>
//   console.log(`${key} ->:  ${value}`),
// );
// console.groupEnd('keys');

//   if (acc.hasOwnProperty(tag)) {
//     acc[tag] += 1;
//     return acc;
//   }
//   acc[tag] = 1;
//   return acc;
// }, {});

// console.log(tagStats);

// const words = ['retro', 'dedly', 'abcdefg', 'wert', 'hello'];
// words.sort();

// console.table(words);

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
//   { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
// ];

// console.log('Without sort -> ', players);

// players.sort((player1, player2) => {
//   return player1.timePlayed - player2.timePlayed;
// });

// console.log('Sort players -> ', players);

////  8 домашка !!!!!!!!!!!!!!

//console.log(document.body.firstElementChild.children[2].parentNode);

//const list = document.querySelector('.list');
//console.log(list);
//const listItem = document.querySelectorAll('ul.list .item');

//const listItem = list.querySelectorAll('.item');
//console.log(listItem);

//const article = document.querySelector('.article');
//console.log(article);

//const postLink = document.querySelector('.post-link');
//console.log(postLink);
//const article1 = postLink.closest('.article');

//console.log(article1);
//console.log(article.contains(postLink));

//const image = document.querySelector('img');

//console.dir(image.src);

//image.src = 'css/architecture-bed.jpg';

// const button = document.querySelector('button');

// button.addEventListener('click', function() {
//   image.src = 'css/architecture-bed.jpg';
// });
// console.log(button);

//const articleTitle = document.querySelector('.article h2');
//console.dir(articleTitle);

//articleTitle.textContent = 'New Cool Title';
//console.log(articleTitle.style);

//const css = getComputedStyle(list);
//console.log(css);

//const postLink = document.querySelector('.post-link');
//console.dir(postLink.classList);
//console.dir(postLink.classList.contains('post-link'));

//postLink.classList.add('reactive');

// const article = document.querySelector('article');
//console.dir(article.dataset.id);

// const button = document.querySelector('.action');
// const action = button.dataset.action;

// console.log(button);
// console.log(action);

//////////////////

//const box = document.createElement('div');
//console.log(box);
//box.textContent = 'OOOOO)))___))))';
//box.classList.add('box');

//console.log(box);

//document.body.appendChild(box);
//document.body.insertBefore(box, document.body.firstElementChild);

{
  /* <li class="list-item">
        <p class="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
          laboriosam odio illo aliquid quo.
        </p>
        <div class="actions">
          <button class="btn">Edit</button>
          <button class="btn">Delete</button>
        </div>
      </li> */
}

// const data = [
//   {
//     id: 'id-1',
//     body: 'loresanksad akdnskas andsaks naksdnad kasndkan asndkasn kasndkadn',
//   },
//   {
//     id: 'id-2',
//     body:
//       'loresanksad d ad a ad a ad asd adsd a ad ad ad ad ad ad akdnskas andsaks naksdnad kasndkan asndkasn kasndkadn',
//   },
//   {
//     id: 'id-3',
//     body: 'loresanksad akdnskas andsaks naksdnad kasndkan asndkasn kasndkadn',
//   },
// ];

// const createListItem = ({ id, body }) => {
//   const listItem = document.createElement('li');
//   listItem.classList.add('list-item');
//   listItem.dataset.id = id;

//   const text = document.createElement('p');
//   text.classList.add('text');
//   text.textContent = body;

//   const actionContainer = document.createElement('div');
//   actionContainer.classList.add('actions');

//   const editButton = document.createElement('button');
//   editButton.classList.add('btn');
//   editButton.textContent = 'Edit';

//   const deleteButton = document.createElement('button');
//   deleteButton.classList.add('btn');
//   deleteButton.textContent = 'Delete';

//   actionContainer.appendChild(editButton);
//   actionContainer.appendChild(deleteButton);

//   //console.log(actionContainer);
//   listItem.appendChild(text);
//   listItem.appendChild(actionContainer);
//   return listItem;
// };

// const list = document.querySelector('.list');

// const listItem = data.map(item => createListItem(item));
// //console.log(listItem);

// list.append(...listItem);
//const item = createListItem(data[2]);
//const item = createListItem();
//console.log(item);

//list.appendChild(item);
//console.log(list);

///////////////////////////////////////////////////////////
// const noChangeTap = 1;
// const beerTaps = 20;

// const goodBeerTaps = function goodBeerTaps() {
// const arr =[];
// for(let i=0; i<arr.)
// };

// console.log(item);
// console.log(goodBeerTaps(beerTaps));

// const numbers = [];
// for (let i = 1; i <= 20; i += 1) {
//   numbers.push(i);
// }
//console.log(numbers);

// const goodBeerTaps = function goodBeerTaps(num) {
//   //console.log(num);

//   for (let i = 0; i <= num.length; i += 1) {
//     let value = 1;
//     const newArr = [];
//     if (num[i] % value && num[i] < value) {
//       newArr.push[value];
//       value += 1;
//     }

//     console.log(newArr);
//   }
// };

// goodBeerTaps(numbers);
// /////////////////////////////////////////////////////

// const refs ={
//   button: document.querySelector('.action'),
// };

// const handleButtonClick = event => {
//   console.log('event.target -->', event.target.textContent);
//   console.log('Clickeed !!!!!');
// };

// refs.button.addEventListener('click', handleButtonClick);

////////////////////////////////

// const refs = {
//   openModalButton: document.querySelector('button[data-action="open-modal"]'),
//   closeModalButton: document.querySelector('button[data-action="close-modal"]'),
//   modalBackdrop: document.querySelector('.js-backdrop'),
//   body: document.body,
// };

// const openModal = () => {
//   refs.body.classList.add('modal-visible');

//   window.addEventListener('keydown', handleKeyPress);
// };

// const closeModal = () => {
//   refs.body.classList.remove('modal-visible');

//   window.removeEventListener('keydown', handleKeyPress);
// };

// const handleKeyPress = e => {
//   console.log(e);
  
//   if (e.code !== 'Escape') {
//     return;
//   }
//   closeModal();
// };

// const handleBackdropClick = ({ target, currentTarget }) => {
//   // console.log('target ->', target);
//   // console.log('currentTarget ->', currentTarget);

//   if (target !== currentTarget) {
//     return;
//   }
//   closeModal();
// };

// refs.modalBackdrop.addEventListener('click', handleBackdropClick);
// refs.openModalButton.addEventListener('click', openModal);
// refs.closeModalButton.addEventListener('click', closeModal);

