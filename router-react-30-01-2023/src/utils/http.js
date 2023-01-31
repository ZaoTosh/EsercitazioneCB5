const https = "https://dummyjson.com/";

const GET = async (endpoint, index) => {
  const prom = await fetch(https + endpoint + "/" + index);
  return prom.json();
};
export { GET };
