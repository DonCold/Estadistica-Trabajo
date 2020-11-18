function calcular(){
    console.log("Calculando");
    let media;
    console.log(respuestaEnNumeros);

    media = pedirMedia(respuestaEnNumeros[0]);
    varianza("varianza1", "G", media, respuestaEnNumeros[0].length, respuestaEnNumeros[0]);
    varianza("varianza2", "E", media, respuestaEnNumeros[1].length, respuestaEnNumeros[1]);
    varianza("varianza3", "C", media, respuestaEnNumeros[2].length, respuestaEnNumeros[2]);
    varianza("varianza4", "A", media, respuestaEnNumeros[3].length, respuestaEnNumeros[3]);
    varianza("varianza5", "Cc", media, respuestaEnNumeros[4].length, respuestaEnNumeros[4]);
    varianza("varianza6", "Cr", media, respuestaEnNumeros[5].length, respuestaEnNumeros[5]);
    varianza("varianza7", "Fb", media, respuestaEnNumeros[6].length, respuestaEnNumeros[6]);
}

function pedirMedia(datos){
    let suma = 0;

    for(let i=0;i<datos.length;i++){
        suma += parseInt(datos[i]);
    }
    let media = suma/datos.length;

    return media;
}