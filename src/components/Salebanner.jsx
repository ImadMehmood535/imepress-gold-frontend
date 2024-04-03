import { sale_banner } from "@/assets";
import Image from "next/image";
import React from "react";

const Salebanner = () => {
  return (
    <div className="Innerbanner ">
      <div className="w-full overflow-hidden bg-gradient-to-r from-[#E4AD20] to-[#FAF187] h-[100%] py-6 text-center">
        <Image
          src={sale_banner}
          alt="sale_banner"
          width={400}
          height={4000}
          className="text-center mx-auto"
        />
      </div>
    </div>
  );
};

export default Salebanner;
