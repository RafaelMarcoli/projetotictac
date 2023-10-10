const produtosContainer = document.getElementById("container-videos");

function ExibirTodos () {
    const produtosEscondidos = Array.from(
        produtosContainer.getElementsByClassName('hidden')
    )
    for(const produtos of produtosEscondidos){
        produtos.classList.remove('hidden')
    }
}

function esconderMasculinos () {
    ExibirTodos ();
    const produtosMasculinos = Array.from(
        produtosContainer.getElementsByClassName('masculino')
    )
    for(const produtos of produtosMasculinos){
        produtos.classList.add('hidden')
    }
}
function esconderFemininos () {
    ExibirTodos ();
    const produtosFemininos = Array.from(
        produtosContainer.getElementsByClassName('feminino')
    )
    for(const produtos of produtosFemininos){
        produtos.classList.add('hidden')
    }
}

export function inicializarVideos() {
    document.getElementById("exibir-todos")
    .addEventListener('click', ExibirTodos)

    document.getElementById("exibir-femininos")
    .addEventListener('click', esconderMasculinos)

    document.getElementById("exibir-masculinos")
    .addEventListener('click', esconderFemininos)
}