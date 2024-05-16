function calcularINSS(salarioBruto) {
    let taxaINSS = 0.08; 
    return salarioBruto * taxaINSS;
}

function calcularSalarioLiquido(salarioBruto, descontoINSS) {
    return salarioBruto - descontoINSS;
}

function calcularFolhaPagamento() {

    let nomeFuncionario = (document.getElementById('nomeFuncionario').value);
    let salarioBruto = parseFloat(document.getElementById('salarioBruto').value);

    let descontoINSS = calcularINSS(salarioBruto);
    let salarioLiquido = calcularSalarioLiquido(salarioBruto, descontoINSS);

    console.log(`Nome do Funcionário: ${nomeFuncionario}`);
    console.log(`Salário bruto: R$${salarioBruto.toFixed(2)}`);
    console.log(`Valor do INSS: R$${descontoINSS.toFixed(2)}`);
    console.log(`Salário líquido: R$${salarioLiquido.toFixed(2)}`);

    document.getElementById('mostrarNome').innerHTML = (`O nome do funcionário é: ${nomeFuncionario}`);
    document.getElementById('mostrarSB').innerHTML = (`O seu salario bruto é: ${salarioBruto.toFixed(2)}`);
    document.getElementById('mostrarINSS').innerHTML = (`O valor do INSS foi de: ${descontoINSS.toFixed(2)}`);
    document.getElementById('mostrarSL').innerHTML = (`O valor do salário líquido é: ${salarioLiquido.toFixed(2)}`);
}
calcularFolhaPagamento();

function calcularSalario(){
    let salarioBruto = parseFloat(document.getElementById('salarioBruto').value);

    if(salarioBruto <= 1000.00){
        let valorINSS = salarioBruto * 0.08;
        let taxaINSS = '8%';
        let salarioLiquido = salarioBruto + valorINSS;
    }else if(salarioBruto > 1000 && salarioBruto <= 1500){
        let valorINSS = salarioBruto * 0.085;
        let taxaINSS = '8.5%';
        let salarioLiquido = salarioBruto + valorINSS;
    }else{
        let valorINSS = salarioBruto * 0.09;
        let taxaINSS = '9%';
        let salarioLiquido = salarioBruto + valorINSS;

        console.log(`Seu salario é de: ${salarioBruto}. E a taxa de descomto é: ${salarioLiquido}`)

        document.getElementById('mostrarSB').innerHTML = (`O seu salario bruto é: ${salarioBruto.toFixed(2)}`);
        document.getElementById('mostrarTD').innerHTML = (`O seu desconto foi de: ${salarioLiquidoLiquido.toFixed(2)}`);
    }
}