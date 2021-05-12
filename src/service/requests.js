import axios from "axios";

export const getQuote = async (setValue) => {
  try {
    const response = await axios.get("https://api.quotable.io/random");
    return setValue(response.data);
  } catch (err) {
    console.log(err.message);
  }
};
