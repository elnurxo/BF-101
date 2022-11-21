let hamburger = document.querySelector(".hamburger");
let sidebar = document.querySelector(".sidebar-nav");
let overlay = document.querySelector(".overlay-sidebar");

hamburger.addEventListener("click",function(){
   sidebar.classList.toggle("active");
   if (overlay.style.display=="block") {
        overlay.style.display = "none";
   }
   else{
        overlay.style.display = "block";
   }
});

overlay.addEventListener("click",function(){
    sidebar.classList.remove("active");
    overlay.style.display = "none";
})

