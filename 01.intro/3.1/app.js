(() => {
  const array = [1, 2, 3, 4, 5];
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  console.log(sum);

  const sArray = [100, 101, 102];
  let sSum = 0;
  for (let i = 0; i < sArray.length; i++) {
    sSum = sSum + sArray[i];
  }
  console.log(sSum);
})();
