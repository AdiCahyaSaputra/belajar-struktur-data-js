const users = {
  Adi: {
    kelas: 11,
    jurusan: "RPL"
  },
  Cahya: {
    kelas: 11,
    jurusan: "Blok M - Kota"
  }
}

// pake method .hasOwnProperty() -> return true atau false aja
if(users.hasOwnProperty("Adi")) {
  console.log("Ada");
} else {
  console.log("404");
}

// atau bisa pake yg lebih sakti
"Adi" in users ? console.log("ada") : console.log("404")