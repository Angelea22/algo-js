function calcSurface(length, width) {
  let surface = Number(length) * Number(width);
  return surface;
}
let promptL = prompt(`Enter the length of your rectangle`);
let promptW = prompt(`Enter the width of your rectangle`);

let multiply = calcSurface(promptL, promptW);
console.log(multiply);
