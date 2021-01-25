import { OTP_AUTH_KEY } from "config/localStorageKeys";
import client from "lib/client/client";
import {
  SendPinBody,
  SendPinResponse,
  VerifyBody,
  VerifyResponse,
} from "lib/services/AuthenticationService/types";

async function sendPin(body: SendPinBody): Promise<void> {
  const response: SendPinResponse = await client.post("auth/send_pin", body);
  localStorage.setItem(OTP_AUTH_KEY, response.otp_auth_key);
}

function verify(body: VerifyBody): Promise<VerifyResponse> {
  return client.post("auth/verify", body);
}

const AuthenticationService = {
  sendPin,
  verify,
};

export default AuthenticationService;
