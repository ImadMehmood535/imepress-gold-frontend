"use client";
import React, { useState } from "react";
import InnerpageHeader from "./InnerpageHeader";
import Filterbar from "./Filterbar";
import Productarea from "./Productarea";

import { dailysaledata } from "@/data/dailysaledata";
import Shopsidebar from "./Shopsidebar";
import { categoryitem } from "@/data/categoryitem";

const Shop = () => {
  const [option, setOption] = useState(4);
  const [isChecked, setIsChecked] = useState(false);
  const [sorting, setSorting] = useState("All");
  return (
    <div className="shoppage">
      <InnerpageHeader pageTitle={"Clothing"} breadcrums={"Shop"} />
      <div className="container w-full py-14 px-5 xl:w-[80%] mx-auto flex flex-wrap">
        <div className="filter-side-bar  w-full sm:w-1/5">
          <Shopsidebar categoryitem={categoryitem}/>
        </div>
        <div className="shop-area w-full sm:w-4/5 px-7">
          <Filterbar
            setOption={setOption}
            option={option}
            setIsChecked={setIsChecked}
            isChecked={isChecked}
            sorting={sorting}
            setSorting={setSorting}
          />
          <Productarea
            data={dailysaledata}
            option={option}
            isChecked={isChecked}
            sorting={sorting}
          />
        </div>
      </div>
    </div>
  );
};

export default Shop;
