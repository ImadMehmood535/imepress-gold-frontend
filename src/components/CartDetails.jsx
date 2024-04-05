import React from "react";
import { TiArrowBack } from "react-icons/ti";
import { GrUpdate } from "react-icons/gr";
import { Header_logo } from "@/assets";

const CartDetails = ({ product, quantities, updateQuantity, removeItem }) => {
  
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

            {product.map((item, index) => (
              <div
                key={index}
                className="hover:bg-gray-100 py-4 px-4 border-b-1 -mx-1"
              >
                <div className="flex flex-wrap flex-col sm:flex-row items-start sm:items-center">
                  <div className="flex w-full sm:w-2/5">
                    <div className="w-36">
                      <img
                        src={item.image}
                        alt="Product Image"
                        className="min-h-[100px]"
                      />
                    </div>
                    <div className="flex flex-col  ml-4 flex-grow">
                      <span className="font-bold text-base mb-3">
                        {item.name}
                      </span>
                      <span className="text-[#A0A0A0] font-medium text-sm mb-3">
                        {item.brand}
                      </span>
                      <a
                        href="#"
                        className="font-semibold text-[#121212] hover:text-red-500 text-xs"
                      >
                        Remove
                      </a>
                    </div>
                  </div>

                  <div className="flex w-full sm:w-1/5 px-5 sm:px-0 my-3 sm:justify-center">
                    <div className="block sm:hidden mr-2">
                      <b>Price</b>
                    </div>
                    <span className="text-center font-medium text-base text-[#616161]">
                      <span className="price">${item.price.toFixed(2)}</span>
                    </span>
                  </div>

                  <div className="flex w-full sm:w-1/5 px-5 sm:px-0 my-3 sm:justify-center ">
                    <div className="flex items-center justify-center rounded-xl overflow-hidden">
                      <button
                        className="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
                        onClick={() =>
                          updateQuantity(index, quantities[index] - 1)
                        }
                      >
                        −
                      </button>
                      <div className="flex h-8 w-11 cursor-text items-center justify-center border-t border-b active:ring-gray-500">
                        {item.qtn}
                      </div>
                      <button
                        className="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 bg-gray-300 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
                        onClick={() =>
                          updateQuantity(index, quantities[index] + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="flex w-full sm:w-1/5 px-5 sm:px-0 my-3 sm:justify-center">
                    <div className="block sm:hidden mr-2">
                      <b>Total Price</b>
                    </div>
                    <span className="text-center font-bold text-base text-[#121212]">
                      <span className="price">
                        ${(item.price * item.qtn).toFixed(2)}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            ))}

            <div className="flex flex-wrap items-center justify-between mt-5">
              <a
                href="#"
                className="flex font-semibold text-sm bg-[#121212] text-white py-3 px-6 rounded-lg items-center gap-2"
              >
                <TiArrowBack className="text-lg" />
                Back To Shop
              </a>

              <a
                href="#"
                className="flex font-semibold text-sm bg-[#white] text-black py-3 px-6 rounded-lg items-center gap-2"
              >
                <GrUpdate />
                Update Cart
              </a>
            </div>
          </div>
          {/* summary */}
          <div
            id="summary"
            className=" my-3 w-full md:w-3/12 px-4 py-4 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.12)]  rounded-xl"
          >
            <h1 className="font-semibold text-2xl border-b pb-8">
              Order Summary
            </h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-sm uppercase">Shipping</span>
              <span className="font-semibold text-sm">Free</span>
            </div>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-sm uppercase">Discounts</span>
              <span className="font-semibold text-sm">-$44,99</span>
            </div>

            <div className="border-t mt-8">
              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Subtotal</span>
                <span>$186,99</span>
              </div>
              <button className="bg-white py-3 px-6 rounded-lg font-semibold hover:bg-[#121212] hover:text-white transition text-sm mb-3 text-[#121212] uppercase w-full border">
                View Cart
              </button>
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
