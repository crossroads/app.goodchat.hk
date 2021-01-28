import { wait } from "@testing-library/react";
import client from "lib/client/client";
import AuthenticationService from "lib/services/AuthenticationService/AuthenticationService";
import { GC_API_TOKEN, OTP_AUTH_KEY } from "test-utils/config/localStorageKeys";

let mockPost: jest.SpyInstance;
beforeAll(() => (mockPost = jest.spyOn(client, "post")));
afterEach(() => mockPost.mockClear());
afterAll(() => mockPost.mockRestore());

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
    expect(localStorage.getItem(OTP_AUTH_KEY)).toBeNull();
    await AuthenticationService.sendPin({ mobile });
    expect(localStorage.getItem(OTP_AUTH_KEY)).toBe(otpAuthKey);
  });
});

describe("verify", () => {
  const jwtToken = "ejsdfslk3fdsa";
  const otpAuthKey = "sdfscsd2fdsjklf2fs";
  const pin = "1234";
  beforeAll(() =>
    mockPost.mockResolvedValue({
      jwt_token: jwtToken,
    })
  );
  beforeEach(() => localStorage.setItem(OTP_AUTH_KEY, otpAuthKey));
  afterEach(() => localStorage.removeItem(GC_API_TOKEN));
  afterAll(() => mockPost.mockRestore());

  it("should call client with auth/verify and the correct data", async () => {
    AuthenticationService.authenticate(pin);

    expect(mockPost).toHaveBeenCalledTimes(1);
    expect(mockPost).toHaveBeenCalledWith("auth/verify", {
      pin,
      otp_auth_key: otpAuthKey,
    });
  });

  it(`should store received jwt_token in localStorage`, async () => {
    expect(localStorage.getItem(GC_API_TOKEN)).toBeNull();
    AuthenticationService.authenticate(pin);
    await wait(() => expect(localStorage.getItem(GC_API_TOKEN)).toBe(jwtToken));
  });

  it(`should clear ${OTP_AUTH_KEY} from localStorage`, async () => {
    localStorage.setItem(OTP_AUTH_KEY, otpAuthKey);
    AuthenticationService.authenticate(pin);
    await wait(() => expect(localStorage.getItem(OTP_AUTH_KEY)).toBeNull());
  });
});
