import { readInput } from '../../utils';

const input = readInput(2023, 1);
const lines = input.split('\n');

function isDigit(char: string) {
  return !isNaN(Number(char));
}

function mapStringDigitToNumber(digitString: string) {
  switch (digitString) {
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

// Time: O(n * k)
// Space: O(1)
function calibrationValuesSum(lines: string[]) {
  let sum = 0;

  for (const line of lines) {
    let calibrationValue = '';

    // searching for a first digit
    for (let i = 0; i < line.length; ++i) {
      const currentChar = line.charAt(i);

      if (isDigit(currentChar)) {
        calibrationValue += currentChar;
        break;
      }
    }

    // searching for a last digit
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

// Time: O(n * k)
// Space: O(1)
function calibrationValuesSumTwo(lines: string[]) {
  let sum = 0;

  for (const line of lines) {
    let calibrationValue = '';

    // searching for a first digit
    for (let i = 0; i < line.length; ++i) {
      const currentChar = line.charAt(i);

      if (isDigit(currentChar)) {
        calibrationValue += currentChar;
        break;
      }

      let right = i + 2;
      let stringDigit = currentChar + line.charAt(i + 1);

      while (right - i + 1 <= 5) {
        stringDigit += line.charAt(right);
        const numberDigit = mapStringDigitToNumber(stringDigit);

        if (numberDigit) {
          calibrationValue += numberDigit;
          break;
        }

        ++right;
      }

      if (calibrationValue.length === 1) {
        break;
      }
    }

    // searching for a last digit
    for (let i = line.length - 1; i >= 0; --i) {
      const currentChar = line.charAt(i);

      if (isDigit(currentChar)) {
        calibrationValue += currentChar;
        break;
      }

      let left = i - 2;
      let stringDigit = line.charAt(i - 1) + currentChar;

      while (i - left + 1 <= 5) {
        stringDigit = line.charAt(left) + stringDigit;
        const numberDigit = mapStringDigitToNumber(stringDigit);

        if (numberDigit) {
          calibrationValue += numberDigit;
          break;
        }

        --left;
      }

      if (calibrationValue.length === 2) {
        break;
      }
    }

    sum += Number(calibrationValue);
  }

  return sum;
}

console.log(calibrationValuesSum(lines));
console.log(calibrationValuesSumTwo(lines));
