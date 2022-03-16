// simpel nya : array di dalem array
let senin = [
  "PKK", 
  "B.indo",
  "PABD"
];
let selasa = [
  "PKK", 
  "Proweb",
  "Pjok"
];
let rabu = [
  "Matematika",
  "OOP"
];

let mapel = [
  [
    senin
  ],
  [
    selasa
  ],
  [
    rabu
  ]
]; // elemen di dalem array ini adalah array juga ya 

// tampilkan pelajaran hari senin
// ^ = pointer buat nunjukin array (biar gampang aja ngerti nya)
// mapel index 0 -> ^[ [ [...senin] ] ]^
// di index 0 kan lagi maka -> ^[ [...senin] ]^
console.log(mapel[0][0]);

// tampilkan pelajaran ke dua pada hari rabu
// mapel[2] = [ [ [...rabu] ] ]
// mapel[2][0] = [ [...rabu] ]
// mapel[2][0][2] = [...rabu][2] -> "OOP"
console.log(mapel[2][0][1]);

/**
 * Ribet kan ?
 * tapi karena saia sudah berurusan
 * berjam jam berhari hari bahkan berbulan berbulan
 * dengan si array, jadi ya gampang gampang aja gitu..
**/