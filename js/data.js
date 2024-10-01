var dia = new Date().getDate();
var mês = new Date().getMonth();
var ano = new Date().getFullYear();
document.write(`Hoje é dia ${dia}/${mês +1}/${ano}! &nbsp; &nbsp;`);
var diaDaSemana = new Date().getDay();
switch(diaDaSemana){
    case 0:
        document.write('Domingo!');
        break;
    case 1:
        document.write('Segunda-feira!');
        break;
    case 2:
        document.write('Terça-feira!');
        break;
    case 3:
        document.write('Quarta-feira!');
        break;
    case 4:
        document.write('Quinta-feira!');
        break;
    case 5:
        document.write('Sexta-feira!');
        break;
    case 6:
        document.write('Sábado!');
        break;
    default:
        document.write('Valor inválido!');
        break;
}

/*
"use strict";

function exibirDataEDia() {
    const data = new Date();
    const dia = data.getDate();
    const mes = data.getMonth();
    const ano = data.getFullYear();
    const diasDaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    const diaDaSemana = data.getDay();

    const dataFormatada = `Hoje é dia ${dia}/${mes + 1}/${ano}!`;
    const diaFormatado = diasDaSemana[diaDaSemana] + "!";

    // Atualiza um elemento existente na página
    const elementoData = document.getElementById("data"); // Certifique-se de ter um elemento com esse ID
    elementoData.textContent = dataFormatada + " " + diaFormatado;
}

// Chame a função para exibir a data e o dia
exibirDataEDia();

*/
