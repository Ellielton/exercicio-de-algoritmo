//Dia_1 - Faça um algoritmo que peça dois números e verifique (Usando if e else) e imprima o maior deles.

/* 
    inicio
        leia: num1
        leia: num2
        se num1 = num2 então 
            escreve: "Os números informados são iguais!"
        senão se num1 > num2 então
            escreve: "O maior número informado foi num1"
        senão
            escreve: "O maior número informado foi num2"
    fim
        
 */
//entrada de dados
const num1 = parseInt(prompt("digite um número!"));
const num2 = parseInt(prompt("digite outro número!"));

//processamento
if(num1 === num2) {
    //saida
    alert("Os números informados são iguais!!!");

} else if (num1 > num2) {
    //saida
    alert("O número maior informado foi: " + num1);

} else {
    //saida
    alert("O número maior informado foi: " + num2);
}

/*
    Identifique possíveis falhas no algoritmo;
    Deixe o código mais otimizável;
    Cria uma interface mais aprimorada;
        
 */

// .......................................................................................................10/07/2025    00:05h
