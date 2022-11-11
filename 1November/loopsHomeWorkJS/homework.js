//TASK-1
//n natural ədədinin ən böyük rəqəmini tapın.

// let num = 613;
// let temp = num;
// let max =0;
// while(num!=0){
//     temp = num%10;
//     if(temp>max){
//         max= temp;
//     }
//     num = Math.floor(num/10);

// }
// console.log("max:",max);
// console.log(num);

//TASK-2
//İntervalda Cüt Ədədlər

// let num1=3;
// let num2=10;
// for (let i=num2; i>=num1;i--){
//     if (i%2==0){
//         console.log(i);
//     }
// }

//TASK-3
//Tək və cüt yerdə olan rəqəmlərin cəmlərinin hasilini verin.

// let num4=134267,tekcem=0,cutcem=0,hasil,k,say=0;

// while(num4>0){

//     k=num4%10
//     say++
//     if(say%2==0){
//         cutcem+=k
//     }else{
//         tekcem+=k
//     }
//     num4=parseInt(num4/10)
// }
// hasil=tekcem*cutcem
// console.log("hasil=",hasil)

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let key = 8;
let min = 0;
let max = arr.length - 1;

while (min <= max) {
  let mid = (max + min) / 2;

  if (key == mid) {
    console.log(arr[mid]);
  } else if (key > arr[mid]) {
    min = mid + 1;
  } else {
    max = mid - 1;
  }
}
