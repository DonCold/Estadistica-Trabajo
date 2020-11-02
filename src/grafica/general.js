Agraficar = true;

function graficar(){
    const nums = document.getElementById("nums");
    nums.innerHTML = "Respuestas Totales: "+(numrespuestas);

    let ctx = "";
    let tipo = "";

    console.log(pregunta);
    console.log(respuesta);
    console.log(respuestaEnNumeros);

    ctx = "genero";
    tipo = "bar";
    grafica(ctx, tipo, pregunta[0], respuesta[0]);
    ctx = "generoPor";
    tipo = "pie";
    grafica(ctx, tipo, pregunta[0], respuesta[0]);

    ctx = "edad";
    tipo = "bar";
    grafica(ctx, tipo, pregunta[1], respuesta[1]);
    ctx = "edadPor";
    tipo = "pie";
    grafica(ctx, tipo, pregunta[1], respuesta[1]);

    ctx = "consideracion";
    tipo = "bar";
    grafica(ctx, tipo, pregunta[2], respuesta[2]);
    ctx = "consideracionPor";
    tipo = "pie";
    grafica(ctx, tipo, pregunta[2], respuesta[2]);

    ctx = "cantidad";
    tipo = "bar";
    grafica(ctx, tipo, pregunta[3], respuesta[3]);
    ctx = "cantidadPor";
    tipo = "pie";
    grafica(ctx, tipo, pregunta[3], respuesta[3]);

    ctx = "entreComidas";
    tipo = "bar";
    grafica(ctx, tipo, pregunta[4], respuesta[4]);
    ctx = "entreComidasPor";
    tipo = "pie";
    grafica(ctx, tipo, pregunta[4], respuesta[4]);

    ctx = "frecuenciaAlimento";
    tipo = "bar";
    grafica(ctx, tipo, pregunta[5], respuesta[5]);
    ctx = "frecuenciaAlimentoPor";
    tipo = "pie";
    grafica(ctx, tipo, pregunta[5], respuesta[5]);

    ctx = "frecuenciaBebida";
    tipo = "bar";
    grafica(ctx, tipo, pregunta[6], respuesta[6]);
    ctx = "frecuenciaBebidaPor";
    tipo = "pie";
    grafica(ctx, tipo, pregunta[6], respuesta[6]);
}
