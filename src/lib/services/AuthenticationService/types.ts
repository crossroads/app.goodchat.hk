export interface SendPinBody {
  mobile: string;
}
export interface SendPinResponse {
  otp_auth_key: string;
}
export interface VerifyBody {
  pin: string;
  otp_auth_key: string;
}
export interface VerifyResponse {
  jwt_token: string;
}
