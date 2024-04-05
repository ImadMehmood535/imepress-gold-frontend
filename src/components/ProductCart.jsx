import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { FaExchangeAlt } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const ProductCart = ({ item }) => {
  return (
    <div className="ProductCart">
      <div className="item group/product">
        <div className="image-area relative border py-14 px-10 text-center min-h-[450px] overflow-hidden flex items-center">
          <div className="tag-wrapper absolute top-2 left-2 ">
            <div className="bg-themeSecondry-0 uppercase rounded-md py-1 px-4 text-white font-bold mb-2">
              {item?.tags?.tag}
            </div>
            {item?.tags?.discount && (
              <div className="bg-themePrimary-0 uppercase rounded-md py-1 px-4 text-white font-bold">
                {item?.tags?.discount}
              </div>
            )}
          </div>
          <div className="options absolute top-4  -right-20 group-hover/product:right-2">
            <div className="options_list flex flex-wrap flex-col gap-4">
              <div className="rounded-lg  bg-white shadow-lg px-4 py-4 ">
                <FaRegHeart className="text-2xl" />
              </div>
              <div className="rounded-lg  bg-white shadow-lg px-4 py-4 ">
                <FiEye className="text-2xl cursor-pointer" />
              </div>
              <div className="rounded-lg  bg-white shadow-lg px-4 py-4 ">
                <FaExchangeAlt className="text-2xl" />
              </div>
            </div>
          </div>
          <Image
            src={item?.image}
            alt={item?.image}
            width={250}
            height={250}
            className="w-full "
          />
          <div className="btn-area absolute -bottom-20 group-hover/product:bottom-0 left-0 right-0 py-3 px-2 bg-[#121212] text-white">
            <Link href="/" className="cursor-pointer">
              Quick Options
            </Link>
          </div>
        </div>
        <div className="detail-area py-3">
          <h4 className="font-bold text-[#121212] text-base capitalize">
            {item?.title}
          </h4>
          <div className="flex flex-wrap items-center gap-2 ">
            <p className="text-[#DB4444] font-medium uppercase">
              AED {item?.sale_price}
            </p>
            <span className="line-through text-[#A0A0A0] uppercase text-sm">
              AED {item?.reg_price}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
