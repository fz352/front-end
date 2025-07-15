document.getElementById("menu-toggle").addEventListener("click", function () {
  const menu = document.getElementById("mobile-menu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";


});


const nomeCondominio = document.getElementById("nomeCondominio");
const enderecoCondominio = document.getElementById("enderecoCondominio");
const telefoneCondominio = document.getElementById("telefoneCondominio");
const emailCondominio = document.getElementById("emailCondominio");



document.getElementById("btnCadastro").addEventListener("click", function (event) {
  event.preventDefault();
  const nome = nomeCondominio.value.trim();
  const endereco = enderecoCondominio.value.trim();
  const telefone = telefoneCondominio.value.trim();
  const email = emailCondominio.value.trim();

  if(nome ==="" || endereco === "" || telefone === "" || email === "") {
    alert("Por favor, preencha todos os campos.");
    return;
  } else {
    fetch("http://localhost:3333/createcondominio", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        nome: nome,
        endereco: endereco,
        telefone: telefone,
        email: email
      })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error("Erro ao cadastrar condomínio.");
      }
      return response.json();
    })
    .then(data => alert("Condomínio cadastrado com sucesso!"))
    .catch(error => console.error("Erro ao criar condominio " + error));
  }

});