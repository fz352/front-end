let menuToggle = document.getElementById("menu-toggle");
let menu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", function () {
  menu.classList.toggle("ativo");

  menuToggle.innerHTML = menu.classList.contains("ativo") ? "&#10006;" : "&#9776;";
});


const cpfUsuario = document.getElementById("cpfUsuario");
const senhaUsuario = document.getElementById("senhaUsuario");

document.getElementById("btnCadastro").addEventListener("click", function () {
   
})