import React, { useState } from "react";
import "./App.css";
import Item from "./components/Item";
import { v4 as uuidv4 } from "uuid";

const arr = () => {
  let data = localStorage.getItem("data");
  if (data) return JSON.parse(localStorage.getItem("data"));
  else return [];
};

function App() {
  const [item, setItem] = useState("");
  const [list, setList] = useState(arr);

  const handleSubmit = (e) => {
    const newItem = {
      id: uuidv4(),
      item: item,
      complete: false,
    };
    e.preventDefault();
    if (item) {
      setList([...list, newItem]);
      setItem("");
    }
  };

  React.useEffect(() => {
    localStorage.setItem("data", JSON.stringify(list));
  }, [list]);

  const handleChange = (e) => {
    setItem(e.target.value);
  };

  return (
    <div className="App">
      <h1>Grocery List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={item} onChange={handleChange} />
        <button className="btn" type="submit">
          Add Items
        </button>
        <br></br>
        <br></br>
      </form>
      <div>
        {list.map((c, id) => (
          <Item
            key={id}
            id={c.id}
            items={c.item}
            list={list}
            setList={setList}
            complete={c.complete}
            setItem={setItem}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
