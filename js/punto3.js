
function numeroMasbajo(array){

    if(array.length == 0){
        console.log("No ingreso valores al vector")
    }

    var menorNum = array[0];

    for(var i = 0; i < array.length;  i++){
        if(menorNum > array[i]){
            menorNum = array[i];
        }
    }

    return menorNum;
}



var edades = [8, 2, 3, 5, 6, 5, 9, 1];

var edadMasBaja = numeroMasbajo(edades);

console.log("La edad mas baja es: " + edadMasBaja + " años");