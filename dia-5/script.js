//Dia_ - Faça um programa que leia tres numeros verifique (usando if e else) e mostre o maior deles.
/* 
    inicio
        leia: nu1
        leia: nu2
        leia: nu3

        se n1 > n2 e n1 > n3 então escreva: "n1"
        señao se n2 > n1 e n2 > n3 então escreva: "n2"
        senão então escreva: "n3"

    fim
 */

    const n1 = prompt("digite o primeiro numero.")
    const n2 = prompt("digite o segundo numero.")
    const n3 = prompt("digite o terceiro numero.")
    alert(typeof(n1))

    if(n1 > n2 & n1 > n3) {
        alert(n1)
    } else if( n2 > n1 && n2 > n3){
        alert(n2)
    } else {
        alert(n3)
    }
    
// .......................................................................................................xx/07/2025    xx:xxhs
