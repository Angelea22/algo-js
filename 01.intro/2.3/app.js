(() => {
  for (let n = 1; (n = 100); n++) {
    if (n % 2 === 0) {
      console.log(n);
    }
    while (n <= 100) {
      if (n % 2 === 0) console.log(n);
      n++;
    }
  }
})();
