// Ejercicio 3
const nombre: string = 'Hola, TypeScript!';
const edad: number = 123;
const esActivo: boolean = true;
const fechaNacimiento: Date = new Date('2024-09-08');
const dia = fechaNacimiento.getDate() + 1;
const mes = fechaNacimiento.getMonth() + 1;
const año = fechaNacimiento.getFullYear();
const resultadoDiv = document.getElementById('variables') as HTMLElement;
resultadoDiv.innerHTML = `
    <p>Texto: ${nombre}</p>
    <p>Numero: ${edad}</p>
    <p>Booleano: ${esActivo}</p>
    <p>Fecha: ${dia}/${mes}/${año}</p>
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
            resultadoElement.innerText = `Numero convertido a cadena: ${resultado}`;
        } else {
            resultadoElement.innerText = "Por favor ingresa un numero valido.";
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
        resultadoElement.innerText = `Suma del array: ${suma}`;
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
    nombre: "Juan",
    edad: 20,
    curso: "Matematicas"
};
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
mostrarEstudiante(estudiante);

//Ejercicio 7
type Direccion = {
    calle: string;
    ciudad: string;
    codigoPostal: string;
};
const miDireccion: Direccion = {
    calle: 'Av. de la Constitucion 10',
    ciudad: 'Madrid',
    codigoPostal: '2814'
};
resultadoDiv!.innerHTML += `<p>Dirección: Calle:${miDireccion.calle}, Ciudad:${miDireccion.ciudad}, CP:${miDireccion.codigoPostal}</p>`;

//Ejercicio 8
interface Usuario {
    nombre: string;
    correo: string;
    saludar(): string;
}
const usuario: Usuario = {
    nombre: 'Ana',
    correo: 'ana@gmail.com',
    saludar() {
        return `Hola, mi nombre es ${this.nombre} y mi correo es ${this.correo}.`;
    }
};
resultadoDiv!.innerHTML += `<p>${usuario.saludar()}</p>`;


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

// Crear una instancia de Persona y mostrar la presentacion en el HTML
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

// Usar la funcion con diferentes tipos de datos
const numero: number = 42;
const texto: string = 'Hola, TypeScript!';
const booleano: boolean = true;
const fecha: Date = new Date();

// Obtener los resultados usando la funcion identidad
const resultadoNumero = identidad(numero);
const resultadoTexto = identidad(texto);
const resultadoBooleano = identidad(booleano);
const resultadoFecha = identidad(fecha);

// Funcion para mostrar los resultados en el HTML
function mostrarResultados() {
    const resultadosElement = document.getElementById("resultadoFuncion");

    if (resultadosElement) {
        resultadosElement.innerHTML = `
            <p>Numero: ${resultadoNumero}</p>
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
const colorFavorito: Color = Color.Azul;
function mostrarColorFavorito(color: Color): void {
    const resultadoColor = document.getElementById('resultadoColor');
    if (resultadoColor) {
        resultadoColor.innerHTML = `<p><strong>Color favorito:</strong> ${color}</p>`;
    }
}
mostrarColorFavorito(colorFavorito);