const SAMPLES = 500;

export const filterData = (audioBuffer) => {
  const rawData = audioBuffer.getChannelData(0);
  const blockSize = Math.floor(rawData.length / SAMPLES);
  const filteredData = [];

  for (let i = 0; i < SAMPLES; i++) {
    const blockStart = blockSize * i;
    let sum = 0;
    for (let j = 0; j < blockSize; j++) {
      sum += Math.abs(rawData[blockStart + j]);
    }
    filteredData.push(sum / blockSize);
  }

  return filteredData;
};
