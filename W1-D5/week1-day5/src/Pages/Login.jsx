import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("mor_2314");
  const [password, setPassword] = useState("83r5^_");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("https://fakestoreapi.com/auth/login", {
        username,
        password,
      });

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        alert("🎉 Login Successful!");
        window.location.reload();
      }
    } catch (error) {
      alert("Login Failed. please login provided credentials!");

      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-vh-100 d-flex align-items-center justify-content-center"
      style={{
        backgroundColor: "#f0fff4", // Soft eye-protective green background
        backgroundImage: "linear-gradient(to bottom right, #f0fff4, #e6fffa)",
      }}
    >
      <div
        className="card shadow-lg rounded-lg overflow-hidden border-0"
        style={{
          width: "100%",
          maxWidth: "420px",
          transition: "all 0.3s ease",
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(255, 255, 255, 0.85)",
        }}
      >
        <div
          className="card-header py-3"
          style={{
            backgroundColor: "#38a169",
            color: "white",
          }}
        >
          <h3 className="text-center mb-0 font-weight-bold">Welcome Back</h3>
        </div>
        <div className="card-body p-5">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="form-label fw-semibold text-gray-600">
                Username
              </label>
              <input
                type="text"
                className="form-control py-2 px-3 rounded-lg border-1 border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-200"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                style={{
                  transition: "all 0.3s ease",
                }}
              />
            </div>
            <div className="mb-4">
              <label className="form-label fw-semibold text-gray-600">
                Password
              </label>
              <input
                type="password"
                className="form-control py-2 px-3 rounded-lg border-1 border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-200"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{
                  transition: "all 0.3s ease",
                }}
              />
            </div>
            <button
              type="submit"
              className="btn w-100 py-2 rounded-lg fw-bold text-white border-0"
              disabled={loading}
              style={{
                backgroundColor: "#38a169",
                transition: "all 0.3s ease",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                backgroundImage: "linear-gradient(to right, #38a169, #48bb78)",
              }}
              onMouseOver={(e) => (e.target.style.opacity = "0.9")}
              onMouseOut={(e) => (e.target.style.opacity = "1")}
            >
              {loading ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Logging in...
                </>
              ) : (
                "Login"
              )}
            </button>
          </form>
          <div className="text-center mt-4">
            <small className="text-muted">
              Don't have an account?{" "}
              <a href="/error" className="text-green-600 fw-semibold">
                Sign up
              </a>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
