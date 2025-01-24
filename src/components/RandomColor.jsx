import { useState, useEffect } from "react";

export default function RandomColor() {
  const [typeofColor, setTypeofColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function generateColor() {
    if (typeofColor === "hex") {
      const hexChars = "0123456789ABCDEF";
      let hexColor = "#";
      for (let i = 0; i < 6; i++) {
        hexColor += hexChars[randomColorUtility(hexChars.length)];
      }
      setColor(hexColor);
    } else {
      const r = randomColorUtility(256);
      const g = randomColorUtility(256);
      const b = randomColorUtility(256);
      setColor(`rgb(${r}, ${g}, ${b})`);
    }
  }

  // useEffect to generate color based on type (hex or rgb) when 'typeofColor' changes
  useEffect(() => {
    generateColor();
  }, [typeofColor]);

  return (
    <div
      className="container"
      style={{ width: "100vw", height: "100vh", background: color }}
    >
      <div className="button-group">
        <button onClick={() => setTypeofColor("hex")}>Create HEX Color</button>
        <button onClick={() => setTypeofColor("rgb")}>Create RGB Color</button>
        <button onClick={generateColor}>Generate Random Color</button>
      </div>

      <div className="color-info">
        <h3>{typeofColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}
