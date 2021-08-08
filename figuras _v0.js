// Codigo Cuadrado
console.group("Cuadrados");

// const ladoCuadrado = 5;
// console.log ("Lado Cuadrado miden: " + ladoCuadrado + " cm");


function perimetroCuadrado (lado){
    return  lado * 4 ;  
}
//console.log ("Perimetro Cuadrado es: " + perimetroCuadrado + " cm");


function areaCuadrado (lado) {
    return lado * lado;
}

//const areaCuadrado = ladoCuadrado * ladoCuadrado;
//console.log ("Area Cuadrado es: " + areaCuadrado + " cm2");


console.groupEnd();





// Codigo Triagunlo
console.group("Triangulo");

const trianguloLado1 = 5;
const trianguloLado2 = 5;
const trianguloLado3 = 5;
const trianguloBase = 4;
const trianguloAltura = 10;
const trianguloPerimetro =  trianguloLado1 + trianguloLado2 + trianguloLado3 ;
const trianguloArea = (trianguloBase * trianguloAltura)/2;




console.log ("Altura del Triagunlo mide: " + trianguloAltura + " cm")
console.log ("Perimetro Triangulo miden: " + trianguloPerimetro + " cm");
console.log ("Area del Triangulo es: " + trianguloArea + " cm2" );

console.groupEnd();

// Codigo Circulo
console.group("Circulo");
const circuloRadio = 5;
const circuloDiametro = circuloRadio * 2;

const PI = Math.PI;
const circuloPerimeto = circuloDiametro * PI;
const circuloArea = (circuloRadio * circuloRadio) * PI;


console.log ("Radio del Circulo: " + circuloRadio + " cm");
console.log ("Diametro del Circulo: " + circuloDiametro + " cm");
console.log ("PI es: " + PI );
console.log ("Perimetro del Circulo: " + circuloPerimeto + " cm");
console.log ("Area del Circulo: " + circuloArea + " cm2");



console.groupEnd();