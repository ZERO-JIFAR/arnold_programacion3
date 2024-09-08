console.log("1. Introducción a JavaScript");
console.log("Ejercicio 2:");
{
  let a = 5;
  let b = 10;
  let c = a + b;
  console.log(`El valor de a es: ${a}`);
  console.log(`El valor de b es: ${b}`);
  console.log(`La suma de a y b es: ${c}`);
}
console.log("Ejercicio 3:");
{
  let nombre = prompt("¿Cual es tu nombre?");
  console.log("Hola, "+nombre+"!");
}

console.log(" ");

console.log("2. Operadores lógicos y condicionales");
console.log("Ejercicio 1:");
{
  let a = 8;
  let b = 14;
  let c = 3;
  let mayor;
  if (a > b && a > c) {
    mayor = a;
  } else if (b > a && b > c) {
    mayor = b;
  } else {
    mayor = c;
  }
  console.log(`El mayor de los 3 numeros es: ${mayor}`);
}
console.log("Ejercicio 2:");
{
  let numeroIngresado = prompt("Ingresa un numero y te dire si es par o impar");
  numeroIngresado = Number(numeroIngresado);
  if (numeroIngresado % 2 === 0) {
    console.log(`El numero ${numeroIngresado} es par.`);
  } else {
    console.log(`El numero ${numeroIngresado} es impar.`);
  }
}

console.log(" ");

console.log("3. Operadores de asignación y bucles");
console.log("Ejercicio 1:");
{
  let numero = 10;
  while (numero > 0) {
    console.log(numero);
    numero--;
  }
  console.log(numero); // Imprime 0 al final
}
console.log("Ejercicio 2:");
{
  let numero;
  do {
    numero = prompt("Ingresa un numero mayor a 100:");
    numero = Number(numero);
  } while (numero <= 100);
  console.log(`Ingresaste un numero mayor a 100: ${numero}`);
}

console.log(" ");

console.log("4. Funciones de JavaScript");
console.log("Ejercicio 1:");
{
  function esPar(numero) {
    return numero % 2 === 0;
  }
  console.log(`El numero 4 es par: ${esPar(4)}`);
  console.log(`El numero 7 es par: ${esPar(7)}`);
  console.log(`El numero 0 es par: ${esPar(0)}`);
  console.log(`El numero -2 es par: ${esPar(-2)}`);
  console.log(`El numero 15 es par: ${esPar(15)}`);
}
console.log("Ejercicio 2:");
{
  function convertirCelsiusAFahrenheit(celsius) {
    let fahrenheit = celsius * 1.8 + 32;
    return fahrenheit;
  }
  let temperaturaCelsius = 30;
  let temperaturaFahrenheit = convertirCelsiusAFahrenheit(temperaturaCelsius);
  console.log(`${temperaturaCelsius}°C son equivalentes a ${temperaturaFahrenheit}°F`);
}

console.log(" ");

console.log("5. Objetos en JavaScript");
console.log("Ejercicio 1:");
{
  let persona = {
    nombre: "Ana",
    edad: 30,
    ciudad: "Buenos Aires",
    cambiarCiudad: function(nuevaCiudad) {
      this.ciudad = nuevaCiudad;
    }
  };
  console.log("Antes de cambiar la ciudad:");
  console.log(`Persona: ${persona.nombre}, Edad: ${persona.edad}, Ciudad: ${persona.ciudad}`);
  persona.cambiarCiudad("Barcelona");
  console.log("Después de cambiar la ciudad:");
  console.log(`Persona: ${persona.nombre}, Edad: ${persona.edad}, Ciudad: ${persona.ciudad}`);
}
console.log("Ejercicio 2:");
{
  let libro = {
    titulo: "El Quijote",
    autor: "Miguel de Cervantes",
    año: 1605,
    esAntiguo: function() {
      const añoActual = new Date().getFullYear();
      const añosDesdePublicacion = añoActual - this.año;
      if (añosDesdePublicacion > 10) {
        console.log(`El libro "${this.titulo}" es antiguo: true`);
      } else {
        console.log(`El libro "${this.titulo}" es antiguo: false`);
      }
    }
  };
  libro.esAntiguo();
}

console.log(" ");

console.log("6. Arrays");
console.log("Ejercicio 1:");
{
  let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let numerosMultiplicados = [];
  for (let i = 0; i < numeros.length; i++) {
    numerosMultiplicados.push(numeros[i] * 2);
  }
  console.log("Numeros originales:", numeros);
  console.log("Numeros multiplicados por 2:", numerosMultiplicados);
}
console.log("Ejercicio 2:");
{
  let pares = [];
  for (let i = 1; pares.length < 10; i++) {
    if (i % 2 === 0) {
      pares.push(i);
    }
  }
  console.log("Primeros 10 numeros pares:", pares);
}

//7. Introducción al DOM
//Ejercicio 1:
{
  function cambiarColor() {
    const parrafos = document.querySelectorAll("p");
    parrafos.forEach(parrafo => {
      parrafo.style.color = "blue";
    });
  }
}
//Ejercicio 2:
{
  function mostrarAlerta() {
    const textoIngresado = document.getElementById('campoTexto').value;
      alert(`Has ingresado: ${textoIngresado}`);
  }
}

//8. Eventos en DOM
//Ejercicio 1:
{
  const elementosLista = document.querySelectorAll("ul li");
  elementosLista.forEach((elemento) => {
    elemento.addEventListener("click", function() {
      console.log(this.textContent);
    });
  });
}
//Ejercicio 2:
{
  const campoTexto = document.getElementById("miCampoTexto");
  const deshabilitarBtn = document.getElementById("deshabilitarBtn");
  const habilitarBtn = document.getElementById("habilitarBtn");
  deshabilitarBtn.addEventListener("click", () => {
    campoTexto.disabled = true; // Deshabilitar el campo de texto
  });
  habilitarBtn.addEventListener("click", () => {
    campoTexto.disabled = false; // Habilitar el campo de texto
  });
}

//9. LocalStorage
//Ejercicio 1:
{
  const formulario = document.getElementById('formularioCorreo');
  const correoInput = document.getElementById('correo');
  const correoGuardadoDiv = document.getElementById('correoGuardado');
  const eliminarBtn = document.getElementById('eliminarCorreo');
  function mostrarCorreoGuardado(correo) {
    correoGuardadoDiv.innerHTML = `Correo guardado: ${correo}`;
    eliminarBtn.style.display = 'block';
  }
  window.addEventListener('load', () => {
    const correoGuardado = localStorage.getItem('correo');
    if (correoGuardado) {
      mostrarCorreoGuardado(correoGuardado);
    }
  });
  formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    const correo = correoInput.value;
    localStorage.setItem('correo', correo);
    mostrarCorreoGuardado(correo);
    correoInput.value = '';
  });
  eliminarBtn.addEventListener('click', () => {
    localStorage.removeItem('correo');
    correoGuardadoDiv.innerHTML = '';
    eliminarBtn.style.display = 'none';
  });
}