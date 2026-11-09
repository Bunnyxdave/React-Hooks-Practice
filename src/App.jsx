import { useState } from "react";
import "./App.css";
import products from "./products";

function App() {
  const [search, setSearch] = useState("");
  const [dispprod, setdispprod] = useState(products);

  const handleSearch = () => {
    const filteredArr = products.filter((elem) => {
      return elem.wear.toLowerCase().includes(search.toLowerCase());
    });

    setdispprod(filteredArr);
  };

  return (
    <div>
      <input
        placeholder="enter wear..."
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={handleSearch}>search</button>

      {dispprod.map((item) => (
        <div key={item.id}>
          {item.name} - {item.wear}
        </div>
      ))}
    </div>
  );
}

export default App;
