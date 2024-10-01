import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Register from "./components/auth/Register.jsx";
import Home from "./components/Home/Home.jsx";
import NavBar from "./components/Header/NavBar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Cart from "./components/cart/Cart.jsx";
import AdminPanel from "./components/admin/AdminPanel.jsx";
import AddProduct from "./components/admin/AddProduct.jsx";
import Account from "./components/User/Account.jsx";

const App = () => {
  const location = useLocation();

  // Hide NavBar and Footer on /auth route
  const hideNavAndFooter = location.pathname === "/auth";

  return (
    <>
      {!hideNavAndFooter && <NavBar />}
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Register />} path="/auth" />
        <Route element={<Cart />} path="/cart" />
        <Route element={<Account />} path="/account" />
        <Route element={<AdminPanel />} path="/admin/adminPanel" />
        <Route element={<AddProduct />} path="/admin/addProduct" />
      </Routes>
      {!hideNavAndFooter && <Footer />}
    </>
  );
};

const AppWrapper = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default AppWrapper;
