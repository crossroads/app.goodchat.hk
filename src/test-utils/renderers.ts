import { render, RenderOptions, RenderResult } from "@testing-library/react";
import { act } from "react-dom/test-utils";

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
