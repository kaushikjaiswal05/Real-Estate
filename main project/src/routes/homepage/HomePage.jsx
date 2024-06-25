import React from "react";
import "./homepage.css";
import SearchBar from "../../components/searchbar/SearchBar";
import Footer from "../../components/footer/Footer";
import Listings from "../../components/listing/Listings";

function HomePage() {
  return (
    <>
      <div className="homePage">
        <div className="textContainer">
          <div className="wrapper">
            <h1 className="title">FIND YOUR NEW HOME</h1>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              explicabo suscipit cum eius, iure est nulla animi consequatur
              facilis id pariatur fugit quos laudantium temporibus dolor ea
              repellat provident impedit!
            </p>
            <SearchBar />
            <div className="boxes">
              <div className="box">
                <h1>16+</h1>
                <h2>Years of Experience</h2>
              </div>
              <div className="box">
                <h1>200+</h1>
                <h2>Awards Received</h2>
              </div>
              <div className="box">
                <h1>2000+</h1>
                <h2>Properties Sold</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="imgContainer">
          <img src="homepage.png" alt="" />
        </div>
      </div>
      <Listings />
      <Footer />
    </>
  );
}
export default HomePage;
