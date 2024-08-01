import List from "./List.jsx"

function App() {
  const fruits = ["banana", "pineApple", "Cherry"]

  return (
    <div>
      <h1>Fruit List</h1>
      <List items= {fruits} />
    </div>
  );
}

export default App;
