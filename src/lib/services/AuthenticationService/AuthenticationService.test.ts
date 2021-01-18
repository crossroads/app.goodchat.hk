import * as GoodCityApiV2ClientModule from "lib/client/GoodCityApiV2Client/GoodCityApiV2Client";
import AuthenticationService from "lib/services/AuthenticationService/AuthenticationService";

describe("sendPin", () => {
  it(`should receive the appropriate response from client`, async () => {
    const otpAuthKey = "fdsfdsaffdsaklfds";
    const mockClient = jest
      .spyOn(GoodCityApiV2ClientModule, "default")
      .mockResolvedValue({
        otp_auth_key: otpAuthKey,
      });

    const mobile = "+85262345678";
    const data = await AuthenticationService.sendPin({ mobile });

    expect(mockClient).toHaveBeenCalledTimes(1);
    expect(mockClient).toHaveBeenCalledWith("auth/send_pin", { mobile });

    expect(data).toEqual({
      otp_auth_key: otpAuthKey,
    });

    mockClient.mockRestore();
  });
});

describe("verify", () => {
  it("should receive the appropriate response from client", async () => {
    const jwtToken = "ejsdfslk3fdsa";
    const mockClient = jest
      .spyOn(GoodCityApiV2ClientModule, "default")
      .mockResolvedValue({
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
      pin: "1234",
      otp_auth_key: otpAuthKey,
    });

    expect(data).toEqual({ jwt_token: jwtToken });

    mockClient.mockRestore();
  });
});
