import { computeAuthState } from "components/AuthProvider/AuthProvider";
import { AUTHENTICATED } from "config/localStorageKeys";

afterEach(() => localStorage.removeItem(AUTHENTICATED));

describe("computeAuthState", () => {
  it("should return the correct authentication state", () => {
    expect(computeAuthState(false)).toBe(false);
    expect(computeAuthState(true)).toBe(true);

    localStorage.setItem(AUTHENTICATED, "true");

    expect(computeAuthState(false)).toBe(true);
  });
});
