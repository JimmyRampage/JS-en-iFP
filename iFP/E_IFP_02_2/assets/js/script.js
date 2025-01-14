const divSuma = document.getElementById('suma')
const divResta = document.getElementById('resta')

document.addEventListener('DOMContentLoaded', () => {
    divSuma.addEventListener('click', () => cambio(divSuma));
    divResta.addEventListener('click', () => cambio(divResta));
})

function cambio(origen){
    let a = parseInt(document.getElementById('span-resultado').innerHTML);
    let b = document.querySelector('#' + origen.id + ' p').innerHTML;
    document.getElementById('span-resultado').innerHTML = eval(a + b)
}