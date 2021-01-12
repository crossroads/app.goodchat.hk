interface SendPinBody {
  mobile: string;
}
function sendPin(body: SendPinBody) {
  return fetch(`${process.env.REACT_APP_API_V2_URL}/auth/send_pin`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((resp) => resp.json());
}

interface VerifyBody {
  pin: string;
  otp_auth_key: string;
}
function verify(body: VerifyBody) {
  return fetch(`${process.env.REACT_APP_API_V2_URL}/auth/verify`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((resp) => resp.json());
}

const GoodCityApiV2Client = {
  sendPin,
  verify,
};

export default GoodCityApiV2Client;
