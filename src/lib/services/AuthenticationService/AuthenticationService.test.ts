import { wait } from "@testing-library/react";
import client from "lib/client/client";
import AuthenticationService from "lib/services/AuthenticationService/AuthenticationService";
import mockApiResponses from "test-utils/fixtures/mockApiResponses";

const GC_API_TOKEN = "gc_api_token";
const OTP_AUTH_KEY = "otp_auth_key";

describe("Methods with API calls", () => {
  let mockPost: jest.SpyInstance;
  beforeEach(() => (mockPost = jest.spyOn(client, "post")));
  afterEach(() => mockPost.mockRestore());

  describe("sendPin", () => {
    const mobile = "+85262345678";

    describe("on successful response", () => {
      beforeEach(() => {
        mockPost.mockResolvedValue(mockApiResponses["auth/send_pin"].success);
      });

      it(`should call client with auth/send_pin and the correct data`, () => {
        AuthenticationService.sendPin(mobile);
        expect(mockPost).toHaveBeenCalledTimes(1);
        expect(mockPost).toHaveBeenCalledWith("auth/send_pin", { mobile });
      });

      it("should store received token in localStorage", async () => {
        expect(localStorage.getItem(OTP_AUTH_KEY)).toBeNull();
        AuthenticationService.sendPin(mobile);
        await wait(() =>
          expect(localStorage.getItem(OTP_AUTH_KEY)).toEqual(expect.any(String))
        );
      });
    });

    describe("on unsuccessful response", () => {
      const { error } = mockApiResponses["auth/send_pin"][422];
      beforeEach(() => mockPost.mockRejectedValue(error));

      it("should just throw the error", () => {
        return expect(AuthenticationService.sendPin(mobile)).rejects.toThrow(
          error
        );
      });

      it(`should NOT set ${OTP_AUTH_KEY}`, async () => {
        expect.assertions(2);
        expect(localStorage.getItem(OTP_AUTH_KEY)).toBeNull();
        try {
          await AuthenticationService.sendPin(mobile);
        } catch (e) {
          expect(localStorage.getItem(OTP_AUTH_KEY)).toBeNull();
        }
      });
    });
  });

  describe("authenticate", () => {
    const pin = "1234";
    const otpAuthKey = "sdfscsd2fdsjklf2fs";
    beforeEach(() => localStorage.setItem(OTP_AUTH_KEY, otpAuthKey));

    describe("On successful response", () => {
      beforeEach(() => {
        mockPost.mockResolvedValue(mockApiResponses["auth/verify"].success);
      });

      it("should call client with auth/verify and the correct data", async () => {
        AuthenticationService.authenticate(pin);

        expect(mockPost).toHaveBeenCalledTimes(1);
        expect(mockPost).toHaveBeenCalledWith("auth/verify", {
          pin,
          otp_auth_key: otpAuthKey,
        });
      });

      it(`should set ${GC_API_TOKEN} with the received jwt_token`, async () => {
        expect(localStorage.getItem(GC_API_TOKEN)).toBeNull();
        AuthenticationService.authenticate(pin);
        await wait(() =>
          expect(localStorage.getItem(GC_API_TOKEN)).toEqual(expect.any(String))
        );
      });

      it(`should clear ${OTP_AUTH_KEY} from localStorage`, async () => {
        localStorage.setItem(OTP_AUTH_KEY, otpAuthKey);
        AuthenticationService.authenticate(pin);
        await wait(() => expect(localStorage.getItem(OTP_AUTH_KEY)).toBeNull());
      });
    });

    describe("On unsuccessful response", () => {
      const { error } = mockApiResponses["auth/verify"][401];
      beforeEach(() => mockPost.mockRejectedValue(error));

      it("should just throw the error", () => {
        return expect(AuthenticationService.authenticate(pin)).rejects.toThrow(
          error
        );
      });

      it(`should NOT set ${GC_API_TOKEN}`, async () => {
        expect.assertions(2);
        expect(localStorage.getItem(GC_API_TOKEN)).toBeNull();
        try {
          await AuthenticationService.authenticate(pin);
        } catch (e) {
          expect(localStorage.getItem(GC_API_TOKEN)).toBeNull();
        }
      });

      it(`should NOT remove ${OTP_AUTH_KEY}`, async () => {
        expect.assertions(2);
        expect(localStorage.getItem(OTP_AUTH_KEY)).not.toBeNull();
        try {
          await AuthenticationService.authenticate(pin);
        } catch (e) {
          expect(localStorage.getItem(OTP_AUTH_KEY)).not.toBeNull();
        }
      });
    });
  });
});

describe("logout", () => {
  it(`should log user out`, () => {
    localStorage.setItem(GC_API_TOKEN, "fdsfsa");
    AuthenticationService.logout();
    expect(AuthenticationService.isAuthenticated()).toBe(false);
  });
});

describe("isAuthenticated", () => {
  it("should return whether or not the person is authenticated", () => {
    expect(AuthenticationService.isAuthenticated()).toBe(false);
    localStorage.setItem(GC_API_TOKEN, "fdsfdsaf");
    expect(AuthenticationService.isAuthenticated()).toBe(true);
  });
});
