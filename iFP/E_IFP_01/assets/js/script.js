function cambio(){
    const A = document.querySelector('#op-1').value
    const B = document.querySelector('#operacion').value
    const C = document.querySelector('#op-2').value
    document.querySelector('#resultado').innerHTML = eval(A + B + C)
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#op-1').addEventListener('change', cambio);
    document.querySelector('#operacion').addEventListener('change', cambio);
    document.querySelector('#op-2').addEventListener('change', cambio);
});