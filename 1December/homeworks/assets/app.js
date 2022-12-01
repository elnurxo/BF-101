const { log } = require("console");

//TASK 1
let data = [
    {name: 'daniel', age: 45},
    {name: 'john', age: 34},
    {name: 'robert', age: null},
    {name: 'jen', age: undefined},
    {name: null, age: undefined}];

function filterHuman(data) {
    let result = [];

    data.forEach(human => {
        if ((human.name!=null || human.name!=undefined) && (human.age!=null || human.age!=undefined)) {
            result.push(human);
        }
    });

    return result;
}

// console.log(filterHuman(data));

//TASK2
const students = [
    { name: "Leyla", points: 500 },
    { name: "Akif", points: 500 },
    { name: "Fikret", points: 3000 },
    { name: "Rashad", points: 500 },
    { name: "Turkan", points: 1900 },
    { name: "Sabir", points: 1000 },
    { name: "Idris", points: 340 },
    { name: "Nijat", points: 940 },
    { name: "Ismet", points: 1780 },
  ];

//foreach
students.forEach(student => {
    student.points+=30;
});
console.log(students);

//map
let newArr = students.map(function(student, index){
    student.points+=30;
    return students;
})
console.log(newArr);


//task 3
let bdays = ['08-14', '10-04', '04-21', '08/14', '10/04', '04/21'];

//output: ['08/14', '10/04', '04/21', 08/14, '10/04', '04/21'];

bdays.forEach(element => {
    element.replace('-','/');
});
console.log(bdays);

//task4
let numbers = [1.5, 2.56, 5.1, 12.33];

numbers.forEach(number => {
    if (number-Math.floor(number)>=0.5) {
        console.log(Math.ceil(number));
    }
    else{
        console.log(Math.floor(number));
    }
});