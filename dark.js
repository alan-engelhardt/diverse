window.addEventListener("DOMContentLoaded", tjekDarkMode);
let cbox;

function tjekDarkMode() {
  cbox = document.querySelector("#light-mode");
  cbox.addEventListener("change", setMode);
  document.cookie == "dark" ? (cbox.checked = false) : (cbox.checked = true);
  console.log(document.cookie);
}

function setMode() {
  cbox.checked ? (document.cookie = "light") : (document.cookie = "dark");
}

// if (document.cookie == "dark") {
//   console.log("mørk mode");
//   cbox.checked = false;
// } else {
//   console.log("lys mode");
//   cbox.checked = true;
// }
