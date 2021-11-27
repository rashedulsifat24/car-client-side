import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import GalleryProduct from "./../GalleryProduct/GalleryProduct";
import Header from "./../../Header/Header/Header";

const Gallery = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://arcane-beach-88686.herokuapp.com/gallery/products")
      .then((res) => res.json())
      .then((result) => {
        setProducts(result);
      });
  }, []);
  return (
    <div>
      <Header></Header>
      <div className="container">
        <h1 className="my-5">Our Cars</h1>

        <Row xs={1} md={2} lg={3} className="g-4">
          {products.map((product) => (
            <GalleryProduct
              key={product._id}
              product={product}
            ></GalleryProduct>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Gallery;
