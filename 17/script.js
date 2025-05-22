function tampilkanGambar() {
  let img = document.createElement("img");
  img.src = "https://via.placeholder.com/150";
  img.alt = "Gambar contoh";
  document.getElementById("gambarContainer").appendChild(img);
}
