/*9: Escriba una función de JavaScript que devuelva una cadena en orden alfabético. Por ejemplo, si x = 'webmaster', la salida debería ser 'abeemrstw'. La puntuación y los números no se pasan en la cadena. */

function unir(abc) {
    return abc.join('');
}

const noAlfabetico = ['w', 'e' , 'b', 'm' , 'a', 's', 't' , 'e', 'r'];

console.log(unir(noAlfabetico))

const alfabetico = noAlfabetico.sort();

console.log(unir(alfabetico))