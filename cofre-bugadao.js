// Um novo cofre foi desenvolvido com a mais moderna tecnologia em segurança e criptografia. Na porta do cofre há um teclado com todas as letras do alfabeto em que a pessoa pode digitar a senha predefinida para abrir a porta.

// Durante alguns testes de rotina foi descoberto um bug na hora de validar a senha: O cofre ignora letras erradas durante a digitação da senha, desde que todas as letras da senha tenham sido digitadas na ordem correta.

// Por exemplo, se a senha for “cubos” e for digitado “cuggbyos”, o cofre irá abrir.

// Input Format
// A entrada consistirá em duas linhas, na primeira linha estará a senha correta, de até S caracteres. Na segunda linha estará a palavra digitada pela pessoa, de até N caracteres.

// Constraints
// S ≤ 10^3 N ≤ 10^5

// Output Format
// Imprima “SIM” caso o cofre abra. Caso contrário, imprimir “NAO”.


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