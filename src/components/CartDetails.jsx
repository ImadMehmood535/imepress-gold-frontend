"use client";
import React, { useEffect, useState } from "react";
import { TiArrowBack } from "react-icons/ti";
import { GrUpdate } from "react-icons/gr";
import { Header_logo } from "@/assets";
import useProductStore from "@/store/products";
import Image from "next/image";
import Link from "next/link";

const CartDetails = () => {
  const { products, removeFromCart, updateProduct } = useProductStore();
  const [totalPrice, setTotalPrice] = useState(0);

  const handleIncrement = (productId) => {
    updateProduct({
      id: productId,
      quantity:
        products.find((product) => product.id === productId).quantity + 1,
    });
  };

  const handleDecrement = (productId) => {
    const currentQuantity = products.find(
      (product) => product.id === productId
    ).quantity;
    if (currentQuantity > 1) {
      updateProduct({ id: productId, quantity: currentQuantity - 1 });
    }
  };

  useEffect(() => {
    let totalPrice = 0;
    products.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });
    setTotalPrice(totalPrice);
  }, [products]);

  return (
    <div className="CartDetails pt-24 py-12">
      <div className="container w-full px-5 xl:w-[80%] mx-auto">
        <div className="flex justify-between flex-col md:flex-row">
          <div className="w-full md:w-4/6 bg-white">
            <div className="flex mb-5 pb-5 border-b-1">
              <h3 className="font-bold text-xl capitalize w-2/5">Products</h3>
              <h3 className="font-bold text-xl capitalize w-2/5 hidden sm:block">
                Price
              </h3>
              <h3 className="font-bold text-xl capitalize w-2/5 hidden sm:block">
                Quantity
              </h3>
              <h3 className="font-bold text-xl capitalize w-2/5 hidden sm:block">
                Total Price
              </h3>
            </div>

            {products?.map((item, index) => (
              <div
                key={index}
                className="hover:bg-gray-100 py-4 px-4 border-b-1 -mx-1"
              >
                <div className="flex flex-wrap flex-col sm:flex-row items-start sm:items-center">
                  <div className="flex w-full sm:w-2/5">
                    <Link href={`/shop/${item?.slug}`} className="w-36">
                      <Image
                        src={item?.imageUrl}
                        alt="Product Image"
                        width={100}
                        height={100}
                        className="min-h-[100px]"
                      />
                    </Link>
                    <div className="flex flex-col  ml-4 flex-grow">
                      <span className="font-bold text-base mb-3">
                        {item?.name}
                      </span>
                      <span className="text-[#A0A0A0] font-medium text-sm mb-3">
                        {item?.brand}
                      </span>
                      <div
                        onClick={() => removeFromCart(item?.id)}
                        className="font-semibold text-[#121212] hover:text-red-500 text-xs cursor-pointer"
                      >
                        Remove
                      </div>
                    </div>
                  </div>

                  <div className="flex w-full sm:w-1/5 px-5 sm:px-0 my-3 sm:justify-center">
                    <div className="block sm:hidden mr-2">
                      <b>Price</b>
                    </div>
                    <span className="text-center font-medium text-base text-[#616161]">
                      <span className="price">${item?.price}</span>
                    </span>
                  </div>

                  <div className="flex w-full sm:w-1/5 px-5 sm:px-0 my-3 sm:justify-center ">
                    <div className="flex items-center justify-center rounded-xl overflow-hidden">
                      <button
                        className="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500  active:ring-gray-500"
                        onClick={() => handleDecrement(item?.id)}
                      >
                        −
                      </button>
                      <div className="flex h-8 w-11 cursor-text items-center justify-center border-t border-b active:ring-gray-500">
                        {item?.quantity}
                      </div>
                      <button
                        className="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 bg-gray-300 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500  active:ring-gray-500"
                        onClick={() => handleIncrement(item?.id)}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="flex w-full sm:w-1/5 px-5 sm:px-0 my-3 sm:justify-center">
                    <div className="block sm:hidden mr-2">
                      <b>Total Price</b>
                    </div>
                    <h4 className="text-center font-bold text-base text-[#121212]">
                      <span className="price">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </h4>
                  </div>
                </div>
              </div>
            ))}

            <div className="flex flex-wrap items-center justify-between mt-5">
              <Link
                href="/sale"
                className="flex font-semibold text-sm bg-[#121212] text-white py-3 px-6 rounded-lg items-center gap-2"
              >
                <TiArrowBack className="text-lg" />
                Back To Shop
              </Link>
            </div>
          </div>

          <div
            id="summary"
            className=" my-3 w-full md:w-3/12 px-4 py-4 shadow-lg  rounded-xl"
          >
            <h1 className="font-semibold text-2xl border-b pb-8">
              Order Summary
            </h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-sm uppercase">Shipping</span>
              <span className="font-semibold text-sm">Free</span>
            </div>

            <div className="border-t mt-8">
              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>

              <button className="bg-[#121212] py-3 px-6 rounded-lg font-semibold hover:bg-[#164A8C] transition text-sm mb-3 text-white uppercase w-full border">
                Checkout
              </button>
              <button className=" font-semibold transition text-sm text-[#121212] uppercase w-full ">
                Or continue shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
