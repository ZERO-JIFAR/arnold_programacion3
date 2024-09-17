console.log("Corriendo desde typescript");

// Ejercicio 3
const nombre: string = 'Bautista';
const edad: number = 30;
const esActivo: boolean = true;
const fechaNacimiento: Date = new Date('1994-07-19');

// Obtener el elemento HTML donde se mostrarán los valores (suponiendo que siempre existe)
const resultadoDiv = document.getElementById('variables') as HTMLElement;

// Mostrar los valores en el HTML
resultadoDiv.innerHTML = `
    <p>Nombre: ${nombre}</p>
    <p>Edad: ${edad}</p>
    <p>Activo: ${esActivo}</p>
    <p>Fecha de Nacimiento: ${fechaNacimiento.toDateString()}</p>
`;

//Ejercicio 4
function convertirNumeroACadena(numero: number): string {
    return numero.toString();
}

function mostrarResultado() {
    const inputNumeroElement = document.getElementById("inputNumero") as HTMLInputElement | null;
    const resultadoElement = document.getElementById("resultado");

    if (inputNumeroElement && resultadoElement) {
        const inputNumero = inputNumeroElement.value;
        const numero = parseFloat(inputNumero);
        
        if (!isNaN(numero)) {
            const resultado = convertirNumeroACadena(numero);
            resultadoElement.innerText = `El número en cadena es: ${resultado}`;
        } else {
            resultadoElement.innerText = "Por favor ingresa un número válido.";
        }
    }
}

const convertirBtn = document.getElementById("convertirBtn");
if (convertirBtn) {
    convertirBtn.addEventListener("click", mostrarResultado);
}

//Ejercicio 5

function sumarElementosArray(numeros: number[]): number {
    return numeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
}

function mostrarSuma() {
    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
    const suma = sumarElementosArray(numeros);
    const resultadoElement = document.getElementById("resultado");

    if (resultadoElement) {
        resultadoElement.innerText = `La suma de los números es: ${suma}`;
    }
}

const sumarBtn = document.getElementById("sumarBtn");
if (sumarBtn) {
    sumarBtn.addEventListener("click", mostrarSuma);
}

//Ejercicio 6
interface Estudiante {
    nombre: string;
    edad: number;
    curso: string;
}

const estudiante: Estudiante = {
    nombre: "Rodrigo Vega",
    edad: 21,
    curso: "Ingeniería de Software"
};

// Función para mostrar el estudiante en el HTML
function mostrarEstudiante(estudiante: Estudiante): void {
    const resultado = document.getElementById('resultadoEstudiante');
    if (resultado) {
        resultado.innerHTML = `
            <p><strong>Estudiante:</strong> ${estudiante.nombre}</p>
            <p><strong>Edad:</strong> ${estudiante.edad}</p>
            <p><strong>Curso:</strong> ${estudiante.curso}</p>
        `;
    }
}

//Ejercicio 7
type Direccion = {
    calle: string;
    ciudad: string;
    codigoPostal: string;
};

// Crear una dirección utilizando el tipo personalizado
const miDireccion: Direccion = {
    calle: 'Av. de la Constitución 10',
    ciudad: 'Madrid',
    codigoPostal: '2814'
};

// Función para mostrar la dirección en el HTML
function mostrarDireccion() {
    const direccionElement = document.getElementById("direccion");

    if (direccionElement) {
        direccionElement.innerHTML = `
            <p>Dirección: Calle: ${miDireccion.calle}, Ciudad: ${miDireccion.ciudad}, CP: ${miDireccion.codigoPostal}</p>
        `;
    }
}

window.onload = mostrarDireccion;


mostrarEstudiante(estudiante);

//Ejercicio 8
interface Usuario {
    nombre: string;
    correo: string;
    saludar(): string;
}

// Implementar la interfaz en un objeto
const usuario: Usuario = {
    nombre: 'Ana',
    correo: 'ana@gmail.com',
    saludar() {
        return `Hola, mi nombre es ${this.nombre} y mi correo es ${this.correo}.`;
    }
};

// Función para mostrar el saludo en el HTML
function mostrarSaludo() {
    const saludoElement = document.getElementById("saludo");

    if (saludoElement) {
        saludoElement.innerText = usuario.saludar();
    }
}
window.onload = mostrarSaludo;

//Ejercicio 9
class Persona {
    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    presentarse(): string {
        return `Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`;
    }
}

// Crear una instancia de Persona y mostrar la presentación en el HTML
const persona = new Persona('Federico', 30);
const resultado = persona.presentarse();

// Agregar el resultado al HTML
const resultadoPersona = document.getElementById('resultadoPersona');
if (resultadoPersona) {
    resultadoPersona.textContent = resultado;
}

// Ejercicio 10
class Caja<T> {
    private valor: T;

    constructor(valor: T) {
        this.valor = valor;
    }

    obtenerValor(): T {
        return this.valor;
    }
}

// Crear instancias de Caja para string y number
const cajaString = new Caja<string>("Mensaje secreto");
const cajaNumber = new Caja<number>(42);

// Obtener los valores de las cajas
const valorString = cajaString.obtenerValor();
const valorNumber = cajaNumber.obtenerValor();

// Mostrar los resultados en el HTML
const resultadoCaja = document.getElementById('resultadoCaja');
if (resultadoCaja) {
    resultadoCaja.innerHTML = `
        <p>Valor en cajaDeTexto: ${valorString}</p>
        <p>Valor en cajaDeNumero: ${valorNumber}</p>
    `;
}

//Ejercicio 11
function identidad<T>(valor: T): T {
    return valor;
}

// Usar la función con diferentes tipos de datos
const numero: number = 42;
const texto: string = 'Hola, TypeScript!';
const booleano: boolean = true;
const fecha: Date = new Date();

// Obtener los resultados usando la función identidad
const resultadoNumero = identidad(numero);
const resultadoTexto = identidad(texto);
const resultadoBooleano = identidad(booleano);
const resultadoFecha = identidad(fecha);

// Función para mostrar los resultados en el HTML
function mostrarResultados() {
    const resultadosElement = document.getElementById("resultadoFuncion");

    if (resultadosElement) {
        resultadosElement.innerHTML = `
            <p>Número: ${resultadoNumero}</p>
            <p>Texto: ${resultadoTexto}</p>
            <p>Booleano: ${resultadoBooleano}</p>
            <p>Fecha: ${resultadoFecha.toDateString()}</p>
        `;
    }
}
window.onload = mostrarResultados;

//Ejercicio 12

enum Color {
    Rojo = "Rojo",
    Verde = "Verde",
    Azul = "Azul"
}

// Asignar un color favorito a una variable
const colorFavorito: Color = Color.Verde;

// Función para mostrar el color en el HTML
function mostrarColorFavorito(color: Color): void {
    const resultadoColor = document.getElementById('resultadoColor');
    if (resultadoColor) {
        resultadoColor.innerHTML = `<p><strong>Color favorito:</strong> ${color}</p>`;
    }
}

mostrarColorFavorito(colorFavorito);