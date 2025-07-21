//Dia_10 -Faça um programa que pergunte em qual turno você estuda. Peça digitar M -matutino ou V-vespertino ou n-voturno. Imprima a mendagem "Bom dia!", "boa tarde!" "Boa noite!" ou "valor invalido!" conforme o caso.  
/* 
    inicio
        leia: turno

        se turno igual "M" então
            escreva: "Boa dia!"

        senão se turno igual "V" então
            escreva: "Boa tarde!"

        senão se turno igual "N" então
            escreva: "Boa noite!"

        senão então
            escreva: "Valor inválido"
    fim
        
 */
const turno = prompt("Digite qual turno você estuda usando as iniciais 'M', 'V' ou 'N'.").toLocaleLowerCase();

if(turno === "m") {
    alert("Bom dia!");
    
} else if(turno === "v") {
    alert("Boa tarde!");
    
} else if(turno === "n") {
    alert("Boa noite!");
    
} else {
    alert("valor invalido!");

}
// .......................................................................................................21/07/2025    16:42hs
