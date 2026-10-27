/* ===== Latihan 1 — Mengubah teks dengan DOM ===== */
const judul = document.getElementById("judul");
const pesan = document.getElementById("pesan");
judul.textContent = "Belajar JavaScript DOM";
pesan.textContent = "Konten berhasil diubah oleh JavaScript.";

/* ===== Latihan 2 — Event click ===== */
const tombol = document.getElementById("tombolAksi");
tombol.addEventListener("click", function () {
  pesan.textContent = "Tombol diklik pada " + new Date().toLocaleTimeString();
});

/* ===== Latihan 3 — Mengubah kelas dan gaya CSS ===== */
const tombolGaya = document.getElementById("tombolGaya");
const teksGaya = document.getElementById("teksGaya");
tombolGaya.addEventListener("click", function () {
  teksGaya.classList.toggle("highlight");
  teksGaya.classList.toggle("teks-besar");
});

/* ===== Latihan 4 — Event input dan penghitung karakter ===== */
const namaInput = document.getElementById("namaInput");
const jumlahKarakter = document.getElementById("jumlahKarakter");
namaInput.addEventListener("input", function () {
  jumlahKarakter.textContent = namaInput.value.length;
});

/* ===== Latihan 5 — Validasi form pendaftaran ===== */
const form = document.getElementById("formPendaftaran");
const pesanForm = document.getElementById("pesanForm");

function tampilkanPesanForm(teks, sukses) {
  pesanForm.textContent = teks;
  pesanForm.className = sukses ? "pesan-sukses" : "pesan-error";
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const nama = document.getElementById("nama").value.trim();
  const email = document.getElementById("email").value.trim();
  const usiaInput = document.getElementById("usia").value;
  const usia = Number(usiaInput);
  const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (nama === "") {
    tampilkanPesanForm("Nama wajib diisi.", false);
  } else if (!polaEmail.test(email)) {
    tampilkanPesanForm("Masukkan email yang valid.", false);
  } else if (usiaInput === "" || !Number.isInteger(usia) || usia < 17 || usia > 100) {
    tampilkanPesanForm("Usia harus berupa bilangan bulat 17–100.", false);
  } else {
    tampilkanPesanForm("Validasi berhasil. Form siap diproses.", true);
    form.reset();
  }
});

/* ===== Latihan 6 — Daftar tugas (To-do List) + Eksperimen 1 (hapus item) ===== */
const inputTugas = document.getElementById("inputTugas");
const tambahTugas = document.getElementById("tambahTugas");
const daftarTugas = document.getElementById("daftarTugas");
const pesanTugas = document.getElementById("pesanTugas");

tambahTugas.addEventListener("click", function () {
  const teks = inputTugas.value.trim();
  if (teks === "") {
    pesanTugas.textContent = "Tulis tugas terlebih dahulu.";
    pesanTugas.className = "pesan-error";
    return;
  }

  const item = document.createElement("li");
  const label = document.createElement("span");
  const selesai = document.createElement("button");
  const hapus = document.createElement("button");   // Eksperimen 1

  label.textContent = teks + " ";                   // textContent: aman dari HTML injection
  selesai.type = "button";
  selesai.textContent = "Tandai selesai";
  selesai.addEventListener("click", function () {
    item.classList.toggle("selesai");
    selesai.textContent = item.classList.contains("selesai")
      ? "Batalkan selesai" : "Tandai selesai";
  });

  hapus.type = "button";
  hapus.textContent = "Hapus";
  hapus.className = "tombol-hapus";
  hapus.addEventListener("click", function () {
    item.remove();
    pesanTugas.textContent = "Tugas dihapus.";
    pesanTugas.className = "pesan-sukses";
  });

  item.append(label, selesai, hapus);
  daftarTugas.appendChild(item);
  inputTugas.value = "";
  pesanTugas.textContent = "Tugas ditambahkan.";
  pesanTugas.className = "pesan-sukses";
  inputTugas.focus();
});

/* ===== Eksperimen 4 — Sembunyikan / tampilkan paragraf dengan class CSS ===== */
const tombolSembunyi = document.getElementById("tombolSembunyi");
const paragrafToggle = document.getElementById("paragrafToggle");
tombolSembunyi.addEventListener("click", function () {
  paragrafToggle.classList.toggle("sembunyi");
  tombolSembunyi.textContent = paragrafToggle.classList.contains("sembunyi")
    ? "Tampilkan Paragraf" : "Sembunyikan Paragraf";
});
