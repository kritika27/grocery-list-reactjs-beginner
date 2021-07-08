import React from "react";
import "./Item.css";

const Item = ({ id, item, list,setEdit,setEditId, setItem, setList, complete }) => {
  const remove = (id) => {
    setList(list.filter((el) => el.id !== id));
  };

  const handleComplete = (id) => {
    setList(
      list.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            complete: !item.complete,
          };
        }
        return item;
      })
    );
  };


  //Edit Todo
  const handleItem = (id) => {
    const editItem=list.find(el=>el.id===id)
    setItem(editItem.item);
    setEdit(true);
    setEditId(id);
  };

  return (
    <div className="item">
      <input
        type="text"
        value={item}
        style={{
          border: "none",
          outline: "none",
          backgroundColor: "transparent",
          color: "white",
          fontSize: "20px",
        }}
        
        className={complete ? "complete" : ""}
      />
      <img
        onClick={() => handleComplete(id)}
        src="https://img.icons8.com/offices/40/000000/checked-2--v2.png"
        alt="complete task"
      />
      <button onClick={()=>handleItem(id)}>Edit</button>
      <img
        onClick={() => remove(id)}
        src="https://img.icons8.com/color/48/000000/trash.png"
        alt="Delete"
      />
    </div>
  );
};
export default Item;
