import { rest } from "msw";
import { SetupServerApi } from "msw/lib/types/node";
import { SendPinBody, VerifyBody } from "types/api_request_response";
import mockApiResponses from "test-utils/fixtures/mockApiResponses";

function setupMockIntegrationServer(mockServer: SetupServerApi) {
  const VALID_PHONE = "+85291111111";
  const VALID_PIN = "1234";
  const VALID_OTP_AUTH_KEY = "123dsfdasf";

  mockServer.use(
    rest.post<SendPinBody>(
      `${process.env.REACT_APP_API_V2_URL}/auth/send_pin`,
      (req, res, ctx) => {
        if (req.body.mobile === VALID_PHONE) {
          return res(
            ctx.status(200),
            ctx.json(mockApiResponses["auth/send_pin"].success)
          );
        } else {
          return res(
            ctx.status(422),
            ctx.json(mockApiResponses["auth/send_pin"][422].errorResponse)
          );
        }
      }
    ),
    rest.post<VerifyBody>(
      `${process.env.REACT_APP_API_V2_URL}/auth/verify`,
      (req, res, ctx) => {
        if (
          req.body.pin === VALID_PIN &&
          req.body.otp_auth_key === VALID_OTP_AUTH_KEY
        ) {
          return res(
            ctx.status(200),
            ctx.json(mockApiResponses["auth/verify"].success)
          );
        } else {
          return res(
            ctx.status(401),
            ctx.json(mockApiResponses["auth/verify"][401].errorResponse)
          );
        }
      }
    )
  );
}

export default setupMockIntegrationServer;
