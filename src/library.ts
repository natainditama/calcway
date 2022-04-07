import { createPopper, Instance } from "@popperjs/core";
import { getRandomItem } from "./utilities";

export class Tooltip {
  private element: HTMLElement;
  private tooltip: HTMLElement;
  private popper: Instance;

  constructor(target: HTMLElement, parent: boolean = false) {
    this.element = target;
    this.tooltip = this.createTooltip(parent);
    this.popper = createPopper(this.element, this.tooltip, {
      placement: getRandomItem(["top", "right", "bottom", "left"]),
    });
  }

  private createTooltip(parent: boolean = false) {
    const tooltip = document.createElement("div");
    const arrow = document.createElement("div");
    arrow.classList.add("arrow");
    tooltip.classList.add("tooltip");
    if (!this.element.dataset.tooltip) return tooltip;
    tooltip.textContent = this.element.dataset.tooltip;
    if (parent) this.element.parentElement?.appendChild(tooltip);
    else this.element.appendChild(tooltip);
    tooltip.appendChild(arrow);
    return tooltip;
  }

  public showTooltip(delay: number = 10000) {
    let now = new Date().getTime();
    const time = setInterval(() => (now = new Date().getTime()), 1000);
    if (now + delay >= now) {
      clearInterval(time);
      this.tooltip.removeAttribute("data-show");
      this.tooltip.setAttribute("data-show", "");
      this.popper.setOptions((options) => ({
        ...options,
        modifiers: [
          { name: "offset", options: { offset: [0, 8] } },
          { name: "eventListeners", options: { enabled: true } },
        ],
      }));
      this.popper.update();
    }
  }

  public hideTooltip() {
    this.tooltip.removeAttribute("data-show");
    this.popper.setOptions((options) => ({
      ...options,
      modifiers: [
        { name: "offset", options: { offset: [0, 8] } },
        { name: "eventListeners", options: { enabled: false } },
      ],
    }));
    this.popper.update();
  }
}
