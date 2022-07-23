function solucao(min, km) {
    const difMin = min - 20;
    const difKm = km - 10;
    const valorKm = 70;
    const valorMin = 50;
    const valorKmDesc = 50;
    const valorMinDesc = 30;
    let valorTotal = 0;

    min > 20 ? valorTotal += (difMin * valorMinDesc) + ((min - difMin) * valorMin) : valorTotal += min * valorMin;
    km > 10 ? valorTotal += (difKm * valorKmDesc) + ((km - difKm) * valorKm) : valorTotal += km * valorKm;

    // if (min > 20) {
    //     valorTotal += (difMin * valorMinDesc) + ((min - difMin) * valorMin);
    // } else {
    //     valorTotal += min * valorMin;
    // }

    // if (km > 10) {
    //     valorTotal += (difKm * valorKmDesc) + ((km - difKm) * valorKm);
    // } else {
    //     valorTotal += km * valorKm;
    // }


    console.log(valorTotal);
}

solucao(25, 11.5);