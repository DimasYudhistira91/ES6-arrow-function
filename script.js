// tanpa Arrow Function :

const sayHello = function(name) {
  return "Hey there, " + name + " !"
}
console.log(sayHello('Dimas'));

// Dengan Arrow Function :

const sayHey = (nama) => `hey there ${nama} !`
// hapus kata "function", ganti dengan tanda "=>" setelah parameter, hilangkan tanda "{}" dan hilangkan "return"
// untuk mempersingkat dan memperindah kodingan hilangkan tanda "+" ganti dengan "${prmtr}"

console.log(sayHey('Yudhistira'));

const todos = [{
  kegiatan: 'beli sayur',
  selesai: true
}, {
  kegiatan: 'masak nasi',
  selesai: true
}, {
  kegiatan: 'masak sayur',
  selesai: false
}];

const thingsDone = todos.filter((todo) => todo.selesai === true);
console.log(thingsDone);

// Arrow function memang sangat memudahkan
// Tapi tidak semua kasus harus menggunakan arrow function
// Berikut adalah contoh error jika menggunakan arrow function
const handphone = {
  merk: 'Xiaomi',
  seri: 'Note 7 Pro',
  harga: 2700000,

  myDesc: () => {
    return `Harga hp ini adalah ${this.harga}`
  }
}
console.log(handphone.myDesc());