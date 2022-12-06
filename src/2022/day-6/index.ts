import { readInput } from '../../utils';

const input = readInput(2022, 6);

// *, **
const getCountOfCharsBeforePacket = (buffer: string, packetSize: number) => {
  for (let i = 0; i < buffer.length; ++i) {
    const packet = buffer.slice(i, i + packetSize);
    if (new Set(packet).size === packetSize) {
      return i + packetSize;
    }
  }
  return null;
};

console.log(getCountOfCharsBeforePacket(input, 4)); // 1920
console.log(getCountOfCharsBeforePacket(input, 14)); // 2334
