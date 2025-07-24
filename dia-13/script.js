//Dia_13 Fácil - Faça um programa que leia um número e exibe o dia correspondente da semana.(1-Domingo, 2-Segunda, etc) se digitar outro valor deve aparecer na tela "valor inválido".
/* 
    inicio
        leia: numDia
        se numDia igual 1 então
            escreva: "Domingo"

        senão se numDia igual 2 então
            escreva: "Segunda-feira"

        senão se numDia igual 3 então
            escreva: "Terça-feira"

        senão se numDia igual 4 então
            escreva: "Quarta-feira"

        senão se numDia igual 5 então
            escreva: "Quinta-feira"
            
        senão se numDia igual 6 então
            escreva: "Sexta-feira"

        senão se numDia igual 7 então
            escreva: "Sabado"
        senão então
            escreva: "valor inválido!"
    fim
            
 */

    const numDia = parseInt(prompt("Digite um valor!"));
    if(numDia === 1) {
        alert("Dominigo");

    } else if(numDia === 2) {
        alert("Segunda-feira");

    } else if(numDia === 3) {
        alert("Terça-feira");

    } else if(numDia === 4) {
        alert("Quarta-feira");

    } else if(numDia === 5) {
        alert("Quinta-feira");

    } else if(numDia === 6) {
        alert("Sexta-feira");

    } else if(numDia === 7) {
        alert("Sabado");
    } else {
        alert("Valor inváldo!");
    }
// .......................................................................................................24/07/2025    20:10hs
