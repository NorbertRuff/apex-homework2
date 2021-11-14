import fetch from "node-fetch";

/**
 * fetchPow fetches from POW urls with GET method, if response !ok returns "rejected"
 * @param url
 * @returns {Promise<string>}
 */
export const fetchPow = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    console.log("rejected", response.statusText);
    return "rejected";
  }
  console.log("resolved", response.statusText);
  return await response.json();
};
