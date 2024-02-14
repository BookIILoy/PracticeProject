
import Login from "./components/login";
import Cart from "./components/cart";
import About from "./components/about";
import Home from "./components/home";
import Footer from "./components/footer";
import Register from "./components/register";
import { Route, Routes } from "react-router-dom"
import Profile from "./components/profile";
import Shop from "./components/shop";
import Product from "./components/productdetail";
import Payment from "./components/payment";
function App() {
  return (
    <>
      <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/about" element = {<About />} />
          <Route path="/cart" element = {<Cart />} />
          <Route path="/login" element = {<Login />} />
          <Route path="/register" element = {<Register />} />
          <Route path="/profile" element = {<Profile />} />
          <Route path="/shop" element = {<Shop />} />
          <Route path="/product" element = {<Product />}>
          <Route path=":productId" element = {<Product />} />
          </Route>
          <Route path="/payment" element = {<Payment />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
