import axios from "axios";
import GoodCityApiV2Client from "./GoodCityApiV2Client";
import sendPinResponse from "./__mocks__/sendPinResponse.js";

describe("sendPin", () => {
  let mockAxiosPost: jest.SpyInstance;
  afterEach(() => mockAxiosPost.mockRestore());

  it(`should call axios with /auth/send_pin URL and the correct config`, () => {
    const SEND_PIN_URL = `${process.env.REACT_APP_API_V2_URL}/auth/send_pin`;
    mockAxiosPost = jest.spyOn(axios, "post");
    const mobile = "+85262345678";

    GoodCityApiV2Client.sendPin(mobile);

    expect(mockAxiosPost).toHaveBeenCalledWith(
      SEND_PIN_URL,
      { mobile },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  });

  describe("Successful API response", () => {
    it("it should return the appropriate response", async () => {
      mockAxiosPost = jest
        .spyOn(axios, "post")
        .mockResolvedValue(sendPinResponse);
      const data = await GoodCityApiV2Client.sendPin("+85262345678");
      expect(data).toEqual(sendPinResponse);
    });
  });
});

describe("verify", () => {
  it("should call axios with /auth/verify URL and the correct config", () => {
    const mockAxiosPost = jest.spyOn(axios, "post");
    const phoneNumber = "+85291111111";
    const pin = "1234";

    GoodCityApiV2Client.verify(pin, phoneNumber);

    expect(mockAxiosPost).toHaveBeenCalledWith(
      `${process.env.REACT_APP_API_V2_URL}/auth/verify`,
      {
        pin: "1234",
        otp_auth_key: "+85291111111",
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  });
});
