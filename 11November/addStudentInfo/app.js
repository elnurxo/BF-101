let btn = document.getElementById("form-submit");
let name = document.getElementById("name");
let surname = document.getElementById("surname");
let age = document.getElementById("age");
let email = document.getElementById("email");
let tbody = document.getElementsByTagName("tbody");
let sexuality = document.querySelectorAll(".form-check-input");

btn.addEventListener("click",function(e){
    e.preventDefault();
   
    if (name.value!="" && surname.value!="" && age.value!="" && email.value!="") {

        let tr = document.createElement("tr");
        let tdName = document.createElement("td");
        tdName.innerText = name.value;
    
        let tdSurname = document.createElement("td");
        tdSurname.innerText = surname.value;
    
        let tdAge = document.createElement("td");
        tdAge.innerText = age.value;
    
        let tdEmail = document.createElement("td");
        tdEmail.innerText = email.value;

        let tdSexuality = document.createElement("td");
        for (const item of sexuality) {
            if (item.checked) {
                tdSexuality.innerText = item.nextElementSibling.innerText;
                item.checked = false;
            }
        }
      

        tr.append(tdName, tdSurname, tdAge, tdSexuality,tdEmail);
        tbody[0].append(tr);
    

        name.value  = "";
        surname.value = "";
        age.value = "";
        email.value = "";
    }
 })