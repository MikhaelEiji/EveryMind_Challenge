import { conectaAPI } from "./conectaAPI.js";

const lista = document.querySelector('[data-lista]');

export default function constroiCards(titulo, empresa, salario, local, descricao) {
    const vaga = document.createElement("div");
    vaga.className = "vagasDisponiveis";
    vaga.innerHTML = `
        <h2>${titulo}</h2>
        <p>${empresa}</p>
        <p>${salario}</p>
        <p>${local}</p>
        <p>${descricao}</p>
        <div class="btnSearch">
            <button class="btnVaga">Quero</button>
        </div>
    `;
    return vaga;
}

async function listarVagas() {
    try {
        const listaAPI = await conectaAPI.listaVagas();
        listaAPI.forEach(elemento => {
            const vaga = constroiCards(elemento.titulo, elemento.empresa, elemento.salario, elemento.local, elemento.descricao);
            lista.appendChild(vaga);
        });
    } catch (error) {
        lista.innerHTML = `<h2 class="mensagem__titulo">Não foi possível carregar a lista de vagas. Erro: ${error.message}</h2>`;
    }
}

// Função para listar vagas com base na área selecionada na URL
async function listarVagasPorArea(areaSelecionada) {
    try {
        const listaAPI = await conectaAPI.buscaVaga(areaSelecionada);
        const lista = document.querySelector('[data-lista]');

        // Limpe o conteúdo anterior
        lista.innerHTML = "";

        // Exiba as vagas filtradas
        listaAPI.forEach(elemento => {
            const vaga = constroiCards(elemento.titulo, elemento.empresa, elemento.salario, elemento.local, elemento.descricao);
            lista.appendChild(vaga);
        });
    } catch (error) {
        const lista = document.querySelector('[data-lista]');
        lista.innerHTML = `<h2 class="mensagem__titulo">Não foi possível carregar a lista de vagas. Erro: ${error.message}</h2>`;
    }
}

// Verifique o parâmetro "area" na URL
const params = new URLSearchParams(window.location.search);
const areaSelecionada = params.get("area");

if (areaSelecionada) {
    listarVagasPorArea(areaSelecionada);
} else{
    listarVagas();
}