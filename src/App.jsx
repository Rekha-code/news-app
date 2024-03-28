import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import NewsBorad from "./Components/NewsBorad";

function App() {
  const [category, setCategory] = useState("general");
  return (
    <>
      <Navbar setCategory={setCategory} />
      <NewsBorad category={category} />
    </>
  );
}

export default App;
