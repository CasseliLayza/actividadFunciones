
// Funciones simples
// 1.	Crear una función que convierta pulgadas en centímetros. Es decir, recibe por parámetro pulgadas y retorna su equivalente en centímetros.
function pulgadaACentrimetros(pulgadas) {
    return pulgadas * 2.54;

}

console.log(pulgadaACentrimetros(5))

// 2.	Crear una función que recibe un string y lo convierte en una URL. Ejemplo: “pepito” es devuelto como “http://www.pepito.com”.
function stringToURL(nombreDominio) {
    return "http://www." + nombreDominio + ".com"
}

console.log(stringToURL("pepito"))

// 3.	Crear una función que recibe un string y devuelve la misma frase, pero con admiración. 
function stringConAdmiracion(cadena) {
    return cadena + "!!"
}

console.log(stringConAdmiracion("pepito"))

// 4.	Crear una función que calcule la edad de los perros, considerando que 1 año para nosotros son 7 de ellos. 
function calculaEdadPerrunos(edad) {
    return edad * 7
}

console.log(calculaEdadPerrunos(2))

// 5.	Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu sueldo mensual como parámetro. Considera que tu mes de trabajo tiene 40 horas.
function calcualaHoraTrabajo(sueldo) {
    return sueldo / 40
}

console.log(calcualaHoraTrabajo(400))

// 6.	Crear la función calculadorIMC() que reciba la altura en metros y el peso en kilogramos y calcule el IMC de una persona. Luego, ejecutar la función probando diferentes valores.
function calculadorIMC(altura, kilogramos) {
    return kilogramos / (altura * altura)
}

console.log(calculadorIMC(1.65, 68))
console.log(calculadorIMC(1.70, 80))
console.log(calculadorIMC(1.72, 83))
console.log(calculadorIMC(1.75, 90))

// 1.	Crear una función que recibe un string en minúscula, lo convierta a mayúsculas y lo retorne. Pista: investigá qué hace el método de strings: toUpperCase()
function cadenaAMayuscula(cadena) {
    return cadena.toUpperCase()
}

console.log(cadenaAMayuscula("Hola"))

// 2.	Crear una función que recibe un parámetro y devuelve qué tipo de dato es ese parámetro. Pista: te servirá revisar qué hace la palabra reservada typeof. 
function mostrarTypeOfDate(dato) {
    return typeof (dato)

}

console.log(mostrarTypeOfDate("text"))

// 3.	Crear una función a la que le pasamos el radio de un círculo y nos devuelve la circunferencia. Pista: investigá si el objeto Math tiene entre sus propiedades el número pi.
function calcularCircunferencia(r) {
    return 2 * Math.PI * r;
}

console.log(calcularCircunferencia(1))