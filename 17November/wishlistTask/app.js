let btn = document.querySelector("button");
let count = document.querySelector("#count");
btn.addEventListener("click",function(){
    let currentCount = parseInt(count.innerHTML);
    count.innerHTML = currentCount+1;
});