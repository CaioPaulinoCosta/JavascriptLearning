function idadeCheck (idade){
    if (idade >= 18) {
        console.log("Você está liberado para iniciar suas aulas de auto escola!");
    } else {
        console.log("Você não está liberado para iniciar suas aulas de auto escola!");
    }
}


console.log(idadeCheck(21));
console.log(idadeCheck(15));
console.log(idadeCheck(18));