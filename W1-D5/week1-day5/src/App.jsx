import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./Pages/Login";
import ProductList from "./Pages/ProductList";
import ProductDetails from "./Pages/ProductDetails";
import Header from "./components/Header";
import Cart from "./Pages/Cart";

const App = () => {
  const token = localStorage.getItem("token");

  return (
    <Router>
      {/* Show Header only if token exists (i.e., user is logged in) */}
      {/* {token && <Header />} */}

      <main>
        <Routes>
          {/* Login Route */}
          <Route
            path="/"
            element={token ? <Navigate to="/products" /> : <Login />}
          />

          {/* Product List */}
          <Route
            path="/products"
            element={token ? <ProductList /> : <Navigate to="/" />}
          />

          {/* Product Details */}
          <Route
            path="/product/:id"
            element={token ? <ProductDetails /> : <Navigate to="/" />}
          />

          {/* Cart Page */}
          <Route
            path="/cart"
            element={token ? <Cart /> : <Navigate to="/" />}
          />
          <Route path="/error" element={<Error />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
