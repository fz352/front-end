let menuToggle = document.getElementById("menu-toggle");
let menu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", function () {
  menu.classList.toggle("ativo");

  menuToggle.innerHTML = menu.classList.contains("ativo") ? "&#10006;" : "&#9776;";
});


const cpfUsuario = document.getElementById("cpfUsuario");
const senhaUsuario = document.getElementById("senhaUsuario");

document.getElementById('btnLogin').addEventListener('click', function(event){
    event.preventDefault();

    const cpfValue = cpfUsuario.value.trim();
    const senhaValue = senhaUsuario.value.trim();


    if(cpfValue === '' || senhaValue === ''){
        alert('Por favor, preencha todos os campos!');
      
    } else {
      fetch('http://localhost:3333/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          cpfCnpj: cpfValue,
          password: senhaValue
        })
      })
      .then(response => {
        console.log('Resposta da API:', response);
        return response.json();
      })
      .then(data => {
        console.log('Dados recebidos:', data);
        if (data.error){
          throw new Error(data.error);
        }

        localStorage.setItem('token', data.token);
      
        alert('Login realizado com sucesso!');
        setTimeout(() => {
          window.location.href = '../../paginaInicial.html';
        }, 2600);


      })
      .catch(error => {
        console.log('Erro na requisição', error);
        alert('Erro ao fazer login: ' + error.message);
      });


    };
});
