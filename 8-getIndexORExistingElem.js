// cara cari tau index suatu elemen array

/**
 * Note
 * kalo kita mau nampilin suatu elemen array
 * yang spesifik, maka kita harus tau
 * index dari elemen tersebut
**/

let arr = ["Adi", "Cahya", "Saputra", "a", "b", "c", "d"];
// tampilkan elemen array "Saputra"
console.log(arr[2]);

/**
  * gampang kan ?
  * tapi, bayangin kalo index array nya ribuan,
  * dan elemen "Saputra" ada di index random antara 900 - 1000 an
**/

// method .indexOf() bakal ngatasin semua nya
console.log(arr.indexOf("Saputra"));
// bakal nge return index dari suatu elemen nya
// simulasi
for(let i = 0; i < arr.length; i++) {
  console.log(`${arr[i]} ada di index ${arr.indexOf(arr[i])}`)
}