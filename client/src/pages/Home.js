import React from "react";
import Jumbotron from "../components/cards/Jumbotron";
import NewArrivals from "../components/home/NewArrivals";
import BestSellers from "../components/home/BestSellers";
import Sale from "../components/home/Sale";
import CategoryList from "../components/category/CategoryList";
import SubList from "../components/sub/SubList";
import { Carousel } from "antd";



const Home = () => {
  return (
    <>
    <Sale/>   
    <CategoryList /> 
      <NewArrivals />

      <h4 className="text-center p-3 mt-5 mb-5 display-3 jumbotron">
        Best Sellers
      </h4>
      <BestSellers />

      <h5 className="text-center p-3 mt-5 mb-5 display-3 jumbotron">
      <i disabled>@site developer</i>
      <Jumbotron text={["Avinash: Backend Developer", "Vikash: Frontend", "Anjali: Frontend"]} />
      </h5>      
     <center> © 2021 Legawise. All rights Reserved.
     <br/>
      The materials on this website are intended for Educational purposes only. 
      They are neither intended to be nor should they be interpreted as, legal advice or opinion.</center>

    </>
  );
};

export default Home;
