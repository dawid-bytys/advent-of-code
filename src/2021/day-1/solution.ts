// O(n) structurally *
export const countIncreasesStructurally = (data: number[]) => {
  let count = 0;

  for (let i = 0; i < data.length - 1; i++) {
    if (data[i] < data[i + 1]) {
      count++;
    }
  }

  return count;
};

// O(n) functionally *
export const countIncreasesFunctionally = (data: number[]) => {
  return data.filter((_, i, arr) => arr[i + 1] > arr[i]).length;
};

// O(n) functionally **
export const countTripletsIncreases = (data: number[]) => {
  return data
    .map((_, i, arr) => arr[i] + arr[i + 1] + arr[i + 2])
    .filter((_, i, arr) => arr[i + 1] > arr[i]).length;
};
