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

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(
                "http://localhost:5000/admin/login",
                formData
            );

            setMessage(res.data.message);
            setIsSuccess(true);

            console.log("Email:", formData.email);
            console.log("Password:", formData.password);
            console.log("User Data:", res.data);

            setFormData({ email: "", password: "" });

        } catch (err) {
            setMessage(err.response?.data?.message || "");
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
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />

                <button type="submit">Login</button>

                {message && (
                    <p className={`message ${isSuccess ? "success" : "error"}`}>
                        {message}
                    </p>
                )}
            </form>
        </div>
    );
};

export default Log;
