// nge copy paste array tapi dengan index yang spesifik
let arr = ["satu", "dua", "lima", "terserah lah", "yang ngoding", "kan", "saya"];

/**
 * Param
 * 1 => dimulai dari index berapa ?
 * 2 => di akhiri dari index berapa ? dengan catatan, elemen dari index akhir ini gk bakal kebawa
 * di copy an arr nya
 * 
 * kalo param2 nya mines ex: -2, -1, dst.
 * ya ngitung nya dari ujung
 * misal kalo -2 berarti 2 elemen dari ujung
 * [a, b, c, d, e] 
 * 2 elemen dari ujung nya = e dan d
 * maka e dan d gk bakal masuk ke copy
**/

let copyPasteArr = arr.slice(2, 5);
console.log(copyPasteArr);

let copyPt2arr = arr.slice(3, -2);
console.log(copyPt2arr);