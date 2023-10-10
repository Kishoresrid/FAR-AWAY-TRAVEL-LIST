export default function Item({ Item, deleteItems, toggleItems }) {
  return (
    <li>
      <input
        type="checkbox"
        value={Item.packed}
        onChange={() => toggleItems(Item.id)}
      />
      <span style={Item.packed ? { textDecoration: "line-through" } : {}}>
        {Item.quantity} {Item.description}
      </span>
      <button
        onClick={() => {
          deleteItems(Item.id);
        }}
      >
        ❎
      </button>
    </li>
  );
}
