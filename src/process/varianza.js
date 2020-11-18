function calcular(){
    console.log("Calculando");
    let media;
    console.log(respuestaEnNumeros);

    media = pedirMedia(respuestaEnNumeros[0]);
    varianza("varianza1", 1, media, respuestaEnNumeros[0].length, respuestaEnNumeros[0]);
}

function pedirMedia(datos){
    let suma = 0;

    for(let i=0;i<datos.length;i++){
        suma += parseInt(datos[i]);
    }
    let media = suma/datos.length;

    return media;
}