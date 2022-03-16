// pake for in aja karena bisa pake si i nya buat dijadiin key (kalo di array jadi nya index)
const persons = {
  nama: "Adi Cahya Saputra",
  kelas: 11,
  jurusan: "RPL"
};

for(let key in persons) {
  // console.log(key); // nah kan jadi key
  console.log(persons[key]); // karena tipe data dari key itu Str, jadi g bisa pake titik
} 