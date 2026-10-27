# Lab6Web — Praktikum 6: JavaScript DOM dan Event Handling

**Mata Kuliah:** Pemrograman Web (Pertemuan 7)
**Nama:** Erlina Dwi Artika
**Kelas:** I252A
**NIM:** 312510039
**Program Studi:** Teknik Informatika, Universitas Pelita Bangsa

## Tujuan Praktikum

- Memahami DOM sebagai representasi dokumen HTML yang dapat diakses melalui JavaScript.
- Menggunakan id, class, dan selector CSS untuk memilih elemen HTML.
- Mengubah teks, atribut, kelas CSS, dan gaya elemen melalui JavaScript.
- Menangani event pengguna menggunakan `addEventListener()`.
- Membuat validasi form dan menampilkan pesan sesuai kondisi input.
- Mengembangkan halaman interaktif dengan minimal tiga fungsi yang berjalan benar.

## Struktur File

```
Lab6Web/
├── README.md
├── lab6_dom_event/            # Latihan 1-6, Eksperimen 1 dan 4
│   ├── index.html
│   ├── style.css
│   └── script.js
├── mini_project_workshop/     # Mini Project, Eksperimen 2 dan 3
│   ├── index.html
│   ├── style.css
│   └── script.js
├── eksperimen_defer/          # Eksperimen 5 (script tanpa defer)
│   ├── index.html
│   └── script.js
└── screenshots/               # Bukti hasil pengujian (Gambar 1-25 pada laporan)
```

## Cara Menjalankan

Tidak perlu instalasi apa pun. Cukup buka file HTML di browser modern (Chrome, Edge, atau Firefox):

1. Ekstrak file zip `Lab6Web`.
2. Buka folder `lab6_dom_event` lalu klik dua kali `index.html` (Latihan 1-6, Eksperimen 1 dan 4).
3. Buka folder `mini_project_workshop` lalu klik dua kali `index.html` (Mini Project, Eksperimen 2 dan 3).
4. Buka folder `eksperimen_defer` lalu klik dua kali `index.html` (Eksperimen 5).
5. Tekan `F12` dan pilih tab **Console** untuk memeriksa kesalahan.

Alternatif dengan Visual Studio Code: pasang ekstensi **Live Server**, klik kanan `index.html`, lalu pilih **Open with Live Server**.

## Daftar Latihan dan Skenario Pengujian

### lab6_dom_event/index.html

| No | Bagian | Cara menguji | Hasil yang diharapkan |
| --- | --- | --- | --- |
| 1 | Latihan 1 | Buka halaman | Judul menjadi "Belajar JavaScript DOM" dan paragraf menjadi "Konten berhasil diubah oleh JavaScript." |
| 2 | Latihan 2 | Klik **Klik Saya** | Paragraf menampilkan "Tombol diklik pada" beserta jam saat itu |
| 3 | Latihan 3 | Klik **Ubah Gaya** | Teks mendapat kelas `highlight` dan `teks-besar`; klik lagi untuk mengembalikan |
| 4 | Latihan 4 | Ketik "Erlina Dwi Artika" pada kolom Nama | Penghitung menampilkan 17 |
| 5 | Latihan 5 | Klik **Daftar** dengan input kosong | "Nama wajib diisi." |
| 6 | Latihan 5 | Nama kosong, email erlina@mail.com, usia 20 | "Nama wajib diisi." |
| 7 | Latihan 5 | Erlina Dwi Artika, erlina@mail, 20 | "Masukkan email yang valid." |
| 8 | Latihan 5 | Erlina Dwi Artika, erlina@mail.com, 15 | "Usia harus berupa bilangan bulat 17–100." |
| 9 | Latihan 5 | Erlina Dwi Artika, erlina@mail.com, 20 | "Validasi berhasil. Form siap diproses." lalu form dikosongkan |
| 10 | Latihan 6 | Klik **Tambah** dengan kolom kosong | "Tulis tugas terlebih dahulu." |
| 11 | Latihan 6 | Tambah tiga tugas (salah satunya `<b>Lab6Web</b>`) | Tugas muncul; tag HTML tampil sebagai teks biasa |
| 12 | Latihan 6 | Klik **Tandai selesai** | Teks tercoret; tombol berubah menjadi "Batalkan selesai" |
| 13 | Eksperimen 1 | Klik **Hapus** pada sebuah tugas | Tugas hilang dan muncul "Tugas dihapus." |
| 14 | Eksperimen 4 | Klik **Sembunyikan Paragraf** | Paragraf disembunyikan; tombol menjadi "Tampilkan Paragraf" |

### mini_project_workshop/index.html

| No | Cara menguji | Hasil yang diharapkan |
| --- | --- | --- |
| 1 | Klik **Daftar** dengan form kosong | Tiga kolom wajib ditandai merah dan pesan utama "Pendaftaran gagal..." |
| 2 | Nama "Er", email "erlina@", sesi belum dipilih | "Nama minimal 3 karakter.", format email tidak valid, "Silakan pilih salah satu sesi." |
| 3 | Isi nama, email, sesi, motivasi | Panel Ringkasan Input dan penghitung karakter (0/150) berubah langsung |
| 4 | Pilih sesi pada dropdown | Muncul detail sesi (jam dan ruang) |
| 5 | Isi semua data valid lalu klik **Daftar** | Pesan sukses hijau; form dikosongkan, ringkasan tetap tampil |
| 6 | Klik **Reset** | Semua kolom, pesan, dan ringkasan kembali ke keadaan awal |
| 7 | Perkecil lebar layar hingga 390 px | Tata letak menjadi satu kolom dan tombol selebar layar |

### eksperimen_defer/index.html

Script dimuat di `<head>` tanpa `defer`. Judul dan paragraf **tidak berubah**, dan Console menampilkan `judul = null` serta `Uncaught TypeError: Cannot set properties of null (setting 'textContent')`. Ini memang hasil yang diharapkan pada eksperimen.

## Screenshot

Seluruh screenshot hasil pengujian ada di folder `screenshots/` (Gambar 1-25 sesuai laporan).

## Kesimpulan Singkat

DOM memungkinkan JavaScript memilih dan mengubah elemen, sedangkan `addEventListener()` menghubungkan tindakan pengguna dengan fungsi. Validasi form memakai `preventDefault()`, tampilan diatur lewat `classList.toggle()`, dan teks pengguna ditampilkan dengan `textContent` agar aman dari HTML injection. Atribut `defer` diperlukan agar script berjalan setelah DOM tersedia.
