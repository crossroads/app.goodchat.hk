import GoodCityApiV2Client from "./GoodCityApiV2Client";
import { rest } from "msw";
import { mockServer } from "mockServer";
import { ApiError } from "lib/errors";

beforeAll(() => mockServer.listen({ onUnhandledRequest: "error" }));
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => mockServer.resetHandlers());
// Clean up after the tests are finished.
afterAll(() => mockServer.close());

test("should call GoodCity API V2 correctly", () => {
  const otpAuthKey = "sfdsfasxfds";
  mockServer.use(
    rest.post(
      `${process.env.REACT_APP_API_V2_URL}/auth/send_pin`,
      (_, res, ctx) => {
        return res(ctx.status(200), ctx.json({ otp_auth_key: otpAuthKey }));
      }
    )
  );

  return expect(
    GoodCityApiV2Client("auth/send_pin", { mobile: "+85291111111" })
  ).resolves.toEqual({
    otp_auth_key: otpAuthKey,
  });
});

describe("Api client receiving error response from server", () => {
  const body = { mobile: "+85212345678" };
  const errorResponse = {
    status: 422,
    type: "ValidationError",
    error: "Mobile is invalid",
  };
  beforeEach(() => {
    mockServer.use(
      rest.post(
        `${process.env.REACT_APP_API_V2_URL}/auth/send_pin`,
        (_, res, ctx) => {
          return res.once(ctx.status(422), ctx.json(errorResponse));
        }
      )
    );
  });

  it("should throw an ApiError", () => {
    return expect(
      GoodCityApiV2Client("auth/send_pin", body)
    ).rejects.toBeInstanceOf(ApiError);
  });

  describe("ApiError", () => {
    it("should have message property equal to the server response error", () => {
      return expect(
        GoodCityApiV2Client("auth/send_pin", body)
      ).rejects.toThrowError(errorResponse.error);
    });

    it("should have the appropriate type and httpStatus", () => {
      return expect(
        GoodCityApiV2Client("auth/send_pin", body)
      ).rejects.toMatchObject({
        httpStatus: 422,
        type: errorResponse.type,
      });
    });
  });
});
