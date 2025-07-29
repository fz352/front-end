let menuToggle = document.getElementById("menu-toggle");
let menu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", function () {
  menu.classList.toggle("ativo");

  menuToggle.innerHTML = menu.classList.contains("ativo") ? "&#10006;" : "&#9776;";
});


const nomeCondominio = document.getElementById("nomeUsuario");
const enderecoCondominio = document.getElementById("senhaUsuario");
const telefoneCondominio = document.getElementById("emailUsuario");
const emailCondominio = document.getElementById("cpfUsuario");



document.getElementById("btnCadastro").addEventListener("click", function (event) {
 
});