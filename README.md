<h1>Sorteador de Amigo Secreto</h1>

<h2>Sobre</h2>
<p>Projeto utilizado nos cursos de lógica de programação da Alura.</p>
## Tecnologias
<div>
  <img src="https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
</div>
<h2>Time</h2>
<div>
 <img src="https://avatars.githubusercontent.com/u/66964523?v=4" 
   alt="" size="32" height="32" width="32" data-view-component="true" 
   class="avatar circle"> 
</div>
<h2>Descritivo do Projeto</h2>
Código implementa um "Sorteador de Amigo Secreto" simples em JavaScript, 
permitindo que usuários adicionem participantes e realizem o sorteio de maneira automatizada.

Principais funcionalidades do código:

Solicita o nome do usuário principal (quem está rodando o programa).
Permite adicionar participantes manualmente a uma lista.
Exibe os participantes na tela, atualizando a lista dinamicamente.
Realiza o sorteio do amigo secreto, garantindo que o usuário principal não se sorteie a si mesmo.
Exibe o resultado do sorteio na tela.

Explicação do funcionamento por partes:

** 1️⃣ Captura o nome do usuário
Assim que o código é executado, ele exibe um alerta de boas-vindas e pede ao usuário que informe seu nome.
Caso o nome seja válido, ele é adicionado automaticamente à lista de participantes.
alert('Bem-vindo ao Sorteador de Amigo Secreto!');

// Solicita o nome do usuário
let nomeUsuario = prompt('Qual o seu nome?').trim();

if (!nomeUsuario) {
    alert('Nome inválido. Tente novamente.');
} else if (confirm(`Adicionar ${nomeUsuario} à lista de participantes?`)) {
    participantes.push(nomeUsuario);
    alert(`${nomeUsuario} foi adicionado à lista de participantes!`);
}

** 2️⃣ Adiciona novos participantes
Os participantes podem ser adicionados manualmente pelo usuário através de um campo de entrada (input).
A função adicionarAmigo() faz as seguintes verificações antes de adicionar o nome:
✔ Garante que o nome não esteja vazio.
✔ Evita nomes duplicados, independentemente de maiúsculas/minúsculas.

** 3️⃣ Atualiza a lista de participantes
Cada vez que um novo participante é adicionado, a lista na tela é atualizada dinamicamente.
A função atualizaListaIntegrante() cria um <li> para cada nome e o adiciona a um <ul> no HTML.

function atualizaListaIntegrante() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpa a lista

    const fragmento = document.createDocumentFragment();

    participantes.forEach(nome => {
        const itemLista = document.createElement('li');
        itemLista.textContent = nome;
        fragmento.appendChild(itemLista);
    });

    listaAmigos.appendChild(fragmento); // Adiciona os elementos ao DOM de uma vez
}
** 4️⃣ Sorteia um amigo secreto
Quando o botão de sorteio é acionado, a função sortearAmigo() escolhe aleatoriamente um nome da lista.
✔ Garante que o usuário principal não se sorteie a si mesmo.
✔ Mostra o nome sorteado na tela.

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

** Exemplo de uso
O programa pergunta o nome do usuário.
O usuário adiciona mais pessoas à lista de participantes.
O sistema exibe os participantes na tela.
Quando o sorteio é acionado, o sistema escolhe um nome aleatório e o exibe.

** Melhorias que podem ser feitas
Garantir que todos os participantes tenham um par (ninguém fica sem amigo secreto).
Evitar que alguém sorteie a mesma pessoa que sorteou ele.
Criar um botão para reiniciar o sorteio sem recarregar a página.

