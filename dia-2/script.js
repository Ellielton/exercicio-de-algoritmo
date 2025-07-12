//Dia_2 - Faça um programa que peça um valor e moste na tela se o valor é positivo ou negativo

/* 
    inicio
        leia: valor
        se valor igual 0 então 
            escreve: "O número informado é: NEUTRO"
        senão se valor > 0 então
            escreve: "O número informado é: POSITIVO"
        senão
            escreve: "O número informado é: NEGATIVO"
    fim
 */

const numero = prompt("Digite um valor");
const valor = Number(numero);

if (valor === 0) {
    alert("O número informado é: NEUTRO");
} else if (valor > 0) {
    alert("O número informado é: POSITIVO");
} else {
    alert("O número informado é: NEGATIVO");
}

// .......................................................................................................11/07/2025   21:33h
