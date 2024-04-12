import axios from "axios";

export const getCurrencies = async () => {
  const currencies = await axios.get("http://localhost:3002/currencies")
    .then((res) => res.data);
  return currencies;
};
