/* Conversion de CSV */
function ajustarDatos(data) {
    try {
        let datos = leerCsv(data);
        if(datos){
            estanciarDatos(datos);
        }
    } catch (e) {
        console.log(`Error: ${e.message}`);
    }
}

function leerCsv(texto, separador = ",", omitirEncabezado=false) {
    if (typeof texto !== "string") {
        throw TypeError("El argumento debe ser una cadena de texto");
    }
    return texto.slice(omitirEncabezado ? texto.indexOf("\n") + 1 : 0)
    .split("\n")
    .map(l => l.split(separador))
}

/* Conversiones generales */
function convertirNumInt(numeros){
    for(let i=0;i<numeros.length;i++){
        numeros[i] = parseInt(numeros[i]);
    }
    return numeros;
}


/* LATEX */

function media(ctx, datos){
    let suma = 0;
    let resultado = "$$ \\overline{x} = \\frac{";
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
    resultado += "$$ \\overline{x} = ";
    resultado += suma;
    resultado += "  $$";

    const math = document.getElementById(ctx);
    math.innerHTML = resultado;
}
