// Create a list of Grocery list items with checkboxes and as the user checks out the item those checked-out items should be listed in another section named ‘Completed list’. Add the list of items via an input field.
import { useState } from "react";

const GroceryList = () => {
  const [groceryItem, setGroceryItem] = useState([]);
  const [completedItem, setCompletedItem] = useState([]);
  const [inputItem, setInputItem] = useState("");

  const handleAddToList = () => {
    setGroceryItem([...groceryItem, inputItem]);
    setInputItem("");
  };

  const addToCompleted = (item, e) => {
    setCompletedItem((prev) => [...prev, item]);
    setGroceryItem((prev) =>
      prev.filter((checkedItem) => checkedItem !== item)
    );
  };
  console.log("item", groceryItem);
  return (
    <>
      <h1>Grocery List</h1>
      <label>
        Add Item:
        <input
          type="text"
          value={inputItem}
          onChange={(e) => setInputItem(e.target.value)}
        ></input>
        <button onClick={handleAddToList}>Add</button>
        <div>
          <ul>
            {groceryItem.map((item) => {
              console.log(item);

              return (
                <li key={item}>
                  <input
                    type="checkbox"
                    onChange={(e) => addToCompleted(item, e)}
                  ></input>
                  <label>{item}</label>
                </li>
              );
            })}
          </ul>
        </div>
      </label>
      <h1>Completed List</h1>
      <div>
        <ul>
          {completedItem.map((completedItem) => {
            return <li key={completedItem}>{completedItem}</li>;
          })}
        </ul>
      </div>
    </>
  );
};
export default GroceryList;
