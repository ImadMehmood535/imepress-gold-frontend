"use client";
import InnerpageHeader from "@/components/InnerpageHeader";
import React, { useState } from "react";
import Image from "next/image";
import { Delivery_Truck, popupimage } from "@/assets";
import { FaRegHeart } from "react-icons/fa";
import { Tooltip, Button } from "@nextui-org/react";
import { CiCircleInfo } from "react-icons/ci";
import { FaMinus, FaPlus } from "react-icons/fa6";
import DailySale from "@/components/DailySale";
import { dailysaledata } from "@/data/dailysaledata";

const Index = ({ params }) => {
  const [quantity, setQuantity] = useState(0);

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };
  return (
    <div className="single-product">
      <InnerpageHeader
        pageTitle={`${params.slug}`}
        breadcrums={`${params.slug}`}
      />

      <div className="container w-full py-14 px-5 xl:w-[80%] mx-auto grid grid-cols-2 gap-4">
        <div className="image-area">
          <Image
            src={popupimage}
            width={550}
            alt="popupimage"
            className="w-[80%]"
          />
        </div>
        <div className="content-area">
          <div className="page-bradcrum">
            <p className="font-semibold uppercase text-[#A0A0A0] text-sm">
              Clothing
            </p>
          </div>
          <div className="product-title py-2">
            <h4 className="text-[#121212] capitalize text-4xl font-semibold mb-4">
              Leather boots with tall leg
            </h4>
            <ul className="flex flex-wrap items-center gap-4">
              <li>
                <b>SKU:</b> A515-56-36UT
              </li>
              <li className="text-[#3DAB25] font-semibold">In Stock</li>
            </ul>
          </div>
          <div className="price-area py-2">
            <div className="flex flex-wrap gap-4 mb-4 items-center">
              <div className="saleprice">
                <h4 className="text-[#121212] text-3xl md:text-4xl">
                  $<spam>68.00</spam>
                </h4>
              </div>
              <div className="regprice">
                <h4 className="text-[#A0A0A0] text-lg line-through">
                  $ <spam>68.00</spam>
                </h4>
              </div>
            </div>
          </div>
          <div className="short-des py-2">
            <p className="text-[#616161] text-lg">
              The garments labelled as Committed are products that have been
              produced using sustainable fibres or processes, reducing their
              environmental impact.
            </p>
          </div>
          <div className="divider md:py-10">
            <div className="border-t-1 border-[#E5E5E5]"></div>
          </div>
          <div className="product-actions flex flex-wrap gap-3  py-2">
            <div
              className=" border bg-white  border-gray-200 rounded-xl qty-selector flex"
              data-hs-input-number=""
            >
              <div className="flex items-center gap-x-1.5">
                <button
                  type="button"
                  className="h-full w-10 group/button inline-flex justify-center items-center gap-x-2 text-sm font-medium border border-gray-200 bg-white hover:bg-[#121212] rounded-none text-gray-800 shadow-sm"
                  onClick={decrementQuantity}
                >
                  <FaMinus className="group-hover/button:fill-white group-hover/button:text-white" />
                </button>
                <input
                  className="w-16 py-2 text-center bg-transparent border-0"
                  type="text"
                  value={quantity}
                  readOnly
                />
                <button
                  type="button"
                  className="h-full w-10 group/button inline-flex justify-center items-center gap-x-2 text-sm font-medium border border-gray-200 bg-white hover:bg-[#121212] rounded-none text-gray-800 shadow-sm"
                  onClick={incrementQuantity}
                >
                  <FaPlus className="group-hover/button:fill-white group-hover/button:text-white" />
                </button>
              </div>
            </div>
            <button className="add-to-cart font-semibold transition text-sm bg-[#121212] w-auto md:w-72 text-white rounded hover:text-white uppercase py-3 px-9">
              Add to cart
            </button>
            <div className="wishlist">
              <Tooltip content="Wishlist">
                <Button className="rounded-lg px-0 bg-white border py-4 h-full w-10 group/button inline-flex justify-center items-center gap-x-2 text-sm font-mediumborder border-gray-200 hover:bg-[#121212] shadow-sm">
                  <FaRegHeart className="text-2xl group-hover/button:fill-white group-hover/button:text-white hover:bg-[#121212]" />
                </Button>
              </Tooltip>
            </div>
          </div>
          <div className="term-condition py-2">
            <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
              <li className="flex items-center gap-2 text-[#121212] font-semibold">
                <CiCircleInfo className="fill-[#3DAB25]" />
                Ready to ship | Order today
                <Tooltip
                  showArrow={true}
                  className="w-56"
                  size="md"
                  placement="bottom-start"
                  offset="7"
                  containerPadding="12"
                  content="Your Order Is Expected to Arrive within 3-9 business day. Once your order has been dispatched from our warehouse you will receive a shipping confirmation email with your tracking number and link to track your order online."
                >
                  <Button className="bg-white p-0 w-auto h-auto min-w-0">
                    <CiCircleInfo className="text-xl" />
                  </Button>
                </Tooltip>
              </li>
            </ul>
          </div>
          <div className="divider md:py-10">
            <div className="border-t-1 border-[#E5E5E5]"></div>
          </div>
          <div className="store-feature">
            <h4 className="text-[#121212] capitalize text-2xl font-semibold mb-4">
              Get it today
            </h4>
            <div className="feture-item flex flex-wrap gap-2 items-center mb-5">
              <div className="w-16">
                <Image
                  src={Delivery_Truck}
                  alt="Delivery_Truck"
                  width={60}
                  className=""
                />
              </div>
              <div className="w-auto">
                <h4 className="text-[#121212] capitalize text-lg font-semibold ">
                  Fast Shipping
                </h4>
                <p className="text-[#616161]  text-sm">
                  Free Delivery When order from $500.
                </p>
              </div>
            </div>
            <div className="feture-item flex flex-wrap gap-2 items-center">
              <div className="w-16">
                <Image
                  src={Delivery_Truck}
                  alt="Delivery_Truck"
                  width={60}
                  className=""
                />
              </div>
              <div className="w-auto">
                <h4 className="text-[#121212] capitalize text-lg font-semibold ">
                  100 - Day Returns
                </h4>
                <p className="text-[#616161] text-sm">
                  Not impressed? Get a refund. You have 100 days to break our
                  hearts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container w-full py-14 px-5 xl:w-[80%] mx-auto ">
        <div className="tabs-area flex w-full flex-col">
          <h4 className="text-[#121212] capitalize text-lg font-semibold underline mb-2">
            Description
          </h4>
          <p className="text-[#616161] text-sm">
            Keep your home organized, yet elegant with storage cabinets by H&N
            Patio Furniture. These cabinets not only make a great storage units,
            but also bring a great decorative accent to your decor.
            Traditionally designed, they are perfect to be used in the hallway,
            living room, bedroom, office or any place where you need to store or
            display things. Made of high quality materials, they are sturdy and
            durable for years. Bring one-of-a-kind look to your interior with
            furniture from H&N Patio Furniture!
          </p>
        </div>
      </div>
      <DailySale data={dailysaledata} title="Related Products" />
    </div>
  );
};

export default Index;
