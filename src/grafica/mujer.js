Agraficar = true;

function graficar(){
    const nums = document.getElementById("nums");
    nums.innerHTML = "Respuestas Totales: "+(numrespuestasMujeres);

    let ctx = "";
    let tipo = "";

    console.log(pregunta);
    console.log(respuestaMujeres);
    console.log(respuestaMujeresNumeros);

    ctx = "edad";
    tipo = "bar";
    grafica(ctx, tipo, pregunta[1], respuestaMujeres[1]);
    ctx = "edadPor";
    tipo = "pie";
    grafica(ctx, tipo, pregunta[1], respuestaMujeres[1]);

    ctx = "consideracion";
    tipo = "bar";
    grafica(ctx, tipo, pregunta[2], respuestaMujeres[2]);
    ctx = "consideracionPor";
    tipo = "pie";
    grafica(ctx, tipo, pregunta[2], respuestaMujeres[2]);

    ctx = "cantidad";
    tipo = "bar";
    grafica(ctx, tipo, pregunta[3], respuestaMujeres[3]);
    ctx = "cantidadPor";
    tipo = "pie";
    grafica(ctx, tipo, pregunta[3], respuestaMujeres[3]);

    ctx = "entreComidas";
    tipo = "bar";
    grafica(ctx, tipo, pregunta[4], respuestaMujeres[4]);
    ctx = "entreComidasPor";
    tipo = "pie";
    grafica(ctx, tipo, pregunta[4], respuestaMujeres[4]);

    ctx = "frecuenciaAlimento";
    tipo = "bar";
    grafica(ctx, tipo, pregunta[5], respuestaMujeres[5]);
    ctx = "frecuenciaAlimentoPor";
    tipo = "pie";
    grafica(ctx, tipo, pregunta[5], respuestaMujeres[5]);

    ctx = "frecuenciaBebida";
    tipo = "bar";
    grafica(ctx, tipo, pregunta[6], respuestaMujeres[6]);
    ctx = "frecuenciaBebidaPor";
    tipo = "pie";
    grafica(ctx, tipo, pregunta[6], respuestaMujeres[6]);
}
