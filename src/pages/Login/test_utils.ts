import userEvent, { TargetElement } from "@testing-library/user-event";
import { ionFireEvent } from "@ionic/react-test-utils";

function fillIonInput(container: HTMLElement, phoneInput: string) {
  const input = container.querySelector("ion-input");
  ionFireEvent.ionChange(input!, phoneInput);
}
function clickButton(container: HTMLElement) {
  const button = container.querySelector("ion-button");
  userEvent.click(button as TargetElement);
}

export { fillIonInput, clickButton };
