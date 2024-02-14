require('./coba2'); //contoh memanggil file coba2, sebelum menjalankan code di file index.js

// yang akan jalan hanya index.js
// sebagai file utama js

const hai = 'halo ini yang jalan adalah index';
console.log(hai);

// tapi kita bisa manggil file js lainnya
// dengan cara menambahkan "require"

require('./coba'); //contoh memanggil file coba, setelah menjalankan code di file index.js


// case selanjutnya mau menjalankan variabel cetak nama yang ada di panggilvar.js untuk dijalankan di index.js

// caranya :
// 1. menuliskan code export terlebih dahulu di dalam file panggilvar.js
// 2. simpan hasil tangkapan dari panggil.var ke dalam sebuah variabel ("const hasilTangkapanVariabel")

const hasilTangkapanVariabel = require('./panggilVar');

console.log(hasilTangkapanVariabel ('Indarti Sri'));