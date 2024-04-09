"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { TiArrowBack } from "react-icons/ti";
import { FaTrashAlt } from "react-icons/fa";

const Wishlist = ({ product }) => {
  return (
    <div className="Wishlistdata">
      <div className="container w-full px-5 xl:w-[80%] mx-auto">
        <div className="flex justify-between flex-col md:flex-row items-start">
          <div className="w-full bg-white">
            <div className="flex mb-5 pb-5 border-b-1">
              <h3 className="font-bold text-xl capitalize w-2/5">Products</h3>
            </div>

            {product?.map((item, index) => (
              <div
                key={index}
                className="hover:bg-gray-100 py-4 px-4 border-b-1 -mx-1"
              >
                <div className="flex flex-wrap flex-col sm:flex-row items-start sm:items-center">
                  <div className="flex w-full sm:w-4/5">
                    <div className="w-36">
                      <Image
                        src={item?.image}
                        alt="Product Image"
                        width={100}
                        height={100}
                        className="min-h-[100px]"
                      />
                    </div>
                    <div className="flex flex-col  ml-4 flex-grow">
                      <span className="font-bold text-base mb-3">
                        <Link href={"/"}>{item?.name}</Link>
                      </span>
                      <span className="text-[#A0A0A0] font-medium text-sm mb-3">
                        {item?.brand}
                      </span>
                    </div>
                  </div>

                  {/* <div className="flex w-full sm:w-1/5 px-5 sm:px-0 my-3 sm:justify-center">
                    <div className="block sm:hidden mr-2">
                      <b>Price</b>
                    </div>
                    <span className="text-center font-medium text-base text-[#616161]">
                      <span className="price">${item?.sale_price}</span>
                    </span>
                  </div> */}

                  {/* <div className="flex w-full sm:w-1/5 px-5 sm:px-0 my-3 sm:justify-center ">
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
                  </div> */}

                  <div className="flex w-full sm:w-1/5 px-5 sm:px-0 my-3 sm:justify-center">
                    {/* <div className="block sm:hidden mr-2">
                      <b>Total Price</b>
                    </div>
                    <h4 className="text-center font-bold text-base text-[#121212]">
                      <span className="price">
                        ${(item.sale_price * item.quantity).toFixed(2)}
                      </span>
                    </h4> */}
                    <div
                      onClick={() => removeFromCart(item?.id)}
                      className="font-semibold text-[#121212] hover:text-red-500 text-2xl cursor-pointer"
                    >
                      <FaTrashAlt />
                    </div>
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
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
