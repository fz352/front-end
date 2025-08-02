let menuToggle = document.getElementById("menu-toggle");
let menu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", function () {
  menu.classList.toggle("ativo");

  menuToggle.innerHTML = menu.classList.contains("ativo") ? "&#10006;" : "&#9776;";
});



const nome = document.getElementById("nomeUsuario");
const senha = document.getElementById("senhaUsuario");
const email = document.getElementById("emailUsuario");
const cpf = document.getElementById("cpfUsuario");
const telefone = document.getElementById("telUsuario");

cpf.addEventListener("input", function (event) {
    let value = event.target.value.replace(/\D/g, ""); 
    value = value.replace(/(\d{3})(\d)/, "$1.$2"); 
    value = value.replace(/(\d{3})(\d)/, "$1.$2"); 
    value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2"); 
    event.target.value = value; 
});


function TestaCPF(strCPF) {
    var Soma;
    var Resto;
    Soma = 0;
    if (strCPF == "00000000000") return false;

    for (let i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10))) return false;

    Soma = 0;
    for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11))) return false;
    return true;
}


document.getElementById("btnCadastro").addEventListener("click", function (event) {
  event.preventDefault();

  const nomeValue = nome.value.trim();
  const senhaValue = senha.value.trim();
  const emailValue = email.value.trim();
  const cpfValue = cpf.value.replace(/\D/g, "");
  const telefoneValue = telefone.value.replace(/\D/g, "");


  const isCPF = cpfValue.length === 11;


  if (isCPF && !TestaCPF(cpfValue)) {
    alert("CPF inválido. Por favor, insira um CPF válido.");
    return;
  }

  if( !nomeValue || !senhaValue || !emailValue || !cpfValue || !telefoneValue) {
    alert("Por favor, preencha todos os campos.");
    return;
  }


   fetch("http://localhost:3333/createcliente", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      nome: nomeValue,
      password: senhaValue,
      email: emailValue,
      cpfCnpj: cpfValue, 
      telefone: telefoneValue
    })
  })
 .then(response => {
  if (response.ok) {
    alert("Cliente cadastrado com sucesso!");
    return response.json();
  } else {
    alert("Erro ao cadastrar cliente.");
    throw new Error("Erro ao cadastrar cliente.");
  }
})
.then(data => {
  window.location.href = "../login/loginUsuarios.html"
})
.catch(error => {
  console.error("Erro:", error);

});
 
});