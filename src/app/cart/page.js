"use client";
import CartDetails from "@/components/CartDetails";
import InnerpageHeader from "@/components/InnerpageHeader";
import { cartdata } from "@/data/cartdata";
import React, { useEffect, useState } from "react";

const page = () => {
  const [subtotal, setSubtotal] = useState(0);
  const [productItems, setProductItems] = useState(cartdata);

  // Initialize quantity state for each product
  const initialQuantities = productItems.map(() => 1);
  const [quantities, setQuantities] = useState(initialQuantities);

  // Function to update quantity
  const updateQuantity = (index, newQuantity) => {
    if (newQuantity <= 0) {
      return;
    }
    setQuantities(
      quantities.map((qty, i) => (i === index ? newQuantity : qty))
    );
  };
  const calculateSubtotal = () => {
    return productItems.reduce((total, item, index) => {
      return total + item.price * quantities[index];
    }, 0);
  };
  const removeItem = (index) => {
    const newProductItems = [...productItems];
    const newQuantities = [...quantities];

    newProductItems.splice(index, 1);
    newQuantities.splice(index, 1);

    setProductItems(newProductItems);
    setQuantities(newQuantities);
  };
  useEffect(() => {
    setSubtotal(calculateSubtotal());
  }, [quantities]);
  return (
    <div className="cart">
      <InnerpageHeader pageTitle={"Shopping Cart"} breadcrums={"Account"} />
      <CartDetails
        product={cartdata}
        quantities={quantities}
        updateQuantity={updateQuantity}
        removeItem={removeItem}
      />
    </div>
  );
};

export default page;
