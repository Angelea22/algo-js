function rand10(max) {
  let random = Math.round(Math.random() * 10 + 1);
  return random;
}
let randNum = rand10(10);
console.log(randNum);
