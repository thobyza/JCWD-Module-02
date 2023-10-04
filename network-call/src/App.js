import { useEffect, useState } from "react";
import axios from 'axios'
import { Formulir } from "./components/from";

function App() {
  const [list, setList] = useState([]);

  const getData = async () => {

    try {

      // **using fetch
      // const response = await fetch("https://jsonplaceholder.typicode.com/posts")
      // const data = await response.json();

      // > setList untuk fetch
      // setList(data)

      // ---------------------

      // **using axios
      // axios.get > method dari axios untuk ambil data
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts")

      // or if you only need to get the data > do object desctructuring
      // const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts")

      // > setList untuk axios
      // untuk method 1 
      setList(response.data)

      // untuk method 2 (data doang)
      // setList(data)

    } catch (err) {
      console.log(err);
    }
  }

  console.log(list);

  // hooks untuk menjalankan fetch data ketika pertama kali web dibuka
  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <h1>This is Home :D</h1>
      <Formulir />
    </div>
  );
}

export default App;
