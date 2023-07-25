// 1. Melakukan Looping Menggunakan While
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
// tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

//LOOPING PERTAMA (1-10)
let i = 1;
while (i <= 10) {
    console.log('looping maju -',i)
    i++
}

//LOOPING KEDUA (10-1)
let x = 10;
while (x >= 1) {
    console.log('looping mundur -',x)
    x--
}

// 2. Melakukan Looping Menggunakan For
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
// tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

//LOOPING PERTAMA FOR (1-10)
for(let i = 1; i <= 10; i++) {
    console.log('looping maju -',i)
}

//LOOPING KEDUA FOR (10-1)
for(let x = 10; x >= 1; x--) {
    console.log('looping mundur -',x)
}

// 3. Angka Ganjil dan Genap
// Hint: kamu akan menggunakan kondisional juga di kasus ini.

// Problem
// Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// Di dalam perulangan, periksa setiap angka counter:

// Apabila angka counter adalah angka genap, tuliskan GENAP
// Apabila angka counter adalah angka ganjil, tuliskan GANJIL

console.log("BILANGAN GENAP GANJIL 1 - 100")

for(let i = 1; i <= 100; i++) {
    if (i % 2 === 0 ) {
        console.log( i + " - GENAP");
    } else {
        console.log(i + " - GANJIL");
    }
}

//4. counter kelipatan
// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:

// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.

for(let i = 1; i <= 100; i += 2) {
    if (i % 3 === 0 ) {
        console.log(i + " - kelipatan 3")
    } else {
        console.log(i);
    }
}

for(let i = 1; i <= 100; i += 5) {
    if (i % 6 === 0 ) {
        console.log(i + " - kelipatan 6")
    } else {
        console.log(i);
    }
}

for(let i = 1; i <= 100; i += 9) {
    if (i % 10 === 0 ) {
        console.log(i + " - kelipatan 10")
    } else {
        console.log(i);
    }
}
