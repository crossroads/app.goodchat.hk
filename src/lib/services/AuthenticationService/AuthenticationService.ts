import { GC_API_TOKEN, OTP_AUTH_KEY } from "config/localStorageKeys";
import client from "lib/client/client";
import {
  GetHasuraTokenResponse,
  SendPinBody,
  SendPinResponse,
  VerifyBody,
  VerifyResponse,
} from "lib/services/AuthenticationService/types";

const HASURA_TOKEN = "hasura_token";

async function sendPin(body: SendPinBody): Promise<SendPinResponse> {
  const response: SendPinResponse = await client.post("auth/send_pin", body);
  localStorage.setItem(OTP_AUTH_KEY, response.otp_auth_key);
  return response;
}

async function authenticate(pin: string): Promise<VerifyResponse> {
  const body: VerifyBody = {
    otp_auth_key: localStorage.getItem(OTP_AUTH_KEY) ?? "",
    pin,
  };
  const response: VerifyResponse = await client.post("auth/verify", body);
  localStorage.setItem(GC_API_TOKEN, response.jwt_token);
  localStorage.removeItem(OTP_AUTH_KEY);
  return response;
}

function logout() {
  localStorage.removeItem(GC_API_TOKEN);
}

async function connectToHasura(): Promise<GetHasuraTokenResponse> {
  const response: GetHasuraTokenResponse = await client.post("auth/hasura");
  localStorage.setItem(HASURA_TOKEN, response.token);
  return response;
}

const AuthenticationService = {
  sendPin,
  authenticate,
  logout,
  connectToHasura,
};

export default AuthenticationService;
