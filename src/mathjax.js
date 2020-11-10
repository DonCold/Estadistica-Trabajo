/* LATEX */

/* TODO
- Media (A cada uno)
- Moda  (A general)
- Mediana (A general)
- (H,M,O Probabilidad de cuantas veces suele comer comida rapida a la semana)
- (H,M,O Probabilidad de  coma x veces al dia)
- (H,M,O Probabilidad de comer sano,normal, no sano)
 */

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
        resultado += "$$ {Me}_{"+num+"} = ";
        resultado += datos[res-1];
        resultado += "  $$";
    }

    const math = document.getElementById(ctx);
    math.innerHTML = resultado;
}
