//Código del cuadrado
console.group("Cuadrados")

/* const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");
 */
function perimetroCuadrado(lado) {
    return lado * 4;


}
perimetroCuadrado()
/* = ladoCuadrado * 4;
console.log("El perímetro del cuadrado es: " + perimetroCuadrado + " cm");
 */
function areaCuadrado(lado) {
    return lado * lado;
}
/* console.log("El área del cuadrado es: " + areaCuadrado + " cm");
 */
console.groupEnd();

//Código del triángulo
console.group("Triángulos")
/* 
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
console.log(
    "Los lados del triángulo miden: " 
    + ladoTriangulo1
    + "cm, " 
    + ladoTriangulo2 
    + "cm, " 
    + baseTriangulo 
    + "cm"
);
 */

/* const alturaTriangulo = 5.5;
 */
/* console.log("Los altura del triángulo es de: " + alturaTriangulo + "cm");
 */
function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;

}

/* = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perímetro del triángulo es: " + periodTriangulo)
 */

/* const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2; */
function areaTriangulo(base, altura) {
    return (base * altura) / 2;

}



console.log("El área del triángulo es: " + areaTriangulo + "cm^2");

console.groupEnd();

//Código del círculo
console.group("Círculos")

// Radio
/* const radioCirculo = 4;
console.log("El radio del círculo es: " + radioCirculo + "cm"); */
// Diámetro
function diametroCirculo(radio) {
    return radio * 2;
}

// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
console.log("El perímetro del círculo es: " + perimetroCirculo + "cm");


//Área
function areaCirculo(radio) {
    return (radio * radio) * PI;
}
console.groupEnd();


// Aquí interectuamos con el HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado") 
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado") 
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

function alturaTrianguloIsosceles(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
    if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
        console.error("Los lados a y b no son iguales");
    } else {
        const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
        const trianguloPequenoLadoBase = trianguloGrandeLadoA;

        const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
        const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;

        const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

        const trianguloGrandeAltura = trianguloPequenoLadoA;
        return trianguloGrandeAltura;
    }
}