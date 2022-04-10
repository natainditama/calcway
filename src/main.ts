import "/assets/styles/main.css";
import { Tooltip, Ripple } from "./library";
import { selectElement } from "./utilities";

const buttons = selectElement("button", true) as NodeListOf<HTMLElement>;

buttons?.forEach((button) => {
  const tooltip = new Tooltip(button, true);
  button.addEventListener("mouseenter", () => tooltip.showTooltip());
  button.addEventListener("mouseleave", () => tooltip.hideTooltip());
});

const btn = selectElement(
  "button[data-ripple]",
  true
) as NodeListOf<HTMLElement>;
btn?.forEach((button: HTMLElement) => {
  button.addEventListener("click", (event: MouseEvent) => {
    new Ripple(event).createRipple();
  });
});
