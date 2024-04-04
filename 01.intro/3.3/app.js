// 1
{
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  const slice = fruits.slice();
  console.log(slice);
}
{
  // 2
  const moreFruits = ["Banana", "Orange", "Apple", "Mango"];
  const emptyArray = [];
  for (let i = 0; i < moreFruits.length; i++) {
    emptyArray.push(moreFruits[i]);
  }
  console.log(emptyArray);

  //   const anotherSlice = moreFruits.push();
  //   console.log(anotherSlice);
}
