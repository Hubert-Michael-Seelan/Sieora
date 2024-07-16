import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import { useState } from "react";


const App = () => {
  const[username, setUsername] = useState("");
  const handleName = (name) =>{
    setUsername(name)
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login data={handleName} />} />
        <Route path="/home" element={<Home props = {username}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
