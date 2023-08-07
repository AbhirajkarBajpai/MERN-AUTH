import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signup.css"; // Import your CSS file for styling
import axios from "axios";

const Signup = () => {
  const history = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  axios.defaults.withCredentials=true;

  const sendRequest = async () => {
    const res = await axios
      .post("http://localhost:5000/api/signup", {
        name: name,
        email: email,
        password: password,
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const handleSignup = (e) => {
    e.preventDefault();
    // send http request
    sendRequest().then(() => history("/login"));
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSignup}>
        <h2>Sign Up</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
        <p>
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
