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
const cnh = document.getElementById("cnhEntregador");
const veiculoSelect = document.getElementById("veiculo-select");
cnh.style.display = 'none';





veiculoSelect.addEventListener('change', function () {
  const valorSelecionado = this.value;
  if(valorSelecionado ==="Moto" || valorSelecionado ==="Carro"){  
    cnh.style.display = '';
  }else{
    cnh.style.display = 'none';
  }
});

document.getElementById("btnCadastro").addEventListener("click", function (event) {

});