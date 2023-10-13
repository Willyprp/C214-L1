const { expect } = require('chai');
const { calcularIMC, classificaIMC } = require('../src/imc');

describe('Calculadora de IMC', () => {

  it('Calculadora deve rodar tranquilo', () => {
    const peso = 80; // 80 kg
    const altura = 180; // 180 cm

    const IMEsperado = (peso / Math.pow(altura / 100, 2)).toFixed(2);
    const IMCCalculado = calcularIMC(peso, altura);

    expect(IMCCalculado).to.equal(IMEsperado);
  });



  it('altura = 0, entrada inadequada', () => {
    const peso = 70; // 70 kg
    const altura = 0; // 0 cm

    const IMCCalculado = calcularIMC(peso, altura);

    expect(IMCCalculado).to.equal('NaN');
  });

  it('Calculadora deve rodar tranquilo', () => {
    const peso = 80; // 80 kg
    const altura = 180; // 180 cm

    const IMEsperado = (peso / Math.pow(altura / 100, 2)).toFixed(2);
    const IMCCalculado = calcularIMC(peso, altura);

    expect(IMCCalculado).to.equal(IMEsperado);
  });

  it('Classificação de Abaixo do Peso', () => {
    const peso = 50; // 80 kg
    const altura = 180; // 180 cm

    const classificacao = classificaIMC(peso, altura);

    expect("Abaixo do peso").to.equal(classificacao);
  });

  it('Classificação Peso ideal', () => {
    const peso = 70; // 80 kg
    const altura = 180; // 180 cm

    const classificacao = classificaIMC(peso, altura);

    expect("Peso ideal").to.equal(classificacao);
  });

  it('Classificação de Acima do Peso', () => {
    const peso = 90; // 80 kg
    const altura = 180; // 180 cm

    const classificacao = classificaIMC(peso, altura);

    expect("Acima do peso").to.equal(classificacao);
  });

  it('Classificação de Obesidade', () => {
    const peso = 120; // 80 kg
    const altura = 180; // 180 cm

    const classificacao = classificaIMC(peso, altura);

    expect("Obesidade").to.equal(classificacao);
  });

  it('IMC inválido', () => {
    const peso = 90; // 80 kg
    const altura = 0; // 180 cm

    const classificacao = classificaIMC(peso, altura);

    expect("IMC inválido").to.equal(classificacao);
  });
});