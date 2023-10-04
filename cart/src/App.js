import { useDispatch } from "react-redux";
import { HomePage } from "./pages/homePage";
import { useEffect } from "react";
import { setData } from "./redux/cart"

function App() {
  const dispatch = useDispatch();

  const getData = async () => {
    try {
      const data = await fetch("http://localhost:2000/cart");
      const jsonData = await data.json();
      dispatch(setData(jsonData))
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <HomePage />
    </div>
  );
}

export default App;
