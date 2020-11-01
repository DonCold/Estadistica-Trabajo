window.onload = function (){
    $.ajax({
        url: "Encuesta.csv",
        dataType: "text",
        contentType: "charset-utf-8",
    }).done(ajustarDatos);
}

function estanciarDatos(datos){
    let pregunta = [];
    let respuesta = [];
    let respuestaEnNumeros = [];

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

    /* Imprimiendo Respuestas */
    /* let txt = "";
    for(let i=0;i<respuesta.length;i++){
        txt += respuesta[i];
        txt += "<br>";
    }
    const app = document.getElementById("app");
    app.innerHTML = txt; */

    console.log(pregunta);
    console.log(respuesta);
    console.log(respuestaEnNumeros);

    let ctx = "genero";
    let tipo = "bar";
    opcionMultiple(ctx, tipo, pregunta[0], respuesta[0]);

    ctx = "edad";
    tipo = "bar";
    opcionMultiple(ctx, tipo, pregunta[1], respuesta[1]);

    ctx = "consideracion";
    tipo = "bar";
    opcionMultiple(ctx, tipo, pregunta[2], respuesta[2]);

    ctx = "cantidad";
    tipo = "bar";
    opcionMultiple(ctx, tipo, pregunta[3], respuesta[3]);

    ctx = "entreComidas";
    tipo = "bar";
    opcionMultiple(ctx, tipo, pregunta[4], respuesta[4]);

    ctx = "frecuenciaAlimento";
    tipo = "bar";
    opcionMultiple(ctx, tipo, pregunta[5], respuesta[5]);

    ctx = "frecuenciaBebida";
    tipo = "bar";
    opcionMultiple(ctx, tipo, pregunta[6], respuesta[6]);
}

function opcionMultiple(ctx, tipo, titulo, datos){
    let opcion;
    var opciones = [];
    var eleccion = [];

    /* Creamos 2 listas los datos no repetidos */
    for(let i=0;i<datos.length;i++){
        if(opciones.indexOf(datos[i]) == -1){
            opciones.push(datos[i]);
            eleccion.push(0);
        }
    }
    opciones = opciones.sort();

    /* Aumentamos la suma de cada posicion para mirar los datos que se repiten */
    for(let i=0;i<datos.length;i++){
        if(opciones.indexOf(datos[i]) != -1){
            eleccion[opciones.indexOf(datos[i])]++;
        }
    }

    /* Asigamos las opciones de la grafica */
    if(tipo == "pie" || tipo == "doughnut"){
        opcion = {
            responsive: true,
            title: {
                display: true,
                text: titulo,
                fontSize: 15,
                padding: 30,
                fontColor: "#121212"
            },
            tooltips: {
                callbacks: {
                  label: function(tooltipItem, data) {
                    //get the concerned dataset
                    var dataset = data.datasets[tooltipItem.datasetIndex];
                    //calculate the total of this data set
                    var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
                      return previousValue + currentValue;
                    });
                    //get the current items value
                    var currentValue = dataset.data[tooltipItem.index];
                    //calculate the precentage based on the total and current item, also this does a rough rounding to give a whole number
                    var precentage = Math.floor(((currentValue/total) * 100)+0.5);

                    return precentage + "%";
                  }
                }
           }
        }
    } else{
        opcion = {
            responsive: true,
            title: {
                display: true,
                text: titulo,
                fontSize: 15,
                padding: 30,
                fontColor: "#121212"
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    }

    /* Graficamos */
    let ctxx = document.getElementById(ctx).getContext("2d");
    const chart = new Chart(ctxx, {
        type: tipo,
        data: {
            labels: opciones,
            datasets: [
                {
                    label: titulo,
                    backgroundColor: color(opciones.length),
                    borderWidth: 2,
                    data: eleccion,
                }
            ]
        },
        options: opcion,
    });
}