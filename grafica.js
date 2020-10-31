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
    /* app es solo para debuggear el codigo */
    let app = document.getElementById("app");
    let pregunta1 = [];
    let pregunta2 = [];
    let pregunta3 = [];
    let memoria = 0;

    /* Quitamos el primer valor de cada arreglo ya que no es necesario */
    for(let i=0;i<datos.length;i++){
        datos[i].shift();
    }

    /* Quitamos las comillas que venian por defecto en el titulo */
    for(let i=0;i<datos[0].length;i++){
        datos[0][i] = datos[0][i].replaceAll('"', "");
    }

    /* limpiamos, separamos datos y los colocamos en un vector */
    for(let i=1;i<datos.length;i++){
        memoria = (datos[i][0].split("Opción ").pop()).split('"').shift();
        pregunta1.push(memoria);
    }
    /* limpiamos, separamos datos y los colocamos en un vector */
    for(let i=1;i<datos.length;i++){
        memoria = (datos[i][1].split("Opción ").pop()).split('"').shift();
        pregunta2.push(memoria);
    }
    /* colocamos los datos en un vector y quitamos las comillas */
    for(let i=1;i<datos.length;i++){
        datos[i][2] = datos[i][2].replaceAll('"', "");
        pregunta3.push(datos[i][2]);
    }

    let txt = pregunta3+"<br>"+"<strong>Total de Respuestas: "+pregunta1.length+"</strong>";
    app.innerHTML = txt;

    /* IMPRIMIENDO GRAFICAS ===================================================== */

    let ctx = document.getElementById("myChart").getContext("2d");
    let opciones = ["Opcion 1", "Opcion 2", "Opcion 3", "Opcion 4"];
    let tipo = "bar";
    let color = ["red", "blue", "yellow", "green"];
    opcionMultiple(ctx, tipo, opciones, datos[0][0], pregunta1, color, "Pregunta 1");

    ctx = document.getElementById("chart").getContext("2d");
    opciones = ["Seleccion 1", "Seleccion 2", "Seleccion 3", "Seleccion 4"];
    tipo = "pie";
    opcionMultiple(ctx, tipo, opciones, datos[0][1], pregunta2, color, datos[0][1]);
}

function color(color){
    var colorr = Chart.helpers.color;
    let a = colorr(color[0]).alpha(0.5).rgbString();
    let b = colorr(color[1]).alpha(0.5).rgbString();
    let c = colorr(color[2]).alpha(0.5).rgbString();
    let d = colorr(color[3]).alpha(0.5).rgbString();
    return [a,b,c,d];
}

function opcionMultiple(ctx, tipo, opciones, titulo, datos, colorr, pregunta){
    var a = 0;
    var b = 0;
    var c = 0;
    var d = 0;
    let opcion;

    for(let i=0;i<datos.length;i++){
        if(datos[i]==1){
            a++;
        }
        if(datos[i]==2){
            b++;
        }
        if(datos[i]==3){
            c++;
        }
        if(datos[i]==4){
            d++;
        }
    }

    if(tipo == "pie"){
        opcion = {
            responsive: true,
            title: {
                display: true,
                text: pregunta,
                fontSize: 15,
                padding: 30,
                fontColor: "#121212"
            },
        }
    } else{
        opcion = {
            responsive: true,
            title: {
                display: true,
                text: pregunta,
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

    const chart = new Chart(ctx, {
        type: tipo,
        data: {
            labels: opciones,
            datasets: [
                {
                    label: titulo,
                    backgroundColor: color(colorr),
                    borderColor: colorr,
                    borderWidth: 1,
                    data: [a, b, c, d],
                }
            ]
        },
        options: opcion,
    });
}
