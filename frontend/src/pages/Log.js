import React, { useState } from "react";
import axios from "axios";
import "./Log.css";

const Log = () => {

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  // handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/admin/login",
        formData
      );

      console.log("Response:", res.data);

      setMessage(res.data.message);
      setIsSuccess(true);

      // clear fields
      setFormData({
        email: "",
        password: ""
      });

    } catch (error) {

      console.log("Error:", error);

      setMessage(
        error.response?.data?.message || "Login failed"
      );
      setIsSuccess(false);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>

        <h2>Admin Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Login</button>

        <p className={`message ${isSuccess ? "success" : "error"}`}>
          {message}
        </p>

      </form>
    </div>
  );
};

export default Log;