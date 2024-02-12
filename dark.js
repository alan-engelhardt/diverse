window.addEventListener("DOMContentLoaded", checkMode);
let chkbox;

function checkMode() {
  chkbox = document.querySelector("#light-mode");
  chkbox.addEventListener("change", setMode);
  const lightMode =
    document.cookie
      ?.split("; ") // optional chaining (?.)
      .find((row) => row.startsWith("lightMode="))
      ?.split("=")[1] ?? console.error("'lightMode' cookie not found or malformed");

  lightMode == "off" ? (chkbox.checked = false) : (chkbox.checked = true);
}

function setMode() {
  chkbox.checked ? (document.cookie = "lightMode=on") : (document.cookie = "lightMode=off");
}
