import React from "react";
import { Button } from "react-bootstrap";

const Experience = () => {
  return (
    <div className="my-5">
      <h2 className="my-4 py-5" style={{ fontSize: "40px" }}>
        Best Model in The Market
      </h2>
      <div className="row container">
        <div className="col-lg-6">
          <h2>
          HURACÁN
 <br />
            <span> BASED ON A TRUE STORY  </span>{" "}
          </h2>
          <p className="my-4">
          The Huracán EVO is the evolution of the most successful V10-powered Lamborghini ever.
          </p>
          <Button className="m-2 P-2">Explore all Models</Button>
          <br />
          <img
            className="my-5"
            src="https://i.ibb.co/zxYQmTj/logo.webp"
          />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6">
          <img
            className="img-fluid"
            src="https://i.ibb.co/bFS8zCV/lamborghini-huracan.webp"
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
