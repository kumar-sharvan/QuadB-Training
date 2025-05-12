import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const token = localStorage.getItem("token");

  //filter products:
  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, []);

  return (
    <>
      {token && <Header setSearchQuery={setSearchQuery} />}

      <div className="container mt-4">
        {loading && (
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
        {filteredProducts.length === 0 ? (
          <h5 className="text-center text-muted">No products found</h5>
        ) : (
          <div className="row g-4">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="col-12 col-sm-6 col-md-4 col-lg-3"
              >
                <div className="card h-100 shadow-sm">
                  <img
                    src={product.image}
                    className="card-img-top p-3"
                    alt={product.title}
                    style={{ height: "200px", objectFit: "contain" }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h6
                      className="card-title text-truncate"
                      title={product.title}
                    >
                      {product.title}
                    </h6>
                    <span className="badge bg-success w-fit mb-2">
                      ${product.price}
                    </span>
                    <Link
                      to={`/product/${product.id}`}
                      className="btn btn-outline-primary btn-sm w-100"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ProductList;
