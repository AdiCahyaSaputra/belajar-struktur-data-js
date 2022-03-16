// simpel nya : object di dalem object
let mapel = {
  senin: {
    jamPertama: "Pkk",
    jamKedua: "B.indo",
    jamKetiga: "PABD"
  },
  selasa : {
    jamPertama: "PKK",
    jamKedua: "Proweb",
    jamKetiga: "PJOK"
  },
  rabu: {
    jamPertama: "MTK",
    jamKedua: "OOP",
  }
}

// ya tinggal begini aja 
console.log(mapel.senin.jamPertama);
console.log(mapel.selasa.jamKedua);
console.log(mapel.rabu.jamKedua);