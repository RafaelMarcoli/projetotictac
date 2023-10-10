import { catalogo } from "./utilidades";


export function renderizarVideo(){

    for (const produtoCatalogo of catalogo) {

        const cartaoProduto = `<div class=" border-solid border-2 border-blue-700 shadow-blue-700 rounded-xl shadow-xl h-96 w-56 m-2 flex flex-col p-2 justify-between group ${produtoCatalogo.feminino ? 'feminino' : 'masculino'}" id="card-produto-${produtoCatalogo.id}">
            <img class="imagem" src="./assets/${produtoCatalogo.imagem}" alt="${produtoCatalogo.nome}"
           ">
            <p class="loja">${produtoCatalogo.loja}</p>
            <video class="video" src="./assets/Videos/${produtoCatalogo.video}" controls></video>
            <p class="preco">R$${produtoCatalogo.preco}</p>
        
          </div>`;
        
          document.getElementById("container-videos").innerHTML += cartaoProduto;
        }

}

// Funçao que ativa o botao Videos e encaminha para a pagina.
function paginaVideos() {
    window.location.href = "./videos.html";
  }

 export function irParaVideos() {
    const botaoVideos = document.getElementById("exibir-videos")

    botaoVideos.addEventListener("click", paginaVideos);
  }


    