document.getElementById("menu-toggle").addEventListener("click", function () {
  const menu = document.getElementById("mobile-menu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";


});

const nomeDono = document.getElementById("nomeDono");
const numeroDono = document.getElementById("numeroDono");
const numeroApartamento = document.getElementById("numeroApartamento");

document.getElementById("btnCadastro").addEventListener("click", function () {
  const select = document.querySelector("#blocos");
  var option = select.children[select.selectedIndex];
  var value = option.value;
  

  const blocoId = parseInt(value);
  const dono = nomeDono.value.trim();
  const numero = numeroDono.value.trim();
  const apartamento = parseInt(numeroApartamento.value.trim());

  if (blocoId === "" || dono === "" || numero === "" || apartamento === "") {
    alert("Por favor, preencha todos os campos.");
    return;
  } else {
    fetch("http://localhost:3333/createapartamento", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        blocoId: blocoId,
        nomeDono: dono,
        numeroDono: numero,
        numeroApartamento: apartamento
      })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error("Erro ao cadastrar apartamento.");
      }
      return response.json();
    })
    .then(data => alert("Apartamento cadastrado com sucesso!"))
    .catch(error => console.error("Erro ao criar apartamento " + error));
  }
})