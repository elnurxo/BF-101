// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// fruits.unshift("Melon");
// console.log(fruits);

// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];

// const myChildren = myGirls.concat(myBoys);

// console.log(myChildren);

const array1 = [1,2];
const array2 = [3,4];

const mergedArray = [
    ...array1,
    ...array2
  ];
  
console.log(mergedArray);