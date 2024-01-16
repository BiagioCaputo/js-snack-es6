/*************************************** SNACK 1 ********************************************/

const guests = [
  'Brad Pitt',
  'Johnny Depp',
  'Lady Gaga',
  'Cristiano Ronaldo',
  'Georgina Rodriguez',
  'Chiara Ferragni',
  'Fedez',
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


