import {
  chunkUpArray,
  MAX_LENGTH_CHUNKS,
  SplitRequestArray,
} from "../utils/helper-utils.js";

let mockArray = [];
let mockString = "[1,2,3,4,5,6,7,8,9,10]";

describe("chunkUpArray tests", () => {
  test(`Array with 1 element returns 1 chunk`, () => {
    mockArray.push(1);
    let expected = Math.ceil(mockArray.length / MAX_LENGTH_CHUNKS);
    let result = chunkUpArray(mockArray);
    expect(result.length).toBe(expected);
  });

  test(`Array with less than ${MAX_LENGTH_CHUNKS} element returns expected number of chunks`, () => {
    mockArray.push(1, 2);
    let expected = Math.ceil(mockArray.length / MAX_LENGTH_CHUNKS);
    let result = chunkUpArray(mockArray);
    expect(result.length).toBe(expected);
  });

  test(`Array with more than ${MAX_LENGTH_CHUNKS} element returns expected number of chunks`, () => {
    for (let i = 0; i < 19; i++) {
      mockArray.push(i);
    }
    let expected = Math.ceil(mockArray.length / MAX_LENGTH_CHUNKS);
    let result = chunkUpArray(mockArray);
    expect(result.length).toBe(expected);
  });

  test(`Array with more than ${MAX_LENGTH_CHUNKS} element returns correct lengths chunks`, () => {
    for (let i = 0; i < 30; i++) {
      mockArray.push(i);
    }
    let result = chunkUpArray(mockArray);
    const allLengthsSame = result.every((chunks) => chunks.length === 10);
    expect(allLengthsSame).toBe(true);
  });
});

describe("splitArray tests", () => {
  test(`String with 10 element returns array with correct amount of element`, () => {
    let result = SplitRequestArray(mockString);
    expect(result.length).toBe(10);
  });

  test(`String with 2 element returns array with correct amount of element`, () => {
    let result = SplitRequestArray("1,1");
    expect(result.length).toBe(2);
  });

  test(`String with 1 element returns array with correct amount of element`, () => {
    let result = SplitRequestArray("1");
    expect(result.length).toBe(1);
  });
});
