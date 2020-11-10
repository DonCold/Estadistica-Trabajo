function calcular(){
    console.log("Calculando");
    mediaAritmetica("mediaEdades", respuestaMujeres[1], "2");
    mediaAritmetica("mediaAlimentacion", respuestaMujeresNumeros[2], "3");
    mediaAritmetica("mediaCantidad", respuestaMujeresNumeros[3], "4");
    mediaAritmetica("mediaEntre", respuestaMujeresNumeros[4], "5");
    mediaAritmetica("mediaFrecuencia", respuestaMujeresNumeros[5], "6");
    mediaAritmetica("mediaBeber", respuestaMujeres[6], "7");

    console.log(preguntaNumeros[10]);
    let txt2 = "";
    let txt3 = "";
    let txt4 = "";
    let txt5 = "";

    for(let i=0;i<preguntaNumeros[11][0].length;i++){
        txt2 += "<tr><td><strong>"+preguntaNumeros[1][0][i]+"</strong></td><td>"+preguntaNumeros[1][1][i]+"</td></tr>";
    }
    for(let i=0;i<preguntaNumeros[12][0].length;i++){
        txt3 += "<tr><td><strong>"+preguntaNumeros[2][0][i]+"</strong></td><td>"+preguntaNumeros[2][1][i]+"</td></tr>";
    }
    for(let i=0;i<preguntaNumeros[13][0].length;i++){
        txt4 += "<tr><td><strong>"+preguntaNumeros[3][0][i]+"</strong></td><td>"+preguntaNumeros[3][1][i]+"</td></tr>";
    }
    for(let i=0;i<preguntaNumeros[14][0].length;i++){
        txt5 += "<tr><td><strong>"+preguntaNumeros[4][0][i]+"</strong></td><td>"+preguntaNumeros[4][1][i]+"</td></tr>";
    }

    agregarTabla("numAlimentacion",txt2);
    agregarTabla("numComidas",txt3);
    agregarTabla("numEntre",txt4);
    agregarTabla("numRapidas",txt5);
}