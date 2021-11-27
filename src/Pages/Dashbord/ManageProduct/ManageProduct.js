import React, { useState, useEffect } from "react";
import { CircularProgress } from "@mui/material";
import useFirebase from "./../../../Hooks/useFirebase";
import { Table, Button } from "react-bootstrap";
const ManageProduct = () => {
  const [products, setAllProduct] = useState([]);
  const { loding } = useFirebase();
  const [delet, setDelete] = useState();
  if (loding) {
    <CircularProgress />;
  }
  useEffect(() => {
    fetch(`https://arcane-beach-88686.herokuapp.com/gallery/products`)
      .then((res) => res.json())
      .then((result) => {
        setAllProduct(result);
      });
  }, [delet]);
  const deleteProduct = (id) => {
    const result = window.confirm("Do you want cancel your order?");
    if (result) {
      fetch(`https://arcane-beach-88686.herokuapp.com/gallery/productsr/${id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((result) => {
          if (result) {
            setDelete(result);
          }
        });
    }
  };
  return (
    <div>
      <h2 className="my-3 color-success">Manage Car</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Car </th>
            <th>Car Name</th>
            <th>Car Price</th>
            <th>Delete Car</th>
          </tr>
        </thead>
        {products.map((order) => (
          <tbody key={order._id}>
            <tr>
              <td>
                <img src={order.img} style={{ width: "80px" }} />
              </td>
              <td>{order.name}</td>
              <td>{order.price}</td>
              <td>
                <Button onClick={() => deleteProduct(order._id)}>
                  Delete Car
                </Button>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default ManageProduct;
