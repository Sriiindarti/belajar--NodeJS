// ini adalah file yang mau dipanggil di index.js
// dimana casenya adalah meu memanggil variabel yang ada disini

function cetakNama(nama){
      return `Halo, nama saya ${nama}`;
}

const PI = 3.14;

const mahasiswa = {
      nama : 'Doddy Ferdiansyah',
      umur : 20,

      cetakMhs() {
            return `Halo,nama saya ${this.nama} dan saya ${this.umur} tahun.`;
      }
}

class Orang {
     constructor(){
      console.log('Objek orang telah dibuat')
     } 
}




// export module agar variable cetak nama dapat diakses di index.js
// module.exports = cetakNama;

//Case Selanjutnya
// module.exports.metCetakNama = cetakNama;
// module.exports.propPI = PI;
// module.exports.objMahasiswa = mahasiswa;
// module.exports.Orang = Orang;

module.exports = {
      metCetakNama: cetakNama,
      propPI:  PI,
      objMahasiswa: mahasiswa,
      Orang: Orang,
}


