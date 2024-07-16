import React, {  useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({data}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    data(formData.name)
    navigate("/home")
    // navigate("/home", {state: {username : formData.name}})
  };
  return (
    <div className="container">
      <h1>Login</h1>
      <div className="container-2">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={changeHandler}
          placeholder="Enter your Name"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={changeHandler}
          placeholder="Email Address"
          required
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={changeHandler}
          placeholder="Password"
          required
        />
        <button onClick={handleSubmit}>Login</button>
      </div>
    </div>
  );
};

export default Login;
