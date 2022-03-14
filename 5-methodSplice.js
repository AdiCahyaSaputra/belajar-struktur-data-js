/**
 * beberapa translate dari kata "Splice"
 * sambatan, sambungan, istri, perkawinan
 * verba ↓
 * menyambung
 * mengawinkan
**/

// Splice -> menyabet elemen array (anggep aja gini)

/**
 * Param
 * 1 => mau nyabet dari index berapa ?
 * 2 => mau nyabet berapa elemen ?
 * ...3 => elemen array yang akan menggantikan elemen lama yang sudah ter sabet kan
**/

let arr = ["SuS", "Psatir", "banh", "guhek", "bilek"];
arr.splice(2, 2); // kalo di clog bakal nampilin elemen yang di sabetin yaitu "banh" dan "guhek"
console.log(arr); // "banh" dan "guhek" ilang karena udh di sabet

arr.splice(1, 4, "Sip", "sipaling", "gg");
console.log(arr); // splice bakal nyabet elemen arr 4 kali, dimulai dari index 1. Lalu menambahkan elemen pengganti