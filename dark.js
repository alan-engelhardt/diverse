window.addEventListener("DOMContentLoaded", checkMode);
let chkbox;

function checkMode() {
  chkbox = document.querySelector("#light-mode");
  chkbox.addEventListener("change", setMode);
  console.log(document.cookie);
  const lightMode =
    document.cookie
      ?.split("; ") // optional chaining (?.)
      .find((row) => row.startsWith("lightMode="))
      ?.split("=")[1] ?? null; // nullish coalescing (??)

  lightMode == "off" ? (chkbox.checked = false) : (chkbox.checked = true);
}

function setMode() {
  chkbox.checked ? (document.cookie = "lightMode=on") : (document.cookie = "lightMode=off");
}
