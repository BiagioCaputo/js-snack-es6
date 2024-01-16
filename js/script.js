/*************************************** SNACK 1 ********************************************/

const guests = [
  'Brad Pitt',
  'Johnny Depp',
  'Lady Gaga',
  'Cristiano Ronaldo',
  'Georgina Rodriguez',
  'Ladra Ferragni ridicola',
  'Fedez u mariuolo rapper fallito',
  'George Clooney',
  'Amal Clooney',
  'Maneskin'
];

console.log(guests);

const guestList = guests.map((guest, index) =>{
    return {name: guest, tableName: 'Tavolo Vip', place: ++index};

});

console.log(guestList);

/*************************************** SNACK 2 ********************************************/

const students = [
    {id: 213 , Name:'Marco della Rovere', grade: 78},
    {id: 110 , Name:'Paola Cortellessa', grade: 96},
    {id: 250 , Name:'Andrea Mantegna', grade: 48},
    {id: 145 , Name:'Gaia Borromini', grade: 74},
    {id: 196 , Name:'Luigi Grimaldello', grade: 68},
    {id: 102 , Name:'Piero della Francesca', grade: 50},
    {id: 120 , Name:'Francesca da Polenta', grade: 84},
]

console.log(students);

//studenti con voti superiore a 70

const goodGradeStudents = students.filter( student => student.grade > 70);

console.log(goodGradeStudents);

//studenti con voti superiore a 70 e id superiore a 120

const goodGradeHighIdStudents = students.filter( student => student.grade > 70 && student.id > 120);

console.log(goodGradeHighIdStudents);