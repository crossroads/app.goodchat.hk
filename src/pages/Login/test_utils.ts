import { act } from "@testing-library/react";
import userEvent, { TargetElement } from "@testing-library/user-event";

function fillInput(container: HTMLElement, phoneInput: string) {
  const input = container.querySelector("ion-item > ion-input");
  act(() => {
    input!.dispatchEvent(
      new CustomEvent("ionChange", {
        detail: { value: phoneInput },
      })
    );
  });
}
function clickButton(container: HTMLElement) {
  const button = container.querySelector("ion-button");
  userEvent.click(button as TargetElement);
}

export { fillInput, clickButton };
