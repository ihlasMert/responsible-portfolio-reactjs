/** @format */

import React from "react";
import "./Home.css";
import Footer from "../Footer/Footer";
import Profile from "./Profile";

const Home = () => {
  return (
    <div className='home-container'>
      <Footer />
      <Profile />
    </div>
  );
};

export default Home;
