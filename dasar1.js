//cara membuat variabel
var A = "a";
let B = "b";
const c = "c";

//variabel bisa menampung tipe data string (text), integer/number, array, object, boolean.

let nama = "adib"; //string
let umur = "18"; //number
let apakahbenar = "true"; //boolean
let uang = 5000.5; //number namun ada koma

//operator arithmatika

let angka1 = 10;
let angka2 = 20;
console.log(angka1 + angka2, 'pertambahan');
console.log(angka1 - angka2, 'pengurangan');
console.log(angka1 / angka2, 'pembagian');
console.log(angka1 * angka2, 'perkalian');
console.log(angka1 % angka2, 'modules');

//disini kita belajar mengenai variabel
let penampungHasilOperatorArithmatika = angka1 + angka2;
console.log(penampungHasilOperatorArithmatika); //20

penampungHasilOperatorArithmatika = angka1 - angka2;
console.log(penampungHasilOperatorArithmatika); //-10

penampungHasilOperatorArithmatika = angka1 / angka2;
console.log(penampungHasilOperatorArithmatika); //0.....

penampungHasilOperatorArithmatika = angka1 * angka2;
console.log(penampungHasilOperatorArithmatika); //200

penampungHasilOperatorArithmatika = angka1 % angka2;
console.log(penampungHasilOperatorArithmatika); //10

//string juga bisa ditambah namun string ga bisa dikurang dengan operator aritmatika
let firstname = 'riski';
let lastname = 'adibtiyanto';
let fullname = firstname + ' ' + lastname;
console.log(fullname)
console.log(firstname + ' ' +lastname);
console.log(firstname - lastname); //Nan

//alur pembacaan code
//untuk membaca code kalian harus membacanya dari kiri ke kanan dan atas ke bawah
//contoh

let number = 20;
console.log(number + 10); //10
number = 10;
console.log(number + 10); //10
number = false;
console.log(number + 10); //10

//pertanyaan? kenapa false - 10 tetap menjadi 10? karena false = 0 , dan true = 1 
console.log(true + 10); //11

//membaca eror
//eror itu jangan bikin kalian takut. justru kalian harus takut kalau tidak ada yang namanya eror dalam pemrograman 
//karena dalam pekerjaan kalau suatu fitur berjalan namun ada bug tapi tidak eror itu bikin si programer rada bingung untuk mencari erornya
//atau letak kesalahannya

//contoh eror
// const hewan = 'jerapah';
// console.log(hewan);
// hewan = 'buaya';

// tipsnya selalu teliti dan kalau ada eror di baca saja, dan belajar ngoding itu butuh kebiasaan
// karena ngoding itu adalah habit