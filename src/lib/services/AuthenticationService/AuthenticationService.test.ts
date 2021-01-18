import * as GoodCityApiV2ClientModule from "lib/client/client";
import AuthenticationService from "lib/services/AuthenticationService/AuthenticationService";

let mockClient: jest.SpyInstance;
beforeEach(
  () => (mockClient = jest.spyOn(GoodCityApiV2ClientModule, "default"))
);

afterEach(() => mockClient.mockRestore());

describe("sendPin", () => {
  it(`should call client with auth/send_pin and receive the appropriate response`, async () => {
    const otpAuthKey = "fdsfdsaffdsaklfds";
    mockClient.mockResolvedValue({
      otp_auth_key: otpAuthKey,
    });

    const mobile = "+85262345678";
    const data = await AuthenticationService.sendPin({ mobile });

    expect(mockClient).toHaveBeenCalledTimes(1);
    expect(mockClient).toHaveBeenCalledWith("auth/send_pin", { mobile });

    expect(data).toEqual({
      otp_auth_key: otpAuthKey,
    });
  });
});

describe("verify", () => {
  it("should call client with auth/verify and receive the appropriate response", async () => {
    const jwtToken = "ejsdfslk3fdsa";
    mockClient.mockResolvedValue({
      jwt_token: jwtToken,
    });

    const otpAuthKey = "sdfscsd2fdsjklf2fs";
    const pin = "1234";
    const data = await AuthenticationService.verify({
      pin,
      otp_auth_key: otpAuthKey,
    });

    expect(mockClient).toHaveBeenCalledTimes(1);
    expect(mockClient).toHaveBeenCalledWith("auth/verify", {
      pin,
      otp_auth_key: otpAuthKey,
    });

    expect(data).toEqual({ jwt_token: jwtToken });
  });
});
