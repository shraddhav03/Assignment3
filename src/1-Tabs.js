// Create a Tabs component in React with four city name tabs. On click of each tab show some content about that city.
import { useState } from "react";

const Tab = () => {
  const cities = [
    {
      name: "New York",
      detail: "Capital of U.S."
    },
    {
      name: "Paris",
      detail: "Capital of France"
    },
    {
      name: "Tokyo",
      detail: "Capital of Japan"
    },
    {
      name: "London",
      detail: "Capital of U.K."
    }
  ];

  const [selectedCity, setSelectedCity] = useState();

  const handleClick = (city) => {
    setSelectedCity(city);
  };
  return (
    <>
      <div
        style={{ border: "1px solid black", width: "294px", textAlign: "left" }}
      >
        {cities.map((city) => (
          <>
            <button
              style={{
                border: "1px solid black",
                backgroundColor: "lightyellow",
                padding: "15px"
              }}
              onClick={() => handleClick(city)}
            >
              {city.name}
            </button>
          </>
        ))}
        <div>
          {selectedCity && (
            <div style={{ paddingLeft: "5px" }}>
              <h3>{selectedCity.name}</h3>
              <p>{selectedCity.detail}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Tab;
