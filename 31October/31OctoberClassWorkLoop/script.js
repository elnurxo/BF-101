//1. 100-e qeder olan ededlerin cemini tapan alqoritm. (while)

//#region task 1
// let sum = 0;
// let index = 1;

// while (index<=100) {
//     sum+=index;
//     index++;
// }

// console.log("sum of numbers till 100 is - ",sum);
//#endregion

//2. 100-e qeder olan cut ededlerin cemini tapan alqoritm. (for)

//#region task 2
// let sum = 0;

// for (let i = 2; i < 100; i+=2) {
//    sum+= i;
// }
// console.log("sum of even numbers is: ",sum);

//#endregion

//3. 10-a qeder olan reqemlerin hasilini tapan alqoritm. (while)

//#region task 3
    // let multiple = 1;
    // let index = 1;

    // while (index<10) {
    //     multiple*=index;
    //     index++;
    // }
    // console.log("multiple of numbers till 10: ",multiple);
//#endregion


//-----------------------------------------------------------------

//2. Verilmiş ədədin mərtəbələrinin sayını tapan alqoritm.

// let number = 313;
// let temp = number;
// let count = 0;

// while (temp!=0) {
//     temp = (temp - temp%10)/10;
//     count++;
// }
// console.log(`${number}-daki mertbelerin sayi ${count}-a beraberdir`);


// 3. Verilmiş A-nın B qüvvətini hesablayan alqoritm.

let a = 5;
let b = 3;
let result = 1;

for (let i = 1; i <= b; i++) {
    result = result * a;
    //result*=a;
}
console.log("result is: ",result);