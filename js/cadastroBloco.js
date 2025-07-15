let menuToggle = document.getElementById("menu-toggle");
let menu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", function () {
  menu.classList.toggle("ativo");

  menuToggle.innerHTML = menu.classList.contains("ativo") ? "&#10006;" : "&#9776;";
});


const nomeBloco = document.getElementById("nomeBloco");
const numeroDeApartamentos = document.getElementById("numeroDeApartamentos");

document.getElementById("btnCadastro").addEventListener("click", function () {
   const select = document.querySelector("#condominio");
   var option = select.children[select.selectedIndex];
   var value = option.value;

    const condominio = parseInt(value);
    const bloco = nomeBloco.value.trim();
    const apartamentos = parseInt(numeroDeApartamentos.value.trim());
   

    if (condominio === "" || bloco === "" || apartamentos === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    } else {
        fetch("http://localhost:3333/createbloco", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                condominioId: condominio,
                nome: bloco,
                numeroApartamentos: apartamentos
            })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro ao cadastrar bloco.");
            }
            return response.json();
        })
        .then(data => alert("Bloco cadastrado com sucesso!"))
        .catch(error => console.error("Erro ao criar bloco " + error));

    }

  
})