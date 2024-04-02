import { delivery, guarantee, payment, phone } from "@/assets";
import Image from "next/image";
import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";

const Benefits = () => {
  return (
    <div className="Benefits py-5">
      <div className="container w-full px-5 xl:w-[80%] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          <div className="img-box text-center mx-auto">
            <Image src={delivery} width={46} height={46} className="text-6xl text-center  mx-auto mb-5"/>
            <h4 className="text-base mb-1 font-bold">New Trend 2024</h4>
            <p className="text-center text-sm text-black">Free Shipping for orders over $90</p>
          </div>
          <div className="img-box text-center mx-auto">
            <Image src={guarantee} width={46} height={46} className="text-6xl text-center  mx-auto mb-5"/>
            <h4 className="text-base mb-1 font-bold">Money Back guarantee</h4>
            <p className="text-center text-sm text-black">100% money back guarantee</p>
          </div>
          <div className="img-box text-center mx-auto">
            <Image src={phone} width={46} height={46} className="text-6xl text-center  mx-auto mb-5"/>
            <h4 className="text-base mb-1 font-bold">24/7 online support</h4>
            <p className="text-center text-sm text-black">24 hours a day, 7 days a week</p>
          </div>
          <div className="img-box text-center mx-auto">
            <Image src={payment} width={46} height={46} className="text-6xl text-center  mx-auto mb-5"/>
            <h4 className="text-base mb-1 font-bold">Flexible Payment</h4>
            <p className="text-center text-sm text-black">Pay with Multiple Credit Cards</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
