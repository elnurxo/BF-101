//dordreqemli ededi tersine cevirmek: input-1234 --- output-4321
let  num2, num3, num4,num5;
let num1 = 6789;
num2 = num1 / 10;
num3 = num2 / 10;
num4 = num3 / 10;
num5 = (num1 % 10) * 1000 + (num2 % 10) * 100 + (num3 % 10) * 10 + num4;
console.log(num5);