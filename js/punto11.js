/*Escriba una función de JavaScript que busque la palabra más larga de una frase. Por ejemplo, si x = "Tutorial de desarrollo web", el resultado debería ser "Desarrollo"*/

function masGrande(x){
    var c ='';
    for(var i = 0; i < x.length ; i++){
        if(c.length < x[i].length){
            c = x[i];
        }
    }
    return c;
}

function unir(x) {
    return x.join(' ');
}

const frase = ['Tutorial', 'de', 'desarrollo', 'web'];


console.log("La palabra mas larga de esta frase de " + unir(frase) + " es: " + masGrande(frase))
