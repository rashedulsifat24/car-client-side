import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "react-bootstrap";
import { Alert } from "@mui/material";
const AddProduct = () => {
  const [addProduct, setAddProduct] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.status = "pendding";
    fetch(`https://arcane-beach-88686.herokuapp.com/addproduct`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          setAddProduct(true);
          reset();
        }
      });
  };
  return (
    <div>
      <h2>Add product</h2>
      <form className="shipping-form fs" onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="product-name" {...register("name")} />
        <br />

        <input placeholder="prodcut-price" {...register("price")} />
        <br />
        <input
          placeholder="product -description"
          defaultValue=""
          {...register("des")}
        />

        <br />
        <input placeholder="product-img" {...register("img")} />
        <br />

        <br />
        <Button type="submit">Select Car</Button>
      </form>
      {addProduct && (
        <Alert severity="success">Car selected successfully</Alert>
      )}
    </div>
  );
};

export default AddProduct;
