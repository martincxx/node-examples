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

const getACustomer = async (id) => {
  return await axios.get("https://api-101.glitch.me/customer", {
    params: { id },
  });
};

const printCustomerInfo = async (id) => {
  const customer = await getACustomer(id);
  if (customer.data.data.customer) {
    const { name, type } = customer.data.data.customer;

    console.log({ name });
    console.log({ type });
  } else {
    console.log("No such customer");
  }
};
printCustomerInfo(1);
countCustomers();
