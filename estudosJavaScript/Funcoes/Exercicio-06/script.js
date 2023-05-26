function type (type) {

    if (typeof type === 'string') {
        
        console.log("O dado inseriro é uma string!");

    } else if (typeof type === 'number') {

        console.log("O dado inseriro é um number!");

    } else {

        console.log("O dado inseriro é um boolean");

    }

}

type(10);
console.log(type("Caio"));
console.log(type(true));
console.log(type(false));