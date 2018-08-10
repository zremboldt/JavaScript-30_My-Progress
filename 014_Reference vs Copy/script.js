/* eslint-disable */

let age = 100;
const age2 = age;

console.log(age, age2);

age = 200;

console.log(age, age2);




// Lets say we have an array and we want to make a copy of it
const players = ['Wesley', 'Rico', 'Marv', 'Harry'];

const team = players;

console.log(players, team);

// You might think we can do something like this...
team[3] = 'Frank';

console.log(players, team);