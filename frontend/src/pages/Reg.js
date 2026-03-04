
import React, { useState } from "react";
import axios from "axios";
import "./Reg.css";

const Reg = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [message, setMessage] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("Registration Data", formData);
        console.log("Username", formData.username);
        console.log("Email", formData.email);
        console.log("Password", formData.password);
        console.log("Confirm Password", formData.confirmPassword);

        try {
            const res = await axios.post(
                "http://localhost:5000/admin/register",
                formData
            );

            setMessage(res.data.message);
            setIsSuccess(true);
            setFormData({
                username: "",
                email: "",
                password: "",
                confirmPassword: ""
            });

            console.log("Registration successful:", res.data);

        } catch (err) {
            setMessage(err.response?.data?.message || "Something went wrong");
            setIsSuccess(false);
        }
    };

    return (
        <div className="register-container">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />

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

                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                />

                <button type="submit">Register</button>

                {message && (
                    <p className={`message ${isSuccess ? "success" : "error"}`}>
                        {message}
                    </p>
                )}
            </form>
        </div>
    );
};

export default Reg;
