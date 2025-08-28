const swiper = new Swiper('.card-wrapper', {
  direction: 'horizontal', 
  loop: true,             
  slidesPerView: 3,        
  spaceBetween: 20,        

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


const modal = document.getElementById("modal-info");
const entradas = document.querySelectorAll(".entrada")
const btnFechar = document.getElementById("btn-fechar");
const btnSalvar = document.getElementById("btn-salvar");
const lanches = document.querySelectorAll(".lanche1")
const nomeLanche = document.getElementById("nomelanche")
const descricaoLanche = document.getElementById("descricaolanche")
const valorLanche = document.getElementById("valorlanche")





entradas.forEach(entrada => {

  entrada.addEventListener('click', function () {
    
      let nome = sessionStorage.getItem(`nomeProduto0`);
      
    
      console.log(`Produto:`, nome);

    

    modal.showModal()
  })

})

btnFechar.addEventListener('click', function () {
  modal.close()
})


lanches.forEach(lanche1 => {

  lanche1.addEventListener('click', function () {
    modal.showModal()
  })

})

btnFechar.addEventListener('click', function () {
  modal.close()
})