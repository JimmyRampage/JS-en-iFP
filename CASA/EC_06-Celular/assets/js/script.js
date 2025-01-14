import { Celular } from "./Celular.js";
// const Celular = require('./Celular.js');
//////////////////////
/// SELECCION HTML ///
//////////////////////

// PANTALLA //
//const UL_ = document.querySelector("listados");

// BOTONES //
const ON = document.querySelector("#boton-on");
const OFF = document.querySelector("#boton-off");
const INFO = document.querySelector("#boton-info")
const PIC = document.querySelector("#boton-pic")
const VPIC = document.querySelector("#boton-vpic")
const SSMS = document.querySelector("#boton-ssms")
const VSMS = document.querySelector("#boton-vsms")
const INAPP = document.querySelector("#boton-inapp")
const VAPP = document.querySelector("#boton-vapp")


/// CLASE CELULAR ///

const miCelulitico = new Celular("Apple", "iPhone 13", 1234, 256);

//

// AGREGANDO FUNCIONES A LOS BOTONES //

ON.addEventListener("click", () => {
    console.log(miCelulitico.powerOn());
})

OFF.addEventListener("click", () => {
    console.log(miCelulitico.powerOff());
})

INFO.addEventListener("click", () => {
    console.log(miCelulitico.info());
})

PIC.addEventListener("click", () => {
    if (miCelulitico.power) {
        let foto = prompt("Describe la foto");
        console.log(miCelulitico.fotografiar(foto));
    } else {
        console.log("apagado...")
    }
})

VPIC.addEventListener("click", () => {
    if (miCelulitico.power) {
        let fotos = miCelulitico.verFotografias()
        if (fotos.length != 0) {
            for (let i = 0; i < fotos.length; i++) {
                console.log(fotos[i])
            }
        } else {
            console.log("No hay fotos...")
        }
    } else {
        console.log("Celular apagado...")
    }
})

SSMS.addEventListener("click", () => )