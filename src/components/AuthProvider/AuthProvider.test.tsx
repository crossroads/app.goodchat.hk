import { computeAuthState } from "components/AuthProvider/AuthProvider";
import { GC_API_TOKEN } from "config/localStorageKeys";

afterEach(() => localStorage.removeItem(GC_API_TOKEN));

describe("computeAuthState", () => {
  it("should return the correct authentication state", () => {
    expect(computeAuthState(false)).toBe(false);
    expect(computeAuthState(true)).toBe(true);

    localStorage.setItem(GC_API_TOKEN, "true");

    expect(computeAuthState(false)).toBe(true);
  });
});
