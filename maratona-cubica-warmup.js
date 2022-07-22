// Thacila está preocupada com as condições de trabalho em nosso ambiente cúbico, em especial com o quanto as pessoas precisam andar dentro da sala. Também é comum na Cubos que uma pessoa tire dúvidas com outra indo até a mesa do colega, caminhando a distância. Ela está fazendo um trabalho de realocar as mesas da sala para que as pessoas precisem andar o mínimo possível. Para tal, ela precisa primeiro rever a posição atual e determinar qual é a maior distância que precisa ser andada para uma pessoa chegar na mesa do colega. Como o número de pessoas está ficando bem grande, ela precisa escrever um programa para isso. Considere que cada pessoa é um ponto no plano euclidiano e que a distância é sempre uma linha reta entre dois pontos.

// Input Format
// Neste problema a entranda é um único string que você deve tratar adequadamente para obter as informações que você precisa em variáveis separadas.

// A primeira linha deste string será o inteiro N que indica o número de funcionários da Cubos. Nas próximas N linhas você lerá dois números, as coordenadas X e Y do i-ésimo funcionário.

// Constraints
// 2 ≤ N ≤ 10^3 -1000 ≤ X, Y ≤ 1000

// Output Format
// Imprima um único número, a resposta para o problema.

function processData(input) {
    //Enter your code here
    input = input.trim().split('\n')
    input.shift();

    let coordenadas = [];
    let maiorDistancia = 0;


    for (let i = 0; i < input.length; i++) {
        let coordenada = input[i].trim().split(" ");
        coordenadas.push({
            x: parseFloat(coordenada[0]),
            y: parseFloat(coordenada[1])
        })
    }

    for (let i = 0; i < coordenadas.length; i++) {
        for (let j = i + 1; j < coordenadas.length; j++) {
            let distancia = Math.sqrt(Math.pow(coordenadas[j].x - coordenadas[i].x, 2) + Math.pow(coordenadas[j].y - coordenadas[i].y, 2));
            if (distancia > maiorDistancia) {
                maiorDistancia = distancia;
            }
        }
    }

    // let indexEspaco = 0;
    // for (let i = 0; i < input.length; i++) {
    //     indexEspaco = input[i].indexOf(" ");
    //     let xa = input[i].slice(0, indexEspaco);
    //     let ya = input[i].slice(indexEspaco + 1);
    //     for (let j = i + 1; j < input.length; j++) {
    //         indexEspaco = input[j].indexOf(" ");
    //         let xb = input[j].slice(0, indexEspaco);
    //         let yb = input[j].slice(indexEspaco + 1);
    //         distancia = Math.sqrt(Math.pow(xb - xa, 2) + Math.pow(yb - ya, 2));
    //         if (distancia > maiorDistancia) {
    //             maiorDistancia = distancia;
    //         }
    //     }
    // }

    console.log(coordenadas)
    console.log(maiorDistancia);
}

processData('3\n0 0\n0 3\n4 0\n')