const getMostCommonBit = (data: string[], index: number) => {
  let zero = 0;
  let one = 0;

  for (const line of data) {
    if (line.charAt(index) === '1') one++;
    else zero++;
  }

  return one >= zero ? '1' : '0';
};

const swapBit = (bit: '1' | '0') => {
  return bit === '1' ? '0' : '1';
};

// *
export const ratesMultiplication = (data: string[]) => {
  let gammaRate = '';
  let epsilonRate = '';

  for (let i = 0; i < data[0].length; i++) {
    const mostCommonBit = getMostCommonBit(data, i);

    gammaRate += mostCommonBit;
    epsilonRate += swapBit(mostCommonBit);
  }

  return parseInt(gammaRate, 2) * parseInt(epsilonRate, 2);
};

// **
export const determineLifeSupportRating = (data: string[]) => {
  let [oxygenRating, co2Rating] = [data, data];

  for (let i = 0; i < data[0].length && oxygenRating.length > 1; i++) {
    const mostCommonBit = getMostCommonBit(oxygenRating, i);
    oxygenRating = oxygenRating.filter(el => el.charAt(i) === mostCommonBit);
  }

  for (let i = 0; i < data[0].length && co2Rating.length > 1; i++) {
    const mostCommonBit = getMostCommonBit(co2Rating, i);
    co2Rating = co2Rating.filter(el => el.charAt(i) !== mostCommonBit);
  }

  return parseInt(oxygenRating[0], 2) * parseInt(co2Rating[0], 2);
};
