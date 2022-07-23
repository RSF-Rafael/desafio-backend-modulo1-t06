function solucao(carta) {
    const cartas = ['Q', 'J', 'K', 'A', '2', '3'];

    let indexManilha = cartas.indexOf(carta.toUpperCase()) + 1;
    const manilha = indexManilha > cartas.length - 1 ? cartas[0] : cartas[indexManilha];

    console.log(manilha);
}

solucao('q');