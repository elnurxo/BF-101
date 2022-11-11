
//Ən böyük və ən kiçiklərindən başqa
//N sayda tam ədədlərdən ibarət massiv verilir. Bu massivin ən kiçik və ən böyük elementlərindən başqa bütün elementlərinin cəmini tapın.

//#region TASK 1
// let arr= [1,4,5,6,1,9,8,9]
// let max = arr[0]
// let min = arr[0]
// let sum = 0;
// let sum2=0;
// let countMax = 0;
// let countMin = 0;


// for(let i = 0;i<arr.length;i++){
//     sum+=arr[i]
//     if(arr[i]>max){
//         max = arr[i];
//         countMax=1;
//         continue;
//     }
//     if(arr[i]<min){
//         min = arr[i];
//         countMin=1;
//         continue;
//     }
//    else if(arr[i]===max){
//     countMax++;
//     continue;
//    }
//    else if(arr[i]===min){
//     countMin++;
//    }
// }
// sum2=sum- ((max*countMax)+(min*countMin))
// console.log(sum2)


//---------------SOLUTION 2 ------------------
// for(let i=0; i<arr.length; i++){
//     if(arr[i]>max){
//         max=arr[i]
//     }
//     if(arr[i]<min){
//         min=arr[i];
//     }
// }
// for(let i=0; i<arr.length; i++){
//     if(arr[i]!=max  && arr[i]!=min){
//         sum+=arr[i]
//     }
// }
// console.log(sum)

//#endregion


//Cüt İndekslər
//n sayda tam ədəddən ibarət massiv verilir. Cüt yerlərdə olan elementləri tapın. İndeksləmə 0 -dan başlayır.

//#region TASK 2
//  let arr=[2,3,4,65,7,8];
//  for(let i=0;i<arr.length;i+=2){
//     console.log(arr[i]+4);
//  }
//#endregion


// Pyataçok çəmənlikdə uzanaraq xışıldayan otları seyr edirdi. O başa düşdü ki, otlar ona görə xışıldayırlar ki, 
// çünkü külək əsir və o otlara görə küləyin gücünü necə ölçmək lazım gəldiyini düşündü. Küləyin gücü, 
// Pyataçoka görə hazırda ən yüksək və ən alcaq otların hündürlüklərinin fərqi kimi başa düşülür.

//#region TASK 3
let a=[4,6,8,9]
let max =a[0];

for(let i=0;i<a.length;i++){
    if(max <a[i]) 
        max=a[i]
}
min=a[0];
for(let i=0;i<a.length;i++){
    if(min>a[i])
        min=a[i]
}

console.log(max-min);
//#endregion

