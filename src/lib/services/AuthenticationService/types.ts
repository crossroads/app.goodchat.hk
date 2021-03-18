export interface SendPinResponse {
  otp_auth_key: string;
}
export interface VerifyResponse {
  jwt_token: string;
}

export interface HasuraResponse {
  token: string;
}
