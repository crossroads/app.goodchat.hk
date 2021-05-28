import { ApiError } from "lib/errors";

const mockApiResponses = {
  "auth/send_pin": {
    success: { otp_auth_key: "123dsfdasf" },
    422: {
      errorResponse: {
        status: 422,
        type: "ValidationError",
        error: "Mobile is invalid",
      },
      error: new ApiError({
        httpStatus: 422,
        type: "ValidationError",
        message: "Mobile is invalid",
      }),
    },
  },
  "auth/verify": {
    success: { jwt_token: "fdsafadfafs" },
    401: {
      errorResponse: {
        status: 401,
        type: "InvalidPinError",
        error: "Invalid SMS code.",
      },
      error: new ApiError({
        httpStatus: 401,
        type: "InvalidPinError",
        message: "Invalid SMS code.",
      }),
    },
  },
  "auth/hasura": {
    success: {
      token: "ewreresckdlsafjdasklfjs",
    },
    401: {
      errorResponse: {
        status: 401,
        type: "UnauthorizedError",
        error: "Invalid token",
      },
      error: new ApiError({
        httpStatus: 401,
        type: "UnauthorizedError",
        message: "Invalid token",
      }),
    },
  },
};

export default mockApiResponses;
