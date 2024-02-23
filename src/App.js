import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import ProductDetails from "./components/ProductDetails";

import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home />
          }
        />
        <Route path="about" element={<About />}/>
        <Route path="product/:productId" element={<ProductDetails />}/>
      </Routes>
    </div>
  );
}

export default App;
