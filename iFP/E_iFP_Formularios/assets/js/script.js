window.onload = function() {
    /*
    1 - Guardar la etiquera del forulario en una variable
    2.- asignarle a esa variable un evento onsubmit
    3.- Si la validación es correcta devuelvo true y si es incorrecta false
    */

    const FORM = document.querySelector("form");
    FORM.onsubmit = () => {
        const INP_NOM = document.querySelector("#inp-nom");
        const INP_TEL = document.querySelector("#inp-tel");
        let tel = INP_NOM.value;
        let nombre = INP_NOM.value;
        if (nombre.length > 2 && nombre.length < 14 && tel.length == 9) {
            return true;
        } else if (nombre.length > 13) {
            console.log("nombre muy largo")
            return false;
        } else if (tel.length != 9) {
            console.log("Tel longitud erronea")
            return false;
        } else {
            console.log("nombre muy corto")
            return false;
        }

    }
}

// window.onload = () => {
//     //funcion flecha
// }

// window.onload = cargarNombre;
// function cargarNombre () {
// }

// const cargarNombre = () => {
// }




