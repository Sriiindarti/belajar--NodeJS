// ini adalah file yang mau dipanggil di index.js
// dimana casenya adalah meu memanggil variabel yang ada disini

function cetakNama(nama){
      return `Halo, nama saya ${nama}`;
}

// export module agar variable cetak nama dapat diakses di index.js
module.exports = cetakNama;

