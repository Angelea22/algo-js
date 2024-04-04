(() => {
  let guess = 42;
  let number;
  while (number !== 42) {
    number = prompt(`Enter a number`) * 1;
    if (number !== 42) {
      console.log(`Are you sure?`);
    }
  }
})();
