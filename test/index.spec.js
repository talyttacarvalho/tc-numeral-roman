const assert = require("assert");
const chai = require("chai");
const expect = chai.expect;

const lib = require("../index.js");
const romanToInt = lib.romanToInt;
const intToRoman = lib.intToRoman;


describe("romanToInt()", function () {
  describe("Passado um número romano, retorna um número arábico", function () {
    it("Deve retornar o número 14.", () => {
      assert.equal(romanToInt("XIV"), 14);
    });
  });

  describe("Passado um número romano, retorna um número arábico", function () {
    it("Deve retornar o número 22.", () => {
      assert.equal(romanToInt("xxii"), 22);
    });
  });

  describe("Passado um número romano, retorna um número arábico", function () {
    it("Deve retornar o número 1050.", () => {
      assert.equal(romanToInt("ml"), 1050);
    });
  });

  describe("Quando não hover parâmetro", function () {
    it('Deve retornar erro "Digite o algarismo romano que deseja converter."', () => {
      let emptyPar = () => {lib.romanToInt()};
      expect(emptyPar).to.throw("Digite o algarismo romano que deseja converter.");
    });
  });

  describe("Quando passar parâmetro incorreto", function () {
    it('Deve retornar erro "Digite o algarismo romano que deseja converter."', () => {
      let errorPar = () => {lib.romanToInt(25)};
      expect(errorPar).to.throw("Digite o algarismo romano que deseja converter.");
    });
  });
});

describe("intToRoman()", function () {
  describe("Passado um número arábico, retorna um número romano", function () {
    it('Deve retornar a string "XIV"', () => {
      assert.equal(intToRoman(14), "XIV");
    });
  });

  describe("Passado um número arábico, retorna um número romano", function () {
    it('Deve retornar a string "MMLXIII"', () => {
      assert.equal(intToRoman(2063), "MMLXIII");
    });
  });

  describe("Quando não houver parâmetro", function () {
    it('Deve retornar erro "Digite o número que deseja converter."', () => {
      let emptyPar = () => {lib.intToRoman()};
      expect(emptyPar).to.throw("Digite o número que deseja converter.");
    });
  });

  describe("Quando passar parâmetro incorreto", function () {
    it('Deve retornar erro "Digite o número que deseja converter."', () => {
      let errorPar = () => {lib.intToRoman("XXI")};
      expect(errorPar).to.throw("Digite o número que deseja converter.");
    });
  });
});
