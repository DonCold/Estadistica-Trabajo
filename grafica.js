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

    /* IMPRIMIENDO GRAFICAS ===================================================== */

    let ctx = document.getElementById("myChart").getContext("2d");
    let tipo = "bar";
    opcionMultiple(ctx, tipo, datos[0][0], pregunta1);

    ctx = document.getElementById("chart").getContext("2d");
    tipo = "pie";
    opcionMultiple(ctx, tipo, datos[0][1], pregunta2);

    ctx = document.getElementById("edad").getContext("2d");
    tipo = "bar";
    opcionMultiple(ctx, tipo, datos[0][2], pregunta3);

    media("media", pregunta1);
    media("media1", pregunta2);
    media("media2", pregunta3);
}

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

function opcionMultiple(ctx, tipo, titulo, datos){
    let opcion;
    var opciones = [];
    var eleccion = [];

    for(let i=0;i<datos.length;i++){
        if(opciones.indexOf(datos[i]) == -1){
            opciones.push(datos[i]);
            eleccion.push(0);
        }
    }
    opciones = opciones.sort();

    for(let i=0;i<datos.length;i++){
        if(opciones.indexOf(datos[i]) != -1){
            eleccion[opciones.indexOf(datos[i])]++;
        }
    }

    if(tipo == "pie"){
        opcion = {
            responsive: true,
            title: {
                display: true,
                text: titulo,
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

    const chart = new Chart(ctx, {
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