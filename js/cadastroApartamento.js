document.getElementById("menu-toggle").addEventListener("click", function () {
  const menu = document.getElementById("mobile-menu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";


});

document.getElementById("btnCadastro").addEventListener("click", function () {
  const nomeDono = document.getElementById("nomeDono").value
  const numeroDono = document.getElementById("numeroDono").value
  const numeroApartamento = document.getElementById("numeroApartamento").value

  if (nomeDono == "" || numeroDono == "" || numeroApartamento == "") {
    console.log("Campo Vazio")
  } else {
    console.log(nomeDono)
    console.log(numeroDono)
    console.log(numeroApartamento)
  }
})