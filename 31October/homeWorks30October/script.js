//TASK-1 
// Dördrəqəmli polindrom
// Dördrəqəmli natural ədəd verilmişdir. Onun palindrom olmasını təyin edin. Natural ədəd soldan sağa və sağdan sola eyni oxunarsa, palundromdur. Məsələn, 2332 ədədi palindromdur.

// Input
// Dördrəqəmli natural n ədədi

// Output
// n ədədi palindromdursa "YES", əks halda "NO" çap edin.


//#region (polindrom)
let num = 1421;

let firstDigit = Math.floor(num/1000);
let secondDigit = Math.floor(num/100)%10;
let thirdDigit = Math.floor(num/10)%10;
let fourthDigit = Math.floor(num%10);

let polindrom = fourthDigit*1000+thirdDigit*100+secondDigit*10+firstDigit;

if(num==polindrom){
    console.log(true);
}
else{
    console.log(false);
}

//#endregion


//TASK-2
// İlin fəsilləri
// Mürəkkəb şərtdən istifadə edərək verilmiş ayın nömrəsinə görə ilin fəslini müəyyənləşdirin.

// Input
// Bir ədəd - ayın nömrəsi.

// Output
// Çıxışa yaz ayları üçün Spring, yay üçün Summer, payız üçün Autumn və qış üçün Winter sözlərini verin.

//#region Task-2 (seasons)
    let monthNum = 6;

    switch (monthNum) {
        case 12: 
        case 1: 
        case 2:
            console.log("winter");
            break;
        case 3 || 4 || 5:
            console.log("spring");
            break;
        case 6: case 7: case 8:
            console.log("summer");
            break;
        case 9: case 10: case 11:
            console.log("autumn");
            break;
        default:
            console.log("invalid input")
            break;
    }
//#endregion

//TASK-3

// Verilmiş 3 ədəddən ən böyüyü və ən kiçiyinin ədədi ortasını qaytaran alqoritm yazın.
// Input
// İstənilən 3 ədəd.

// Output
// Ən böyük iki ədədin ədədi ortası.

//#region (Max-Min number)
    let num1 = 8;
    let num2 = 1;
    let num3 = 1;
    let maxNum,minNum;

    //to find maximum number
    if (num1>= num2 && num1>= num3) {
        maxNum = num1;
    }
    else if(num2>= num1 && num2>= num3){
        maxNum = num2;
    }
    else{
        maxNum = num3;
    }

    //to find minimum number
    if (num1<= num2 && num1<= num3) {
        minNum = num1;
    }
    else if(num2<= num1 && num2<= num3){
        minNum = num2;
    }
    else{
        minNum = num3;
    }

    let avg = (minNum+maxNum)/2;
    console.log("avg: ",avg);
//#endregion

//TASK-4  

// Verilmiş ədədin mürəkkəb və ya sadə ədəd olamğını müəyyən edin.
// Input
// İstənilən 1 ədəd.

// Output
// Ədəd sadədirsə "Prime", mürəkkəbdirsə "Composite" çap edin.

//#region (Prime,Composite)
let input = 97;
let divideBy = 2;
let count = 0;

while(divideBy<=input){
    if(input%divideBy==0){
        count++;
    }
    divideBy++;
}
if(count>1){
    console.log(`${input} is composite number`);
}
else{
    console.log(`${input} is prime number`);
}
//#endregion



















//--------------------------------------------------------------

//Polindrom for all the numbers using loop
var a = 1234;
var z = a;
var reverse = 0;

while(z > 0)
{
    var digit = z % 10;
    reverse = (reverse * 10) + digit;
    z = parseInt(z / 10);
}
console.log("reverse = " + reverse);