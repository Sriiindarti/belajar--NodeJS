//Core Module
// const fs = require('fs')

// require('./coba2'); //contoh memanggil file coba2, sebelum menjalankan code di file index.js (Local Module)

// // yang akan jalan hanya index.js
// // sebagai file utama js

// const hai = 'halo ini yang jalan adalah index';
// console.log(hai);

// // tapi kita bisa manggil file js lainnya
// // dengan cara menambahkan "require"

// require('./coba'); //contoh memanggil file coba, setelah menjalankan code di file index.js (Local Module)


// // case selanjutnya mau menjalankan variabel cetak nama yang ada di panggilvar.js untuk dijalankan di index.js

// // caranya :
// // 1. menuliskan code export terlebih dahulu di dalam file panggilvar.js
// // 2. simpan hasil tangkapan dari panggil.var ke dalam sebuah variabel ("const hasilTangkapanVariabel")

// const hasilTangkapanVariabel = require('./panggilVar'); //(Local Module)

// //third Part Modules / NPM Module / Node Modules
// const moment = require('moment');

// console.log(hasilTangkapanVariabel ('Indarti Sri'));


// Case selanjutnya kalo mau manggil beberapa fungsi dari file lain
// caranya
// 1. file dikirim dari pangglvar berupa properti dan methode
// 2. selanjutnya panggil

const panggilVar = require('./panggilVar');

console.log(panggilVar.metCetakNama('Sri Cantik'), panggilVar.propPI, panggilVar.objMahasiswa.cetakMhs(), new panggilVar.Orang());