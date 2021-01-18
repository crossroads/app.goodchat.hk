import client from "./client";
import { rest } from "msw";
import { mockServer } from "mockServer";
import { ApiError, NetworkError } from "lib/errors";

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
    client("auth/send_pin", { mobile: "+85291111111" })
  ).resolves.toEqual({
    otp_auth_key: otpAuthKey,
  });
});

describe("Api client receiving error response from server", () => {
  const body = { mobile: "+85212345678" };
  describe("Known error response format", () => {
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
      return expect(client("auth/send_pin", body)).rejects.toThrow(ApiError);
    });

    describe("ApiError", () => {
      it("should have message equal to the server response error", () => {
        return expect(client("auth/send_pin", body)).rejects.toThrowError(
          errorResponse.error
        );
      });

      it("should have the appropriate type and httpStatus", () => {
        return expect(client("auth/send_pin", body)).rejects.toMatchObject({
          httpStatus: 422,
          type: errorResponse.type,
        });
      });
    });
  });

  describe("Unrecognised error response format", () => {
    beforeEach(() => {
      mockServer.use(
        rest.post(
          `${process.env.REACT_APP_API_V2_URL}/auth/send_pin`,
          (_, res, ctx) => {
            return res.once(ctx.status(422), ctx.json("fdsfds"));
          }
        )
      );
    });

    it("should throw an ApiError", () => {
      return expect(client("auth/send_pin", body)).rejects.toThrow(ApiError);
    });

    describe("ApiError", () => {
      it("should have message saying something went wrong", () => {
        return expect(client("auth/send_pin", body)).rejects.toThrow(
          "Something went wrong"
        );
      });

      it("should have internal server error as type", () => {
        return expect(client("auth/send_pin", body)).rejects.toMatchObject({
          type: "InternalServerError",
        });
      });
    });
  });
});

describe("Server down/unreachable/no internet connection", () => {
  beforeEach(() => {
    mockServer.use(
      rest.post(
        `${process.env.REACT_APP_API_V2_URL}/auth/send_pin`,
        (_, res) => {
          res.networkError("");
        }
      )
    );
  });

  it("throws a NetworkError", async () => {
    return expect(
      client("auth/send_pin", { mobile: "+85291111111" })
    ).rejects.toThrow(NetworkError);
  });

  describe("NetworkError", () => {
    it("should have message saying that network request failed", () => {
      return expect(
        client("auth/send_pin", { mobile: "+85291111111" })
      ).rejects.toThrow("Network request failed");
    });
  });
});
