document.getElementById("menu-toggle").addEventListener("click", function () {
  const menu = document.getElementById("mobile-menu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";


});

document.getElementById("btnCadastro").addEventListener("click", function () {
  const nomeCondominio = document.getElementById("nomeCondominio").value
  const enderecoCondominio = document.getElementById("enderecoCondominio").value
  const telefoneCondominio = document.getElementById("telefoneCondominio").value
  const emailCondominio = document.getElementById("emailCondominio").value

  if (nomeCondominio == "" || enderecoCondominio == "" || telefoneCondominio == "" || emailCondominio == "") {
    console.log("Campo Vazio")
  } else {
    console.log(nomeCondominio)
    console.log(enderecoCondominio)
    console.log(telefoneCondominio)
    console.log(emailCondominio)
  }


})