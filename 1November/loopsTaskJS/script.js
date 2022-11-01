//n natural ədədinin ən böyük rəqəmini tapın.

const { log } = require("console");

let number = 100;
let max = 0;
while (number!=0) {
    if (max<=number%10) {
        max = number%10;
    }
    number = (number-number%10)/10;
}
console.log("max is: ",max);

//Proqramın girişində aralarında boşluq olmaqla a və b tam ədədləri verilir. 
//[a, b] intervalına daxil olan bütün cüt ədədləri bir sətirdə azalan sıra ilə çıxışa vermək lazımdır.

let a = 7;
let b = 2;

for (let i = a; i >= b ; i--) {
    if (i%2==0) {
        console.log(i);
    }
}

//Ədəddəki cüt və tək yerdə olan rəqəmlərin hasili
//Ədəddəki cüt və tək yerdə olan rəqəmləri ayrılıqda cəmləyirik. Bu cəmlərin hasilini tapın.

//not done
