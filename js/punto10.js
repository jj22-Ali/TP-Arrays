/* Escriba una función de JavaScript que convierta la primera letra de cada palabra a mayúsculas. Por ejemplo, si x = "prince of persia", la salida debería ser "Prince Of Persia". */

const vector1 = ['p', 'r' ,'i', 'n', 'c', 'e'];
const vector2 = ['o', 'f'];
const vector3 = ['p', 'e', 'r', 's', 'i' , 'a'];

function mayuscula(v){

    for(var i = 0; i < v.length ; i++){
        if(i === 0){
            v[i] = v[i].toUpperCase()
        }
    }

    return v;
}

mayuscula(vector1)
mayuscula(vector2)
mayuscula(vector3)


