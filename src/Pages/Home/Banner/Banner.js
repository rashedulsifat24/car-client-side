import React from "react";
import img from "../../../img/bannerbgg.png";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

var sectionStyle = {
  width: "100%",
  height: "550px",
  backgroundImage: "url( https://i.ibb.co/MGqHQ5b/02-evo-rwd.webp)",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};
const Banner = () => {
  return (
    <div style={{ height: "550px" }} style={sectionStyle}>
      <div className="row">
        <div className="col-sm-12 col-md-6 text-white mt-5">
          <h1 style={{ fontSize: "70px", lineHeight: "80px" }}>
            It takes
            <br /> <span style={{ color: "#B47F16" }}>Time</span> to become timeless
          </h1>
          <Link to="/gallery">
            <Button className="w-50 mt-3">Browse all Cars now</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
