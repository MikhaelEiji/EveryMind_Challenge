import { conectaAPI } from "./conectaAPI.js";


const lista = document.querySelector("[data-lista]")

export default function constroiCards(titulo, empresa, salario, local, descricao) {
    const vaga = document.createElement("li");
    vaga.className = "vagasDisponiveis";
    vaga.innerHTML = `
            <h2>
                ${titulo}
            </h2>
            
            <p>${empresa}</p>
            <p>${salario}</p>
            <p>${local}</p>
            <p>${descricao}</p>
        </div>
        <div class="btnSearch">
            <button class="btnVaga">
                Quero
            </button>
    `

    return vaga;
}

async function listaVideos() {
    try {
        const listaAPI = await conectaAPI.listaVagas();
        listaAPI.forEach(elemento => lista.appendChild(
        constroiCards(elemento.titulo, elemento.empresa, elemento.salario, elemento.local, elemento.descricao)
        ))    
    } catch{
        lista.innerHTML = `<h2 class="mensagem__titulo"> Não foi possível carregar a lista de vídeos</h2>`
    }
   

    
}

listaVideos();