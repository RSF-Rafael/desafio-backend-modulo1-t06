function processData(input) {
    const primeiraLetra = input.slice(0, 1);
    const restoDaPalavra = input.slice(1);

    if (input === input.toUpperCase()) {
        return console.log(input.toLowerCase());
    } else if (primeiraLetra === primeiraLetra.toLowerCase() && restoDaPalavra === restoDaPalavra.toUpperCase()) {
        return console.log(primeiraLetra.toUpperCase() + restoDaPalavra.toLowerCase());
    } else {
        return console.log(input);
    }
}