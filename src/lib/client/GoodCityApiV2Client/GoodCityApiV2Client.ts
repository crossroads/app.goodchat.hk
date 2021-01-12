const fetchClient = (url: string, body: object) => {
  return fetch(`${process.env.REACT_APP_API_V2_URL}/${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then((resp) => {
    return resp.json();
  });
};

interface SendPinBody {
  mobile: string;
}
function sendPin(body: SendPinBody) {
  return fetchClient("auth/send_pin", body);
}

interface VerifyBody {
  pin: string;
  otp_auth_key: string;
}
function verify(body: VerifyBody) {
  return fetchClient("auth/verify", body);
}

const GoodCityApiV2Client = {
  sendPin,
  verify,
};

export default GoodCityApiV2Client;
