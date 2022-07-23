function solucao(lista) {
    let soma = 0
    for (let numero of lista) {
        soma += numero;
    };

    const media = soma / lista.length;
    console.log(media);
}

solucao([2, 3, 4]);