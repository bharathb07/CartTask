import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./pages/home";
import Layout from "./layout";
import CartDetails from "./pages/carts";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />} >
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<CartDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
