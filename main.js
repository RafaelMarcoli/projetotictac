import { renderizarCartao } from "./src/cartaoProduto.js";
import { irParaVideos } from "./src/cartaoVideo.js";
import { inicializarFiltros } from "./src/filtrosCartao.js";
import { iniciarDarkMode } from "./src/light.js";

renderizarCartao();
inicializarFiltros();
irParaVideos();
iniciarDarkMode();
