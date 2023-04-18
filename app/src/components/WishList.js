import React, { useState } from "react";
import "./WishList.css";
function WishList() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");
  const [p,setP]=useState(0);

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
    setItems(items.filter((items,i) => i!==index));
  }

  function updatePriority(index, priority) {
    let x=prompt("Enter updated priority!");
    x=parseInt(x);

    setItems(
      items.map((item, i) => {
        if (i === index) {
          return { ...item, priority: x };
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
              <button onClick={(e) => updatePriority(index)}>
                update priority
                </button>
                <label>{item.priority}</label>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WishList;
