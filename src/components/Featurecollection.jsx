import { feature_item1 } from "@/assets";
import { featurecollection } from "@/data/featurecollection";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Featurecollection = () => {
  return (
    <div className="Featurecollection py-12">
      <div className="container w-full px-5 xl:w-[80%] mx-auto">
        <h2 className="text-center text-3xl md:text-4xl mb-4">
          Featured Collection
        </h2>
        <p className="text-center text-[#A0A0A0] text-sm">
          Must-have pieces selected every month
        </p>
        <div className="feature-item mt-8">
          <div className="flex flex-wrap">
            {featurecollection.map((item) => (
              <div key={item.id} className="w-full md:w-2/6 text-center px-3">
                <div className="img-area">
                  <Image
                    src={item.image}
                    width={500}
                    height={250}
                    className="w-full"
                  />
                </div>
                <div className="content-area py-4 px-2">
                  <h4 className="font-bold text-[#121212] text-2xl  mb-2 capitalize">
                    {item.title}
                  </h4>
                  <div className="flex flex-wrap justify-center items-center gap-2 mb-2">
                    <span className="text-[#A0A0A0] uppercase ">Under</span>
                    <p className="text-[#0C8C6C] font-medium uppercase">
                      AED {item.reg_price}
                    </p>
                  </div>
                  <Link
                    href="/"
                    className="text-black font-semibold text-base py-2 px-1 border-b-1 border-black transition hover:text-[#0C8C6C] hover:border-[#0C8C6C]"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featurecollection;
