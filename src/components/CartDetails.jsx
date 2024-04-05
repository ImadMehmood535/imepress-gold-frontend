import { Header_logo } from "@/assets";
import Image from "next/image";
import React from "react";
import { TiArrowBack } from "react-icons/ti";
import { GrUpdate } from "react-icons/gr";

const CartDetails = () => {
  return (
    <div className="CartDetails pt-24 py-12">
      <div className="container w-full px-5 xl:w-[80%] mx-auto ">
        <div className="flex  gap-6">
          <div className="w-2/3 bg-white ">
            <div className="flex mb-5 pb-5 border-b-1">
              <h3 className="font-bold text-xl capitalize w-2/5">Products</h3>
              <h3 className="font-bold text-xl capitalize w-2/5">Price</h3>
              <h3 className="font-bold text-xl capitalize w-2/5">Quantity</h3>
              <h3 className="font-bold text-xl capitalize w-2/5">
                Total Price
              </h3>
            </div>

            <div className=" hover:bg-gray-100 py-4 px-4 border-b-1 -mx-1 ">
              <div className="flex flex-wrap items-center">
                <div className="flex w-2/5">
                  <div className="w-36">
                    <Image
                      src={Header_logo}
                      width={130}
                      height={100}
                      alt="Header_logo"
                      className="min-h-[100px]"
                    />
                  </div>
                  <div className="flex flex-col  ml-4 flex-grow">
                    <span className="font-bold text-base mb-3">
                      Black Canvas Stripe Sole Trainer
                    </span>
                    <span className="text-[#A0A0A0] font-medium text-sm mb-3">
                      Green, XS, Cotton
                    </span>
                    <a
                      href="#"
                      className="font-semibold text-[#121212] hover:text-red-500  text-xs"
                    >
                      Remove
                    </a>
                  </div>
                </div>

                <span className="text-center w-1/5 font-medium text-base text-[#616161]">
                  $<span className="price">40.00</span>
                </span>
                {/* <div className="flex justify-center w-1/5">
                  <svg
                    className="fill-current text-gray-600 w-3"
                    viewBox="0 0 448 512"
                  >
                    <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>

                  <input
                    className="mx-2 border text-center w-8"
                    type="text"
                    value="1"
                  />

                  <svg
                    className="fill-current text-gray-600 w-3"
                    viewBox="0 0 448 512"
                  >
                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>
                </div> */}
                <div className=" w-full md:w-1/5 mt-2  ">
                  <div className="flex items-center justify-center rounded-xl overflow-hidden">
                    <button
                      className="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
                      // onClick={() =>
                      //   updateQuantity(index, quantities[index] - 1)
                      // }
                    >
                      −
                    </button>
                    <div className="flex h-8 w-11 cursor-text items-center justify-center border-t border-b active:ring-gray-500">
                      {/* {quantities[index]} */} 1
                    </div>
                    <button
                      className="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 bg-gray-300 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
                      // onClick={() =>
                      //   updateQuantity(index, quantities[index] + 1)
                      // }
                    >
                      +
                    </button>
                  </div>
                </div>
                <span className="text-center w-1/5 font-bold text-base text-[#121212]">
                  $<span className="price">40.00</span>
                </span>
              </div>
            </div>

            <div className=" flex flex-wrap items-center justify-between mt-5">
              <a
                href="#"
                className="flex font-semibold text-sm bg-[#121212] text-white py-3 px-6 rounded-lg items-center gap-2"
              >
                <TiArrowBack className="text-lg"/>
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
          <div id="summary" className="w-2/6 px-4 py-4 shadow rounded-xl">
            <h1 className="font-semibold text-2xl border-b pb-8">
              Order Summary
            </h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-sm uppercase">Items 3</span>
              <span className="font-semibold text-sm">590$</span>
            </div>
            <div>
              <label className="font-medium inline-block mb-3 text-sm uppercase">
                Shipping
              </label>
              <select className="block p-2 text-gray-600 w-full text-sm">
                <option>Standard shipping - $10.00</option>
              </select>
            </div>
            <div className="py-10">
              <label
                for="promo"
                className="font-semibold inline-block mb-3 text-sm uppercase"
              >
                Promo Code
              </label>
              <input
                type="text"
                id="promo"
                placeholder="Enter your code"
                className="p-2 text-sm w-full"
              />
            </div>
            <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
              Apply
            </button>
            <div className="border-t mt-8">
              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Total cost</span>
                <span>$600</span>
              </div>
              <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
