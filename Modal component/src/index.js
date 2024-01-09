let button = document.getElementById("open-modal-btn");
let modaldisplay = document.getElementById("modal");
let crossBtn = document.getElementById("cross-btn");

button.addEventListener("click", function (e) {
  modaldisplay.style.display = "block";
});

crossBtn.addEventListener("click", function (e) {
  modaldisplay.style.display = "none";
});
