/* Conversiones generales */
function convertirNumInt(numeros){
    for(let i=0;i<numeros.length;i++){
        numeros[i] = parseInt(numeros[i]);
    }
    return numeros;
}