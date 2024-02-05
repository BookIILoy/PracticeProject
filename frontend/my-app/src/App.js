
import Login from "./components/login";
import Cart from "./components/cart";
import About from "./components/about";
import Home from "./components/home";
import Footer from "./components/footer";
import Register from "./components/register";
import { Route, Routes } from "react-router-dom"
function App() {
  return (
    <>
      <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/about" element = {<About />} />
          <Route path="/cart" element = {<Cart />} />
          <Route path="/login" element = {<Login />} />
          <Route path="/register" element = {<Register />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
