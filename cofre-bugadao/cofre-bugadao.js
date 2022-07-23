function processData(input) {
    //Enter your code here
    input = input.trim().split("\n");
    let senhaCorreta = input[0].trim();
    let senhaDigitada = input[1].trim();
    let validacao = '';

    for (let i = 0; i < senhaCorreta.length; i++) {
        for (let j = 0; j < senhaDigitada.length; j++) {
            if (senhaCorreta[i] === senhaDigitada[j]) {
                validacao += senhaDigitada[j];
                senhaDigitada = senhaDigitada.slice(j + 1);
                j = 0;
                break;
            }
        }
    }

    validacao === senhaCorreta ? console.log("SIM") : console.log("NAO");
}
processData(' cubcos \n cuggbyos  \n ');