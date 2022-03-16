// object itu sama aja kek array tapi dia gk pake index.
// pake nya pasangan antara key dan value

const fullStackRPL = {
  nama: "Adi Cahya Saputra",
  kelas: 11,
  jurusan: "Software Engineering"
};

// cara nampilin nya bukan pake index tapi pake .
// pake tanda titik lalu nama key nya apa
console.log(fullStackRPL.nama);
console.log(fullStackRPL.kelas);
console.log(fullStackRPL.jurusan);

// modfikasi value dari object
// langsung timpa lewat key aja cuy, kek variable gitu
fullStackRPL.kelas = 12;
console.log(fullStackRPL.kelas);

// btw object itu kan terdiri dari property dan method tapi kan tadi saia cuma kasih contoh property nya aja.
// method 
let singa = {
  jabatan: "King of Sea",
  mata: "Ngantuk",
  makan: function() {
    console.log("Sedang tidur");
  },
  lari: function() {
    console.log("Still fast as f boii");
  }
}

singa.makan();
singa.lari();

// untuk menampilkan data dengan key tertentu, bisa pake kurung kotak juga btw
console.log(singa["mata"]);
console.log(singa["jabatan"]);