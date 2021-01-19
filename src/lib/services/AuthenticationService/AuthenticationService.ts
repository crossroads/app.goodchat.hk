import Client from "lib/Client/Client";

interface SendPinBody {
  mobile: string;
}
interface SendPinResponse {
  otp_auth_key: string;
}
function sendPin(body: SendPinBody): Promise<SendPinResponse> {
  return Client.post("auth/send_pin", body);
}

interface VerifyBody {
  pin: string;
  otp_auth_key: string;
}
interface VerifyResponse {
  jwt_token: string;
}
function verify(body: VerifyBody): Promise<VerifyResponse> {
  return Client.post("auth/verify", body);
}

const AuthenticationService = {
  sendPin,
  verify,
};

export default AuthenticationService;
