/* LATEX */

/* TODO

- Probabilidad de comer mas de 4 veces al dia

TODO

let respuesta = [];
let respuestaEnNumeros = [];

let respuestaHombres = [];
let respuestaMujeres = [];
let respuestaNoespecifico = [];

let respuestaHombresNumeros = [];
let respuestaMujeresNumeros = [];
let respuestaNoespecificoNumeros = [];

let preguntaNumeros = [];

TODO

 */

function calcular(){
    console.log("Calculando");

    obtenerDatoProb(respuestaHombres[1], "HEdad", "probabilidad1");
    obtenerDatoProb(respuestaMujeres[1], "MEdad", "probabilidad2");
    obtenerDatoProb(respuestaNoespecifico[1], "PEdad", "probabilidad3");
    modoComerProb(respuesta[2], "Sano", "Gsano", "probabilidad4");
    modoComerProb(respuesta[2], "Intermedio", "Isano", "probabilidad5");
    modoComerProb(respuesta[2], "No sano", "Nsano", "probabilidad6");
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