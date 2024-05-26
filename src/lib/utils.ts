export function generateRandomNumber(value: number): number {
  return Math.floor(Math.random() * value);
}

export function convertHexToRgb(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return `rgb(${r},${g},${b})`;
}

export function convertRgbToHex(rgb: string): string {
  const rgbNums = rgb.match(/\d+/g);

  const hex = rgbNums!
    .map((value) => Number(value).toString(16).padStart(2, "0"))
    .join("");

  return `#${hex}`;
}

export function generateRandomHexColor(): string {
  const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

  const color = Array.from(
    { length: 6 },
    () => hex[generateRandomNumber(hex.length)]
  ).join("");

  return `#${color}`;
}

export function generateRandomRgbColor(): string {
  const [r, g, b] = Array.from({ length: 3 }).map(() =>
    generateRandomNumber(255)
  );

  return `rgb(${r},${g},${b})`;
}

export function setBodyColor({ color }: { color: string }): void {
  document.documentElement.style.setProperty("--bodyColor", color);
}
