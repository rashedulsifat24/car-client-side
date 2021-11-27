import React from "react";
import Footer from "../../Footer/Footer";
import Banner from "../Banner/Banner";
import Experience from "../Experience/Experience";
import Products from "../Products/Products";
import Header from "./../../Header/Header/Header";
import Reviews from "./Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Products></Products>
      <Experience></Experience>
      <Reviews></Reviews>
      <Footer></Footer>
    </div>
  );
};

export default Home;
