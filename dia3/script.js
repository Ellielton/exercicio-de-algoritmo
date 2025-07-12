//Dia_3 - Faça um programa que verifique (Usando if e else) se uma letra digitada é "F" ou "M". Conforme a letra escreva: F-Feminino, M-Masculino, Sexo inválido.

/* 
    inicio
        leia: letra
        se letra igual F então
            escreva: "Feminino"
        senão se letra igual M então 
            escreva: "Masculino"
        senão então
            escreva: "Sevo inválido"
    fim
        
*/
const letra = prompt("Digite qual é o seu sexo")
if (letra.toLowerCase() === "f") {
    alert("FEMININO")
} else if(letra.toLowerCase() === "m") {
    alert("MASCULINO")
} else {
    alert("SEXO INVÁLIDO")
}

// .......................................................................................................12/07/2025    19:00h
