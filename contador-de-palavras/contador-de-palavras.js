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