// utils
const getMostCommonBit = (data: string[], index: number) => {
  const onesCount = data.filter(line => line.charAt(index) === '1').length;
  return onesCount >= data.length / 2 ? '1' : '0';
};

const swapBit = (bit: '1' | '0') => {
  return bit === '1' ? '0' : '1';
};

// *
export const getRatesMultiplication = (data: string[]) => {
  let gammaRate = '';
  let epsilonRate = '';

  for (let i = 0; i < data[0].length; ++i) {
    const mostCommonBit = getMostCommonBit(data, i);

    gammaRate += mostCommonBit;
    epsilonRate += swapBit(mostCommonBit);
  }

  return parseInt(gammaRate, 2) * parseInt(epsilonRate, 2);
};

// **
export const getLifeSupportRating = (data: string[]) => {
  let oxygenRating = data;
  let co2Rating = data;

  for (let i = 0; i < data[0].length && oxygenRating.length > 1; ++i) {
    const mostCommonBit = getMostCommonBit(oxygenRating, i);
    oxygenRating = oxygenRating.filter(el => el.charAt(i) === mostCommonBit);
  }

  for (let i = 0; i < data[0].length && co2Rating.length > 1; ++i) {
    const mostCommonBit = getMostCommonBit(co2Rating, i);
    co2Rating = co2Rating.filter(el => el.charAt(i) !== mostCommonBit);
  }

  return parseInt(oxygenRating[0], 2) * parseInt(co2Rating[0], 2);
};
