/* LATEX */
Acalcular = true;

function calcular(){
    console.log("Calculando");
    mediaAritmetica("mediaGenero", respuestaEnNumeros[0], "1");
    mediaAritmetica("mediaEdades", respuesta[1], "2");
    mediaAritmetica("mediaAlimentacion", respuestaEnNumeros[2], "3");
    mediaAritmetica("mediaCantidad", respuestaEnNumeros[3], "4");
    mediaAritmetica("mediaEntre", respuestaEnNumeros[4], "5");
    mediaAritmetica("mediaFrecuencia", respuestaEnNumeros[5], "6");
    mediaAritmetica("mediaBeber", respuesta[6], "7");
}

function mediaAritmetica(ctx, datos, num){
    let suma = 0;
    let resultado = "$$ \\overline{x}_{"+num+"} = \\frac{";
    let final = "}  $$";

    for(let i=0;i<datos.length;i++){
        resultado += datos[i].toString();
        suma += parseInt(datos[i]);
        if(i<datos.length-1){
            resultado += "+";
        }else{
            resultado += "}{"+datos.length;
        }
    }
    suma = suma/datos.length;
    resultado += final;
    resultado += "$$ \\overline{x}_{"+num+"} = ";
    resultado += suma;
    resultado += "  $$";

    const math = document.getElementById(ctx);
    math.innerHTML = resultado;
}

