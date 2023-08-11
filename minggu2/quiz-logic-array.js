/* 1.
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/
function targetTerdekat(arr) {
    // you can only write your code here!
    let indexO = [];
    let indexX = [];

    for(let i = 0; i < arr.length; i++) {
        if (arr[i] == "x") {
            indexX.push(i);
        } else if (arr[i] == "o") {
            indexO = i
        }
    }
    if(indexX.length == 0) {
        return 0;
    }
    let Terdekat = Infinity;

    for(let i = 0; i < indexX.length; i++ ) {
        if(Math.abs(indexX[i] - indexO) < Terdekat) {
            Terdekat = Math.abs(indexX[i] - indexO);
        }
    }
    return Terdekat;
  }
console.log("")
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2

  /* 2. 
Diberikan sebuah function mengelompokkanAngka(arr) yang menerima satu parameter berupa array yang berisi angka-angka. Function akan me-return array multidimensi dimana array tersebut berisikan 3 kategori/kelompok:

kelompok pertama (baris pertama) merupakan angka-angka genap
kelompok ke-2 (baris ke-2) merupakan angka-angka ganjil
kelompok ke-3 (baris ke-3) merupakan angka-angka kelipatan 3
Contoh jika arr inputan adalah [45, 20, 21, 2, 7] maka output: [ [ 20, 2 ], [ 7 ], [ 45, 21 ] ]
*/
function mengelompokkanAngka(arr) {
    // you can only write your code here!
    let angkaGenap = [];
    let angkaGanjil = [];
    let kelTiga = [];

    let result = [angkaGenap,angkaGanjil,kelTiga];

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 3 == 0) {
            kelTiga.push(arr[i]);
        } else if (arr[i] % 2 == 0) {
            angkaGenap.push(arr[i]);
        } else {
            angkaGanjil.push(arr[i]);
        }
    }
    return result;
  }
  console.log("")
  // TEST CASES
  console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
  console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
  console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
  console.log(mengelompokkanAngka([])); // [ [], [], [] ]

  /* 3.
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
    // you can only write your code here!
    let result = [];
    let animals2 = animals.sort();

    let group = [];
    for(let i = 0; i < animals2.length; i++) {
        group.push(animals2[i]);
        if(i === animals2.length - 1 || animals2[i][0] !== animals2[i + 1][0]) {
            result.push(group);
            group =[];
        }
    }
    return result;
  }
  console.log("")
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]