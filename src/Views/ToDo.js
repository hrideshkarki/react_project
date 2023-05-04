import React, { useState } from 'react'
import './ToDo.css'


export default function ToDo() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  function addItem() {

    if (!newItem) {
      alert("Enter an item.");
      return;
    }
    
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem
    };


    setItems(oldList => [...oldList, item]);
    setNewItem("");
  }

  function deleteItem(id) {
    const newArray = items.filter(item => item.id !== id);
    setItems(newArray);

  }



  return (
    <div>
        <h1 align="center">To-Do List App</h1>
        
        <form align="center">
          <input 
          type = "text" 
          placeholder='Add an item'
          value = {newItem}
          onChange= {e => setNewItem(e.target.value)}
          />

          <button onClick= {() => addItem()}>Add</button>
          

          <ul>
            {items.map(item => {
              return (
              <li key={item.id}>{item.value}<button class= "deleteButton" onCLick = {() => deleteItem(item.id)}> ❌</button></li>
              )
            })}
          </ul>
        </form>
    </div>
  )
}
