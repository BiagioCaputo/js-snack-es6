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
    {id: 213 , name:'Marco della Rovere', grade: 78},
    {id: 110 , name:'Paola Cortellessa', grade: 96},
    {id: 250 , name:'Andrea Mantegna', grade: 48},
    {id: 145 , name:'Gaia Borromini', grade: 74},
    {id: 196 , name:'Luigi Grimaldello', grade: 68},
    {id: 102 , name:'Piero della Francesca', grade: 50},
    {id: 120 , name:'Francesca da Polenta', grade: 84},
]

console.log(students);

//studenti con voti superiore a 70

const goodGradeStudents = students.filter( student => student.grade > 70);

console.log(goodGradeStudents);

//studenti con voti superiore a 70 e id superiore a 120

const goodGradeHighIdStudents = students.filter( student => student.grade > 70 && student.id > 120);

console.log(goodGradeHighIdStudents);

//stampa delle targhette degli studenti con i loro nomi in maiuscolo

const namesStudents = students.map(student => {
    let guest = "";
    guest = student.name;
    return guest.toUpperCase();
})

console.log(namesStudents);

/*************************************** SNACK 3 ********************************************/

const bikes = [
    { name:'Xyz', peso: 70},
    { name:'Link', peso: 96},
    { name:'Pendulum', peso: 48},
    { name:'Fusion', peso: 74},
]

const lightestBike = bikes

console.log(lightestBike);



/*************************************** SNACK 4 ********************************************/

const teams = [
    {name:"Inter" , score:0 ,  foulDrawn: 0},
    {name:"Palermo" , score:0 ,  foulDrawn: 0},
    {name:"Roma" , score:0 ,  foulDrawn: 0},
    {name:"Lazio" , score:0 ,  foulDrawn: 0}
]

//Funzione che genera numeri random

const getRandomNumber = maxRandomNumber => Math.floor(Math.random() * (maxRandomNumber - 1 + 1) ) + 1;
