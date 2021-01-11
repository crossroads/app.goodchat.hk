import axios from "axios";
import GoodCityApiV2Client from "./GoodCityApiV2Client";
import sendPinResponse from "./__mocks__/sendPinResponse.js";
import verifyResponse from "./__mocks__/verifyResponse.js";

describe("Axios configurations", () => {
  it(`should have ${process.env.REACT_APP_API_V2_URL} as the base url`, () => {
    expect(axios.defaults.baseURL).toBe(process.env.REACT_APP_API_V2_URL);
  });

  it("should set the correct headers", () => {
    expect(axios.defaults.headers.common).toEqual({
      "Content-Type": "application/json",
    });
  });
});

describe("sendPin", () => {
  let mockAxiosPost: jest.SpyInstance;

  afterEach(() => mockAxiosPost.mockRestore());

  it(`should call axios with /auth/send_pin URL and the correct config`, () => {
    mockAxiosPost = jest.spyOn(axios, "post");
    const mobile = "+85262345678";

    GoodCityApiV2Client.sendPin(mobile);

    expect(mockAxiosPost).toHaveBeenCalledWith("/auth/send_pin", { mobile });
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
  let mockAxiosPost: jest.SpyInstance;
  const phoneNumber = "+85291111111";
  const pin = "1234";

  afterEach(() => mockAxiosPost.mockRestore());

  it("should call axios with /auth/verify URL and the correct config", () => {
    mockAxiosPost = jest.spyOn(axios, "post");

    GoodCityApiV2Client.verify(pin, phoneNumber);

    expect(mockAxiosPost).toHaveBeenCalledWith("/auth/verify", {
      pin: "1234",
      otp_auth_key: "+85291111111",
    });

    mockAxiosPost.mockRestore();
  });

  describe("Successful API response", () => {
    it("it should return the appropriate response", async () => {
      mockAxiosPost = jest
        .spyOn(axios, "post")
        .mockResolvedValue(verifyResponse);
      const data = await GoodCityApiV2Client.verify(pin, phoneNumber);
      expect(data).toEqual(verifyResponse);
    });
  });
});
