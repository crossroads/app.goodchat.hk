const fetchClient = (url: string, body: object) => {
  return fetch(`${process.env.REACT_APP_API_V2_URL}/${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then((resp) => resp.json());
};

interface SendPinBody {
  mobile: string;
}
interface SendPinResponse {
  otp_auth_key: string;
}
function sendPin(body: SendPinBody): Promise<SendPinResponse> {
  return fetchClient("auth/send_pin", body);
}

interface VerifyBody {
  pin: string;
  otp_auth_key: string;
}
interface VerifyResponse {
  jwt_token: string;
}
function verify(body: VerifyBody): Promise<VerifyResponse> {
  return fetchClient("auth/verify", body);
}

const GoodCityApiV2Client = {
  sendPin,
  verify,
};

export default GoodCityApiV2Client;
