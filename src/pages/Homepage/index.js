import React from "react";
import Electronics from "../../assets/icons/electronics.svg";
import HomeAppliances from "../../assets/icons/home_appliances.svg";
import Vechicles from "../../assets/icons/vehicles.svg";
import Sports from "../../assets/icons/sports.svg";
import Stationaries from "../../assets/icons/stationaries.svg";
import WomensBeauty from "../../assets/icons/womens_beauty.svg";
import MensFashion from "../../assets/icons/mens_fashion.svg";
import Pets from "../../assets/icons/pets.svg";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div className="homepage">
      <div className="homepage-hero">
        <h1>
          Welcome to <span>Polico</span>
        </h1>
        <h3>An easy-to-use marketplace for students' second hand products.</h3>
      </div>
      <div className="homepage-categories margin-x">
        <div className="homepage-categories-heading">
          <h3>Featured Categories</h3>
          <p>Get Your Desired Product from Featured Category!</p>
        </div>
        <div className="homepage-categories-wrapper">
          <Link className="homepage-categories-wrapper-item">
            <img src={Electronics} alt="" />
            <h4>Electronics</h4>
          </Link>
          <Link className="homepage-categories-wrapper-item">
            <img src={HomeAppliances} alt="" />
            <h4>Home & Appliances</h4>
          </Link>
          <Link className="homepage-categories-wrapper-item">
            <img src={Vechicles} alt="" />
            <h4>Vehicles</h4>
          </Link>
          <Link className="homepage-categories-wrapper-item">
            <img src={Sports} alt="" />
            <h4>Vehicles</h4>
          </Link>

          <Link className="homepage-categories-wrapper-item">
            <img src={Stationaries} alt="" />
            <h4>Stationaries</h4>
          </Link>
          <Link className="homepage-categories-wrapper-item">
            <img src={WomensBeauty} alt="" />
            <h4>Women's Fashion & Beauty</h4>
          </Link>
          <Link className="homepage-categories-wrapper-item">
            <img src={MensFashion} alt="" />
            <h4>Men's Fashion & Grooming</h4>
          </Link>
          <Link className="homepage-categories-wrapper-item">
            <img src={Pets} alt="" />
            <h4>Pets & Animals</h4>
          </Link>
        </div>
      </div>
    </div>
  );
}
