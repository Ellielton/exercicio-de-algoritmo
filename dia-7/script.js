//Dia_ - Faça um programa que leia três números, verifique (usando IF e else) e mostre o maior e o menor deles;
/* 
    inicio
        leia:valor1
        leia:valor2
        leia:valor3

        se valor1 maior valor2 ou valor3 emntão escreva: "valor1 maior"
        senão então escreva: "valor1 menor";
        
        se valor2 maior valor1 ou valor3 escreva: "valor2 maior"
        senão então escreva: "valor2 menor";

        se valor3 maior valor1 ou valor2 escreva: "valor3 maior"
        senão então escreva: "valor3 menor";
    fim
 */
alert("Digite apenas números inteiros!");
const v1 = parseInt(prompt('Digite o valor1'));
const v2 = parseInt(prompt('Digite o valor2'));
const v3 = parseInt(prompt('Digite o valor3'));

if(v1 > v2 && v1 > v3) {
    alert("maior: " + v1);

} else if(v2 > v1 && v2 > v3){
    alert("maior: " + v2);

} else if(v3 > v1 && v3 > v2) {
    alert("maior: " + v3);
}

if(v1 < v2 && v1 < v3) {
    alert("menor: " + v1);

}else if(v2 < v1 && v2 < v3) {
    alert("menor: " + v2);

} else if(v3 < v1 && v3 < v2) {
    alert("menor: " + v3);
}

// .......................................................................................................16/07/2025   20:17hs
