/*Dia_12 - Facã um programa para calculo de uma de pagamento, sabendo que os descontos são do imposto de renda, que  depende do salário bruto (conforme a tabela a baixo) e 3% para o sindicato e que o FGTS corresponde  11% do salário bruto, mas não é descontado (é a empresa que deposita).
O salário líquido corresponde ao saláriobruto menos os descontos. O programama deverá pedir ao usuário o valor da sua hora e a quantidade de horas trabalhadas no mês.
    a-Desconto do IR;
    b-salário bruto até R$900 (inclusive) -isento;
    c-salário bruto ade R$1500,00 (inclusive) -desconto de 5%;
    d-salário bruto até R$2500,00 (inclusive) -desconto de 10%;
    -salário bruto acima de R$2500,00 (inclusive) desconto de -20%

Imprima na tela as informações, dispostas conforme o exemplo abaixo, no exemplo valor da hota é 5 e a quantidade de horas é 220hs
    salario bruto(5*220): R$1100,00
              (-)IR (5%): R$55,00
           (-)INSS (10%): R$110,00
               FGTS(11%): R$121,00
       total de desconto: R$165,00
         salário líquido: R$935,00
*/
/* 
    inicio
        leia: valorHora
        leia: horaMes

        salarioBruto = valorHora * horaMes
        se salarioBruto menor 900,00 então
            escreva: "isento"
        senão se salarioBruto maior 900,00 e menor igual 1500 então
            ir = 5%;
            inss = 10%
            fgts = 11%
            totalDesconto = ir + inss
            salarioLiquido = salarioBruto - totalDesconto

        senão se salariBruto maior 1500,00 e menor igual 2500,00 então            
            ir = 10%;
            inss = 10%
            fgts = 11%
            totalDesconto = ir + inss
            salarioLiquido = salarioBruto - totalDesconto

        senão então
            ir = 20%;
            inss = 10%
            fgts = 11%
            totalDesconto = ir + inss
            salarioLiquido = salarioBruto - totalDesconto
        
        escreva: ir + inss+ fgts+ totalDesconto+ salarioLiquido;
    fim
        
 */
const valorHora = parseFloat(prompt("Digite o valor da sua hora trabalhada."));
const horaMes = parseInt(prompt("Digite quantidade de horas trabalhados no mês."));
const salarioBruto = valorHora * horaMes;
let ir = null;
let inss = 0.10;
let fgts = 0.11;


if(salarioBruto <= 900.00) {
alert("Você é isento de pagar imposto de renda.");
} else if(salarioBruto > 900.00 && salarioBruto <= 1500.00) {
    ir = 0.05;
    inss = 0.10;
    fgts = 0.11;
    let valorIr = salarioBruto * ir;
    let valorInss = salarioBruto * inss;
    let valorFgts = salarioBruto * fgts;
    
    let totalDesconto = valorIr + valorInss;
    let salarioLiquido = salarioBruto - totalDesconto;

    alert(`Seu salário bruto foi: R$${salarioBruto.toFixed(2)}, foram descontados: ${ir}% de IR = R$${valorIr.toFixed(2)}, ${inss}%  de INSS = R$${valorInss.toFixed(2)} totalizando R$${totalDesconto.toFixed(2)} de desconto. O valor do deposito de FGTS é de: R$${valorFgts.toFixed(2)} e o seu salário líquido é: R$${salarioLiquido} este mês.`);

} else if(salarioBruto >1500.00 && salarioBruto <= 2500.00) {
    ir = 0.10;
    inss = 0.10;
    fgts = 0.11;
    let valorIr = salarioBruto * ir;
    let valorInss = salarioBruto * inss;
    let valorFgts = salarioBruto * fgts;
    
    let totalDesconto = valorIr + valorInss;
    let salarioLiquido = salarioBruto - totalDesconto;

    alert(`Seu salário bruto foi: R$${salarioBruto.toFixed(2)}, foram descontados: ${ir}% de IR = R$${valorIr.toFixed(2)}, ${inss}%  de INSS = R$${valorInss.toFixed(2)} totalizando R$${totalDesconto.toFixed(2)} de desconto. O valor do deposito de FGTS é de: R$${valorFgts.toFixed(2)} e o seu salário líquido é: R$${salarioLiquido} este mês.`);

} else {
    ir = 0.20;
    inss = 0.10;
    fgts = 0.11;
    let valorIr = salarioBruto * ir;
    let valorInss = salarioBruto * inss;
    let valorFgts = salarioBruto * fgts;
    
    let totalDesconto = valorIr + valorInss;
    let salarioLiquido = salarioBruto - totalDesconto;

    alert(`Seu salário bruto foi: R$${salarioBruto.toFixed(2)}, foram descontados: ${ir}% de IR = R$${valorIr.toFixed(2)}, ${inss}%  de INSS = R$${valorInss.toFixed(2)} totalizando R$${totalDesconto.toFixed(2)} de desconto. O valor do deposito de FGTS é de: R$${valorFgts.toFixed(2)} e o seu salário líquido é: R$${salarioLiquido.toFixed(2)} este mês.`);
}

// .......................................................................................................23/07/2025    20:16hs
