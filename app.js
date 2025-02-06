//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let participantes = []; //variável do tipo array, que armazenará os nomes dos integrantes inseridos.

// Função para adicionar participantes
function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');//em uma variável para evitar acessos repetidos.
    let amigo = inputAmigo.value.trim();

    if (!amigo) {
        console.warn('Por favor, insira um nome válido.');
        return;
    }

    // Normaliza para evitar duplicatas com diferenças de maiúsculas/minúsculas
    let amigoNormalizado = amigo.toLowerCase();

    if (participantes.some(nome => nome.toLowerCase() === amigoNormalizado)) {
        console.warn('Nome já adicionado na lista.');
        return;
    }

    participantes.push(amigo);
    console.log('Lista de participantes atualizada:', participantes);

    atualizaListaIntegrante();
    inputAmigo.value = ''; // Limpa o campo de entrada
}

function atualizaListaIntegrante() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpa a lista antes de atualizar

    const fragmento = document.createDocumentFragment(); // Cria um fragmento para evitar re-renderizações desnecessárias

    participantes.forEach(nome => {
        const itemLista = document.createElement('li');
        itemLista.textContent = nome;
        fragmento.appendChild(itemLista); // Adiciona ao fragmento
    });

    listaAmigos.appendChild(fragmento); // Adiciona todos os elementos de uma vez a interface
}

function sortearAmigo() {
    if (participantes.length < 3) {
        alert('Adicione pelo menos três participantes antes de sortear.');
        return;
    }

    const resultado = document.getElementById('resultado');
    let amigoSorteado;
    let numeroAmigoSorteado;
    
    do {
        numeroAmigoSorteado = Math.floor(Math.random() * participantes.length);
        amigoSorteado = participantes[numeroAmigoSorteado];
    } while (amigoSorteado === nomeUsuario.trim()); // Garante que o usuário não se auto-sorteie.

    resultado.textContent = `O amigo sorteado é: ${amigoSorteado}`;
}
