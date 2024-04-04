function pickLearner(inputAr, n) {
  let inputAr = [
    "Angel",
    "AdrienB",
    "Arnaud C",
    "Jean-Emmanuel",
    "Caroline",
    "Denis",
    "Dorian",
    "Dylan",
    "Giovanni",
    "Julie",
    "Justine F",
    "Justine L",
    "Jordan",
    "Manu",
    "Natalia",
    "Youris",
    "Stacy",
    "Dzheylyan",
    "Ilies",
    "Isabelle",
    "Jessica",
    "Ludovic",
    "Nathanael",
    "Tom",
    "Zahra",
    "Mohamed",
    "Maryam",
    "Lyne",
  ];

  let random = inputAr[Math.floor(Math.random() * inputAr.length)];
  console.log(random);
}
pickLearner();

let number = n;
if (n < 0 || n > inputAr.length) {
  console.log(`Enter a number between 0 and :` ${inputAr});
}
