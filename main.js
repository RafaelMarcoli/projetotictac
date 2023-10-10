import { renderizarCartao } from "./src/cartaoProduto";
import { irParaVideos } from "./src/cartaoVideo";
import { inicializarFiltros } from "./src/filtrosCartao";
import { toggleMode } from "./src/light";

renderizarCartao();
inicializarFiltros();
irParaVideos();
toggleMode();