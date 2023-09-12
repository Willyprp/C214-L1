function calcularIMC(peso, altura) {
    if (altura === 0) {
      return 'NaN'; // Retorna "NaN" se a altura for igual a zero
    }
  
    const alturaMetros = altura / 100; // Converte altura de centímetros para metros
    return (peso / (alturaMetros * alturaMetros)).toFixed(2); // Calcula o IMC com duas casas decimais
}

function classificaIMC(peso,altura){
    let imc = calcularIMC(peso,altura);
    let classificacao = "";
    if(imc < 18.5){
        classificacao = "Abaixo do peso";
    }
    else if(imc >= 18.5 && imc< 25){
        classificacao = "Peso ideal";
    }
    else if(imc >= 25 && imc < 30){
        classificacao = "Acima do peso";
    }
    else if(imc >=30){
        classificacao = "Obesidade";
    }
    else{
        classificacao = "IMC inválido"
    }
    return classificacao
}

module.exports = { calcularIMC, classificaIMC }; // Exporta as funções calcularIMC e classificaIMC