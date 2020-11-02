let numrespuestasTotales = 0;
let numrespuestasHombres = 0;
let numrespuestasMujeres = 0;
let numNoespecificados = 0;

let pregunta = [];

let respuesta = [];
let respuestaEnNumeros = [];

let respuestaHombres = [];
let respuestaMujeres = [];
let respuestaNoespecifico = [];
let respuestaHombresNumeros = [];
let respuestaMujeresNumeros = [];
let respuestaNoespecificoNumeros = [];

let Agraficar = false;
let Acalcular = false;

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
    let datosHombres = [];
    let datosMujeres = [];
    let datosNoespecifico = [];

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

    /* SEPARANDO DATOS==================================================================================================== */

    /* Separando respuestas de Hombre */
    for(let i=0; i<datos.length; i++){
        if(datos[i][0]=="Hombre"){
            datosHombres.push(datos[i]);
        }
    }
    /* Separando respuestas de Mujer */
    for(let i=0; i<datos.length; i++){
        if(datos[i][0]=="Mujer"){
            datosMujeres.push(datos[i]);
        }
    }
    /* Separando respuestas de No Especifico */
    for(let i=0; i<datos.length; i++){
        if(datos[i][0]=="Prefiero no decirlo"){
            datosNoespecifico.push(datos[i]);
        }
    }

    /* Cada respuesta queda en un array Hombres */
    arrayMemoria = [];
    for(let i=0; i<datosHombres[0].length; i++){
        for(let j=0;j<datosHombres.length;j++){
            arrayMemoria.push(datosHombres[j][i]);
        }
        respuestaHombres.push(arrayMemoria);
        arrayMemoria = [];
    }

    /* Cada respuesta queda en un array Mujeres */
    arrayMemoria = [];
    for(let i=0; i<datosMujeres[0].length; i++){
        for(let j=0;j<datosMujeres.length;j++){
            arrayMemoria.push(datosMujeres[j][i]);
        }
        respuestaMujeres.push(arrayMemoria);
        arrayMemoria = [];
    }

    /* Cada respuesta queda en un array No Especifico */
    arrayMemoria = [];
    for(let i=0; i<datosNoespecifico[0].length; i++){
        for(let j=0;j<datosNoespecifico.length;j++){
            arrayMemoria.push(datosNoespecifico[j][i]);
        }
        respuestaNoespecifico.push(arrayMemoria);
        arrayMemoria = [];
    }

    /* Conversion Normal a  Numeros */
    respuesta[1] = convertirNumInt(respuesta[1]);
    respuesta[6] = convertirNumInt(respuesta[6]);
    respuestaHombres[1] = convertirNumInt(respuestaHombres[1]);
    respuestaHombres[6] = convertirNumInt(respuestaHombres[6]);
    respuestaMujeres[1] = convertirNumInt(respuestaMujeres[1]);
    respuestaMujeres[6] = convertirNumInt(respuestaMujeres[6]);
    respuestaNoespecifico[1] = convertirNumInt(respuestaNoespecifico[1]);
    respuestaNoespecifico[6] = convertirNumInt(respuestaNoespecifico[6]);

    console.log(respuestaHombres);
    console.log(respuestaMujeres);
    console.log(respuestaNoespecifico);
    console.log("");

    for(let i=0;i<respuesta[0].length;i++){
        if(respuesta[0][i]=="Hombre"){
            numrespuestasHombres++;
        }
        if(respuesta[0][i]=="Mujer"){
            numrespuestasMujeres++;
        }
        if(respuesta[0][i]=="Prefiero no decirlo"){
            numNoespecificados++;
        }
    }

    for(let i=0;i<respuesta.length;i++){
        respuestaEnNumeros.push(convertirANumero(respuesta[i]));
    }
    for(let i=0;i<respuestaHombres.length;i++){
        respuestaHombresNumeros.push(convertirANumero(respuestaHombres[i]));
    }
    for(let i=0;i<respuestaMujeres.length;i++){
        respuestaMujeresNumeros.push(convertirANumero(respuestaMujeres[i]));
    }
    for(let i=0;i<respuestaNoespecifico.length;i++){
        respuestaNoespecificoNumeros.push(convertirANumero(respuestaNoespecifico[i]));
    }

    /* Imprimiendo Respuestas ======================================================================================== */

    if(Agraficar){
        graficar();
    }else{
        if(Acalcular){
            calcular();
        }else{
            const nums = document.getElementById("nums");
            nums.innerHTML = "Respuestas Totales: "+(numrespuestas);
        }
    }
}
