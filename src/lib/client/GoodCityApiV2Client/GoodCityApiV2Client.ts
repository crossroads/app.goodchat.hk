import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_V2_URL;
axios.defaults.headers.common = {
  "Content-Type": "application/json",
};

function sendPin(mobile: string) {
  return axios.post("/auth/send_pin", { mobile });
}

function verify(pin: string, otpAuthKey: string) {
  return axios.post("/auth/verify", {
    pin,
    otp_auth_key: otpAuthKey,
  });
}

const GoodCityApiV2Client = {
  sendPin,
  verify,
};

export default GoodCityApiV2Client;
