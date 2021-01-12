import GoodCityApiV2Client from "./GoodCityApiV2Client";
import sendPinResponse from "./__mocks__/sendPinResponse.js";
import verifyResponse from "./__mocks__/verifyResponse.js";

const mockFetch = jest.spyOn(window, "fetch");

afterEach(() => mockFetch.mockClear());

afterAll(() => mockFetch.mockRestore());

describe("sendPin", () => {
  it(`should call fetch with /auth/send_pin URL and the correct config`, () => {
    const mobile = "+85262345678";

    GoodCityApiV2Client.sendPin({ mobile });

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

  describe("Successful API response", () => {
    it("it should return the appropriate response", async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => Promise.resolve(sendPinResponse),
      } as Response);

      const data = await GoodCityApiV2Client.sendPin({
        mobile: "+85262345678",
      });

      expect(data).toEqual(sendPinResponse);
    });
  });
});

describe("verify", () => {
  const otpAuthKey = "sdfscsd2fdsjklf2fs";
  const pin = "1234";

  it("should call fetch with /auth/verify URL and the correct config", () => {
    GoodCityApiV2Client.verify({ pin, otp_auth_key: otpAuthKey });

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

  describe("Successful API response", () => {
    it("it should return the appropriate response", async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => Promise.resolve(verifyResponse),
      } as Response);

      const data = await GoodCityApiV2Client.verify({
        pin,
        otp_auth_key: otpAuthKey,
      });
      expect(data).toEqual(verifyResponse);
    });
  });
});
