// cara nge looping elemen² array yang lebih efisien
let arrays = ["Adi", "Cahya", "Saputra"];

// for...in arr 
for (let i in arrays) {
  // i nya itu angka yg tipe nya Str (bisa di jadiin index)
  console.log(arrays[i]);
}

// for...of arr
for (let array of arrays) {
  // array / bentuk singular dari arrays (dengan kata lain, array nya itu elemen)
  console.log(array);
}

// .foreach()
arrays.forEach(array => {
  // sama kayak for of
  console.log(array)
})