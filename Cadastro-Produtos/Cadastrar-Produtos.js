const nomeProduto = document.getElementById("nome-produto");
const precoProduto = document.getElementById("preco-produto");
const selectDisponivel = document.getElementById("select-disponivel");
const productImage = document.getElementById("productImage");
const selectCategoria = document.getElementById("select-categoria");
const description = document.getElementById("description");

document.getElementById("btn-cadastro").addEventListener("click", function () {
    if (
        nomeProduto.value.trim() &&
        precoProduto.value.trim() &&
        selectDisponivel.value &&
        description.value.trim() &&
        selectCategoria.value
    ) {
        let totalProdutos = sessionStorage.getItem("totalProdutos") || 0;
        totalProdutos = parseInt(totalProdutos);

        const file = productImage.files[0];

        sessionStorage.setItem(`nomeProduto${totalProdutos}`, nomeProduto.value);
        sessionStorage.setItem(`precoProduto${totalProdutos}`, precoProduto.value);
        sessionStorage.setItem(`quantidadeProduto${totalProdutos}`, selectDisponivel.value);
        sessionStorage.setItem(`description${totalProdutos}`, description.value);
        sessionStorage.setItem(`selectCategoria${totalProdutos}`, selectCategoria.value);
        sessionStorage.setItem(`imagemProduto${totalProdutos}`, file ? file.name : "");

        sessionStorage.setItem("totalProdutos", totalProdutos + 1);

        // window.location.href = 'produtos.html';

        console.log(nomeProduto.value);
        console.log(precoProduto.value);
        console.log(selectDisponivel.value);
        console.log(description.value);
        console.log(selectCategoria.value);
        if (file) {
            console.log("Imagem:", file.name);
        } else {
            console.log("Nenhuma imagem selecionada");
        }
        var isOK = selectDisponivel.value === "1" ? true : false;
        var createJson = {
            "nome" : nomeProduto.value,
            "preco": precoProduto.value,
            "categoria": selectCategoria.value,
            "descricao": description.value,
            "disponivel":  isOK,
            "imageUrl": "vazio"
        }
        callRequestHttp(JSON.stringify(createJson))
    } else {
        console.log('preencha');
    }
});

function callRequestHttp(_jsonMontado) {
  fetch("http://localhost:3333/createProduto", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: _jsonMontado
  })
 .then(response => {
  if (response.ok) {
    alert("Produto cadastrado sucesso!");
    return response.json();
  } else {
    alert("Erro ao cadastrar produto.");
    throw new Error("Erro ao cadastrar produto.");
  }
})
.then(data => {
   window.location.href = 'produtos.html';
})
.catch(error => {
  console.error("Erro:", error);

});
 
}
