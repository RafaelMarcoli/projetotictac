import { catalogo } from "./utilidades";


export function renderizarCartao(){

    for (const produtoCatalogo of catalogo) {

        const cartaoProduto = `<div class=" border-solid border-2 border-blue-700 shadow-blue-700 rounded-xl shadow-xl h-96 w-52 m-3 flex flex-col p-2 justify-between group ${produtoCatalogo.feminino ? 'feminino' : 'masculino'}" id="card-produto-${produtoCatalogo.id}">
            <img class="imagem" src="./assets/${produtoCatalogo.imagem}" alt="${produtoCatalogo.nome}"
            style="width: 250px;">
            <p class="loja">${produtoCatalogo.loja}</p>
            <p class="nomes">${produtoCatalogo.nome}</p>
            <p class="preco">R$${produtoCatalogo.preco}</p>
        
          </div>`;
        
          document.getElementById("container-produto").innerHTML += cartaoProduto;
        }

}


    