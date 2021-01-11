import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_V2_URL;
axios.defaults.headers.common = {
  "Content-Type": "application/json",
};

interface SendPinBody {
  mobile: string;
}
function sendPin(body: SendPinBody) {
  return axios.post("/auth/send_pin", body);
}

interface VerifyBody {
  pin: string;
  otp_auth_key: string;
}
function verify(body: VerifyBody) {
  return axios.post("/auth/verify", body);
}

const GoodCityApiV2Client = {
  sendPin,
  verify,
};

export default GoodCityApiV2Client;
