import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/about");
  };
  return (
    <div>
      <div onClick={onClick}>navigate about</div>
    </div>
  );
};

export default Home;
