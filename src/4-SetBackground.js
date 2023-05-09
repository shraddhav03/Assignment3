// Create a select dropdown that updates the background color of the page when a new color is selected.
import { useState } from "react";

const BackgroundColor = () => {
  const [bgcolor, setBgColor] = useState();

  const divStyle = {
    border: "1px solid black",
    padding: "50px",
    backgroundColor: bgcolor
  };

  const handleChange = (e) => {
    const color = e.target.value;
    console.log("color", color);
    setBgColor(color);
  };

  return (
    <>
      <div>
        <h1>Set Background Color</h1>
        <div style={divStyle}>
          <select onChange={handleChange}>
            <option>White</option>
            <option>Pink</option>
            <option>Tomato</option>
            <option>AquaMarine</option>
          </select>
        </div>
      </div>
    </>
  );
};
export default BackgroundColor;
