function hitungKarakter() {
  let text = document.getElementById("inputText").value;
  document.getElementById("jumlah").innerText = "Jumlah karakter: " + text.length;
}
