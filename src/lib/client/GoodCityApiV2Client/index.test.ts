import axios from "axios";
import GoodCityApiV2Client from "./index";
import sendPinResponse from "./__mocks__/sendPinResponse.js";

describe("sendPin", () => {
  let mockAxiosPost: jest.SpyInstance;
  afterEach(() => mockAxiosPost.mockRestore());

  it(`should call axios with the correct URL, headers, params, etc`, () => {
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
