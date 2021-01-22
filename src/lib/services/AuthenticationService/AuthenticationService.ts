import { OTP_AUTH_KEY } from "config/localStorageKeys";
import client from "lib/client/client";

interface SendPinBody {
  mobile: string;
}
interface SendPinResponse {
  otp_auth_key: string;
}
async function sendPin(body: SendPinBody): Promise<void> {
  const response: SendPinResponse = await client.post("auth/send_pin", body);
  localStorage.setItem(OTP_AUTH_KEY, response.otp_auth_key);
}

interface VerifyBody {
  pin: string;
  otp_auth_key: string;
}
interface VerifyResponse {
  jwt_token: string;
}
function verify(body: VerifyBody): Promise<VerifyResponse> {
  return client.post("auth/verify", body);
}

const AuthenticationService = {
  sendPin,
  verify,
};

export default AuthenticationService;
