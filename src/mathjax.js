Acalcular = true;

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
    suma = Math.round(suma*100000)/100000;

    resultado += final;
    resultado += "$$ \\overline{x}_{"+num+"} = ";
    resultado += suma;
    resultado += "  $$";

    const math = document.getElementById(ctx);
    math.innerHTML = resultado;
}

function medianaAritmetica(ctx, datos, num){
    let resultado = "$$ {Me}_{"+num+"} = {";
    let final = "}  $$";
    datos.sort();

    function comparar ( a, b ){ return a - b; }
    datos.sort( comparar );

    for(let i=0;i<datos.length;i++){
        resultado += datos[i].toString();
        if(i<datos.length-1){
            resultado += ",";
        }
    }
    resultado += final;

    if((datos.length % 2)==0){
        res = datos.length/2;
        resultado +="$$ {Me}_{"+num+"} = \\frac{"+datos[res-1]+"+"+datos[res]+"}{2} $$";
        res = (datos[res-1]+datos[res])/2;
        res = parseInt(res);

        resultado += "$$ {Me}_{"+num+"} = ";
        resultado += res;
        resultado += "  $$";
    }else{
        res = datos.length/2;
        res = parseInt(res);
        resultado += "$$ {Me}_{"+num+"} = ";
        resultado += datos[res];
        resultado += "  $$";
    }

    const math = document.getElementById(ctx);
    math.innerHTML = resultado;
}

function modaAritmetica(ctx, datos){
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

    let resultado = "<br>";
    for(let i=0; i<opciones.length; i++){
        resultado += "<strong>"+opciones[i]+"</strong>: "+eleccion[i]+"&nbsp&nbsp&nbsp&nbsp&nbsp";
    }

    let numMayor = -1;
    for(let i=0; i<opciones.length; i++){
        if(numMayor < eleccion[i]){
            numMayor = eleccion[i];
        }
    }

    resultado += "<br><br><strong>Mo = </strong>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp";
    for(let i=0; i<opciones.length; i++){
        if(eleccion[i]==numMayor){
            resultado += "<strong>"+opciones[i]+"</strong>: "+eleccion[i]+"&nbsp&nbsp&nbsp&nbsp";
        }
    }

    resultado +="<br><br><br><br>";

    const math = document.getElementById(ctx);
    math.innerHTML = resultado;
}

function probabilidadBasica(ctx, favorables, totales, subbajo){
    let resultado = "$$ P_{"+subbajo+"} = \\frac{"+favorables+"}{"+totales;
    let final = "}  $$";

    res = favorables/totales;
    res = Math.round(res*10000)/10000;
    resultado += final;
    resultado += "$$ P_{"+subbajo+"} = "+res+" $$";

    res = res*100;
    res = Math.round(res*100)/100;
    resultado += "$$ P_{"+subbajo+"} = "+res+"\\% $$";


    const math = document.getElementById(ctx);
    math.innerHTML = resultado;
}

function varianza(ctx, subbajo, media, N, datos){
    let resultado = "$$ \\sigma^{2}_{"+subbajo+"} = ";
    resultado += "\\frac{";
    let varianza = 0;
    media = Math.round(media*100)/100;

    saltoDeLinea = 0;
    for(let i=0;i<N;i++){
        varianza += Math.pow((datos[i] - media), 2);
        if(saltoDeLinea<10){
            saltoDeLinea++;
            resultado += "("+datos[i]+"-"+media+")^{2}";
            if(i<datos.length-1){
                resultado += "+";
            }
        }else{
            saltoDeLinea = 0;
            resultado += "}{"+N+"} $$ $$";
            resultado += "\\frac{";
            resultado += "("+datos[i]+"-"+media+")^{2}";
            resultado += "+";
        }
    }

    resultado += "}{"+N+"} $$";

    varianza = varianza/N
    varianza = Math.round(varianza*100000)/100000;

    console.log(varianza);
    console.log(media);

    resultado += "<br>";
    resultado += "$$ \\sigma^{2}_{"+subbajo+"} = "+varianza+"$$";
    resultado += "$$ \\sqrt{\\sigma^{2}_{"+subbajo+"}} = \\sqrt{"+varianza+"} $$";

    varianza = Math.sqrt(varianza);
    varianza = Math.round(varianza*100000)/100000;
    resultado += "$$ \\sigma_{"+subbajo+"} = "+varianza+" $$ <br><br>";

    const math = document.getElementById(ctx);
    math.innerHTML = resultado;
}
