import axios from "axios";
import GoodCityApiV2Client from "./index";

describe("sendPin", () => {
  it(`should call axios with the correct URL, headers, params, etc`, () => {
    const SEND_PIN_URL = `${process.env.REACT_APP_API_V2_URL}/auth/send_pin`;
    const spy = jest.spyOn(axios, "post");
    const mobile = "+85262345678";

    GoodCityApiV2Client.sendPin(mobile);

    expect(spy).toHaveBeenCalledWith(SEND_PIN_URL, mobile, {
      headers: { "Content-Type": "application/json" },
    });

    spy.mockRestore();
  });
});
