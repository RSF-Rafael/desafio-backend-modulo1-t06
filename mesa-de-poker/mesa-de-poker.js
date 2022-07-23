function solucao(min, max, valores) {
    let resultado = [];

    for (let i = 0; i < valores.length; i++) {
        if (valores[i] >= min && valores[i] <= max) {
            resultado.push(valores[i]);
        }
    }
    console.log(resultado);
}

solucao(2, 10, [0, 5, 6, 10, 11]);