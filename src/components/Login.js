import React, { useState } from "react";
import "./Login.css"; 

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login with:", email, password);
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-box"
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-box"
        />
      </div>

      <button type="submit" className="login-btn">Login</button>
    </form>
  );
}
export default Login;
