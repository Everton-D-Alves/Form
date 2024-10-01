// Função hora certa:
function horaCerta(){
    const naoEhNulo = document.getElementById("horas");
    const data = new Date();
    // padStart: nº 2: comprimento total. String 0: string a ser preenchida.
    const hora = data.getHours().toString().padStart(2, '0');
    const minuto = data.getMinutes().toString().padStart(2, '0');
    const segundo = data.getSeconds().toString().padStart(2, '0');
    naoEhNulo.textContent = `${hora}:${minuto}:${segundo}`
}
setInterval(horaCerta, 1000);
horaCerta();
