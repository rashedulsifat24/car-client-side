import React, { useState, useEffect } from "react";
import { Card, Col, Row, Button, Spinner } from "react-bootstrap";
import Product from "../Home/Product/Product";
import useFirebase from "./../../../Hooks/useFirebase";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://arcane-beach-88686.herokuapp.com/products/")
      .then((res) => res.json())
      .then((result) => {
        setProducts(result);
      });
  }, []);
  return (
    <div className="container mb-5">
      <h1 className="my-5">Our Cars</h1>

      <Row xs={1} md={2} lg={3} className="g-4">
        {products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </Row>
    </div>
  );
};

export default Products;
