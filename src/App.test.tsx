import React from "react";
import { render } from "@testing-library/react";
import App from "App";
import { I18nextProvider } from "react-i18next";
import i18n from "i18n/i18n";

test("renders without crashing", async () => {
  const { baseElement } = render(
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  );
  expect(baseElement).toBeDefined();
});
