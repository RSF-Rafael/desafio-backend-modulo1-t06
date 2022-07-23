function solucao(precos) {
    let menorValor = Infinity;
    let soma = 0;

    for (let preco of precos) {
        if (preco < menorValor) {
            menorValor = preco;
        }
        soma += preco;
    }

    const desconto = menorValor / 2;
    const valorFinal = precos.length >= 3 ? soma - desconto : soma;
    console.log(valorFinal);
}

solucao([200, 150, 50, 100]);