import { createPopper, Instance } from "@popperjs/core";
import { getRandomItem, selectElement } from "./utilities";

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

  private createArrow() {
    const arrow = document.createElement("div");
    arrow.classList.add("arrow");
    return arrow;
  }

  private createTooltip(parent: boolean = false) {
    const tooltip = document.createElement("div");
    tooltip.classList.add("tooltip");
    if (!this.element.dataset.tooltip) return tooltip;
    tooltip.textContent = this.element.dataset.tooltip;
    if (parent) this.element.parentElement?.appendChild(tooltip);
    else this.element.appendChild(tooltip);
    tooltip.appendChild(this.createArrow());
    return tooltip;
  }

  public showTooltip(delay: number = 10000) {
    let now = new Date().getTime();
    const time = setInterval(() => (now = new Date().getTime()), 1000);
    if (now + delay >= now) {
      clearInterval(time);
      this.tooltip.classList.add("show");
      this.popper.setOptions((options: any) => ({
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
    this.tooltip.classList.remove("show");
    this.popper.setOptions((options: any) => ({
      ...options,
      modifiers: [
        { name: "offset", options: { offset: [0, 8] } },
        { name: "eventListeners", options: { enabled: false } },
      ],
    }));
    this.popper.update();
  }
}

export class Ripple {
  private element: HTMLElement;
  private event: MouseEvent;

  constructor(event: MouseEvent) {
    this.element = event.target as HTMLElement;
    this.event = event;
  }

  public createRipple() {
    const diameter = Math.max(
      this.element.clientWidth,
      this.element.clientHeight
    );
    const circle = this.styleRipple(diameter);
    const ripple = selectElement("ripple", false, this.element) as HTMLElement;
    if (ripple) ripple.remove();
    this.element.appendChild(circle);
  }

  private styleRipple(diameter: number): HTMLElement {
    const circle = document.createElement("span");
    const radius = diameter / 2;
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${
      this.event.clientX - (this.element.offsetLeft + radius)
    }px`;
    circle.style.top = `${
      this.event.clientY - (this.element.offsetTop + radius)
    }px`;
    circle.classList.add("ripple");
    return circle;
  }
}
