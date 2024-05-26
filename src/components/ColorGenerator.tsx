import { useEffect, useState } from "react";
import {
  convertHexToRgb,
  convertRgbToHex,
  generateRandomHexColor,
  generateRandomRgbColor,
  setBodyColor,
} from "../lib/utils";

export default function ColorGenerator() {
  const [colorType, setColorType] = useState("rgb");
  const [color, setColor] = useState("rgb(255,255,255)");

  useEffect(
    function () {
      setBodyColor({ color });
    },
    [color]
  );

  function handleColorSwitch(type: string): void {
    if (type === "rgb" && colorType !== "rgb") {
      setColorType("rgb");
      setColor(convertHexToRgb(color));
    }

    if (type === "hex" && colorType !== "hex") {
      setColorType("hex");
      setColor(convertRgbToHex(color));
    }
  }

  function generateRandomColor(type: string): void {
    if (type === "rgb") {
      setColor(generateRandomRgbColor);
    }

    if (type === "hex") {
      setColor(generateRandomHexColor());
    }
  }

  return (
    <div className="grid gap-20">
      <div className="flex gap-2">
        <button className="color-btn" onClick={() => handleColorSwitch("hex")}>
          Switch to Hex Color
        </button>
        <button className="color-btn" onClick={() => handleColorSwitch("rgb")}>
          Switch to RGB Color
        </button>
        <button
          className="color-btn"
          onClick={() => generateRandomColor(colorType)}
        >
          Generate Random Color
        </button>
      </div>

      <div className="text-center grid gap-16">
        <h3 className="text-4xl font-semibold">
          {colorType.toUpperCase()} Color
        </h3>
        <h2 className="text-6xl">{color}</h2>
      </div>
    </div>
  );
}
