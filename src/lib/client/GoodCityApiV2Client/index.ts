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

function verify(pin: string, otpAuthKey: string) {
  return axios.post(
    `${process.env.REACT_APP_API_V2_URL}/auth/verify`,
    {
      pin,
      otp_auth_key: otpAuthKey,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}

const GoodCityApiV2Client = {
  sendPin,
  verify,
};

export default GoodCityApiV2Client;
