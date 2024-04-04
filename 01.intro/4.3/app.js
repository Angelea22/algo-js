{
  function rand10(max) {
    let random = Math.round(Math.random() * 10 + 1);
    return random;
  }
  let randNum = rand10(10);
  console.log(randNum);
}

function multiRand(n) {
  for (let i = 0; i < n; i++) {
    let randoms = Math.round(Math.random() * 10 + 1);
    array.push(randoms);
  }
  return array;
}
let array = [];
let promptArray = parseInt(prompt(`Enter a number between 1 and 10`));
multiRand(promptArray);
console.log(array);

// function multiRand(n) {
//   let array = [];
//   for (let i = 0; i < n; i++) {
//     let randomN = rand10(10);
//     array.push(randomN);
//   }
// }

// function multiRand(n) {
//   let array = [];
//   for (let i = 0; i < n; i++) {
//     let randomNum = rand10(10); // Generate a random number between 1 and 10 using rand10 function
//     array.push(randomNum);
//   }
//   return array;
// }
// console.log(array);
