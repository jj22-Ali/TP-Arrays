/*2: Al ejercicio 1 agregue un condicional dentro del ciclo while para imprimir solo números pares. Cambie el ciclo para usar un ciclo "for" en lugar de un ciclo "while". */

var edades = [24, 22, 25, 26, 21, 21, 20, 20];
var edadesPares = [];
var c = 0;
for(var i = 0; i < edades.length; i++){
    if(edades[i] % 2 == 0){
        edadesPares.push(edades[i])
    }
}
while(c < edadesPares.length){

    console.log(edadesPares[c]);
    c++;

}
