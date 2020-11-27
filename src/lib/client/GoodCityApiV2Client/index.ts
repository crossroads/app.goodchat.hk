import axios from "axios";

function sendPin(mobile: string) {
  return axios.post(
    `${process.env.REACT_APP_API_V2_URL}/auth/send_pin`,
    { mobile },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}

const GoodCityApiV2Client = {
  sendPin,
};

export default GoodCityApiV2Client;
