import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useCart } from "../context/CartContext";
import Header from "../components/Header";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const token = localStorage.getItem("token");

  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetails();
  }, [id]);

  if (!product) return <div className="text-center mt-5">Loading...</div>;

  return (
    <>
      {/* if token is available then header is show */}
      {token && <Header />}
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src={product.image}
              alt={product.title}
              className="img-fluid"
              style={{ maxHeight: "400px", objectFit: "contain" }}
            />
          </div>
          <div className="col-md-6">
            <h2>{product.title}</h2>
            <p className="text-muted">{product.category}</p>
            <h4 className="text-success">${product.price}</h4>
            <p>{product.description}</p>
            <button
              className="btn btn-primary"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
