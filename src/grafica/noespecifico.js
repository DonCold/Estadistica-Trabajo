Agraficar = true;

function graficar(){
    const nums = document.getElementById("nums");
    nums.innerHTML = "Respuestas Totales: "+(numNoespecificados);

    let ctx = "";
    let tipo = "";

    console.log(pregunta);
    console.log(respuesta);
    console.log(respuestaEnNumeros);

    ctx = "edad";
    tipo = "bar";
    grafica(ctx, tipo, pregunta[1], respuestaNoespecifico[1]);
    ctx = "edadPor";
    tipo = "pie";
    grafica(ctx, tipo, pregunta[1], respuestaNoespecifico[1]);

    ctx = "edad";
    tipo = "bar";
    grafica(ctx, tipo, pregunta[1], respuestaNoespecifico[1]);
    ctx = "edadPor";
    tipo = "pie";
    grafica(ctx, tipo, pregunta[1], respuestaNoespecifico[1]);

    ctx = "consideracion";
    tipo = "bar";
    grafica(ctx, tipo, pregunta[2], respuestaNoespecifico[2]);
    ctx = "consideracionPor";
    tipo = "pie";
    grafica(ctx, tipo, pregunta[2], respuestaNoespecifico[2]);

    ctx = "cantidad";
    tipo = "bar";
    grafica(ctx, tipo, pregunta[3], respuestaNoespecifico[3]);
    ctx = "cantidadPor";
    tipo = "pie";
    grafica(ctx, tipo, pregunta[3], respuestaNoespecifico[3]);

    ctx = "entreComidas";
    tipo = "bar";
    grafica(ctx, tipo, pregunta[4], respuestaNoespecifico[4]);
    ctx = "entreComidasPor";
    tipo = "pie";
    grafica(ctx, tipo, pregunta[4], respuestaNoespecifico[4]);

    ctx = "frecuenciaAlimento";
    tipo = "bar";
    grafica(ctx, tipo, pregunta[5], respuestaNoespecifico[5]);
    ctx = "frecuenciaAlimentoPor";
    tipo = "pie";
    grafica(ctx, tipo, pregunta[5], respuestaNoespecifico[5]);

    ctx = "frecuenciaBebida";
    tipo = "bar";
    grafica(ctx, tipo, pregunta[6], respuestaNoespecifico[6]);
    ctx = "frecuenciaBebidaPor";
    tipo = "pie";
    grafica(ctx, tipo, pregunta[6], respuestaNoespecifico[6]);
}
