export default function Stats({ numItems, numPacked }) {
  if (numItems === 0)
    return <p className="stats">Start adding items in your list</p>;

  const percent = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percent !== 100
          ? `You have ${numItems} items on your list, and you already packed 
        ${numPacked} items ${percent} %.`
          : "You are ready to go🧳"}
      </em>
    </footer>
  );
}
