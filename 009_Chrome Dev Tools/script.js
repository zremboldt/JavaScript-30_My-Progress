// https://www.youtube.com/watch?v=xkzDaKwinA8&list=PLu8EoSxDXHP6CGK4YVJhL_VWetA865GOH&index=9

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}



const dogs = [
  { name: 'Snickers', age: 2 },
  { name: 'Hugo', age: 8 },
  { name: 'Ralph', age: 4 },
];



// console logging
console.log('%c → Style me! ←', 'font-size: 26px; color: mediumSpringGreen;');



console.warn('OH NOOOO!');



console.error('We got probs.');



console.assert(1 === 1, 'That is wrong'); // this only fires if its false.
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'That is wrong'); // this only fires if its false.



// console.clear(); // Haha! Developer practical jokes. Put this at the bottom of your js file.



// Link about console.dir(): https://youtu.be/xkzDaKwinA8?list=PLu8EoSxDXHP6CGK4YVJhL_VWetA865GOH&t=334
console.dir(p);



dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}.`);
  console.log(`${dog.name} is ${dog.age} years old.`);
  console.log(`${dog.name} is ${dog.age * 7} in dog years.`);
  console.groupEnd(`${dog.name}`);
});



console.groupCollapsed('Counting');
console.count('Mark');
console.count('Leah');
console.count('Mark');
console.count('Leah');
console.count('Fred');
console.count('Fred');
console.count('Mark');
console.count('Fred');
console.count('Fred');
console.count('Leah');
console.count('Fred');
console.count('Mark');
console.count('Mark');
console.count('Mark');
console.count('Mark');
console.count('Fred');
console.count('Mark');
console.count('Mark');
console.count('Leah');
console.count('Mark');
console.count('Leah');
console.count('Mark');
console.count('Leah');
console.groupEnd('Counting');



console.table(dogs);