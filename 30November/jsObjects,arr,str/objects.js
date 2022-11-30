// let num = new Number();
// let str = new String();
// let random = Math.random();
// let obj = {};
// let arr = [1,2,3,45];


// let object = new Object();


//1.
// let person1 = new Object();
// person1.name = "Uzeyir";
// person1.surname = "Nagizade";
// person1.age = 19.5;
// person1.isMarried = true;

// console.log(person1.isMarried);

//2.
// let person2 = {
//     name: "Cilo",
//     surname: "Veliyev",
//     age: 20,
//     parentNames: ["dad","mom"],
//     isMarried: false
// };
// console.log(person2);
//3.
// const person = {
//     isHuman: false,
//     name: ""
//   };

// let aynura = Object.create(person);
// console.log(person3.name);

// let fruit = {name:"apple"};
// let object1 = {name:"apple"};

// fruit.name = object1.name;

// if (fruit===object1) {
//     console.log(true);
// }
// else{
//     console.log(false);
// }

//cunstructor function
// function Car(brand,model,year){
//     this.brand = brand;
//     this.model = model;
//     this.year = year;
// }

// const myCar = new Car("Eagle", "Talon TSi", 1993);

// console.log(myCar.model);


//CONST FOR OBJECTS
// const car = {
//     brand: "Mercedes",
//     model: "GLA"
// }
// car.brand = "BMW";

// console.log(car.brand);

let person2 = {
    name: "Cilo",
    surname: "Veliyev",
    age: 20,
    parentNames: ["dad","mom"],
    address: {
        city: "Baku",
        country: "Azerbaijan"
    },
    getInfo: function(){
        console.log(`${this.name} ${this.surname} is ${this.age} years old and lives in ${this.address.city}, ${this.address.country}`)
    },
    birthday: function(){
        let currentYear = new Date().getFullYear();
        if (currentYear>2022) {
            this.age = this.age+1;
        }

        return this.age;
    }
};
// delete person2.name;
// console.log("name" in person2);
// console.log(person2.getInfo());
// console.log(person2.birthday());
