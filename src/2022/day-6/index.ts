import { readInput } from '../../utils';

const rawInput = readInput(2022, 6);

// *, **
const getCharsBeforePacketCount = (buffer: string, packetSize: number) => {
  for (let i = 0; i < buffer.length; ++i) {
    const packet = buffer.slice(i, i + packetSize);
    if (new Set(packet).size === packetSize) {
      return i + packetSize;
    }
  }
  return 0;
};

console.log(getCharsBeforePacketCount(rawInput, 4)); // 1920
console.log(getCharsBeforePacketCount(rawInput, 14)); // 2334
