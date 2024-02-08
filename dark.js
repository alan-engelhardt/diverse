window.addEventListener("DOMContentLoaded", tjekDarkMode);
let chkbox;

function tjekDarkMode() {
  chkbox = document.querySelector("#light-mode");
  chkbox.addEventListener("change", setMode);
  document.cookie == "dark" ? (chkbox.checked = false) : (chkbox.checked = true);
  console.log(document.cookie);
}

function setMode() {
  chkbox.checked ? (document.cookie = "light") : (document.cookie = "dark");
}
