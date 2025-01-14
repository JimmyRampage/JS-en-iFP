// SELECT INPUTS
const INPUT_FECHA = document.querySelector("#input-fecha");
const INPUT_NOMBRE = document.querySelector("#input-nombre");
const INPUT_APELLIDO = document.querySelector("#input-apellido");
const INPUT_COLOR = document.querySelector("#input-color");
const INPUT_SEXO = document.querySelector("#input-sexo");

// SELECT BOTON
const SUBMIT = document.querySelector("#submit");

// SELECT LISTA
const UL = document.querySelector("ul");

SUBMIT.addEventListener("click", () => {
    // CREANDO LI

    const fecha = INPUT_FECHA.value;
    const nombre = INPUT_NOMBRE.value;
    const apellido = INPUT_APELLIDO.value;
    const color = INPUT_COLOR.value;
    const sexo = INPUT_SEXO.value;

    const LI = document.createElement("li");
    LI.innerHTML = `${fecha} | ${nombre} ${apellido} | <span style="color: ${color};">${color}</span> | ${sexo}`;
    UL.appendChild(LI);

    // OPCIONAL: RESETEAR FORMULARIO
    INPUT_FECHA.value = "";
    INPUT_NOMBRE.value = "";
    INPUT_APELLIDO.value = "";
    INPUT_COLOR.value = "#42f6f9"; // Valor por defecto del color
    INPUT_SEXO.value = "";
});
