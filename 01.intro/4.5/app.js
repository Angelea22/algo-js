function calcDistance(x1, x2, y1, y2) {
  let x = x2 - x1;
  let y = y2 - y1;
  return Math.sqrt(x * x + y * y);
}
calcDistance();
let promptx1 = parseInt(prompt(`Enter a number for A`));
let promptx2 = parseInt(prompt(`Enter a number for B`));
let prompty1 = parseInt(prompt(`Enter a number for A`));
let prompty2 = parseInt(prompt(`Enter a number for B`));

let distance1 = calcDistance(promptx1, promptx2, prompty1, prompty2);

console.log(
  `Point A = [${promptx1}, ${promptx2}], point B = [${prompty1}, ${prompty2}] => ${distance1}`
);
