import React, { useState } from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart, updateQty, clearCart } = useCart();
  const [showPopup, setShowPopup] = useState(false);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleCheckout = () => {
    clearCart();
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 4000);
  };

  if (cartItems.length === 0) {
    return (
      <div className="container mt-5 text-center">
        <h3>Your cart is empty 🛒</h3>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h3 className="mb-4">🛒 Your Cart</h3>
      {cartItems.map((item) => (
        <div key={item.id} className="card mb-3 shadow-sm p-3">
          <div className="d-flex align-items-center">
            <img
              src={item.image}
              alt={item.title}
              width="80"
              height="80"
              className="me-3"
              style={{ objectFit: "contain" }}
            />
            <div className="flex-grow-1">
              <h6>{item.title}</h6>
              <p className="mb-1">${item.price}</p>
              <div className="d-flex align-items-center">
                <button
                  className="btn btn-sm btn-outline-secondary me-2"
                  onClick={() => updateQty(item.id, item.qty - 1)}
                >
                  -
                </button>
                <span>{item.qty}</span>
                <button
                  className="btn btn-sm btn-outline-secondary ms-2"
                  onClick={() => updateQty(item.id, item.qty + 1)}
                >
                  +
                </button>
              </div>
            </div>
            <button
              className="btn btn-danger btn-sm ms-3"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <div className="text-end">
        <h5>Total: ${total.toFixed(2)}</h5>
        <button className="btn btn-success" onClick={handleCheckout}>
          Checkout
        </button>
      </div>

      {showPopup && (
        <div className="alert alert-success position-fixed top-0 end-0 m-3">
          🎉 Order placed successfully!
        </div>
      )}
    </div>
  );
};

export default Cart;
