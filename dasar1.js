//cara membuat variabel
var a = 'a';
let b = 'b';
const c = 'c'

//variabel bisa menampung tipe data string (text), integer/number, boolean, array, object

let nama = "iris panda"; //string
let umur = "200 SM" //number
let apakahBenar = true; //boolean
let uang = 1654.789 //number namun ada koma 

//operator aritmatika

let angka1 = 30;
let angka2 = 10;
console.log(angka1 + angka2, 'pertambahan');
console.log(angka1 - angka2, 'pengurangan');
console.log(angka1 / angka2, 'pembagian');
console.log(angka1 * angka2, 'perkalian');
console.log(angka1 % angka2, 'modulus');

let penampungHasilOperatorAritmatika = angka1 + angka2; 
console.log(penampungHasilOperatorAritmatika); //40

penampungHasilOperatorAritmatika = angka1 - angka2; 
console.log(penampungHasilOperatorAritmatika); //20

penampungHasilOperatorAritmatika = angka1 / angka2; 
console.log(penampungHasilOperatorAritmatika); //3

penampungHasilOperatorAritmatika = angka1 * angka2; 
console.log(penampungHasilOperatorAritmatika); //300

penampungHasilOperatorAritmatika = angka1 % angka2; 
console.log(penampungHasilOperatorAritmatika); //0

//string juga bisa ditambah namun string gabisa dikurang dengan operator aritmatika
let FirstName = 'ishowspeed';
let LastName = 'cinta indonesia';
let FullName = FirstName + ' ' + LastName
console.log(FullName);
console.log(FirstName + ' ' + LastName);
console.log(FirstName - LastName); //akan jadi NaN

//alur pembacaan code
//kiri ke kanan -> atas ke bawah
//contoh 

let number = 20;
console.log(number + 20); //40
number = 1287;
console.log(number - 928); //gatau berapa  
number = false;
console.log(number + 10); //10

//pertanyaan : kenapa false - 10 tetap menjadi 10???
//karena false = 0, true = 1 

console.log(true + 10); //11

//membaca error
//jangan takut error, justru takut kl gada error dlm pemrograman karena dalam pemrograman kalau suatu fitur berjalan
//namun ada bug tapi tidak error, itu akan bikin programmar rada muak utk cari errornya atau kesalahannya

//contoh error
// const hewan = 'babi';
// console.log(hewan);
// hewan = 'axolotl';

//const itu nilainya tetap, gak bisa diubah
// auto komentar bisa dengan ctrl + /

//tips: selalu teliti, kalau ada error dibaca ajah
//dan belajar coding itu perlu kebiasaan karena coding itu adalah habit

