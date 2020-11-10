function calcular(){
    console.log("Calculando");
    medianaAritmetica("mediaGenero", respuestaEnNumeros[0], "1");
    medianaAritmetica("mediaEdades", respuesta[1], "2");
    medianaAritmetica("mediaAlimentacion", respuestaEnNumeros[2], "3");
    medianaAritmetica("mediaCantidad", respuestaEnNumeros[3], "4");
    medianaAritmetica("mediaEntre", respuestaEnNumeros[4], "5");
    medianaAritmetica("mediaFrecuencia", respuestaEnNumeros[5], "6");
    medianaAritmetica("mediaBeber", respuesta[6], "7");

    console.log(preguntaNumeros);
    let txt1 = "";
    let txt2 = "";
    let txt3 = "";
    let txt4 = "";
    let txt5 = "";

    for(let i=0;i<preguntaNumeros[0][0].length;i++){
        txt1 += "<tr><td><strong>"+preguntaNumeros[0][0][i]+"</strong></td><td>"+preguntaNumeros[0][1][i]+"</td></tr>";
    }
    for(let i=0;i<preguntaNumeros[1][0].length;i++){
        txt2 += "<tr><td><strong>"+preguntaNumeros[1][0][i]+"</strong></td><td>"+preguntaNumeros[1][1][i]+"</td></tr>";
    }
    for(let i=0;i<preguntaNumeros[2][0].length;i++){
        txt3 += "<tr><td><strong>"+preguntaNumeros[2][0][i]+"</strong></td><td>"+preguntaNumeros[2][1][i]+"</td></tr>";
    }
    for(let i=0;i<preguntaNumeros[3][0].length;i++){
        txt4 += "<tr><td><strong>"+preguntaNumeros[3][0][i]+"</strong></td><td>"+preguntaNumeros[3][1][i]+"</td></tr>";
    }
    for(let i=0;i<preguntaNumeros[4][0].length;i++){
        txt5 += "<tr><td><strong>"+preguntaNumeros[4][0][i]+"</strong></td><td>"+preguntaNumeros[4][1][i]+"</td></tr>";
    }

    agregarTabla("numGenero",txt1);
    agregarTabla("numAlimentacion",txt2);
    agregarTabla("numComidas",txt3);
    agregarTabla("numEntre",txt4);
    agregarTabla("numRapidas",txt5);
}