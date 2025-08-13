let menuToggle = document.getElementById("menu-toggle");
let menu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", function () {
  menu.classList.toggle("ativo");

  menuToggle.innerHTML = menu.classList.contains("ativo") ? "&#10006;" : "&#9776;";
});