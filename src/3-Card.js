// Create a slider input in React which will set the border radius of a card on a change in the value of the range.
import { useState } from "react";

const Card = () => {
  const [radiusValue, setRadiusValue] = useState("0");

  const cardStyle = {
    border: "solid 1px blue",
    borderRadius: radiusValue + "px",
    padding: "50px"
  };

  const changeHandler = (e) => {
    setRadiusValue(e.target.value);
  };

  return (
    <>
      <div style={cardStyle}>
        <h1>Card with rounded corners</h1>
        <label>Border Radius:</label>
        <input
          type="range"
          name="radius"
          value={radiusValue}
          min="0"
          max="100"
          step="1"
          onChange={changeHandler}
        ></input>
      </div>
    </>
  );
};

export default Card;
