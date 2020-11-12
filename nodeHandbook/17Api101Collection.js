const axios = require("axios");

const getApiInfo = async () => {
  try {
    return await axios.get("https://api-101.glitch.me/customers");
  } catch (error) {
    console.error(error);
  }
};

const countCustomers = async () => {
  const apiInfo = await getApiInfo();
  console.log(apiInfo.data.data.customers);
  if (apiInfo.data.data.customers) {
    console.log(`Got ${apiInfo.data.data.customers.length} customers`);
  } else {
    console.log("Error");
  }
};

countCustomers();
