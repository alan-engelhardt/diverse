window.addEventListener("DOMContentLoaded", tjekDarkMode);
let chkbox;

function tjekDarkMode() {
  chkbox = document.querySelector("#light-mode");
  chkbox.addEventListener("change", setMode);

  const cookieValue = document.cookie
    .split("; ")
    .find((row) => row.startsWith("lightMode="))
    ?.split("=")[1];

  cookieValue == "off" ? (chkbox.checked = false) : (chkbox.checked = true);
  console.log(cookieValue);
}

function setMode() {
  chkbox.checked ? (document.cookie = "lightMode=on") : (document.cookie = "lightMode=off");
}
