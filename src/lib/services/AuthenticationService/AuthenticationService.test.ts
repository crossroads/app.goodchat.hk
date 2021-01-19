import client from "lib/client/client";
import AuthenticationService from "lib/services/AuthenticationService/AuthenticationService";

const mockPost = jest.spyOn(client, "post");

afterEach(() => {
  mockPost.mockClear();
});

describe("sendPin", () => {
  it(`should call client with auth/send_pin and receive the appropriate response`, async () => {
    const otpAuthKey = "fdsfdsaffdsaklfds";
    mockPost.mockResolvedValue({
      otp_auth_key: otpAuthKey,
    });

    const mobile = "+85262345678";
    const data = await AuthenticationService.sendPin({ mobile });

    expect(mockPost).toHaveBeenCalledTimes(1);
    expect(mockPost).toHaveBeenCalledWith("auth/send_pin", { mobile });

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
