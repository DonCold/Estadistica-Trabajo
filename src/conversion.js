/* Conversiones generales */
function convertirNumInt(numeros){
    for(let i=0;i<numeros.length;i++){
        numeros[i] = parseInt(numeros[i]);
    }
    return numeros;
}

function convertirANumero(palabra){
    let numeros = [];
    if(typeof palabra[0] !== "number"){
        let num = 1;
        let ind = 0;

        let numArr = [];
        let letraArr = [];

        for(let i=0;i<palabra.length;i++){
            if(letraArr.indexOf(palabra[i]) == -1){
                letraArr.push(palabra[i]);
                numArr.push(num);
                num++;
            }
        }

        for(let i=0;i<palabra.length;i++){
            ind = letraArr.indexOf(palabra[i]);
            numeros.push(numArr[ind]);
        }
    }else{
        numeros = palabra;
    }
    return numeros;
}