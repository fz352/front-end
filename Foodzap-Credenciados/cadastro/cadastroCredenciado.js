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
const estado = document.getElementById("estadoCredenciado");
const cidade = document.getElementById("cidadeCredenciado");
const endereco = document.getElementById("endCredenciado");




function mascaraCEP() {
  var cep = document.getElementById('cepCredenciado');
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





document.getElementById("btnCadastro").addEventListener("click", function (event) {

});





