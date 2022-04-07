import "/assets/styles/main.css";
import { Tooltip } from "./library";
import { selectElement } from "./utilities";

const buttons = selectElement("button", true) as NodeListOf<HTMLElement>;

buttons?.forEach((button) => {
  const tooltip = new Tooltip(button, true);
  button.addEventListener("mouseenter", () => tooltip.showTooltip());
  button.addEventListener("mouseleave", () => tooltip.hideTooltip());
});
