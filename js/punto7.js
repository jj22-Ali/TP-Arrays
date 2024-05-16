/* 7: Escriba una función de JavaScript simple para unir todos los elementos de la siguiente array en una cadena.
myColor = ["Red", "Green", "White", "Black"];
 */

function unirColores(colores) {
    return colores.join(', ');
}

var myColor = ["Red", "Green", "White", "Black"];
console.log(unirColores(myColor));