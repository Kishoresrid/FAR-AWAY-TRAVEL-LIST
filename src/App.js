import Logo from "./Components/Logo";
import Form from "./Components/Form";
import Packinglist from "./Components/Packing_list";
import Stats from "./Components/Stats";
import { useState } from "react";
function App() {
  const [items, setItems] = useState([]);
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  function addItems(item) {
    setItems((items) => [...items, item]);
  }
  function deleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function toggleItems(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function deleteList() {
    const Confirm = window.confirm("Are you sure want to delete all items");
    if (Confirm) setItems([]);
  }
  return (
    <div className="App">
      <Logo />
      <Form addItemsArr={addItems} />
      <Packinglist
        items={items}
        deleteItems={deleteItems}
        toggleItems={toggleItems}
        deleteList={deleteList}
      />
      <Stats numItems={numItems} numPacked={numPacked} />
    </div>
  );
}

export default App;
