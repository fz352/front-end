document.getElementById("menu-toggle").addEventListener("click", function () {
  const menu = document.getElementById("mobile-menu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";


});


const dialog = document.getElementById("dialog");
const dialogText = document.getElementById("dialog-text");
const cancel = document.getElementById("cancel");

const clientes = {
  "101": { nome: "Alan", idade: 24 },
  "102": { nome: "Maria", idade: 30 },
  "201": { nome: "Carlos", idade: 45 }
};


document.querySelectorAll(".blocoA button, .blocoB button").forEach(button =>{
  button.addEventListener('click', () =>{
    const apto = button.dataset.apto || button.textContent.trim();

    if(clientes[apto]){
      dialogText.textContent = `Apartamento ${apto}\nNome: ${clientes[apto].nome}\nIdade: ${clientes[apto].idade}`;
   }

    dialog.showModal()
  })
})


cancel.addEventListener('click', () => {
  dialog.close()
})