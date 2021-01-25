import client from "lib/client/client";
import AuthenticationService from "lib/services/AuthenticationService/AuthenticationService";
import { OTP_AUTH_KEY } from "test-utils/config/localStorageKeys";

let mockPost: jest.SpyInstance;
beforeAll(() => (mockPost = jest.spyOn(client, "post")));
afterEach(() => mockPost.mockClear());
afterAll(() => {
  mockPost.mockRestore();
});

describe("sendPin", () => {
  const otpAuthKey = "fdsfdsaffdsaklfds";
  const mobile = "+85262345678";
  beforeAll(() => {
    mockPost.mockResolvedValue({
      otp_auth_key: otpAuthKey,
    });
  });
  afterEach(() => localStorage.removeItem(OTP_AUTH_KEY));

  it(`should call client with auth/send_pin and the correct data`, () => {
    AuthenticationService.sendPin({ mobile });
    expect(mockPost).toHaveBeenCalledTimes(1);
    expect(mockPost).toHaveBeenCalledWith("auth/send_pin", { mobile });
  });

  it("should store received token in localStorage", async () => {
    await AuthenticationService.sendPin({ mobile });
    expect(localStorage.getItem(OTP_AUTH_KEY)).toBe(otpAuthKey);
  });
});

describe("verify", () => {
  it("should call client with auth/verify and receive the appropriate response", async () => {
    const jwtToken = "ejsdfslk3fdsa";
    const otpAuthKey = "sdfscsd2fdsjklf2fs";
    const pin = "1234";

    mockPost.mockResolvedValue({
      jwt_token: jwtToken,
    });

    const data = await AuthenticationService.verify({
      pin,
      otp_auth_key: otpAuthKey,
    });

    expect(mockPost).toHaveBeenCalledTimes(1);
    expect(mockPost).toHaveBeenCalledWith("auth/verify", {
      pin,
      otp_auth_key: otpAuthKey,
    });

    expect(data).toEqual({ jwt_token: jwtToken });
  });
});
