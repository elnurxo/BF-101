// - Verilmiş ədədlər siyahısını artan sıra ilə düzülmüş ədədlər halına gətirən alqoritm

// input - [2,5,6,1,3];

// output - [1,2,3,5,6];

let numbers = [10,5,6,9,1,3];

for (let i = 0; i < numbers.length; i++) {
   for (let j = i+1; j < numbers.length; j++) {
      if (numbers[i]>numbers[j]) {
         temp = numbers[i];
         numbers[i] = numbers[j];
         numbers[j] = temp;
      }
   }
}
console.log("sorted array: ",numbers);









//#region 
// let arr = [4, 23, 2, 7, 4];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr.length-1; j++) {
//     if (arr[i] < arr[j]) {
//       temp = arr[i];
//       arr[i] = arr[j];
//       arr[j] = temp;
//     }
//   }
// }
// console.log("Sorted array=>", arr);
//#endregion


//#region Bubble
// var array = [12, 10, 15, 11, 14];

// var done = false;
//   while (!done) {
//     done = true;
//     for (var i = 1; i < array.length; i += 1) {
//       if (array[i - 1] > array[i]) {
//         done = false;
//         var tmp = array[i - 1];
//         array[i - 1] = array[i];
//         array[i] = tmp;
//       }
//     }
//   }

// console.log(array);
//#endregion