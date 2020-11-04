/* LATEX */
Acalcular = true;

function calcular(){
    console.log("Calculando");
    mediaAritmetica("mediaGenero", respuestaEnNumeros[0], "1");
    mediaAritmetica("mediaEdades", respuesta[1], "2");
    mediaAritmetica("mediaAlimentacion", respuestaEnNumeros[2], "3");
    mediaAritmetica("mediaCantidad", respuestaEnNumeros[3], "4");
    mediaAritmetica("mediaEntre", respuestaEnNumeros[4], "5");
    mediaAritmetica("mediaFrecuencia", respuestaEnNumeros[5], "6");
    mediaAritmetica("mediaBeber", respuesta[6], "7");

    console.log(preguntaNumeros[4]);
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

function agregarTabla(ctx,num){
    let txt = `<table class="centered">
    <thead>
      <tr>
          <th>Numero</th>
          <th>Nombre</th>
      </tr>
    </thead>

    <tbody>
      `;

    let body = document.getElementById(ctx);
    body.innerHTML = txt+num+"</tbody></table>";
}

function mediaAritmetica(ctx, datos, num){
    let suma = 0;
    let resultado = "$$ \\overline{x}_{"+num+"} = \\frac{";
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
    resultado += "$$ \\overline{x}_{"+num+"} = ";
    resultado += suma;
    resultado += "  $$";

    const math = document.getElementById(ctx);
    math.innerHTML = resultado;
}

