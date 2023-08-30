function esParOImpar(numero) {
  var resultadoDiv = document.getElementById("resultado");
  if (numero % 2 === 0) {
    resultadoDiv.innerHTML = numero + " es un número par.";
  } else {
    resultadoDiv.innerHTML = numero + " es un número impar.";
  }
}

function compararNumeros(num1, num2) {
  var resultadoDiv = document.getElementById("resultado");
  if (num1 > num2) {
    resultadoDiv.innerHTML = num1 + " es mayor que " + num2;
  } else if (num2 > num1) {
    resultadoDiv.innerHTML = num2 + " es mayor que " + num1;
  } else {
    resultadoDiv.innerHTML = "Los números son iguales.";
  }
}

function esMultiploDe5(numero) {
  var resultadoDiv = document.getElementById("resultado");
  if (numero % 5 === 0) {
    resultadoDiv.innerHTML = numero + " es múltiplo de 5.";
  } else {
    resultadoDiv.innerHTML = numero + " no es múltiplo de 5.";
  }
}

function imprimirNumerosHasta(numero) {
  for (let i = 0; i <= numero; i++) {
    console.log(i);
  }
}

function imprimirPalabraVeces(palabra, cantidad) {
  for (let i = 0; i < cantidad; i++) {
    console.log(palabra);
  }
}

function imprimirArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

function imprimirArraySinQuintoElemento(array) {
  for (let i = 0; i < array.length; i++) {
    if (i !== 4) {
      // La quinta posición tiene índice 4 (0-based)
      console.log(array[i]);
    }
  }
}

function multiplicarArrayPorNumero(array, numero) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i] * numero);
  }
}

esParOImpar(6);
compararNumeros(8, 12);
esMultiploDe5(25);
imprimirNumerosHasta(5);
esParOImpar(6);
compararNumeros(8, 12);
esMultiploDe5(25);
imprimirNumerosHasta(5);
imprimirPalabraVeces("Hola", 3);
imprimirArray([1, 2, 3, 4, 5]);
imprimirArraySinQuintoElemento([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
multiplicarArrayPorNumero([1, 2, 3], 5);

// Llama a otras funciones aquí según tus necesidades.
