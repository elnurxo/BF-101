let fullName = document.querySelector("#participant-name");
let errorName = document.querySelector("#error-name");
let secretKey = document.querySelector("#secret-key");


//fullname keyup event
fullName.addEventListener("keyup",(e)=>{
    CheckValidations(e.target.value);
});

//secret Key keyup event
secretKey.addEventListener("keyup",(e)=>{
    CheckKeyValidations(e.target);
})

//check name Validation
function CheckNameValidations(fullNameValue) {
    if (fullNameValue.length<=3 || fullNameValue.trim()=="") {
        errorName.innerText = "Invalid Input!"; 
        return false;
    }
    else{
        errorName.innerText = "";
       return true;
    }
}
//check secret-key Validation
function CheckKeyValidations(secretKeyValue) {
    let checkNumber = false;
    let checkUpperCase = false;

    for (let i = 0; i < secretKeyValue.value.length; i++) {
       if (secretKeyValue.value[i]==secretKeyValue.value[i].toUpperCase()) {
            checkUpperCase = true;
       }
       if (isNumber(secretKeyValue[i])) {
         checkNumber = true;
       }
       if (checkNumber && checkUpperCase) {
        break;
       }
    }

    if (secretKeyValue.value.length<=5 || !checkNumber || !checkUpperCase) {
        secretKeyValue.nextElementSibling.innerText = "Invalid Input!";
       secretKeyValue.style.border = "none";
        return false;
    }
    else{
       secretKeyValue.nextElementSibling.innerText = "";
       secretKeyValue.style.border = "2px solid green";
       return true;
    }
}

//check is number
function isNumber(char) {
    let charNum = parseInt(char);

    if (isNaN(charNum)) {
        return true;
    }
    else{
        return false;
    }
}
