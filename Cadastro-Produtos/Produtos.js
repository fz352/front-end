const lista = document.getElementById('ul-produto');
const total = Number(sessionStorage.getItem("totalProdutos")) || 0;


const modal = document.getElementById("modal-info");
const btnFechar = document.getElementById("btn-fechar");
const btnSalvar = document.getElementById("btn-salvar");
const nomeInput = document.getElementById("nome-produto");
const precoInput = document.getElementById("preco-produto");


let indiceAtual = null;
let liAtual = null;


for (let i = 0; i < total; i++) {
  const nome = sessionStorage.getItem(`nomeProduto${i}`) || `Produto ${i}`;
  const preco = sessionStorage.getItem(`precoProduto${i}`) || `0.00`;
  const imagem = sessionStorage.getItem(`imagemProduto${i}`) || "addImage4.png";

  const li = document.createElement("li");
  li.innerHTML = `
    <img src="../src/images/${imagem}" alt="Imagem" style="width: 100px;">
    <div class="product-name">
        <h3>${nome}</h3>
        <p>R$ ${preco}</p>
    </div>
    <hr/>
  `;


  li.addEventListener('click', function () {
    indiceAtual = i;
    liAtual = li;

    nomeInput.value = nome;
    precoInput.value = preco;
    modal.showModal();
  });

  lista.appendChild(li);
}

 
btnSalvar.addEventListener('click', function () {
  if (indiceAtual === null || !liAtual) {
    modal.close();
    return;
  }

  const novoNome = nomeInput.value.trim();
  const novoPreco = precoInput.value.trim();


  sessionStorage.setItem(`nomeProduto${indiceAtual}`, novoNome);
  sessionStorage.setItem(`precoProduto${indiceAtual}`, novoPreco);

  const h3 = liAtual.querySelector("h3");
  const p = liAtual.querySelector("p");
  if (h3) h3.textContent = novoNome;
  if (p) p.textContent = `R$ ${novoPreco}`;

  indiceAtual = null;
  liAtual = null;
  modal.close();
});


btnFechar.addEventListener('click', () => {
  indiceAtual = null;
  liAtual = null;
  modal.close();
});
