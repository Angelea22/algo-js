function askTvSerie(n, py, cast) {
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

let obj = new askTvSerie(nameA, productionYearA, castA);
console.log(obj);
