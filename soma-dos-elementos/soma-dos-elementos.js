function solucao(lista) {
    let soma = 0;
    for (let numero of lista) {
        soma += numero;
    }
    console.log(soma);
}

solucao([1, 2, 3, 4]);
