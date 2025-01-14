// SELECTOR option
const LISTA_OP_1 = document.querySelector("#op-1");

// SELECTOR inputs
const IN_NUM = document.querySelector("#input-numero");
const IN_OPT_1 = document.querySelector("#input-1");
const IN_OPT_2 = document.querySelector("#input-2");

// SELECTOR convertir
const CONVERTIR = document.querySelector("#boton-convertir")

// SELECTOR RESUTALDO
const RESULTADO = document.querySelector("#h2-resultado")

// TASAS Y DATOS
const TASAS_DE_CAMBIO = { "USD": {"USD": 1, "EUR": 0.89, "CLP": 807},
                        "EUR": {"USD": 1.12, "EUR": 1, "CLP": 906},
                        "CLP": {"USD": 0.0012, "EUR": 0.0011, "CLP": 1} };

const CONVERSIONES = Object.keys(TASAS_DE_CAMBIO)

// agregar las opciones
for (let i = 0; i < CONVERSIONES.length; i++) {
    const OPTION = document.createElement(`option`);
    OPTION.value = CONVERSIONES[i];
    OPTION.textContent = CONVERSIONES[i];
    LISTA_OP_1.appendChild(OPTION);
}


CONVERTIR.addEventListener("click", () => {
    const MONTO = parseFloat(IN_NUM.value);
    let res = convertir(MONTO, IN_OPT_1, IN_OPT_2)

    RESULTADO.innerHTML = `${res}`
});

///////////////
// FUNCIONES //
///////////////

function convertir(MONTO, IN_OPT_1, IN_OPT_2) {
    const TASA = TASAS_DE_CAMBIO[IN_OPT_1.value][IN_OPT_2.value];

    const RESULTADO = MONTO * TASA;

    return RESULTADO
}