// Asyncronous

//ceritanya request data ke file lain
const getUserSync = (id, callBack) => {
      const time = id === 1 ? 3000 : 2000;
      setTimeout(() => {
            const nama = id === 1 ? 'Sri Indarti' : 'Indri';
            callBack({id,nama})
      }, time);
}

const userSatu = getUserSync(1, (hasil) => {
      console.log(hasil);
});

const userDua = getUserSync(2, (hasil) => {
      console.log(hasil);
});

const halo = 'Hello World!';
console.log('selesai');
