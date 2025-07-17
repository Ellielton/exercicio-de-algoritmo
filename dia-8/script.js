//Dia_ - Faça um programa que pergunte o preço de três produtos e informe qual produto você deve comprar, sabendo que a decisão é sempre o mais barato. 
/* 
    inicio
        leia: p1
        leia: p2
        leia: p3
        leia: barato        

        se p1 menor p2 e p3 estão barato = p1
        senão se p2 menor p1 e p2 estão  barato = p2
        senão barato = p3

        escreva: ba
    fim
        
 */
const p1 = parseFloat(prompt("Digite o valor do priemeiro produto."));
const p2 = parseFloat(prompt("Digite o valor do segundo produto."));
const p3 = parseFloat(prompt("Digite o valor do terceiro produto."));
let barato = null;

if(p1 < p2 && p1 < p3) {
    barato = p1;
} else if(p2 < p1 && p2 <p3) {
    barato = p2;
} else {
    barato = p3;
}

alert("O produto mais barato informado é: R$" + barato +".")
// .......................................................................................................xx/07/2025    xx:xxhs
