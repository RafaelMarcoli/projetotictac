import { renderizarCartao } from "./src/cartaoProduto";
import { irParaVideos } from "./src/cartaoVideo";
import { inicializarFiltros } from "./src/filtrosCartao";
import { iniciarDarkMode } from "./src/light";


renderizarCartao();
inicializarFiltros();
irParaVideos();
iniciarDarkMode();