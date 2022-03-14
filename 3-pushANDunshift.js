// menambahkan elemen baru ke dalam array dari depan dan dari belakang

/**
 * Note
 * .push() dan .unshift() merupakan method array bawaan dari si javascript
 * method bawaan ini bakal bisa dipake kalo kita bikin array aja
 * .push() digunakan untuk menambahkan elemen baru pada array dari belakang / dari ujung array nya
 * .unshift() ya sama aja cuma beda nya dia nambahin nya dari depan / elemen pertama
**/

let balonMu = ["Merah", "Pink"];
balonMu.push("Hijau");
console.log(balonMu); // bakal tampil array ["Merah", "Pink", "Hijau"];

balonMu.unshift("Kuning");
console.log(balonMu); // bakal tampil array ["Kuning", "Merah", "Pink", "Hijau"];

/**
 * Note #2 
 * method² ini menimpa array lama.
 * jadi setelah kita ituin array nya, maka array lama nya bakal ketimpa
**/

/**
 * Btw ada yang menarik disini.
 * keyword nya "Konsep Hoisting Pada Javascript"
 * Silahkan search sendiri
**/