// kebalikan dari .push() dan .unshift()

/**
 * Note
 * .pop() menghapus satu elemen dari ujung
 * .shift() menghapus satu elemen dari index awal / index [0]
**/

let arr = ["Adi", "Cahya", "Saputra"];
arr.pop();
console.log(arr); // "Saputra" nya ilang

arr.shift();
console.log(arr) // "Adi" nya ilang
