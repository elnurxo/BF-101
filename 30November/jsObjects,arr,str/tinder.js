// bir person obyekti yaradirsiniz. hemin person obyektinde	
// 			name,surname,age,hobbies,isMarried property-leri olur.
// daha sonra matchPeople function-i yazirsiniz ve iki object qebul edir ve
//   adlarinda en azi 1 ortaq herf ve en az 1 ortaq hobbileri varsa,evli deyillerse
//   ve yaslari beraberdirse console-a match yazir, eks halda doesn't match yazir.

// matchPeople(person1,person2);



let person1 = {
    name: "John",
    surname: "Malone",
    age: 21,
    isMarried: false,
    hobbies:["music","basketball"]
};

let person2 = {
    name: "Jaaaaaan",
    surname: "Jackson",
    age: 21,
    isMarried: false,
    hobbies:["music","football"]
}


function matchPeople(male,female){
    let nameMatching = false;
    let hobbyMatching = false;

    //hobby matching
    for (let i = 0; i < male.hobbies.length; i++) {
        for (let j = 0; j < female.hobbies.length; j++) {
            if (male.hobbies[i]==female.hobbies[j]) {
                hobbyMatching = true;
                break;
            }
        }
    }

    //name matching
    let count = 0;
    for (let i = 0; i < male.name.length; i++) {
        for (let j = 0; j < female.name.length; j++) {
            if (male.name[i].toLowerCase()==female.name[j].toLowerCase()) {
                count++;
                if (count>1) {
                    nameMatching = true;
                    break;
                }
            }
        }
    }

    //general match
    let answer = "";
    if (nameMatching && hobbyMatching && male.age==female.age && !male.isMarried && !female.isMarried) {
        answer = `${male.name} and ${female.name} is matching!`;
    }
    else{
        answer = `${male.name} and ${female.name} is not matching!`;
    }

    return answer;
}

console.log(matchPeople(person1,person2));