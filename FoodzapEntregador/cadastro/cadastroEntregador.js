

let menuToggle = document.getElementById("menu-toggle");
let menu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", function () {
  menu.classList.toggle("ativo");

  menuToggle.innerHTML = menu.classList.contains("ativo") ? "&#10006;" : "&#9776;";
});



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

function validaCNH(cnh) {
  cnh = cnh.replace(/\D/g, '');
  if (cnh.length !== 11) return false;
  if (/^(\d)\1+$/.test(cnh)) return false; // todos os dígitos iguais não é válido

  let dsc = 0;
  let v = 0;

  for (let i = 0; i < 9; ++i) {
    v += (parseInt(cnh.charAt(i)) * (9 - i));
  }

  let dv1 = v % 11;
  if (dv1 >= 10) dv1 = 0;

  if (parseInt(cnh.charAt(9)) !== dv1) return false;

  v = 0;
  for (let i = 0; i < 9; ++i) {
    v += (parseInt(cnh.charAt(i)) * (1 + i));
  }

  let dv2 = v % 11;
  if (dv2 >= 10) dv2 = 0;

  if (parseInt(cnh.charAt(10)) !== dv2) return false;

  return true;
}


const nomeEntregador = document.getElementById("nomeUsuario");
const senhaEntregador = document.getElementById("senhaUsuario");
const emailEntregador = document.getElementById("emailUsuario");
const cpfEntregador = document.getElementById("cpfUsuario");
const telefoneEntregador = document.getElementById("telefoneUsuario");


cpfEntregador.addEventListener("input", function (event) {
    let value = event.target.value.replace(/\D/g, ""); 
    value = value.replace(/(\d{3})(\d)/, "$1.$2"); 
    value = value.replace(/(\d{3})(\d)/, "$1.$2"); 
    value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2"); 
    event.target.value = value; 
});


document.getElementById("btnCadastro").addEventListener("click", function (event) {
  event.preventDefault();


  const nomeValue = nomeEntregador.value.trim();
  const senhaValue = senhaEntregador.value.trim();
  const emailValue = emailEntregador.value.trim();
  const cpfValue = cpfEntregador.value.replace(/\D/g, "");
  const telefoneValue = telefoneEntregador.value.replace(/\D/g, "");
  const cnhValue = cnh.value.replace(/\D/g, "");


  const isCPF = cpfValue.length === 11;


  if (isCPF && !TestaCPF(cpfValue)) {
    alert("CPF inválido. Por favor, insira um CPF válido.");
    return;
  }

  if ((veiculoSelect.value === "Moto" || veiculoSelect.value === "Carro") && !validaCNH(cnhValue)) {
  alert("CNH inválida. Por favor, insira uma CNH válida.");
  return;
  }

  if( !nomeValue || !senhaValue || !emailValue || !cpfValue || !telefoneValue) {
    alert("Por favor, preencha todos os campos.");
    return;
  }


   fetch("http://localhost:3333/createentregador", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      nome: nomeValue,
      password: senhaValue,
      email: emailValue,
      cpfCnpj: cpfValue, 
      telefone: telefoneValue,
      habilitacao: cnhValue
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
  window.location.href = "../login/loginEntregador.html"
})
.catch(error => {
  console.error("Erro:", error);

});
 
});
