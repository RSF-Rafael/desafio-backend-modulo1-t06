function solucao(jogadores) {
    let zero = 0;
    let um = 0;

    for (let jogador of jogadores) {
        jogador.jogada === 1 ? um++ : zero++;
    }

    for (let jogador of jogadores) {
        if (zero === 1 && jogador.jogada === 0) {
            return console.log(jogador.nome);
        } else if (um === 1 && jogador.jogada === 1) {
            return console.log(jogador.nome);
        }
    }

    return console.log('NINGUEM');
}