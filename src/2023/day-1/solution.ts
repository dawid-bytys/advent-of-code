import { readInput } from '../../utils';

const input = readInput(2023, 1);

function isDigit(char: string) {
  return !isNaN(Number(char));
}

function mapStringDigitToNumber(digitString: string) {
  switch (digitString.toLowerCase()) {
    case 'one':
      return '1';
    case 'two':
      return '2';
    case 'three':
      return '3';
    case 'four':
      return '4';
    case 'five':
      return '5';
    case 'six':
      return '6';
    case 'seven':
      return '7';
    case 'eight':
      return '8';
    case 'nine':
      return '9';
    default:
      return undefined;
  }
}

// Time: O(n^2)
// Space: O(n)
function calibrationValuesSum(input: string) {
  const lines = input.split('\n');
  let sum = 0;

  for (const line of lines) {
    let calibrationValue = '';

    for (let i = 0; i < line.length; ++i) {
      const currentChar = line.charAt(i);

      if (isDigit(currentChar)) {
        calibrationValue += currentChar;
        break;
      }
    }

    for (let i = line.length - 1; i >= 0; --i) {
      const currentChar = line.charAt(i);

      if (isDigit(currentChar)) {
        calibrationValue += currentChar;
        break;
      }
    }

    sum += Number(calibrationValue);
  }

  return sum;
}

// Time: O(n^2)
// Space: O(n)
function calibrationValuesSumTwo(input: string) {
  const lines = input.split('\n');
  let sum = 0;

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
          const numberDigit = mapStringDigitToNumber(stringDigit);

          if (numberDigit) {
            digitsCombined += numberDigit;
          }

          ++right;
        }
      }
    }

    sum += Number(digitsCombined.charAt(0) + digitsCombined.charAt(digitsCombined.length - 1));
  }

  return sum;
}

console.log(calibrationValuesSum(input));
console.log(calibrationValuesSumTwo(input));
