//Dia_9 - Faça um programa que leia três números e os mostreos em ordem crescente.
/* 
    inicio
        Leia: A
        Leia: B
        Leia: C

        se B > A e B < c então
            escreva: A, B, C

        senão se B > C e A < C então
            escvreva: A, C, B

        senão se B < A e A < C então
            escvreva: B, A, C

        senão se B < C e C < A então
            escvreva: B, C, A

        senão se B > A e A > C
            escvreva: C, A, B
        
        senão então
            escvreva: C, B, A
    fim 
 */
const num1 = parseFloat(prompt("digite o primeiro número"));
const num2 = parseFloat(prompt("digite o segundo número"));
const num3 = parseFloat(prompt("digite o terceiro número"));
if (num2 > num1 && num2 < num3) {
            // a        b     c
    alert(`${num1} ${num2} ${num3}`); // abc

} else if(num2 > num3 && num1 < num3) {
    alert(`${num1} ${num3} ${num2}`); // acb

} else if(num2 < num1 && num1 < num3) {
    alert(`${num2} ${num1} ${num3}`); // bac

} else if(num2 < num3 && num3 < num1){
    alert(`${num2} ${num3} ${num1}`); // bca

    //c a b
} else if(num2 > num1 && num1 > num3) {
    alert(`${num3} ${num1} ${num2}`); // cab

}else {
    
    alert(`${num3} ${num2} ${num1}`); // cba

}
// .......................................................................................................21/07/2025    16:08hs
