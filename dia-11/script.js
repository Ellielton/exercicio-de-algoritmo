/* 
Dia_11 - As organizações CSM resolveram dar um aumento de salário aos seus colaboradores e lhe contrataram para desenvolver o programa que calculará os reajustes.

    * A) Faça um programa que recebe o salário do colaborador e o reajuste segundo o seguinte critério, baseado no salário  atual;
    * B) Salários até R$280,00 (incluido): aumento de 20%;
    * C) Salários entre R$280,00 e R$700,00: aumento de 15%;
    * D) Salários entre R$700,00 e R$1.500,00: aumento de 10%;
    * D) Salários de R$1.500,00 em diante: aumento de 5%;
    
        Apos o aumento ser realizado; informe na tela:
            a) O salário antes do reajuste; 
            b) O percentual de aumento aplicado;
            c) O valor do aumento;
            d) O novo salário, após o aumento.
*/

/* 
    inicio
    leia: salário
    leia: percentual
    leia: aumento
    leia: novoSalário
    leia: mensagem = 

    se salário menor igual 280,00 então 
        percentual = 0,20
        aumento = salario * percentual
        novoSalario = salario + aumento

        escreva: "O seu salário inicial de: +salario+ teve reajuste de: +percentual+ e aumentou: +aumento+ agora você receberá: +novoSalario+"

    senão se salário maior 280,00 e menor igual 700,00 então
        percentual = 0,15
        aumento = salario * percentual
        novoSalario = salario + aumento

        escreva: "O seu salário inicial de: +salario+ teve reajuste de: +percentual+ e aumentou: +aumento+ agora você receberá: +novoSalario+"

    senão se salário maior 700,00 e menor igual a 1500,00 então
        percentual = 0,10
        aumento = salario * percentual
        novoSalario = salario + aumento

        escreva: "O seu salário inicial de: +salario+ teve reajuste de: +percentual+ e aumentou: +aumento+ agora você receberá: +novoSalario+"

    senão então
        percentual = 0,5
        aumento = salario * percentual
        novoSalario = salario + aumento

        escreva: "O seu salário inicial de: +salario+ teve reajuste de: +percentual+ e aumentou: +aumento+ agora você receberá: +novoSalario+"

    fim
*/

let salario = parseFloat(prompt("Informe seu salário atual e receberá um aumento!"));
let percentual;
let aumento;
let novoSalario;

if(salario <= 280.00) {
    percentual = 0.2;
    aumento = (salario * percentual);
    novoSalario = (salario + aumento);

    alert(`O seu salário inicial de: R$${salario.toFixed(2)} teve reajuste de: ${percentual.toFixed(2)}% e aumentou: R$${aumento.toFixed(2)} agora você receberá:
    R$${novoSalario.toFixed(2)}.`);

} else if( salario > 280.00 && salario <= 700.00) {
    percentual = 0.15;
    aumento = (salario * percentual);
    novoSalario = (salario + aumento);
    
    alert(`O seu salário inicial de: R$${salario.toFixed(2)} teve reajuste de: ${percentual.toFixed(2)}% e aumentou: R$${aumento.toFixed(2)} agora você receberá:
    R$${novoSalario.toFixed(2)}.`);
   
}else if (salario > 700.00 && salario <= 1500.00) {
    percentual = 0.10;
    aumento = (salario * percentual);
    novoSalario = (salario + aumento);

    alert(`O seu salário inicial de: R$${salario.toFixed(2)} teve reajuste de: ${percentual.toFixed(2)}% e aumentou: R$${aumento.toFixed(2)} agora você receberá:
    R$${novoSalario.toFixed(2)}.`);

} else {
    percentual = 0.5;
    aumento = (salario * percentual);
    novoSalario = (salario + aumento);
    
    alert(`O seu salário inicial de: R$${salario.toFixed(2)} teve reajuste de: ${percentual}% e aumentou: R$${aumento.toFixed(2)} agora você receberá: R$${novoSalario.toFixed(2)}.`);

}

// .......................................................................................................23/07/2025    00:31hs
