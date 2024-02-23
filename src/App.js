import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Product from "./components/Product";
import Basket from "./components/Basket";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </div>
  );
}

export default App;
