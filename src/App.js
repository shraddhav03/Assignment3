import "./styles.css";

import Tab from "./1-Tabs";
import GroceryList from "./2-GroceryList";
import Card from "./3-Card";
import BackgroundColor from "./4-SetBackground";
import ChatRoom from "./5-ChatRoom/ChatRoom";
import ShowTweets from "./6-Tweets/Tweets";
import MovieDetails from "./7-Movies/Movies";

export default function App() {
  return (
    <div className="App">
      <h1>Assignment Three</h1>
      <Tab />
      <hr />
      <GroceryList />
      <hr />
      <Card />
      <hr />
      <BackgroundColor />
      <hr />
      <ChatRoom />
      <hr />
      <ShowTweets />
      <hr />
      <MovieDetails />
    </div>
  );
}
