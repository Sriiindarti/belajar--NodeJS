// Syncronous

//ceritanya request data ke file lain
const getUserSync = (id) => {
      // let nama = '';
      // if (id === 1){
      //       nama = 'Sri Indarti'
      // } else {
      //       nama = 'Indri'
      // }
      const nama = id === 1 ? 'Sri Indarti' : 'Indri';
      return { id, nama};
}

const userSatu = getUserSync(1);
console.log(userSatu);

const userDua = getUserSync(2);
console.log(userDua);

const halo = 'Hello World!';
console.log(halo);
