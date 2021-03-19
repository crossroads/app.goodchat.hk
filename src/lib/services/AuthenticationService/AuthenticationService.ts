import client from "lib/client/client";
import {
  HasuraResponse,
  SendPinResponse,
  VerifyResponse,
} from "lib/services/AuthenticationService/types";

const GC_API_TOKEN = "gc_api_token";
const OTP_AUTH_KEY = "otp_auth_key";

let hasuraToken: string | null = null;

async function sendPin(mobile: string): Promise<SendPinResponse> {
  const response: SendPinResponse = await client.post("auth/send_pin", {
    mobile,
  });
  localStorage.setItem(OTP_AUTH_KEY, response.otp_auth_key);
  return response;
}

async function authenticate(pin: string): Promise<VerifyResponse> {
  const response: VerifyResponse = await client.post("auth/verify", {
    otp_auth_key: localStorage.getItem(OTP_AUTH_KEY) ?? "",
    pin,
  });
  localStorage.setItem(GC_API_TOKEN, response.jwt_token);
  localStorage.removeItem(OTP_AUTH_KEY);
  return response;
}

function logout() {
  localStorage.removeItem(GC_API_TOKEN);
}

function isAuthenticated() {
  return Boolean(localStorage.getItem(GC_API_TOKEN));
}

function getHasuraToken(): string | null {
  return hasuraToken;
}

async function refreshHasuraToken(): Promise<void> {
  const gcApiToken = localStorage.getItem(GC_API_TOKEN);
  const response: HasuraResponse = await client.post("auth/hasura", null, {
    headers: {
      Authorization: gcApiToken ? `Bearer ${gcApiToken}` : "",
    },
  });
  hasuraToken = response.token;
}

function invalidateToken() {
  hasuraToken = null;
}

const AuthenticationService = {
  sendPin,
  authenticate,
  logout,
  isAuthenticated,
  getHasuraToken,
  refreshHasuraToken,
  invalidateToken,
};

export default AuthenticationService;
