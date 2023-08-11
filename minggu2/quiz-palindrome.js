/* 1.
Diberikan sebuah function palindrome(kata) yang menerima satu parameter. Function tersebut akan mengembalikan nilai true 
jika kata merupakan palindrome, dan false jika bukan. Kata palindrome adalah sebuah kata yang jika dibalik, tetap sama. 
Contoh, 'katak' dibalik tetaplah 'katak'.
*/

function palindrome(kata) {
    // you can only write your code here!
    for(let i = 0; i < kata.length; i++) {
        for(let j = kata.length-1; j >= 0; j--) {
            if(kata[i] == kata[j]) {
                return true;
            } else {
                return false;
            }
        }
    }
}
console.log(" ")
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false

/* 2.
Diberikan sebuah function angkaPalindrome(angka) yang menerima satu parameter angka. Function akan me-return angka 
selanjutnya yang mengandung nilai angka palindrome. Contoh, jika angka adalah 27, maka function akan me-return nilai 33 
karena angka 33 adalah angka palindrom. Jika angka dari awal sudah merupakan palindrome, maka function harus mencari angka 
selanjutnya yang palindrome. Contoh, jika angka adalah 8, walaupun dia sudah palindrome, harus mencari angka selanjutnya yang palindrome,
yaitu 9.

note kenapa angka 8 adalah palindrome? karena angka 8 dibalik tetep 8 wkwkw
note kenapa angka 343 adalah palindrome? karena angka 343 dibalik tetep 343 eaaaa
*/

function angkaPalindrome(num) {
    function isPalindrome(n) {
      // Mengubah angka menjadi string dan membalikkan string tersebut
      let strNum = n.toString();
      let reversedStr = strNum.split("").reverse().join("");
      // Memeriksa apakah angka palindrome atau tidak
      return strNum === reversedStr;
    }
  
    // Mencari angka palindrome selanjutnya
    let nextNum = num + 1;
    while (!isPalindrome(nextNum)) {
      nextNum++;
    }
  
    return nextNum;
  }
console.log(" ")
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001
  


// 3.
  function hitungJumlahKata(kalimat) {
    // you can only write your code here!
    
    //pisahkan kalimat menjadi array kata-kata menggunakan spasi sebagai pemisah
    let words = kalimat.split(" ");
    
    //hitung jumlah kata dalam array
    let wordCount = words.length;
    return wordCount;
  }
  
  console.log(" ")
  // TEST CASES
  console.log(hitungJumlahKata('I have a dream')); // 4
  console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
  console.log(hitungJumlahKata('A song to sing')); // 4
  console.log(hitungJumlahKata('I')); // 1
  console.log(hitungJumlahKata('I believe I can code')); // 5

//4.
function pasanganTerbesar(num) {
    let numStr = num.toString();
    let max = 0;
  
    for(let i = 0; i < numStr.length; i++) {
      if(numStr[i] + numStr[i+1] > max) {
        max = numStr[i] + numStr[i + 1];
      }
    }
  
    return max;
  }
  
console.log(" ")
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99