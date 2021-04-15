import { ApiError } from "lib/errors";

const mockApiResponse = {
  "auth/send_pin": {
    success: { otp_auth_key: "123dsfdasf" },
    error: {
      422: new ApiError({
        httpStatus: 422,
        type: "ValidationError",
        message: "Mobile is invalid",
      }),
    },
  },
  "auth/verify": {
    success: { jwt_token: "fdsafadfafs" },
    error: {
      401: new ApiError({
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
    error: {
      401: new ApiError({
        httpStatus: 401,
        type: "UnauthorizedError",
        message: "Invalid token",
      }),
    },
  },
};

export default mockApiResponse;
