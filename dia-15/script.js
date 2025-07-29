/*Dia_15 - Faça um programam que peça 3 lados de um trinângulo. O programa deverá informar se os valores podem ser um triângulo. Indique, caso os lados formem um triângulo, se o mesmo é: equilátero, isósceles ou escaleno. Dicas:
    Três lados formam um triângulo quando a soma de quaisquer dos dois lados é maior que o terceiro.

    *Equilátero: Três lados iguais;
    *Isósceles:  Quaisquer dois lados iguais;
    *Escaleno:   Três lados diferentes.
*/
/* 
    inicio
        leia: ladoA
        leia: ladoB
        leia: ladoC

        Se ladoA + ladoB maior ladoC ou ladoA + ladoC maior ladoB ou ladoB + ladoC maior ladoA então
            se ladoA igual ladoB e igual ladoC então
                escreva: "Triângulo equilátero"

            senão se ladoA igual ladoB e ladoA diferente ladoC  e ladoB diferente ladoC ou ladoB igual ladoC e ladoB diferente ladoA e ladoC diferente ladoA ou ladoA igual ladoC e ladoA diferente ladoB e ladoC diferente ladoB então
                escreva: "Triângulo Isósceles"
            
            senão então    
                escreva: "Triângulo escaleno"
        senão então
            escreva: "Os valores informados não formam um triângulço"
    fim
        
 */
const ladoA = parseInt(prompt("Digite o valor 1"));
const ladoB = parseInt(prompt("Digite o valor 2"));
const ladoC = parseInt(prompt("Digite o valor 3"));

if((ladoA + ladoB) > ladoC || (ladoB + ladoC) > ladoA || (ladoA + ladoC) > ladoB ) {
    if(ladoA === ladoB && ladoA === ladoC) {
        alert("Esse triângulo é: Equilátero.");
        
    } else if((ladoA === ladoB && ladoA !== ladoC) || (ladoB === ladoC && ladoB !== ladoA) || (ladoC === ladoA && ladoC !== ladoB)) {
        alert("Esse triângulo é: Isósceles.");

    } else {
        alert("Esse triângulo é: Escaleno.");
    }
} else {
    alert("Os valores informados não formam um triângulo!")
}
// .......................................................................................................21/07/2025    21:28hs
