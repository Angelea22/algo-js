(() => {
  const array = [1, 2, 3, 4, 5];
  const max = Math.max.apply(null, array);
  const min = Math.min.apply(null, array);
  console.log(`The maximum element of this array is ${max}`);
  console.log(`The minimum element of this array is ${min}`);

  // or using the Spread syntax : const max = Math.max(...array)
})();
