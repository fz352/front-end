let menuToggle = document.getElementById("menu-toggle");
let menu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", function () {
  menu.classList.toggle("ativo");

  menuToggle.innerHTML = menu.classList.contains("ativo") ? "&#10006;" : "&#9776;";
});



function mascaraCEP() {
  var cep = document.getElementById('cepCredenciado');
  var estado = document.getElementById('estadoCredenciado');
  var cidade = document.getElementById('cidadeCredenciado');
  var endereco = document.getElementById('endCredenciado');

  cep.value = cep.value.replace(/\D/g, ''); // Remove caracteres não numéricos
  cep.value = cep.value.replace(/(\d{5})(\d)/, '$1-$2'); // Adiciona a máscara

  console.log('valor: ' + cep.value);
  console.log('length: ' + cep.value.length);
  if (cep.value.length === 9) {
    fetch(`https://viacep.com.br/ws/${cep.value}/json/`) // Replace with your actual JSON endpoint
      .then(response => {

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        return response.json();
      })
      .then(data => {

        console.log(data);
        estado.value = data.estado;
        cidade.value = data.localidade;
        endereco.value = data.logradouro;

      })
      .catch(error => {

        console.error('There was a problem with the fetch operation:', error);
      });
  }

}

document.getElementById('cpfUsuario').addEventListener('input', function (e) {

  let x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,4})(\d{0,2})/);
  e.target.value = !x[2] ? x[1] : x[1] + '.' + x[2] + (x[3] ? '.' : '') + x[3] + (x[4] ? '/' : x[4]) + x[4] + (x[5] ? '-' + x[5] : '');

  if (e.target.value.length < 15) {
    x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2})/);
    e.target.value = !x[2] ? x[1] : x[1] + '.' + x[2] + (x[3] ? '.' : '') + x[3] + (x[4] ? '-' + x[4] : '');
  }

  console.log('Com formatação: ' + e.target.value);

  //Caso queira pegar apenas os números use essa função para remover todos os caracteres menos os números em Javascript
  let valor = e.target.value.replace(/[^0-9]/g, '');
  console.log('Sem formatação: ' + valor);
});





function TestaCNPJ(cnpj) {
  cnpj = cnpj.replace(/\D/g, '');

  if (cnpj.length !== 14) return false;

  if (/^(\d)\1+$/.test(cnpj)) return false;

  let tamanho = cnpj.length - 2;
  let numeros = cnpj.substring(0, tamanho);
  let digitos = cnpj.substring(tamanho);
  let soma = 0;
  let pos = tamanho - 7;
  for (let i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2) pos = 9;
  }
  let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
  if (resultado != digitos.charAt(0)) return false;

  tamanho = tamanho + 1;
  numeros = cnpj.substring(0, tamanho);
  soma = 0;
  pos = tamanho - 7;
  for (let i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2) pos = 9;
  }
  resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
  if (resultado != digitos.charAt(1)) return false;

  return true;
}

const nomeCredenciado = document.getElementById("nomeUsuario");
const senhaCredenciado = document.getElementById("senhaUsuario");
const cpfCnpjCredenciado = document.getElementById("cpfUsuario");
const emailCredenciado = document.getElementById("emailUsuario");
const telefoneCredenciado = document.getElementById("telefoneUsuario");
const cepCredenciado = document.getElementById("cepCredenciado");
const numeroCredenciado = document.getElementById("numeroCredenciado");
const estadoCredenciado = document.getElementById("estadoCredenciado");
const cidadeCredenciado = document.getElementById("cidadeCredenciado");
const enderecoCredenciado = document.getElementById("endCredenciado");
const complementoCredenciado = document.getElementById("complementoCredenciado");

document.getElementById("btnCadastro").addEventListener("click", function (event) {
  event.preventDefault();
 
  const nomeValue = nomeCredenciado.value.trim();
  const senhaValue = senhaCredenciado.value.trim();
  const emailValue = emailCredenciado.value.trim();
  const cnpjValue = cpfCnpjCredenciado.value.replace(/\D/g, "");
  const telefoneValue = telefoneCredenciado.value.replace(/\D/g, "");
  const cepValue = cepCredenciado.value.replace(/\D/g, "");
  const numeroValue = numeroCredenciado.value.trim();
  const estadoValue = estadoCredenciado.value.trim();
  const cidadeValue = cidadeCredenciado.value.trim();
  const enderecoValue = enderecoCredenciado.value.trim();
  const complementoValue = complementoCredenciado.value.trim();


  const isCNPJ = cnpjValue.length === 14;

  if (isCNPJ && !TestaCNPJ(cnpjValue)) {
    alert("CNPJ inválido. Por favor, insira um CNPJ válido.");
    return;
  }


  if( !nomeValue || !senhaValue || !emailValue || !cnpjValue || !telefoneValue || 
    !cepValue|| !numeroValue|| !estadoValue|| !cidadeValue|| !enderecoValue) {
    alert("Por favor, preencha todos os campos.");
    return;
  }


   fetch("http://localhost:3333/createcredenciado", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      nome: nomeValue,
      password: senhaValue,
      email: emailValue,
      cpfCnpj: cnpjValue,
      telefone: telefoneValue,
      cep: cepValue,
      numero: numeroValue,
      estado: estadoValue,
      cidade: cidadeValue,
      endereco: enderecoValue,
      complemento: complementoValue
    })
  })
 .then(response => {
  if (response.ok) {
    alert("Empresa cadastrada com sucesso!");
    return response.json();
  } else {
    alert("Erro ao cadastrar empresa.");
    throw new Error("Erro ao cadastrar empresa.");
  }
})
.then(data => {
  window.location.href = "../login/loginCredenciado.html"

})
.catch(error => {
  console.error("Erro:", error);

});
 
});




