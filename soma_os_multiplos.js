// PROJETO 7 DO CURSO JS DO DEV APRENDER
// Soma os múltiplos de 3 e de 5


/**************************/
// Define o texto do documento conforme id
/**************************/

function setElementText(id, text) {
    const element = document.getElementById(id);
    return element.innerText = text;
}

/**************************/
// Recebe input do usuário
/**************************/

function recebeInputUsuário(id) {
    const input = document.getElementById(id);
    return input.value;
}

/**************************/
// Insere os múltiplos no array numeros
/**************************/

function verificaMultiplos(limiteSuperior) {
    let numeros = [];
    for (let index1 = 0; index1 <= limiteSuperior; index1++) {
        if (index1 % 3 === 0 & index1 % 5 === 0) {
            numeros.push(index1);
        }
    }
    return numeros;
}

/**************************/
// Soma os números presentes no array
/**************************/

function soma(arrayMultiplos) {
    let total = 0;
    for (let index2 = 0; index2 < arrayMultiplos.length; index2++) {
        total += arrayMultiplos[index2];
    }
    return total
}


/**************************/
// Junta as 2 funções acima 
/**************************/

function tudo(){
   let a = recebeInputUsuário ('inputUser');
   console.log(a);
   let b = verificaMultiplos(a);
   console.log(b);
   let c = soma (b);
   console.log(c);
   let d = setElementText('somaDosMultiplos',c);
   console.log(d);
   return d;
}


/**************************/
/*


let a = verificaMultiplos(j);

let b = soma(a);

//setElementText('somaDosMultiplos', b);

c = setElementText('somaDosMultiplos',b);

console.log(c);
*/

// usar evento on click 
// fixar cor de fundo do botão
// alterar cor do botão on