Agraficar = true;

function graficar(){
    const nums = document.getElementById("nums");
    nums.innerHTML = "Respuestas Totales: "+(numrespuestasHombres);

    let ctx = "";
    let tipo = "";

    console.log(pregunta);
    console.log(respuesta);
    console.log(respuestaEnNumeros);

    ctx = "edad";
    tipo = "bar";
    grafica(ctx, tipo, pregunta[1], respuestaHombres[1]);
    ctx = "edadPor";
    tipo = "pie";
    grafica(ctx, tipo, pregunta[1], respuestaHombres[1]);

    ctx = "consideracion";
    tipo = "bar";
    grafica(ctx, tipo, pregunta[2], respuestaHombres[2]);
    ctx = "consideracionPor";
    tipo = "pie";
    grafica(ctx, tipo, pregunta[2], respuestaHombres[2]);

    ctx = "cantidad";
    tipo = "bar";
    grafica(ctx, tipo, pregunta[3], respuestaHombres[3]);
    ctx = "cantidadPor";
    tipo = "pie";
    grafica(ctx, tipo, pregunta[3], respuestaHombres[3]);

    ctx = "entreComidas";
    tipo = "bar";
    grafica(ctx, tipo, pregunta[4], respuestaHombres[4]);
    ctx = "entreComidasPor";
    tipo = "pie";
    grafica(ctx, tipo, pregunta[4], respuestaHombres[4]);

    ctx = "frecuenciaAlimento";
    tipo = "bar";
    grafica(ctx, tipo, pregunta[5], respuestaHombres[5]);
    ctx = "frecuenciaAlimentoPor";
    tipo = "pie";
    grafica(ctx, tipo, pregunta[5], respuestaHombres[5]);

    ctx = "frecuenciaBebida";
    tipo = "bar";
    grafica(ctx, tipo, pregunta[6], respuestaHombres[6]);
    ctx = "frecuenciaBebidaPor";
    tipo = "pie";
    grafica(ctx, tipo, pregunta[6], respuestaHombres[6]);
}
