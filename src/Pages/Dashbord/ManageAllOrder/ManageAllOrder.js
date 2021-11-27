import React, { useState, useEffect } from "react";
import useFirebase from "./../../../Hooks/useFirebase";
import { Spinner, Table, Button } from "react-bootstrap";
import { Box } from "@mui/material/Box";
import { Alert } from "@mui/material";
const ManageAllOrder = () => {
  const [allOrders, setallOrder] = useState([]);
  const { user, loding } = useFirebase();
  const [isDelete, setIsDelete] = useState(null);
  const [orderStatus, setOrderStatus] = useState(null);
  const email = user.email;

  useEffect(() => {
    fetch("https://arcane-beach-88686.herokuapp.com/allorder")
      .then((res) => res.json())
      .then((result) => {
        setallOrder(result);
      });
  }, [{ isDelete }]);

  //updet order statud
  const handelUpdetOrder = (id) => {
    fetch(`https://arcane-beach-88686.herokuapp.com/updetorder/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          setOrderStatus(result);
        }
      });
  };
  return (
    <div>
      <h1 className="my-4">Manage all orders</h1>
      {orderStatus && (
        <Alert severity="success">
          This car is now shipping mode — <strong>check it out!</strong>
        </Alert>
      )}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Car Name</th>
            <th>Car Price</th>
            <th>Order Status</th>
            <th>Update order</th>
          </tr>
        </thead>
        {allOrders.map((order) => (
          <tbody key={order._id}>
            <tr>
              <td>{order.productName}</td>
              <td>{order.price}</td>
              <td>{order?.status}...</td>
              <td>
                <Button onClick={() => handelUpdetOrder(order._id)}>
                  Update order
                </Button>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default ManageAllOrder;
