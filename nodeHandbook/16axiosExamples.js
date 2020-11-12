const axios = require("axios");
const dogApi = "https://dog.ceo/api/breeds/list/all";
const getBreeds = async () => {
  try {
    return await axios.get(dogApi);
  } catch (error) {
    console.error(error);
  }
};

const countBreeds = async () => {
  const breeds = await getBreeds();
  if (breeds.data.message) {
    console.log(`Got ${Object.entries(breeds.data.message).length} breeds`);
  }
};

countBreeds();
