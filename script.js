var student_1 = { //ср.>3
    firstName: 'Tom',
    lastName: 'Hanks',
    age: 19,
    grades: [5, 4, 3, 5, 4],
    course: 3,
    gender: 'Male'
}
var student_2 = { //ср.<3, мужч.,18=<возр.=<27  !
    firstName: 'Jackie',
    lastName: 'Chan',
    age: 21,
    grades: [3, 2, 2, 3, 4],
    course: 5,
    gender: 'Male'
}
var student_3 = { //ср.<3, мужч.,возр.<18
    firstName: 'Johny',
    lastName: 'Cash',
    age: 17,
    grades: [2, 2, 3, 3, 3],
    course: 1,
    gender: 'Male'
}
var student_4 = { //ср.<3, женщ.
    firstName: 'Jessica',
    lastName: 'Bill',
    age: 21,
    grades: [2, 2, 2, 3, 3],
    course: 5,
    gender: 'Female'
}
var student_5 = { //ср.<3, мужч.,возр.>27
    firstName: 'Brad',
    lastName: 'Pitt',
    age: 28,
    grades: [2, 1, 2, 3, 3],
    course: 5,
    gender: 'Male'
}
var student_6 = { //ср.<3, мужч.,18=<возр.=<27 !
    firstName: 'Chack',
    lastName: 'Norris',
    age: 19,
    grades: [2, 1, 2, 2, 2],
    course: 3,
    gender: 'Male'
}
var student_7 = { //ср.>3
    firstName: 'Sarah',
    lastName: 'Connor',
    age: 20,
    grades: [5, 5, 4, 5, 5],
    course: 4,
    gender: 'Female'
}
var student_8 = { //ср.>3
    firstName: 'Elon',
    lastName: 'Musk',
    age: 22,
    grades: [5, 5, 4, 5, 5],
    course: 5,
    gender: 'Male'
}
var student_9 = { //ср.<3,женщ.
    firstName: 'sir Elthon',
    lastName: 'John',
    age: 24,
    grades: [1, 2, 3, 3, 3],
    course: 5,
    gender: 'FeMale'
}
var student_10 = { //ср.<3,мужч.,18=<возр.<=27
    firstName: 'Tom',
    lastName: 'Riddle',
    age: 22,
    grades: [2, 2, 3, 3, 3],
    course: 5,
    gender: 'Male'
}
var students = [student_1, student_2, student_3, student_4, student_5, student_6, student_7, student_8, student_9, student_10];
console.log(students);

var temp = 0;
var average_results = [];

function checkGrades() {
    for (var i = 0; i < students.length; i++) {
        for (var j = 0; j < students[i].grades.length; j++) {
            temp += students[i].grades[j];
        }
        temp = temp / students[i].grades.length;
        console.log(temp);
        if (temp < 3) {
            if (students[i].gender === 'Male' && students[i].age >= 18 && students[i].age <= 27) {
                console.log('army!');
            }
        }
    }

}
checkGrades();