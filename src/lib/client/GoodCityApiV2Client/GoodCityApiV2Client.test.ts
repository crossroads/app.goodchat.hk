import GoodCityApiV2Client from "./GoodCityApiV2Client";

test("should call fetch correctly", () => {
  const mockFetch = jest.spyOn(window, "fetch");

  const body = { mobile: "+85291111111" };

  GoodCityApiV2Client("auth/send_pin", body);

  expect(mockFetch).toHaveBeenCalledTimes(1);
  expect(mockFetch).toHaveBeenCalledWith(
    `${process.env.REACT_APP_API_V2_URL}/auth/send_pin`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  );

  mockFetch.mockRestore();
});
