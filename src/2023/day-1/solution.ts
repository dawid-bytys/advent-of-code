import { readInput } from '../../utils';

const input = readInput(2023, 1);

function isDigit(char: string) {
  return !isNaN(Number(char));
}

// *
function calibrationValuesSum(input: string) {
  const lines = input.split('\n');
  const calibrationValues: number[] = [];

  for (const line of lines) {
    let digitsCombined = '';

    for (const char of line) {
      if (isDigit(char)) {
        digitsCombined += char;
      }
    }

    calibrationValues.push(Number(digitsCombined.charAt(0) + digitsCombined.charAt(digitsCombined.length - 1)));
  }

  return calibrationValues.reduce((acc, el) => acc + el, 0);
}

// **
function calibrationValuesSumTwo(input: string) {
  const lines = input.split('\n');
  const calibrationValues: number[] = [];
  const digitsMap = new Map<string, string>([
    ['one', '1'],
    ['two', '2'],
    ['three', '3'],
    ['four', '4'],
    ['five', '5'],
    ['six', '6'],
    ['seven', '7'],
    ['eight', '8'],
    ['nine', '9'],
  ]);

  for (const line of lines) {
    let digitsCombined = '';

    for (let i = 0; i < line.length; ++i) {
      const currentChar = line.charAt(i);

      if (isDigit(currentChar)) {
        digitsCombined += currentChar;
      } else {
        let right = i + 2;
        let stringDigit = currentChar + line.charAt(i + 1);

        while (right - i + 1 <= 5) {
          stringDigit += line.charAt(right);
          const digit = digitsMap.get(stringDigit);

          if (digit) {
            digitsCombined += digit;
          }

          ++right;
        }
      }
    }

    calibrationValues.push(Number(digitsCombined.charAt(0) + digitsCombined.charAt(digitsCombined.length - 1)));
  }

  return calibrationValues.reduce((acc, el) => acc + el, 0);
}

console.log(calibrationValuesSum(input));
console.log(calibrationValuesSumTwo(input));
