const swiper = new Swiper('.card-wrapper', {
  direction: 'horizontal', // horizontal (default)
  loop: true,              // carrossel infinito
  slidesPerView: 3,        // 👈 quantos cards aparecem ao mesmo tempo
  spaceBetween: 20,        // espaço entre os cards (px)

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
const entrada = document.getElementById("entrada")
const btnFechar = document.getElementById("btn-fechar");
const btnSalvar = document.getElementById("btn-salvar");

entrada.addEventListener('click', function(){
  modal.showModal()
})

btnFechar.addEventListener('click', function(){
  modal.close()
})