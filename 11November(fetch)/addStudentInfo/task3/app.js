let button = document.querySelector("#click");
let wrapper = document.querySelector(".wrapper");



button.addEventListener("click",function(){
    if (wrapper.classList.contains("bg-light")) {
        
        wrapper.classList.replace("bg-light","bg-danger");

        // wrapper.classList.add("bg-danger");
        // wrapper.classList.remove("bg-light");
    }
    else{

        wrapper.classList.replace("bg-danger","bg-light");

        // wrapper.classList.add("bg-light");
        // wrapper.classList.remove("bg-danger");
    }
});