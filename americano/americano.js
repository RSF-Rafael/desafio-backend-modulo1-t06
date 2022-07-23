function solucao(numeros) {
    let soma = 0;
    for (let numero of numeros) {
        soma += numero;
    }

    let posicao = 1;
    for (let i = 1; i < soma; i++) {
        posicao++;
        if (posicao > numeros.length) {
            posicao = 1;
        }
    }
    console.log(posicao);

    // Usando WHILE

    // let posicao = 1;
    // let contador = 1;
    // while (contador < soma) {
    //     posicao++;
    //     contador++;
    //     if (posicao > numeros.length) {
    //         posicao = 1;
    //     }
    // }

}

solucao([1, 2, 3, 1])

