////////////////////// Codigo Cuadrado
console.group("Cuadrados");

function cuadradoPerimetro (lado){
    return  lado * 4 ;  
}

function cuadradoArea (lado) {
    return lado * lado;
}

console.groupEnd();


/////////////////////// Codigo Triagunlo
console.group("Triangulo");

function trianguloPerimetro(trianguloLado1,trianguloLado2,trianguloLado3){
  return trianguloLado1 + trianguloLado2 + trianguloLado3;
}

function trianguloArea (trianguloBase,trianguloAltura ) {
    return (trianguloBase * trianguloAltura)/2;
}

console.groupEnd();

////////////////////// Codigo Circulo
console.group("Circulo");

const PI = Math.PI;

function circuloDiametro(circuloRadio){
    return circuloRadio * 2;
}

function circuloPerimeto(circuloRadio){
    const diametro = circuloDiametro(circuloRadio)
    return diametro  * PI;
}

function circuloArea(circuloRadio){
    return (circuloRadio * circuloRadio) * PI;
}

console.groupEnd();



//////////////////////////////////////// Aqui Interactuamos con HTMLAllCollection

function fn_Calcular_Cuadrado_Perimetro( ){
    //cuadradoPerimetro
    const ladoCuadrado = document.getElementById("InputCuadrado").value;
    const Perimetro =  cuadradoPerimetro(ladoCuadrado);
    document.getElementById("txtCuadradoPerimetro").value = Perimetro;
  
}

