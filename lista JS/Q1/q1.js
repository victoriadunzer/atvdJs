function calcularDiferenca(){
    let x = parseInt(document.getElementById('numeroX').value);
    let y = parseInt(document.getElementById('numeroY').value);

    let diferenca = x - y;
    console.log(`As variaveis definidas são: ${x} e ${y}.`)
    console.log(`A diferença entre as duas variáveis é: ${diferenca}`);

    document.getElementById('mostrarVariaveis').innerHTML = (`As variaveis definidas são: ${x} e ${y}.`)
    document.getElementById('mostrarDiferenca').innerHTML = (`A diferença entre as duas variáveis é: ${diferenca}`);
}

function somaMultiplica(){
    let x = parseInt(document.getElementById('numeroX').value);
    let y = parseInt(document.getElementById('numeroY').value);

    let xx = 2 * x;
    let yy = 3 * y;
    let diferencaY = xx + yy;

    console.log(`A soma entre o dobro da primeira mais o triplo da segunda é : ${diferencaY}`);
    document.getElementById('mostrarSomaMultiplica').innerHTML = (`A soma entre o dobro da primeira mais o triplo da segunda é : ${diferencaY}`);
}
function multiplicarVariaveis(){
    let x = parseInt(document.getElementById('numeroX').value);
    let y = parseInt(document.getElementById('numeroY').value);

    let mutiplicador= x * y;
    console.log(`A multiplicação das duas variáveis é: ${mutiplicador}.`);

    document.getElementById('mostrarMultiplicacao').innerHTML = (`A multiplicação das duas variáveis é: ${mutiplicador}.`);
}

function mostrarDoMaiorParaOMenor() {
    let x = parseInt(document.getElementById('numeroX').value);
    let y = parseInt(document.getElementById('numeroY').value);

    let maiorNumero = x;
    let menorNumero = y;

    if (y > x) {
        maiorNumero = y;
        menorNumero = x;
    }

    console.log(`O maior número é: ${maiorNumero}. E o menor é: ${menorNumero}.`);

    document.getElementById('showDoMaiorParaOMenor').innerHTML = (`O maior número é: ${maiorNumero}. E o menor é: ${menorNumero}.`);
}
