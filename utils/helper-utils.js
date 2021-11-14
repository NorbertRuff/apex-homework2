const MAX_LENGTH_CHUNKS = 10;

/**
 * Chunks up @param numbers array to max sizes of MAX_LENGTH_CHUNKS
 * @param numbers array
 * @returns {*[]}
 */
export const chunkUpArray = (numbers) => {
  let numbersChunks = [];
  let removed = [];
  let iterLength = numbers.length / MAX_LENGTH_CHUNKS;
  for (let i = 0; i <= iterLength; i++) {
    removed = numbers.splice(0, MAX_LENGTH_CHUNKS);
    numbersChunks.push(removed);
  }
  return numbersChunks;
};

/**
 * Split Request query Array
 * @param stringArray
 * @returns {*|string[]}
 * @constructor
 */
export const SplitRequestArray = (stringArray) => {
  return stringArray.split(",");
};
