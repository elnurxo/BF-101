let input = document.querySelector(".todo-input");
let btn = document.querySelector(".add-btn");
let removeBtn = document.querySelector(".remove-btn");
let emptyStr = document.querySelector(".empty-input");
let tbody = document.querySelector("tbody");

//Add To Do Item Click Event
btn.addEventListener("click",(e)=>{
    //empty input check
    if (input.value.trim()=="") {
        emptyStr.style.display = "block";
    }
    else{
        emptyStr.style.display = "none";
        tbody.innerHTML += `<tr>
        <td>${input.value}</td>
        <td><input class="check-to-do form-check-input" type="checkbox"></td>
        <td><i class="fa-solid fa-trash text-danger" style="cursor: pointer;"></i></td>
    </tr>`
    }

    let trashIcon = document.querySelectorAll(".fa-trash");
    let done = document.querySelectorAll(".check-to-do");

    //Trash Icon Event Listener
    trashIcon.forEach(trash => {
        trash.addEventListener("click",(e)=>{
            e.target.closest("tr").remove();
        })
    });

    //Done Checkbox event Listener
    done.forEach(doneItem =>{
       doneItem.addEventListener("click",(e)=>{
            if (e.target.checked) {
               e.target.parentElement.previousElementSibling.style.textDecoration = "line-through";
            }
            else{
                e.target.parentElement.previousElementSibling.style.textDecoration = "none";
            }
       })
    })

    input.value = "";
});

//Remove All To Do Items
removeBtn.addEventListener("click",()=>{
    tbody.innerHTML = "";
});

//trigger click on enter
input.addEventListener("keypress",function(e){
    //keyCode - 13
    if (e.key=="Enter") {
        btn.click();
    }
});
