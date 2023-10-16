import { Counter } from "./components/counter";
import { Home } from "./components/home";
import { MyComponent } from "./components/testing";

function App() {
  // cara nyimpen di local storage, rata2 website pakai local storage
  const onStorage = () => {
    localStorage.setItem("id", 10)
  }

  // cara ambil dari local storage
  const data = localStorage.getItem("id")
  console.log(data);

  return (
    <div>
      {/* <div>Ini Home</div>
      <button onClick={onStorage}>Storage</button>
      <Counter />
      <Home /> */}
      <MyComponent />
    </div>
  );
}

export default App;
