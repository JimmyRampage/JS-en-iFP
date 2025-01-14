const sumarDigito = document.getElementById('suma');
const restarDigito = document.getElementById('resta');
const resultado = document.getElementById('span-resultado');

let resultado_numero = parseInt(resultado.value) || 0

sumarDigito.addEventListener('click', () => {
    resultado_numero += parseInt(sumarDigito.textContent);
    resultado.innerHTML = resultado_numero
})
restarDigito.addEventListener('click', () => {
    resultado_numero += parseInt(restarDigito.textContent);
    resultado.innerHTML = resultado_numero
})