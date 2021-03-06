import client from "lib/client/client";
import { rest } from "msw";
import { mockServer } from "mockServer";
import { ApiError, NetworkError } from "lib/errors";
import mockApiResponses from "test-utils/fixtures/mockApiResponses";

beforeAll(() => mockServer.listen({ onUnhandledRequest: "error" }));

afterEach(() => mockServer.resetHandlers());

afterAll(() => mockServer.close());

test("should call GoodCity API V2 correctly", () => {
  mockServer.use(
    rest.post<{ value: string }>(
      `${process.env.REACT_APP_API_V2_URL}/endpoint`,
      (req, res, ctx) => {
        if (req.body.value === undefined) return res(ctx.status(400));
        return res(ctx.status(200), ctx.json({ success: true }));
      }
    )
  );

  return expect(client.post("endpoint", { value: "1234" })).resolves.toEqual({
    success: true,
  });
});

describe("Api client receiving error response from server", () => {
  const body = { mobile: "+85212345678" };
  describe("Known error response format", () => {
    const { errorResponse } = mockApiResponses["auth/send_pin"][422];
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
      return expect(client.post("auth/send_pin", body)).rejects.toThrow(
        ApiError
      );
    });

    describe("ApiError", () => {
      it("should have message equal to the server response error", () => {
        return expect(client.post("auth/send_pin", body)).rejects.toThrowError(
          errorResponse.error
        );
      });

      it("should have the appropriate type and httpStatus", () => {
        return expect(client.post("auth/send_pin", body)).rejects.toMatchObject(
          {
            httpStatus: 422,
            type: errorResponse.type,
          }
        );
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
      return expect(client.post("auth/send_pin", body)).rejects.toThrow(
        ApiError
      );
    });

    describe("ApiError", () => {
      it("should have message saying something went wrong", () => {
        return expect(client.post("auth/send_pin", body)).rejects.toThrow(
          "Something went wrong"
        );
      });

      it("should have internal server error as type", () => {
        return expect(client.post("auth/send_pin", body)).rejects.toMatchObject(
          {
            type: "InternalServerError",
          }
        );
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
      client.post("auth/send_pin", { mobile: "+85291111111" })
    ).rejects.toThrow(NetworkError);
  });

  describe("NetworkError", () => {
    it("should have message saying that network request failed", () => {
      return expect(
        client.post("auth/send_pin", { mobile: "+85291111111" })
      ).rejects.toThrow("Network Error");
    });
  });
});
