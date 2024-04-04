(() => {
  let n = parseInt(prompt(`Enter a number`));
  for (let i = 0; i < n; i++) {
    let nt = prompt(`Enter a new number`) * 1;
    let temp = nt;
    result = n + nt;
    console.log(result);
  }
})();
