import { GC_API_TOKEN, OTP_AUTH_KEY } from "config/localStorageKeys";
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

async function authenticate(pin: string): Promise<void> {
  const body: VerifyBody = {
    otp_auth_key: localStorage.getItem(OTP_AUTH_KEY) ?? "",
    pin,
  };
  const response: VerifyResponse = await client.post("auth/verify", body);
  localStorage.setItem(GC_API_TOKEN, response.jwt_token);
  localStorage.removeItem(OTP_AUTH_KEY);
}

function logout() {
  localStorage.removeItem(GC_API_TOKEN);
}

const AuthenticationService = {
  sendPin,
  authenticate,
  logout,
};

export default AuthenticationService;
