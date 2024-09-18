// Ejercicio 3
var nombre = 'Hola, TypeScript!';
var edad = 123;
var esActivo = true;
var fechaNacimiento = new Date('2024-09-08');
var dia = fechaNacimiento.getDate() + 1;
var mes = fechaNacimiento.getMonth() + 1;
var año = fechaNacimiento.getFullYear();
var resultadoDiv = document.getElementById('variables');
resultadoDiv.innerHTML = "\n    <p>Texto: ".concat(nombre, "</p>\n    <p>Numero: ").concat(edad, "</p>\n    <p>Booleano: ").concat(esActivo, "</p>\n    <p>Fecha: ").concat(dia, "/").concat(mes, "/").concat(año, "</p>\n");
//Ejercicio 4
function convertirNumeroACadena(numero) {
    return numero.toString();
}
function mostrarResultado() {
    var inputNumeroElement = document.getElementById("inputNumero");
    var resultadoElement = document.getElementById("resultado");
    if (inputNumeroElement && resultadoElement) {
        var inputNumero = inputNumeroElement.value;
        var numero_1 = parseFloat(inputNumero);
        if (!isNaN(numero_1)) {
            var resultado_1 = convertirNumeroACadena(numero_1);
            resultadoElement.innerText = "Numero convertido a cadena: ".concat(resultado_1);
        }
        else {
            resultadoElement.innerText = "Por favor ingresa un número válido.";
        }
    }
}
var convertirBtn = document.getElementById("convertirBtn");
if (convertirBtn) {
    convertirBtn.addEventListener("click", mostrarResultado);
}
//Ejercicio 5
function sumarElementosArray(numeros) {
    return numeros.reduce(function (acumulador, valorActual) { return acumulador + valorActual; }, 0);
}
function mostrarSuma() {
    var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var suma = sumarElementosArray(numeros);
    var resultadoElement = document.getElementById("resultado");
    if (resultadoElement) {
        resultadoElement.innerText = "Suma del array: ".concat(suma);
    }
}
var sumarBtn = document.getElementById("sumarBtn");
if (sumarBtn) {
    sumarBtn.addEventListener("click", mostrarSuma);
}
var estudiante = {
    nombre: "Rodrigo Vega",
    edad: 21,
    curso: "Ingeniería de Software"
};
function mostrarEstudiante(estudiante) {
    var resultado = document.getElementById('resultadoEstudiante');
    if (resultado) {
        resultado.innerHTML = "\n            <p><strong>Estudiante:</strong> ".concat(estudiante.nombre, "</p>\n            <p><strong>Edad:</strong> ").concat(estudiante.edad, "</p>\n            <p><strong>Curso:</strong> ").concat(estudiante.curso, "</p>\n        ");
    }
}
mostrarEstudiante(estudiante);
var miDireccion = {
    calle: 'Av. de la Constitución 10',
    ciudad: 'Madrid',
    codigoPostal: '2814'
};
function mostrarDireccion() {
    var direccionElement = document.getElementById("direccion");
    if (direccionElement) {
        direccionElement.innerHTML = "\n            <p>Direcci\u00F3n: Calle: ".concat(miDireccion.calle, ", Ciudad: ").concat(miDireccion.ciudad, ", CP: ").concat(miDireccion.codigoPostal, "</p>\n        ");
    }
}
window.onload = mostrarDireccion;
var usuario = {
    nombre: 'Ana',
    correo: 'ana@gmail.com',
    saludar: function () {
        return "Hola, mi nombre es ".concat(this.nombre, " y mi correo es ").concat(this.correo, ".");
    }
};
function mostrarSaludo() {
    var saludoElement = document.getElementById("saludo");
    if (saludoElement) {
        saludoElement.innerText = usuario.saludar();
    }
}
window.onload = mostrarSaludo;
//Ejercicio 9
var Persona = /** @class */ (function () {
    function Persona(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    Persona.prototype.presentarse = function () {
        return "Hola, me llamo ".concat(this.nombre, " y tengo ").concat(this.edad, " a\u00F1os.");
    };
    return Persona;
}());
// Crear una instancia de Persona y mostrar la presentación en el HTML
var persona = new Persona('Federico', 30);
var resultado = persona.presentarse();
// Agregar el resultado al HTML
var resultadoPersona = document.getElementById('resultadoPersona');
if (resultadoPersona) {
    resultadoPersona.textContent = resultado;
}
// Ejercicio 10
var Caja = /** @class */ (function () {
    function Caja(valor) {
        this.valor = valor;
    }
    Caja.prototype.obtenerValor = function () {
        return this.valor;
    };
    return Caja;
}());
// Crear instancias de Caja para string y number
var cajaString = new Caja("Mensaje secreto");
var cajaNumber = new Caja(42);
// Obtener los valores de las cajas
var valorString = cajaString.obtenerValor();
var valorNumber = cajaNumber.obtenerValor();
// Mostrar los resultados en el HTML
var resultadoCaja = document.getElementById('resultadoCaja');
if (resultadoCaja) {
    resultadoCaja.innerHTML = "\n        <p>Valor en cajaDeTexto: ".concat(valorString, "</p>\n        <p>Valor en cajaDeNumero: ").concat(valorNumber, "</p>\n    ");
}
//Ejercicio 11
function identidad(valor) {
    return valor;
}
// Usar la función con diferentes tipos de datos
var numero = 42;
var texto = 'Hola, TypeScript!';
var booleano = true;
var fecha = new Date();
// Obtener los resultados usando la función identidad
var resultadoNumero = identidad(numero);
var resultadoTexto = identidad(texto);
var resultadoBooleano = identidad(booleano);
var resultadoFecha = identidad(fecha);
// Función para mostrar los resultados en el HTML
function mostrarResultados() {
    var resultadosElement = document.getElementById("resultadoFuncion");
    if (resultadosElement) {
        resultadosElement.innerHTML = "\n            <p>N\u00FAmero: ".concat(resultadoNumero, "</p>\n            <p>Texto: ").concat(resultadoTexto, "</p>\n            <p>Booleano: ").concat(resultadoBooleano, "</p>\n            <p>Fecha: ").concat(resultadoFecha.toDateString(), "</p>\n        ");
    }
}
window.onload = mostrarResultados;
//Ejercicio 12
var Color;
(function (Color) {
    Color["Rojo"] = "Rojo";
    Color["Verde"] = "Verde";
    Color["Azul"] = "Azul";
})(Color || (Color = {}));
// Asignar un color favorito a una variable
var colorFavorito = Color.Verde;
// Función para mostrar el color en el HTML
function mostrarColorFavorito(color) {
    var resultadoColor = document.getElementById('resultadoColor');
    if (resultadoColor) {
        resultadoColor.innerHTML = "<p><strong>Color favorito:</strong> ".concat(color, "</p>");
    }
}
mostrarColorFavorito(colorFavorito);
