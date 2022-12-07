// let date99 = new Date("August 21, 1999 01:15:00");
// let date07 = new Date("August 20, 1999 01:15:00");
// let months = ["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];


//Comparing DateTime
// if (date99.getTime()<date07.getTime()) {
//     console.log(true); //if 1999 less than 2007
// }
// else{
//     console.log(false);
// }

let list = document.querySelector("ul");

fetch("https://northwind.vercel.app/api/orders")
.then(res=>res.json())
.then(data=>{
   data.forEach(element => {
        let listItem = document.createElement("li");
        listItem.innerHTML = element.requiredDate;
        let requiredDate = new Date(element.requiredDate);
        let shippedDate = new Date(element.shippedDate);
        if (requiredDate.getTime()<shippedDate.getTime()) {
            listItem.style.color = "red";
        }
        list.append(listItem);
   });
})