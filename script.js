'use strict';

const books = document.querySelectorAll('.books');
const book = document.querySelectorAll('.book');
const adv = document.querySelector('.adv');
const ulBook2 = book[0].querySelectorAll('ul');
const liBook2 = book[0].querySelectorAll('ul>li');
const ulBook5 = book[5].querySelectorAll('ul');
const liBook5 = book[5].querySelectorAll('ul>li');

const ulBook6 = book[2].querySelectorAll('ul');
const liBook6 = book[2].querySelectorAll('ul>li');
const liBook6Chapt8 = liBook6[0].cloneNode(true);

books[0].prepend(book[1]);
books[0].append(book[3]);
books[0].append(book[5]);
books[0].append(book[2]);

document.body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

book[4].querySelector('h2 > a').innerHTML = 'Книга 3. this и Прототипы Объектов'; 

adv.remove();

ulBook2[0].prepend(liBook2[8]);
ulBook2[0].prepend(liBook2[6]);
ulBook2[0].prepend(liBook2[3]);
ulBook2[0].prepend(liBook2[1]);
ulBook2[0].prepend(liBook2[0]);
ulBook2[0].append(liBook2[2]);
ulBook2[0].append(liBook2[10]);

ulBook5[0].prepend(liBook5[7]);
ulBook5[0].prepend(liBook5[6]);
ulBook5[0].prepend(liBook5[2]);
ulBook5[0].prepend(liBook5[4]);
ulBook5[0].prepend(liBook5[3]);
ulBook5[0].prepend(liBook5[9]);
ulBook5[0].prepend(liBook5[1]);
ulBook5[0].prepend(liBook5[0]);


liBook6Chapt8.innerHTML = 'Глава 8: За пределами ES6';
ulBook6[0].append(liBook6Chapt8);
ulBook6[0].append(liBook6[9]);




