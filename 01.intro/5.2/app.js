function randomizeCast(tvSerie) {
  this.serie = {
    name: n,
    productionYear: py,
    castMembers: cast,
  };
}
let nameA = prompt("Enter your favorite series' name");
let productionYearA = prompt("Enter your favorite series' year of production");
let castA = prompt(
  "Enter your favorite series' cast members (as many as you want"
);
let splitCast = castA.split(",");

console.log(splitCast);

function shuffle(array) {
  let shuffledArray = [];
  let usedIndexes = [];

  for (let i = 0; i < array.length; i++) {
    let randomNumber = Math.floor(Math.random() * array.length);
    console.log(randomNumber);
    if (!usedIndexes.includes(randomNumber)) {
      shuffledArray.push(splitCast[randomNumber]);
      usedIndexes.push(randomNumber);
    } else {
      randomNumber = Math.floor(Math.random() * array.length);
      shuffledArray.push(splitCast[randomNumber]);
    }
  }
  console.log(shuffledArray);
  return shuffledArray;
}
let shuffledSplitCast = shuffle(splitCast);

// console.log(castA.split());

// let obj = new randomizeCast(nameA, productionYearA, castA);
// console.log(obj);
