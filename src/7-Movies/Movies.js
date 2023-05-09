// Given a list of movies as an array of objects with properties id, title, rating, year and category. Create a React component to list down all movies with rating and year. Create radio buttons to filter by category. Create a dropdown to filter by rating. Fake fetch has been provided.
import { useState, useEffect } from "react";
import { fakeFetch } from "./fakeFetch";

const MovieDetails = () => {
  const [data, setData] = useState([]);

  const [categoryData, setCategoryData] = useState("All");
  const [ratingData, setRatingData] = useState("All");

  const fetchData = async () => {
    try {
      const response = await fakeFetch("https://example.com/api/movies");
      if (response.status === 200) {
        setData(response.data);
      }
    } catch (e) {
      if (e.status) {
        console.error(e);
      }
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const divStyle = {
    border: "1px solid grey",
    margin: "5px",
    padding: "5px"
  };

  const filteredCategory = data.reduce(
    (acc, curr) =>
      acc.includes(curr.category) ? acc : [...acc, curr.category],
    ["All"]
  );
  const filteredRating = data.reduce(
    (acc, curr) => (acc.includes(curr.rating) ? acc : [...acc, curr.rating]),
    ["All"]
  );
  const handleRatingChange = (e) => {
    setRatingData(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategoryData(e.target.value);
  };

  const filteredMovieData = data.filter((movie) => {
    return (
      (categoryData === "All" ? data : movie.category === categoryData) &&
      (ratingData === "All" ? data : movie.rating >= ratingData)
    );
  });

  return (
    <>
      <h1>Movies List</h1>
      <div style={divStyle}>
        <label>Category Filter:</label>
        {filteredCategory.map((category) => {
          return (
            <label>
              <input
                type="radio"
                name="category"
                value={category}
                onChange={handleCategoryChange}
              ></input>
              {category}
            </label>
          );
        })}
      </div>
      <div style={divStyle}>
        <label>Rating Filter:</label>
        <select onChange={handleRatingChange}>
          {filteredRating.map((rating) => {
            return <option>{rating}</option>;
          })}
        </select>
      </div>
      {filteredMovieData.length > 0 ? (
        filteredMovieData?.map(({ title, year, rating }) => {
          return (
            <div>
              <h3>{title}</h3>
              <p>
                <span> Rating: {rating} </span>
                <span> Year: {year}</span>
              </p>
            </div>
          );
        })
      ) : (
        <p>No Movies Found</p>
      )}
    </>
  );
};
export default MovieDetails;
