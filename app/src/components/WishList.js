import React, { useState } from "react";
import "./WishList.css";
function WishList() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");

  function addItem() {
    if (text.trim().length === 0) {
      return;
    }

    const newItem = {
      text: text,
      priority: 1,
    };

    setItems([...items, newItem]);
    setText("");
  }

  function removeItem(index) {
    setItems(items.filter((_, i) => i !== index));
  }

  function updatePriority(index, priority) {
    setItems(
      items.map((item, i) => {
        if (i === index) {
          return { ...item, priority: priority };
        }
        return item;
      })
    );
  }

  function moveItemToTop(index) {
    setItems([
      items[index],
      ...items.slice(0, index),
      ...items.slice(index + 1),
    ]);
  }

  return (
    <div>
      <h1>Wish List</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addItem();
        }}
      >
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button>Add Item</button>
      </form>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <div>
              {item.text}{" "}
              <button onClick={() => removeItem(index)}>Remove</button>{" "}
              <button onClick={() => moveItemToTop(index)}>Move to Top</button>
            </div>
            <div>
              Priority:{" "}
              <input
                type="number"
                value={item.priority}
                onChange={(e) => updatePriority(index, e.target.value)}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WishList;
