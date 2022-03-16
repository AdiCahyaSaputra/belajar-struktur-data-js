// spread Opertaor / operator penyebaran

/**
 * Note
 * digunakan untuk meng ekstrak suatu array
 * ke single elemen, atau elemen array nya 
 * di sebarin satu satu pake spread operator
**/

let arr = ["Adi", "Cahya", "Saputra"];
let arr2 = [17, "XI", "RPL"];

// tambahkan elemen di dalam array arr dengan elemen yang ada di arr2
let newArr = ["Adi", "Cahya", ...arr2, "Saputra"];
console.log(newArr); // arr2 masuk ke tengah² elemen arr1

// menggabungkan 2 array 
// pake method push 
/**
for(let i = 0; i < arr2.length; i++) {
  arr.push(arr2[i]);
}
**/

// console.log(arr);

/**
 * Kenapa pake for ? kenapa g push aja langsung ?
 * kalo push langsung, nanti yang di push array nya
 * bukan elemen array nya
 * jadi kita harus ambil elemen array 1 per satu (ekstrak)
 * baru di push
**/

// pake spread operator
arr.push(...arr2);
console.log(arr);

// 2 baris doang wkwkwk