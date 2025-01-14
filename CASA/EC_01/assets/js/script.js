// Seleccionar elementos del HTML
const titulo = document.getElementById("titulo");
const mensaje = document.querySelector(".mensaje");
const boton = document.getElementById("boton");
const SPAN_RESULTADO = document.querySelector("#span-resultado")
const LIMPIAR = document.querySelector("limpiar")
const SUMA = document.querySelector("#sumar")

// Modificar el contenido
titulo.textContent = "¡Hola, JavaScript!";
mensaje.innerHTML = "Este texto fue cambiado con <strong>JavaScript</strong>.";

// Cambiar estilos dinámicamente
titulo.style.color = "blue";
mensaje.style.fontSize = "20px";

// Agregar eventos a BOTONES
boton.addEventListener("click", () => {
    alert("¡Has hecho clic!");
    mensaje.classList.toggle("resaltado"); // Alterna la clase 'resaltado'
});

SUMA.addEventListener("click", () => {
    let a = parseInt(prompt("numero 1: "));
    let b = parseInt(prompt("numero 2: "));
    SPAN_RESULTADO.innerHTML = `${sumar(a,b)}`;
})

// Funciones
function sumar(a, b) {
    let c = a + b;
    return c;
}
function restar(a, b) {
    let c = a - b;
    return c;
}
function multiplicar(a, b) {
    let c = a * b;
    return c;
}
function dividir(a, b) {
    let c = a / b;
    return c;
}
function potencia(a, b) {
    let c = a ** b;
    return c;
}
function sqrt(a) {
    let c = Math.sqrt(a)
    return c;
}
