window.onload = () => {
  console.log("I live!");
  const SEQUENTIAL_ENDPOINT_URL = "http://localhost:3000/second-power?values=";
  const PARALLEL_ENDPOINT_URL = "http://localhost:3000/third-power?values=";

  const parallelFireButton = document.getElementById("parallel-fire-button");
  const sequentialFireButton = document.getElementById(
    "sequential-fire-button"
  );

  let sequentialRandomInput = document.getElementById("sequential-num-input");
  let parallelRandomInput = document.getElementById("parallel-num-input");

  let sequentialRandomNumberContainer = document.getElementById(
    "sequential-random-container"
  );
  let parallelRandomNumberContainer = document.getElementById(
    "parallel-random-container"
  );

  let sequentialResultContainer = document.getElementById(
    "sequential-result-container"
  );
  let parallelResultContainer = document.getElementById(
    "parallel-result-container"
  );

  /**
   * Returns a random number between min (inclusive) and max (exclusive)
   */
  const getRandomArbitrary = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  /**
   * generates random Integers
   * @param count
   * @returns {*[]}
   */
  const generateRandomIntegers = (count) => {
    let randomNumbers = [];
    for (let i = 0; i < count; i++) {
      randomNumbers.push(getRandomArbitrary(0, 100));
    }
    return randomNumbers;
  };

  /**
   * Prints random numbers to correct container
   * @param resultContainer
   * @param randomNumbers
   */
  const printRandomNumbers = (resultContainer, randomNumbers) => {
    resultContainer.innerHTML = "Random numbers:";
    for (const randomNumber of randomNumbers) {
      resultContainer.insertAdjacentHTML(
        "beforeend",
        `
            <span> ${randomNumber}, </span>`
      );
    }
    resultContainer.insertAdjacentHTML(
      "beforeend",
      `<br><button class="fire-button">Fetch</button><br>`
    );
  };

  /**
   * Prints fetch results to result container
   * @param jsonResult
   * @param container
   */
  function printJsonResult(jsonResult, container) {
    container.innerHTML = "Results:";
    let resultArray = jsonResult.split(",");
    for (const jsonResultElement of resultArray) {
      if (jsonResultElement === "rejected") {
        container.insertAdjacentHTML(
          "beforeend",
          `<span class="error">${jsonResultElement}, </span>`
        );
      } else {
        container.insertAdjacentHTML(
          "beforeend",
          `<span>${jsonResultElement}, </span>`
        );
      }
    }
  }

  /**
   * Fetches endpoint with query string returns results
   * @param endpoint
   * @param numbers
   */
  const fetchPowerNumbers = async (endpoint, numbers) => {
    const url = createQueryString(endpoint, numbers);
    console.log(url);
    try {
      let fetchResult = await fetch(url);
      return await fetchResult.json();
    } catch (e) {
      console.error(e.message);
    }
  };

  /**
   * Creates query string from array
   * @param endpoint
   * @param numbers
   * @returns {*}
   */
  const createQueryString = (endpoint, numbers) => {
    return (
      endpoint + numbers.map((value) => encodeURIComponent(value)).join(",")
    );
  };

  sequentialFireButton.addEventListener("click", () => {
    if (sequentialRandomInput.value) {
      let randomNumbers = generateRandomIntegers(sequentialRandomInput.value);
      printRandomNumbers(sequentialRandomNumberContainer, randomNumbers);

      let sequentialFetchButton =
        sequentialRandomNumberContainer.querySelector(".fire-button");

      sequentialFetchButton.addEventListener("click", async () => {
        let jsonResult = await fetchPowerNumbers(
          SEQUENTIAL_ENDPOINT_URL,
          randomNumbers
        );
        console.log(jsonResult);
        printJsonResult(jsonResult, sequentialResultContainer);
      });
    }
  });

  parallelFireButton.addEventListener("click", () => {
    if (parallelRandomInput.value) {
      let randomNumbers = generateRandomIntegers(parallelRandomInput.value);
      printRandomNumbers(parallelRandomNumberContainer, randomNumbers);
      let parallelFetchButton =
        parallelRandomNumberContainer.querySelector(".fire-button");
      parallelFetchButton.addEventListener("click", async () => {
        let jsonResult = await fetchPowerNumbers(
          PARALLEL_ENDPOINT_URL,
          randomNumbers
        );
        console.log(jsonResult);
        printJsonResult(jsonResult, parallelResultContainer);
      });
    }
  });
};
