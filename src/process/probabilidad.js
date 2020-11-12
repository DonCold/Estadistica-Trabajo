function calcular(){
    console.log("Calculando");

    if(respuestaHombres.length>0){
        obtenerDatoProb(respuestaHombres[1], "HEdad", "probabilidad1");
    }
    if(respuestaMujeres.length>0){
        obtenerDatoProb(respuestaMujeres[1], "MEdad", "probabilidad2");
    }
    if(respuestaNoespecifico.length>0){
        obtenerDatoProb(respuestaNoespecifico[1], "PEdad", "probabilidad3");
    }
    if(respuesta.length>0){
        modoComerProb(respuesta[2], "Sano", "Gsano", "probabilidad4");
        modoComerProb(respuesta[2], "Intermedio", "Isano", "probabilidad5");
        modoComerProb(respuesta[2], "No sano", "Nsano", "probabilidad6");
        modoComerProb(respuesta[3], "4 o mas veces al día.", "Cc", "probabilidad7");
    }
}

function obtenerDatoProb(datos, subbajo, ctx){
    let casosFavorables = 0;

    for(let i=0;i<datos.length;i++){
        if(datos[i]>22){
            casosFavorables++;
        }
    }

    total = datos.length;

    probabilidadBasica(ctx, casosFavorables, total, subbajo);
}

function modoComerProb(datos, consul, subbajo, ctx){
    let casosFavorables = 0;

    for(let i=0;i<datos.length;i++){
        if(datos[i]==consul){
            casosFavorables++;
        }
    }

    total = datos.length;

    probabilidadBasica(ctx, casosFavorables, total, subbajo);
}