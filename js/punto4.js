/*Escriba una función que reciba un array como parámetro e imprima el número más grande de la array en la consola. */ 


function numeroMasAlto(array){

    if(array.length == 0){
        console.log("No ingreso valores al vector")
    }

    var mayorNum = array[0];

    for(var i = 0; i < array.length;  i++){
        if(mayorNum < array[i]){
            mayorNum = array[i];
        }
    }

    return mayorNum;
}



var edades = [8, 2, 3, 5, 6, 5, 9, 1];

var edadMasalta = numeroMasAlto(edades);

console.log("La edad mas alta es: " + edadMasalta + " años");