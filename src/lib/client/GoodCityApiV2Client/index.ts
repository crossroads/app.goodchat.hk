import axios from "axios";

interface SendPinBody {
  mobile: string;
}
function sendPin(body: SendPinBody) {
  axios.post(`${process.env.REACT_APP_API_V2_URL}/auth/send_pin`, body, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

const GoodCityApiV2Client = {
  sendPin,
};

export default GoodCityApiV2Client;
