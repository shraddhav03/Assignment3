// Create a React component that fetches products data from an API endpoint using useEffect hook and display tweets (content, likes, views) as a list on the screen using the useState hook. Add a button on top, on click of which it displays only the tweets with more than 50 likes.
import { useState, useEffect } from "react";
import { fakeFetch } from "./fakeFetch";

const ShowTweets = () => {
  const [data, setData] = useState([]);
  const [clicked, setClicked] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fakeFetch("https://example.com/api/usertweets");
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
    border: "1px solid blue",
    margin: "5px",
    padding: "5px"
  };
  const HandleClick = () => {
    setClicked((clicked) => !clicked);
  };

  const filteredTweet = data.filter(({ likes }) => likes > 50);
  console.log(filteredTweet);

  return (
    <>
      <button onClick={HandleClick}>
        {clicked ? "Show All Tweets" : "Show Tweets with more than 50 likes"}
      </button>
      {clicked
        ? filteredTweet.map(({ id, content, likes, views }) => {
            return (
              <div style={divStyle}>
                <h2>{content}</h2>
                <p>
                  <span>Likes: {likes} </span> <span> Views: {views}</span>
                </p>
              </div>
            );
          })
        : data.map(({ id, content, likes, views }) => {
            return (
              <div style={divStyle}>
                <h2>{content}</h2>
                <p>
                  <span>Likes: {likes} </span> <span> Views: {views}</span>
                </p>
              </div>
            );
          })}
    </>
  );
};
export default ShowTweets;
