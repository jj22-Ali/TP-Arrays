var array =[3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];

var elementosRepetidos = array.filter(function(elemento,indice){
    return array.indexOf(elemento) !== indice;
})

console.log("Los elementos repetidos son: " + elementosRepetidos)