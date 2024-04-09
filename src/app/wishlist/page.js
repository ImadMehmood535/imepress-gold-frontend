import InnerpageHeader from "@/components/InnerpageHeader";
import Wishlist from "@/components/Wishlist";
import { wishlistdata } from "@/data/wishlistdata";
import React from "react";

const page = () => {
  return (
    <div className="wishlist">
      <InnerpageHeader pageTitle={"Wishlist"} breadcrums={"Wishlist"} />
      <div className="shop-area py-24 container w-full px-5 xl:w-[80%] mx-auto overflow-x-hidden">
        <Wishlist product={wishlistdata} />
      </div>
    </div>
  );
};

export default page;
