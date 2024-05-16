/*8: Escriba una función de JavaScript que invierta un número. Por ejemplo, si 
x = 32443, la salida debería ser 34423. */

function unir(numero) {
    return numero.join('');
}



const num = [3, 2, 4, 4, 9];

console.log(unir(num))

const rebe = num.reverse();

console.log(unir(rebe))