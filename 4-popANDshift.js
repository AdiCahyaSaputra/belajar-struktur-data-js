// kebalikan dari .push() dan .unshift()

/**
 * Note
 * .pop() menghapus satu elemen dari ujung
 * .shift() menghapus satu elemen dari index awal / index [0]
**/

let arr = ["Adi", "Cahya", "Saputra"];
arr.pop(); // ini kalo di clog bakalan ngasilin si elemen yang dihapus yaitu "Saputra"
console.log(arr); // "Saputra" nya ilang

arr.shift(); // iya sama
console.log(arr) // "Adi" nya ilang

/**
 * Btw biar efek hoisting nya gak terlalu annoying
 * sebaiknya di komentarin dulu salah satu
 * misal mau clog si arr.pop() nah si arr.shift() nya 
 * di komentarin dulu aja
 * berlaku juga sama kodingan sebelum nya
**/