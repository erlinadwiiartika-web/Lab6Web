const judul = document.getElementById("judul");   // hasilnya null
const pesan = document.getElementById("pesan");   // hasilnya null
console.log("judul =", judul);
judul.textContent = "Belajar JavaScript DOM";     // TypeError
pesan.textContent = "Konten berhasil diubah oleh JavaScript.";
