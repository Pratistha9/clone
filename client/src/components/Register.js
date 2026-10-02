import React, { useState } from "react";

import "./Register.css"; 

function Register() {
  const [name, setName] = useState(""); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
   const handleSubmit = async (e) => {
    e.preventDefault();
    
    const res = await fetch("http://localhost:4000/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    alert(data.message); // "User registered successfully"
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <h2>Sign-in</h2>
      
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input-box"
        />
      </div>

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

      <button type="submit" className="register-btn">Signin</button>
    </form>
  );
}
export default Register;
