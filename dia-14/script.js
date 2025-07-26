/*Dia_14 - Faça um programa que lê as duas notas parciais obtidas por um aluno numa disciplina ao longo de um semestre, e calcule a sua média. A atribuição de conceitos obedece á tabela abaixo:
                meia de aprovamento:        conceito:
                    entre 9.0 e 10.0 -------A
                    entre 7.5 e 9.0         B
                    entre 6.0 e 7.5 ----------- C
                    entre 4.0 e 6.0             D
                    entre 4.0 e 0.0  ---------- E
*/
/* 
    inicio
        leia: nota1
        leia: nota2
        leia: conceito
        media= (nota1 + nota2)/2
        se media maior 9.0 e menor igual 10.0 então
            conceito = A

        senão se media maior 7.5 e menor igual 9.0 então
            conceito = B
        senão se media maior 6.0 e menor igual 7.5 então
            conceito = C
            
        senão se media maior 4.0 e menor igual 6.0 então
            conceito = D

        senão se media menor igual 4.0 e igual 0 então
        conceaito = E
    fim
        
 */
const nota1 = parseFloat(prompt("Digite a primeira nota."));
const nota2 = parseFloat(prompt("Digite a segunda nota."));

const media = ((nota1 + nota2) /2).toFixed(2)

if(media > 9.0 && media <= 10.0) {
    console.log("A");

} else if( media > 7.5 && media <= 9.0) {
    alert("B");
    
} else if( media > 6.0 && media <= 7.5) {
    alert("C");

} else if( media > 4.0 && media <= 6.0) {
    alert("D");

} else if( media <= 4.0 || media === 0) {
    alert("E");
}
// .......................................................................................................25/07/2025    22:33hs
