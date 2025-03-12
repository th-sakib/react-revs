import React, { useState } from "./react";
import { render } from "./react-dom";

import "./App.css";
import Card from "./components/Card";

export default function App() {
  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(4);

  return (
    <div>
      <h1>{value}</h1>
      <button onclick={() => setValue(value + 1)}>increase</button>
      <h1>{value2}</h1>
      <button onclick={() => setValue2(value2 + 1)}>increase</button>
    </div>
  );
}

// fetch("https://dummyjson.com/products")
//   .then((res) => res.json())
//   .then((data) => {
//     render(
//       <div className="container">
//         {data.products.map((product) => {
//           return (
//             <Card
//               key={product.id}
//               title={product.title}
//               brand={product.brand}
//               price={product.price}
//               image={product.thumbnail}
//             />
//           );
//         })}
//       </div>,
//       document.getElementById("root")
//     );
//   });

render(<App />, document.getElementById("root"));
