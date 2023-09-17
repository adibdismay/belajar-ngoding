//soal 1
//cek apakah angka yang dikirim adalah angka prima atau bukan?
//cek google bagi yang ga tau apa itu angka prima
function angkaPrima(angka) {
    // you can only write your code here!
    if (angka <= 1) {
        return false;
    }
    if (angka <= 3) {
        return true;
    }
    if (angka % 2 === 0 || angka % 3 === 0) {
        return false;
    }
    let i = 5;
    while (i * i <= angka) {
        if (angka % i === 0 || angka % (i + 2) === 0) {
            return false;
        }
        i += 6; 
    }
    return true;
}
console.log(" ")
  // TEST CASES
  console.log(angkaPrima(3)); // true
  console.log(angkaPrima(7)); // true
  console.log(angkaPrima(6)); // false
  console.log(angkaPrima(23)); // true
  console.log(angkaPrima(33)); // false

// soal 2
//cari faktor persekutuan terbesar
function fpb(angka1, angka2) {
    // you can only write your code here!
    while (angka2 !== 0) {
        let temp = angka2;
        angka2 = angka1 % angka2;
        angka1 = temp;
    }
    return angka1;
}
  console.log(" ")
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1 

  //soal 3
  function cariMedian(arr) {
    // you can only write your code here!
    let terUrut = arr.sort((a, b) => {
        return a - b;
      });
    
      if (terUrut.length % 2 !== 0) {
        return arr[Math.floor(terUrut.length / 2)];
      } else {
        return (arr[terUrut.length / 2] + arr[terUrut.length / 2 - 1]) / 2;
      }
    }
    console.log(" ")
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 6
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5

  /* soal 4
Diberikan sebuah function cariModus(arr) yang menerima sebuah array angka. Function akan me-return modus dari array atau deret angka tersebut. Modus adalah angka dari sebuah deret yang paling banyak atau paling sering muncul. Contoh, modus dari [10, 4, 5, 2, 4] adalah 4. Jika modus tidak ditemukan, function akan me-return -1. Apabila ditemukan lebih dari dua nilai modus, tampilkan nilai modus yang paling pertama muncul (dihitung dari kiri ke kanan). Dan apabila dialam modus hanya ada 1 nilai yang sama maka function akan me-return -1, Contohnya [1, 1, 1] adalah -1.
*/
function cariModus(arr) {
  // you can only write your code here!
  let arrModus = [], isSame = false;

  for(let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        isSame = true;
        arrModus.push(arr[i]);
      } else {
        isSame = false;
      }
    }
  }
  return (arrModus[0] === undefined || isSame) ? -1 : arrModus[0];
}

console.log(" ")
// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1

//soal  5
//sistem ubah hurufnya misal huruf a diubah menjadi b, c menjadi d, b menjadi c, z menjadi a
//intinya ubah huruf menjadi huruf setelahnya
function ubahHuruf(kata) {
  // you can only write your code here!
  let abjad = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let res = "";
  for (let i = 0; i < kata.length; i++) {
    let letter = abjad.indexOf(kata[i]) + 1;
    res += abjad[letter];
  }
  return res;
}

console.log("")
// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
