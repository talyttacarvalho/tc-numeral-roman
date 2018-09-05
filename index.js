const roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
const nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

function romanToInt(algRoman) {
  try {
    isValidAlgRoman(algRoman);
    algRoman = algRoman.toUpperCase();
    let result = 0;
    for (let num in nums) {
      while (algRoman.indexOf(roman[num]) === 0) {
        result += nums[num];
        algRoman = algRoman.replace(roman[num], "");
      }
    }
    return result;
  } catch (error) {
    return error.message;
  }
}

function intToRoman(num) {
  try {
    isValidNum(num);
    let result = "";
    for (let i in nums) {
      while (num % nums[i] < num) {
        result += roman[i];
        num -= nums[i];
      }
    }
    return result;
  } catch (error) {
    return error.message;
  }
}

function isValidAlgRoman(algRoman) {
  if (!algRoman) {
    throw new Error("Digite o algarismo romano que deseja converter.");
  } else if (typeof algRoman !== "string") {
    throw new Error("Digite o algarismo romano que deseja converter.");
  }
}

function isValidNum(num) {
  if (!num) {
    throw new Error("Digite o número que deseja converter.");
  } else if (typeof num !== "number") {
    throw new Error("Digite o número que deseja converter.");
}
}

module.exports.intToRoman = intToRoman;
module.exports.romanToInt = romanToInt;
