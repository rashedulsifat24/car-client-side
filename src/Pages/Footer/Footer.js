import React from "react";

const Footer = () => {
  return (
    <div className="bg-dark text-warning pt-5  pb-2">
      <div className="row mb-3">
        <div className="col-lg-4 col-md-12">
          <p>Bangladesh</p>
          <p>Savar, Dhaka</p>
        </div>
        <div className="col-lg-4 col-md-12">
          <img
            className="img-fluid"
            src="https://i.ibb.co/zxYQmTj/logo.webp"
          />
        </div>
        <div className="col-lg-4 col-md-12">
          <p>100% Quality Product</p>
          <p>Call Now: 01000000000</p>
        </div>
      </div>

      <p className="pb-3 mt-5">Made with ❤️ by Rashedul Islam</p>
    </div>
  );
};

export default Footer;
