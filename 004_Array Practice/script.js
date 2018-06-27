
// ## Array Cardio
// Some data we can work with

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];






// -----------------------------------------------------------------
// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

// Without the arrow function
const inventors1500s = inventors.filter(function(inventor) {
  if (inventor.year >= 1500 && inventor.year < 1600) {
    return true;
  }
});

// With the arrow function
const inventorsEarly = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
// console.table(inventorsEarly);





// -----------------------------------------------------------------
// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names

const inventorNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
// console.table(inventorNames);





// -----------------------------------------------------------------
// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

const ordered = inventors.sort(function(a, b) {
  if (a.year > b.year) {
    return 1;
  } else {
    return -1;
  }
});

// Using arrow functions and a Conditional (ternary) Operator, which is just a simplified if statement.
const orderedES6 = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
// console.table(orderedES6);





// -----------------------------------------------------------------
// Array.prototype.reduce()
// 4. How many years did all the inventors live?

const totalYears1 = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);

const totalYears2 = inventors.reduce((total, inventor) => total + (inventor.passed - inventor.year), 0);





// -----------------------------------------------------------------
// 5. Sort the inventors by years lived

const youngToOld = inventors.sort(function(a, b) {
	const guyA = a.passed - a.year;
	const guyB = b.passed - b.year;
	return guyA > guyB ? 1 : -1;
});

const youngToOldAges = youngToOld.map(inventor => `${inventor.first} ${inventor.last} lived ${inventor.passed - inventor.year} years.`);
// console.log(youngToOldAges);





// -----------------------------------------------------------------
// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// log this code in the console on the Wikipedia page listed above.
// querySelector doesn't return an array, it returns a node list, so we'll need to change it into an array before we can run map on it. Array.from() does this.

function test1() {
  const links = Array.from(document.querySelectorAll('.mw-category a'));
  const linkText = links.map(link => link.textContent);
  console.log(linkText);

  const de = linkText.filter(streetName => streetName.includes('de'));
  console.log(de);
}
// test1();





// -----------------------------------------------------------------
// 7. sort Exercise
// Sort the people alphabetically by last name

const peepsSortLastname = people.sort((lastOne, nextOne) => {
  const [aLast, aFirst] = lastOne.split(', ');
  const [bLast, bFirst] = nextOne.split(', ');
  return aLast > bLast ? 1 : -1;
});





// -----------------------------------------------------------------
// 8. Reduce Exercise

// -----------------------------------------------------------------
// Sum up the instances of each of these

const data = ['car', 'car', 'truck', 'truck', 'bike', 'skateboard', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

const transportation = data.reduce((obj, item) => {
  if (!obj[item]) {
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
}, {});

// console.log(transportation);







// Practice: November 2, 2017
const inventors1800s = inventors.filter(inventor => inventor.year >= 1800 && inventor.year < 1900);
const inventors1800sSorted = inventors1800s.sort((a, b) => a.year > b.year ? 1 : -1);
const inventors1800sMapped = inventors1800sSorted.map(inventor => inventor.year + "-" + inventor.passed + " " + inventor.first + " " + inventor.last);

const inventors1800sSortedBackward = inventors1800s.sort((a, b) => a.year < b.year ? 1 : -1);



// Practice: November 3, 2017
const inventorsPre1850 = inventors.filter(inventor => inventor.year < 1850);
const inventorsPre1850Sorted = inventorsPre1850.sort((inventor1, inventor2) => inventor1.year > inventor2.year ? 1 : -1);
const inventorsPre1850SortedNames = inventorsPre1850Sorted.map(inventor => `${inventor.year}: ${inventor.first} ${inventor.last}`);



// Practice: November 6, 2017
const inventorsWInitial = inventors.filter(inventor => inventor.first.includes('.'));

const inventorsAfter1850 = inventors
  .filter(i => i.year >= 1850)
  .sort((a, b) => a.year > b.year ? 1 : -1)
  .map(i => `${i.first + ' ' + i.last} was born in ${i.year}`);

const inventorsDied1850to1950 = inventors
  .filter(i => i.passed >= 1850 && i.passed < 1950)
  .sort((a, b) => a.passed > b.passed ? 1 : -1)
  .map(i => `${i.first} ${i.last} died in ${i.passed}.`);

// https://en.wikipedia.org/wiki/World_Happiness_Report
// const table = document.querySelector('tbody');
// const links = Array.from(table.querySelectorAll('td a'));
// const linksToText = links.map(link => link.textContent);
// const ordered = linksToText.sort((last, next) => last > next ? 1 : -1);
// const removeNonCountries = ordered.splice(-2, 2);
// console.log(ordered);



// Practice November 13, 2017
// https://www.hustlerturf.com/international
// Needed to grab all of the countries listed so I could paste them into XD.
const countryList = Array
  .from(document.querySelectorAll('.distributors-list .has-dropdown a'))
  .map(link => link.innerText)
  .filter(entry => entry.trim() != '')
  .map(entry => entry.trim())
  .map(entry => entry.toLowerCase())
  .join('<br>');

document.write(countryList.replace(/\b[a-z]/g,function(f){return f.toUpperCase();}));
