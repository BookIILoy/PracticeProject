import Header from "./components/header"
import Login from "./components/login";
import Cart from "./components/cart";
import About from "./components/about";
import Home from "./components/home";
import { Route, Routes } from "react-router-dom"
function App() {
  return (
    <>
      <Header />
      <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/about" element = {<About />} />
          <Route path="/cart" element = {<Cart />} />
          <Route path="/login" element = {<Login />} />
      </Routes>
    </>
  );
}

export default App;
