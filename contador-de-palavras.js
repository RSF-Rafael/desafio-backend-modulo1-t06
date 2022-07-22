// Todo bom editor de texto informa no rodapé do programa quantas palavras tem no texto. Você está trabalhando numa empresa que está desenvolvendo um editor de texto e ficou com a tarefa de desenvolver esta funcionalidade. Para o texto dado na entrada, imprima na tela quantas palavras existem neste texto.

// Input Format
// A entrada será sempre um texto qualquer

// Constraints
// A entrada será sempre um texto qualquer com no máximo 5000 caracteres.

// Output Format
// Imprima na tela a quantidade de palavras contidas no texto.

function solucao(texto) {
    // Seu codigo aqui
    texto = texto.trim().split(" ");
    let contador = 0;

    for (const palavra of texto) {
        if (palavra === "") {
            continue;
        } else {
            contador++;
        }
    }
    console.log(contador);
}

solucao('Cuidado, pois usuarios  as vezes  deixam espacos   vazios no fim do texto sem querer  ');