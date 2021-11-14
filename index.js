import express from "express";

import { API_BASE_URL, appConfig, POWER_ROUTES } from "./config/app-config.js";
import { chunkUpArray, SplitRequestArray } from "./utils/helper-utils.js";
import { fetchPow } from "./services/data-handler.js";

const app = express();

const port = appConfig.port || 3000;

app.use(express.static("public"));

/**
 * second-power route accepts an array returns API call results[]
 * @returns {JSON<*[]>}
 */
app.get("/second-power", async function (request, response) {
  let numbers = [];
  try {
    numbers = SplitRequestArray(request.query.values);
  } catch (error) {
    response.json("Wrong parameter syntax");
  }
  const poweredNumbers = await fetchSequentially(numbers);
  response.json(poweredNumbers.toString());
});

/**
 * third-power route accepts an array returns API call results[]
 * @returns {JSON<*[]>}
 */
app.get("/third-power", async function (request, response) {
  let numbers = [];
  try {
    numbers = SplitRequestArray(request.query.values);
  } catch (error) {
    response.json("Wrong parameter syntax");
  }
  let numbersChunks = chunkUpArray(numbers);
  const poweredNumbers = [];
  for (let numbersChunk of numbersChunks) {
    poweredNumbers.push(await fetchParallel(numbersChunk));
  }
  response.json(poweredNumbers.toString());
});

/**
 *  Sends Fetch req Sequentially
 * @param numbers array of numbers
 * @returns {Promise<*[]>}
 */
const fetchSequentially = async (numbers) => {
  let poweredNumbers = [];
  let data;
  for (let number of numbers) {
    try {
      data = await fetchPow(API_BASE_URL + POWER_ROUTES.second + number);
      poweredNumbers.push(data);
    } catch (error) {
      console.log(error.message);
    }
  }
  return poweredNumbers;
};
/**
 *
 * @param numbers array of numbers
 * @returns {Promise<String[]>}
 */
const fetchParallel = async (numbers) => {
  try {
    const data = await Promise.all(
      numbers.map((number) =>
        fetchPow(API_BASE_URL + POWER_ROUTES.third + number)
      )
    );
    return data;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
