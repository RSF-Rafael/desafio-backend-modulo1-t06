// Num jogo de futebol entre amigos é muito comum que ninguém queira ser o goleiro. Para resolver esse impasse, um time decidiu utilizar o jogo "Americano".

// Neste jogo, o time faz uma roda e cada um dos jogadores "joga" um número X qualquer. Após isso, o capitão do time soma todos os números jogados e obtém o resultado S. Depois, começa a contar de 1 até S apontando inicialmente para si mesmo (e falando alto e claramente "um"), depois para o jogador imediatamente a sua direita (e falando "dois") e assim por diante. O goleiro será aquele que estiver sendo apontado quando o capitão chegar a S.

// Para fins de facilitar a resposta do problema, vamos considerar que o capitão está na posição 1, o jogador a sua direita está na posição 2, o jogador a direita deste está na posição 3, e assim por diante.

// Você deve fazer um programa que determina qual a posição do jogador que deve ser o goleiro.

// Input Format
// A entrada será um array com N números, que corresempondem ao número jogado por cada um dos jogadores do time. Logo, se o array tiver tamanho 11, significa que este time tem 11 jogadores, por exemplo.

// Constraints
// 0 < X < 11
// N < 12

// Output Format
// Imprima na tela a posição em que está o jogodar que foi sorteado para ser o goleiro.

function solucao(numeros) {
    // seu codigo aqui
    let soma = 0;
    for (let numero of numeros) {
        soma += numero;
    }

    let posicao = 1;
    for (let i = 1; i < soma; i++) {
        posicao++;
        if (posicao > numeros.length) {
            posicao = 1;
        }
    }
    console.log(posicao);

    // Usando WHILE

    // let posicao = 1;
    // let contador = 1;
    // while (contador < soma) {
    //     posicao++;
    //     contador++;
    //     if (posicao > numeros.length) {
    //         posicao = 1;
    //     }
    // }

}

solucao([1, 2, 3, 1])

