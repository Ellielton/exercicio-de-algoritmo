//Dia_ -Faça um programa para leitura de duas notas parciais de um aluno.
    //A mensagem "Aprovado", se a media alcançada for maior ou igual a sete;
    //A mensagem "Aprovado com destinção", se a média for igual a dez;
    //A mensagem "Representa", se a média for menor que sete;
/* 
    inicio
        leia: nota1
        leia: nota2

        media = (nota1 + nota2)/2

        se média >= 10 então escreva: "Aprovado com destinção"
        senão se media >= 7 estão escreva: "Aporvado"
        senão então escreva "Reprovado"
    fim      
 */
    const num1 = prompt("digita a nota1");
    const num2 = prompt("digita a nota2");
    const nota1 =Number(num1)
    const nota2 = Number(num2)
    const media = (nota1 + nota2)/2
    alert(`a media é: ${media}`)
    
    if(media >= 10){
        alert("Aprovado com destinção")
    } else if(media >= 7) { 
        alert("Aprovado")
    } else {
        alert("Reprovado")
    }
// .......................................................................................................14/07/2025    17:30hs
