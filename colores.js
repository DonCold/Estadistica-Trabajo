function cambio(num) {
    if (num == 10) {
      return "A";
    }
    if (num == 11) {
      return "B";
    }
    if (num == 12) {
      return "C";
    }
    if (num == 13) {
      return "D";
    }
    if (num == 14) {
      return "E";
    }
    if (num == 15) {
      return "F";
    }
    return num;
}

function colorAleatorio(){
    let num1 = parseInt(Math.random() * (15 - 0)) + 0;
    let num2 = parseInt(Math.random() * (15 - 0)) + 0;
    let num3 = parseInt(Math.random() * (15 - 0)) + 0;
    let num4 = parseInt(Math.random() * (15 - 0)) + 0;
    let num5 = parseInt(Math.random() * (15 - 0)) + 0;
    let num6 = parseInt(Math.random() * (15 - 0)) + 0;
    let color =
        "#" +
        cambio(num1) +
        cambio(num2) +
        cambio(num3) +
        cambio(num4) +
        cambio(num5) +
        cambio(num6);

    return color;
}

function color(cantidad){
  var colorr = Chart.helpers.color;
  let colores = [];
  for(let i=0;i<cantidad;i++){
      colores.push(colorr(colorAleatorio()).alpha(0.5).rgbString());
  }
  return colores;
}