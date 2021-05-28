/**
 * Types relates to api request
 * params, body, response etc.
 */

export interface SendPinResponse {
  otp_auth_key: string;
}

export interface SendPinBody {
  mobile: string;
}

export interface VerifyResponse {
  jwt_token: string;
}

export interface VerifyBody {
  otp_auth_key: string;
  pin: string;
}

export interface HasuraResponse {
  token: string;
}
