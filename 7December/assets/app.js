//input salam@123
//output - 5

function countChars(word) {
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        if (isNumber(word[i])) {
            count++;
        }
    }

    return count;
}

//check if char is not a Number
function isNumber(char) {
    let charNum = parseInt(char);

    if (isNaN(charNum)) {
        return true;
    }
    else{
        return false;
    }
}

console.log(countChars("123salam@123"));
