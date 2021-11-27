import React, { useState, useEffect } from "react";
import useFirebase from "./../../Hooks/useFirebase";
import { Spinner, Table, Button } from "react-bootstrap";

const MyOrder = () => {
  const [myOrders, setmyOrder] = useState([]);
  const { user, loding } = useFirebase();
  const [isDelete, setIsDelete] = useState(null);
  const email = user.email;

  useEffect(() => {
    fetch(`https://arcane-beach-88686.herokuapp.com/allorders?email=${email}`)
      .then((res) => res.json())
      .then((result) => {
        setmyOrder(result);
      });
  }, [{ loding, isDelete }]);

  //deleter or cancel order

  const handelDeletMyorder = (id) => {
    const result = window.confirm("Do you want cancel your order?");
    if (result) {
      fetch(`https://arcane-beach-88686.herokuapp.com/allorder/${id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((result) => {
          if (result) {
            setIsDelete(result);
          }
        });
    }
  };
  return (
    <div>
      <h1 className="my-4">All Order list</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Car Name</th>
            <th>Car Price</th>
            <th>Order Status</th>
            <th>Cancel Order</th>
          </tr>
        </thead>
        {myOrders.map((order) => (
          <tbody>
            <tr>
              <td>{order.productName}</td>
              <td>{order.price}</td>
              <td>{order?.status}</td>
              <td>
                <Button onClick={() => handelDeletMyorder(order._id)}>
                  Order Cancel
                </Button>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default MyOrder;
