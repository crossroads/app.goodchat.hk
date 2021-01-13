import AuthenticationService from "lib/services/AuthenticationService/AuthenticationService";

const mockFetch = jest.spyOn(window, "fetch");

afterEach(() => mockFetch.mockClear());

afterAll(() => mockFetch.mockRestore());

describe("sendPin", () => {
  it(`should call fetch with /auth/send_pin URL and the correct config`, () => {
    const mobile = "+85262345678";

    AuthenticationService.sendPin({ mobile });

    expect(mockFetch).toHaveBeenCalledTimes(1);
    expect(mockFetch).toHaveBeenCalledWith(
      `${process.env.REACT_APP_API_V2_URL}/auth/send_pin`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobile }),
      }
    );
  });
});

describe("verify", () => {
  it("should call fetch with /auth/verify URL and the correct config", () => {
    const otpAuthKey = "sdfscsd2fdsjklf2fs";
    const pin = "1234";
    AuthenticationService.verify({ pin, otp_auth_key: otpAuthKey });

    expect(mockFetch).toHaveBeenCalledTimes(1);
    expect(mockFetch).toHaveBeenCalledWith(
      `${process.env.REACT_APP_API_V2_URL}/auth/verify`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          pin: "1234",
          otp_auth_key: otpAuthKey,
        }),
      }
    );
  });
});
