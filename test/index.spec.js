const assert = require("assert");
const lib = require("../index.js");
const romanToInt = lib.romanToInt;
const intToRoman = lib.intToRoman;


describe("romanToInt()", function() {
  it("Deve retornar o número 14.", () => {
    assert.equal(romanToInt("XIV"), 14);
  });

  it("Deve retornar o número 22.", () => {
    assert.equal(romanToInt("xxii"), 22);
  });

  it("Deve retornar o número 22.", () => {
    assert.equal(romanToInt("ml"), 1050);
  });

  it('Deve retornar erro "Digite o algarismo romano que deseja converter."', () => {
    assert.equal(romanToInt(), "Digite o algarismo romano que deseja converter.");
  });

  it('Deve retornar erro "Digite o algarismo romano que deseja converter."', () => {
    assert.equal(romanToInt(25), "Digite o algarismo romano que deseja converter.");
  });
});

describe("intToRoman()", function() {
  it('Deve retornar a string "XIV"', () => {
    assert.equal(intToRoman(14), "XIV");
  });

  it('Deve retornar a string "MMLXIII"', () => {
    assert.equal(intToRoman(2063), "MMLXIII");
  });

  it('Deve retornar erro "Digite o número que deseja converter."', () => {
    assert.equal(intToRoman(), "Digite o número que deseja converter.");
  });

  it('Deve retornar erro "Digite o número que deseja converter."', () => {
    assert.equal(intToRoman("hello"), "Digite o número que deseja converter.");
  });

  it('Deve retornar erro "Digite o número que deseja converter."', () => {
    assert.equal(intToRoman("XXI"), "Digite o número que deseja converter.");
  });
});
