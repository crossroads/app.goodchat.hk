import GoodChatMockedProvider from "test-utils/components/GoodChatMockedProvider/GoodChatMockedProvider";
import { render, RenderOptions, RenderResult } from "@testing-library/react";
import AuthProvider from "components/AuthProvider/AuthProvider";
import MainRouter from "components/MainRouter/MainRouter";
import { createMemoryHistory } from "history";
import { IMocks } from "@graphql-tools/mock";
import { act } from "react-dom/test-utils";
import { Router } from "react-router";
import { I18nextProvider } from "react-i18next";
import i18n from "i18n/i18n";

/**
 * Waits for promises to resolve and state
 * updates to be applied to the DOM
 * https://reactjs.org/docs/test-utils.html#act
 */
export async function renderWithAct(
  element: React.ReactElement,
  options?: Omit<RenderOptions, "queries">
): Promise<RenderResult> {
  let renderResult: RenderResult | undefined;

  await act(async () => {
    renderResult = render(element, options);
  });

  return renderResult!;
}

export type RenderPageOptions = {
  mocks? : IMocks
  authenticated?: boolean,
  history?: string[],
  disableGlobalResolvers?: boolean
}

/**
 * Renders a page based on its path
 * Loads up a mock provider and creates a history
 *
 * @export
 * @param {string} path
 * @param {RenderPageOptions} [opts={}]
 * @returns
 */
export async function renderPage(path: string, opts : RenderPageOptions = {}) {
  const history = createMemoryHistory({
    initialEntries: [...(opts.history || []), path]
  });

  const renderResult = await renderWithAct(
    <I18nextProvider i18n={i18n}>
      <AuthProvider initialAuthState={opts.authenticated ?? true}>
        <GoodChatMockedProvider
          mockResolvers={opts.mocks || {}}
          disableGlobalResolvers={opts.disableGlobalResolvers}
        >
          <Router history={history}>
            <MainRouter />
          </Router>
        </GoodChatMockedProvider>
      </AuthProvider>
    </I18nextProvider>
  );

  return {
    history,
    ...renderResult,
  };
};
