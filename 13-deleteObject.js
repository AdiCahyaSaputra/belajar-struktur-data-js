// menghapus object pada key tertentu
const kucing = {
  warna: "orange",
  keturunan: "localhost",
  server: "indo"
}

// pake keyword delete
delete kucing.server;
console.log(kucing);