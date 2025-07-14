document.getElementById("menu-toggle").addEventListener("click", function () {
    const menu = document.getElementById("mobile-menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";


});


document.getElementById("btnCadastro").addEventListener("click", function () {
    const nomeBloco = document.getElementById("nomeBloco").value
    const numeroDeApartamentos = document.getElementById("numeroDeApartamentos").value

    if (nomeBloco == "" || numeroDeApartamentos == "") {
        console.log("Campo Vazio")
    } else {
        console.log(nomeBloco)
        console.log(numeroDeApartamentos)
    }
})