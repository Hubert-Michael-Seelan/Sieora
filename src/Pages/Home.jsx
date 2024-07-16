import React from "react";
// import { useLocation } from "react-router-dom";

const Home = ({props}) => {
  // const location = useLocation();
  // const { username } = location.state || { username: "" };

  return (
    <div className="home-container">
      <h1>Welcome {props}!</h1>
    </div>
  );
};

export default Home;
