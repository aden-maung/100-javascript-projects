// Rashqa Andrean X PPLG 2

const angka = Math.floor(Math.random() * 10) + 1;

function cek() {
  const tebakan = parseInt(document.getElementById("tebakan").value);
  const hasil = document.getElementById("hasil");

  if (isNaN(tebakan)) {
    hasil.textContent = "Masukkan angka!";
    return;
  }

  if (tebakan === angka) {
    hasil.textContent = "🎉 Benar! Kamu hebat!";
  } else if (tebakan < angka) {
    hasil.textContent = "Terlalu kecil!";
  } else {
    hasil.textContent = "Terlalu besar!";
  }
}
