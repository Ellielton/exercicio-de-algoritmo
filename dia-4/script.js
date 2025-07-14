//Dia_1 - Faça um algoritmo que peça dois números e verifique (Usando if e else) e imprima o maior deles.

/* 
    inicio
        leia: letra
        se letra igual "a" ou letra igual "e" ou letra igual "i" ou letra igual "o" ou letra igual "u" então 
            escreve: "vogal"
        senão então
            escreve: "consoante"
    fim
        
 */
//entrada de dados
const letraInformada = prompt("digite uma letra");
const letra = letraInformada.toLowerCase()

//processamento
if(letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
    //saida
    alert("Vogal");

} else {
    //saida
    alert("Consoante");
}

//obs.: se digitar um numero a saida é consoante.
// .......................................................................................................13/07/2025    23:15h
