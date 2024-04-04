(() => {
  // 1
  {
    const array = [1, 2, 3, 4, 5];
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum = sum + array[i];
    }

    const avr = sum / array.length;
    console.log(avr);
  }

  // 2
  {
    const sArray = [100, 101, 102];
    let sSum = 0;
    for (let i = 0; i < sArray.length; i++) {
      sSum = sSum + sArray[i];
    }
    const avr2 = sSum / sArray.length;
    console.log(avr2);
  }
})();
