let numrespuestas = 0;
let pregunta = [];
let respuesta = [];
let respuestaEnNumeros = [];
let Agraficar = false;

window.onload = function() {
    $.ajax({
        url: "Encuesta.csv",
        dataType: "text",
        contentType: "charset-utf-8",
    }).done(ajustarDatos);
}

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

function estanciarDatos(datos){
    numrespuestas = datos.length-1;

    /* Limpia los datos, quita comillas dobles y dato no necesario */
    for(let i=0;i<datos.length;i++){
        datos[i].shift();
    }
    for(let i=0;i<datos.length;i++){
        for(let j=0;j<datos[i].length;j++){
            datos[i][j] = datos[i][j].replaceAll('"', "");
        }
    }

    /* Ingresa todas las preguntas en un array */
    for(let i=0; i<datos[0].length; i++){
        pregunta.push(datos[0][i]);
    }

    /* Cada respuesta queda en un array */
    let arrayMemoria = [];
    for(let i=0; i<datos[1].length; i++){
        for(let j=1;j<datos.length;j++){
            arrayMemoria.push(datos[j][i]);
        }
        respuesta.push(arrayMemoria);
        arrayMemoria = [];
    }

    /* Conversion Normal a  Numeros */
    respuesta[1] = convertirNumInt(respuesta[1]);
    respuesta[6] = convertirNumInt(respuesta[6]);

    /* Imprimiendo Respuestas ======================================================================================== */
    const nums = document.getElementById("nums");
    nums.innerHTML = "Respuestas Totales: "+(numrespuestas);

    if(Agraficar){
        graficar();
    }
}