/* ===== Mini Project — Form Pendaftaran Workshop ===== */
const form = document.getElementById("formWorkshop");
const inputNama = document.getElementById("nama");
const inputEmail = document.getElementById("email");
const selectSesi = document.getElementById("sesi");
const textMotivasi = document.getElementById("motivasi");

const errNama = document.getElementById("errNama");
const errEmail = document.getElementById("errEmail");
const errSesi = document.getElementById("errSesi");
const infoSesi = document.getElementById("infoSesi");
const hitungMotivasi = document.getElementById("hitungMotivasi");
const pesanUtama = document.getElementById("pesanUtama");

const rNama = document.getElementById("rNama");
const rEmail = document.getElementById("rEmail");
const rSesi = document.getElementById("rSesi");
const rMotivasi = document.getElementById("rMotivasi");

const POLA_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_NAMA = 3;                       // Eksperimen 2: nama minimal 3 karakter

const DETAIL_SESI = {
  "HTML & CSS Dasar": "Sesi pagi, 09.00–10.30 · Ruang Lab 1",
  "JavaScript DOM":   "Sesi siang, 11.00–12.30 · Ruang Lab 2",
  "Git & GitHub":     "Sesi sore, 13.00–14.30 · Ruang Lab 3"
};

/* ---------- Fungsi bantu ---------- */
function setStatus(elemen, pesanElemen, pesan) {
  pesanElemen.textContent = pesan;
  elemen.classList.toggle("is-invalid", pesan !== "");
  elemen.classList.toggle("is-valid", pesan === "" && elemen.value.trim() !== "");
}

/* ---------- Fungsi 1: validasi per field ---------- */
function validasiNama() {
  const nilai = inputNama.value.trim();
  let pesan = "";
  if (nilai === "") pesan = "Nama wajib diisi.";
  else if (nilai.length < MIN_NAMA) pesan = "Nama minimal " + MIN_NAMA + " karakter.";
  setStatus(inputNama, errNama, pesan);
  return pesan === "";
}

function validasiEmail() {
  const nilai = inputEmail.value.trim();
  let pesan = "";
  if (nilai === "") pesan = "Email wajib diisi.";
  else if (!POLA_EMAIL.test(nilai)) pesan = "Format email tidak valid (contoh: nama@contoh.com).";
  setStatus(inputEmail, errEmail, pesan);
  return pesan === "";
}

function validasiSesi() {
  const pesan = selectSesi.value === "" ? "Silakan pilih salah satu sesi." : "";
  setStatus(selectSesi, errSesi, pesan);
  return pesan === "";
}

/* ---------- Fungsi 2: ringkasan input & penghitung karakter (live) ---------- */
function perbaruiRingkasan() {
  rNama.textContent = inputNama.value.trim() || "-";
  rEmail.textContent = inputEmail.value.trim() || "-";
  rSesi.textContent = selectSesi.value || "-";
  rMotivasi.textContent = textMotivasi.value.trim() || "-";   // textContent: aman dari HTML injection
  hitungMotivasi.textContent = textMotivasi.value.length;
}

/* ---------- Fungsi 3: event change pada dropdown sesi (Eksperimen 3) ---------- */
selectSesi.addEventListener("change", function () {
  infoSesi.textContent = selectSesi.value
    ? "Sesi dipilih: " + selectSesi.value + " — " + DETAIL_SESI[selectSesi.value]
    : "";
  if (selectSesi.value !== "") validasiSesi();
  perbaruiRingkasan();
});

/* ---------- Event input: ringkasan langsung + validasi saat mengetik ---------- */
inputNama.addEventListener("input", function () {
  if (errNama.textContent !== "") validasiNama();
  perbaruiRingkasan();
});
inputEmail.addEventListener("input", function () {
  if (errEmail.textContent !== "") validasiEmail();
  perbaruiRingkasan();
});
textMotivasi.addEventListener("input", perbaruiRingkasan);

/* ---------- Event blur: validasi saat meninggalkan field ---------- */
inputNama.addEventListener("blur", function () { if (inputNama.value !== "") validasiNama(); });
inputEmail.addEventListener("blur", function () { if (inputEmail.value !== "") validasiEmail(); });

/* ---------- Event submit: validasi seluruh form ---------- */
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const okNama = validasiNama();
  const okEmail = validasiEmail();
  const okSesi = validasiSesi();

  if (okNama && okEmail && okSesi) {
    pesanUtama.textContent = "Pendaftaran berhasil! Terima kasih, " +
      inputNama.value.trim() + ". Anda terdaftar pada sesi " + selectSesi.value + ".";
    pesanUtama.className = "pesan sukses";
    // Ringkasan dibiarkan tampil sebagai bukti; kolom dikosongkan setelah ditampilkan
    form.reset();
    [inputNama, inputEmail, selectSesi].forEach(function (el) {
      el.classList.remove("is-valid", "is-invalid");
    });
    infoSesi.textContent = "";
    hitungMotivasi.textContent = "0";
  } else {
    pesanUtama.textContent = "Pendaftaran gagal. Periksa kembali kolom yang bertanda merah.";
    pesanUtama.className = "pesan gagal";
  }
});

/* ---------- Event click/reset: hapus input dan pesan ---------- */
document.getElementById("tombolReset").addEventListener("click", function () {
  // form.reset() dijalankan otomatis oleh type="reset"; kita bersihkan tampilan lainnya
  [errNama, errEmail, errSesi, infoSesi, pesanUtama].forEach(function (el) {
    el.textContent = "";
  });
  pesanUtama.className = "pesan";
  [inputNama, inputEmail, selectSesi].forEach(function (el) {
    el.classList.remove("is-valid", "is-invalid");
  });
  // Tunggu reset bawaan selesai, lalu perbarui ringkasan
  setTimeout(perbaruiRingkasan, 0);
});

perbaruiRingkasan();
