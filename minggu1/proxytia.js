//TUGAS
// Kamu diminta untuk memprogram suatu game sederhana, Proxytia namanya. 
// Untuk memulai game itu diperlukan 2 variabel (untuk sekarang), 
// yaitu nama dan peran. Variabel peranharus memiliki isi data, 
// bila kosong pemain akan diberikan peringatan berupa "Pilih Peranmu untuk memulai game". 
// Terdapat 3 peran berbeda yaitu Ksatria, Tabib, dan Penyihir. 
// Tugas Anda adalah untuk membuat program yang mengecek isi variabel 
// peran serta mengeluarkan respon sesuai isi variabel tersebut.
// ada 4 jenis respons sesuai dengan 3 jenis peran yaitu
// halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!
// halo Tabib ${nama} , kamu akan membantu temanmu yang terluka
// halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!
// tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih tidak ada
// tips belajar penggunaan `` (backtick) pada javascript agar
// mudah dalam memasukan variabel ke dalam string
// tapi tanpa backtick juga ga masalah sih yg penting output sesuai

//algoritma
/*
1. Mulai program proxytia.
2. Masukkan nama pemainnya ke dalam variabel `nama`.
3. Masukkan peran pemainnya ke dalam variabel `peran`.
4. Cek apakah variabel `peran` memiliki isi data (tidak kosong):
    4.1. Jika `peran` kosong:
        4.1.1. Tampilkan pesan "Pilih Peranmu untuk memulai game".
        4.1.2. Selesai.
    4.2. Jika `peran` diisi:
        4.2.1. Jika `peran` sama dengan "Ksatria":
            4.2.1.1. Tampilkan pesan "Halo Ksatria {nama}, kamu dapat menyerang dengan senjatamu!".
        4.2.2. Jika `peran` sama dengan "Tabib":
            4.2.2.1. Tampilkan pesan "Halo Tabib {nama}, kamu akan membantu temanmu yang terluka.".
        4.2.3. Jika `peran` sama dengan "Penyihir":
            4.2.3.1. Tampilkan pesan "Halo Penyihir {nama}, ciptakan keajaiban yang membantu kemenanganmu!".
        4.2.4. Jika `peran` tidak sama dengan "Ksatria", "Tabib", atau "Penyihir":
            4.2.4.1. Tampilkan pesan "Tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih tidak ada."
5. Selesai.
*/


// Memulai program gamenya slur
//1. Masukkan nama dan peran ke dalam variabel anda
let nama = "adib";
let peran = "ksatria";

// 2. Cek apakah peran sudah diisi atau tidak, jika tidak maka akan memberikan respon seperti yang berada di no 3. 
if (!peran) {
  console.log("Pilih Peranmu untuk memulai game");
} else {
  // 3. pilih jenis peran dan berikan respon sesuai perannya
  if (peran === "Ksatria") {
    console.log(`Halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`);
  } else if (peran === "Tabib") {
    console.log(`Halo Tabib ${nama}, kamu akan membantu temanmu yang terluka.`);
  } else if (peran === "Penyihir") {
    console.log(`Halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`);
  } else {
    console.log("Tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih tidak ada.");
  }
}
// Selesai
