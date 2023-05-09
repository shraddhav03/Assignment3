// Create a React component that fetches chats from an API endpoint using useEffect hook and display chat data (chat message) as a list on the screen using the useState hook. Display "You: " before every odd message and "user: " at every even message.
import { useState, useEffect } from "react";
import { fakeFetch } from "./fakefetch";

const ChatRoom = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fakeFetch("https://example.com/api/userchats");
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

  return (
    <>
      <h1>Chat Room</h1>
      {data?.map((message, index) => {
        return (
          <p>
            {index % 2 === 0 ? "User" : "You"}:{message}
          </p>
        );
      })}
    </>
  );
};
export default ChatRoom;
