function textLimiter (text) {
    if (text.length > 10) {
        console.log("Texto muito longo!");
    } else {
        console.log("Texto dentro do limite!");
    }
}


console.log(textLimiter("A que nao sei oque nao sei oque la, que nao sei o que nao sei oque la"));
console.log(textLimiter("A que nao"));