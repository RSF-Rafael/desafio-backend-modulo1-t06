function processData(input) {
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

    // Outra opção de resolução do problema

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