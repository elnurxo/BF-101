// parameter - name,surname ve age gonderirsiniz.
//eger age reqem deyilse yeniden istesin.
//currentYear - date.
//return - "elnur khalilov, you are born in 2001";

// function getInfo() {
//     let currentYear = new Date().getFullYear();
//     let name = window.prompt("enter your name...")
//     let surname = window.prompt("enter your surname...")

//     do {
//         var age = window.prompt("enter your age...");
//     } while (!parseInt(age));

//     let birthYear = currentYear-age;

//     console.log(`${name} ${surname}, you are born in ${birthYear}`);

// }

//canCarGo function-i var.
// parameters - fuelFor1Km,currentFuel,
//Eger masin hemin yolu bak-daki benzinle gede bilerse true eks halda
//false qaytaran bir funtion yazin.

// let canCarGo = function(fuelFor1Km,currentFuel,neededPathKm){
//     if (fuelFor1Km*neededPathKm<=currentFuel) {
//         return true;
//     }
//     else{
//         return false;
//     }
// };

// console.log(canCarGo(1,20,5));

//Heç olmazsa bir tək rəqəm
//arrow function
// let checkOddNumber = (number) => {
//   while (number > 0) {
//     let floor = number % 10;
//     number = parseInt((number - floor) / 10);
//     if (floor % 2 == 1) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(checkOddNumber(48484848));

//function-a bir eded daxil olunur.
//eger eded 50-den kicik olsa hemin edede qeder 3e bolunen ededleri,
//eger eded 50-100 araligindadirsa 5-e bolunen  ededleri,
//eger 100-den boyukdurse 8-e bolunen ededleri console-a yazdirsin.
function checkNumber(number) {
  for (let i = 0; i < number; i++) {
    if (i % 3 == 0 && i <= 50) {
      console.log(i);
    } else if (i % 5 == 0 && i > 50 && i < 100) {
      console.log(i);
    }
    else if(i%8==0 && i>100){
        console.log(i);
    }
  }
}

checkNumber(130);
