import Client from "lib/Client/Client";
import AuthenticationService from "lib/services/AuthenticationService/AuthenticationService";

const mockClientPost = jest.spyOn(Client, "post");

afterEach(() => {
  mockClientPost.mockClear();
});

describe("sendPin", () => {
  it(`should call client with auth/send_pin and receive the appropriate response`, async () => {
    const otpAuthKey = "fdsfdsaffdsaklfds";
    mockClientPost.mockResolvedValue({
      otp_auth_key: otpAuthKey,
    });

    const mobile = "+85262345678";
    const data = await AuthenticationService.sendPin({ mobile });

    expect(mockClientPost).toHaveBeenCalledTimes(1);
    expect(mockClientPost).toHaveBeenCalledWith("auth/send_pin", { mobile });

    expect(data).toEqual({
      otp_auth_key: otpAuthKey,
    });
  });
});

describe("verify", () => {
  it("should call client with auth/verify and receive the appropriate response", async () => {
    const jwtToken = "ejsdfslk3fdsa";
    const otpAuthKey = "sdfscsd2fdsjklf2fs";
    const pin = "1234";

    mockClientPost.mockResolvedValue({
      jwt_token: jwtToken,
    });

    const data = await AuthenticationService.verify({
      pin,
      otp_auth_key: otpAuthKey,
    });

    expect(mockClientPost).toHaveBeenCalledTimes(1);
    expect(mockClientPost).toHaveBeenCalledWith("auth/verify", {
      pin,
      otp_auth_key: otpAuthKey,
    });

    expect(data).toEqual({ jwt_token: jwtToken });
  });
});
