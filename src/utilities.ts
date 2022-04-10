export function selectElement(
  target: string,
  all: boolean = false,
  parent: Document | HTMLElement = document
): NodeListOf<HTMLElement> | Element | null {
  if (all) return parent.querySelectorAll(target);
  return parent.querySelector(target);
}

export function getRandomItem(array: any[]): any {
  return array[Math.floor(Math.random() * array.length)];
}
