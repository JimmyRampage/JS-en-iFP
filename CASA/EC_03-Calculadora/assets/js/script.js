////////////////
// SELECTORES //
////////////////

// RESULTADO
const SPAN_RESULTADO = document.querySelector("#span-resultado");

// BOTONES
const LIMPIAR = document.querySelector("#boton-limpiar");
const SUMAR = document.querySelector("#boton-sumar");
const RESTAR = document.querySelector("#boton-restar");
const MULTIPLICAR = document.querySelector("#boton-multiplicar");
const DIVIDIR = document.querySelector("#boton-dividir");
const POTENCIA = document.querySelector("#boton-potencia");
const RAIZ = document.querySelector("#boton-raiz");

// INPUT
const INPUT_1 = document.querySelector("#input-1");
const INPUT_2 = document.querySelector("#input-2");

///////////////
// FUNCIONES //
///////////////

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
    let rounded = Math.round(c * 100) / 100;
    return rounded;
}
function potencia(a, b) {
    let c = a ** b;
    return c;
}
function raiz(a) {
    let c = Math.sqrt(a)
    let rounded = Math.round(c * 100) / 100;
    return rounded;
}

//////////////////////
// EVENTOS DE CLICK //
//////////////////////

LIMPIAR.addEventListener("click", () => {
    SPAN_RESULTADO.innerHTML = "0";
})

SUMAR.addEventListener("click", () => {
    let a = parseFloat(INPUT_1.value || 0);
    let b = parseFloat(INPUT_2.value || 0);
    let c = sumar(a, b);
    SPAN_RESULTADO.innerHTML = `${c}`;
})

RESTAR.addEventListener("click", () => {
    let a = parseFloat(INPUT_1.value || 0);
    let b = parseFloat(INPUT_2.value || 0);
    let c = restar(a, b);
    SPAN_RESULTADO.innerHTML = `${c}`;
})

MULTIPLICAR.addEventListener("click", () => {
    let a = parseFloat(INPUT_1.value || 0);
    let b = parseFloat(INPUT_2.value || 0);
    let c = multiplicar(a, b);
    SPAN_RESULTADO.innerHTML = `${c}`;
})

DIVIDIR.addEventListener("click", () => {
    let a = parseFloat(INPUT_1.value || 0);
    let b = parseFloat(INPUT_2.value || 0);
    let c = dividir(a, b);
    SPAN_RESULTADO.innerHTML = `${c}`;
})

POTENCIA.addEventListener("click", () => {
    let a = parseFloat(INPUT_1.value || 0);
    let b = parseFloat(INPUT_2.value || 0);
    let c = potencia(a, b);
    SPAN_RESULTADO.innerHTML = `${c}`;
})

RAIZ.addEventListener("click", () => {
    let a = parseFloat(INPUT_1.value || 0);
    let b = parseFloat(INPUT_2.value || 0);
    let c = raiz(a);
    SPAN_RESULTADO.innerHTML = `${c}`;
})
