export const normalizeData = (filteredData) => {
  const maxValue = Math.max(...filteredData);
  const multiplier = Math.pow(maxValue, -1);
  const normalizedData = filteredData.map(originalValue => originalValue * multiplier);

  return normalizedData;
};
