"use client";
import Filterbar from "@/components/Filterbar";
import Newsletter from "@/components/Newsletter";
import Productarea from "@/components/Productarea";
import Salebanner from "@/components/Salebanner";
import { dailysaledata } from "@/data/dailysaledata";
import React, { useState } from "react";
import Quickview from "./Quickview";
import { featurecollection } from "@/data/featurecollection";

const SaleComponent = () => {
  const [option, setOption] = useState(4);
  const [isChecked, setIsChecked] = useState(false);
  const [sorting, setSorting] = useState("All");
  return (
    <div className="sale">
      <Salebanner />
      <div className="shop-area py-24">
        <Filterbar
          setOption={setOption}
          option={option}
          setIsChecked={setIsChecked}
          isChecked={isChecked}
          sorting = {sorting}
          setSorting = {setSorting}
        />
        <Productarea
          data={dailysaledata}
          option={option}
          isChecked={isChecked}
          sorting={sorting}
        />
      </div>
      <Quickview data={featurecollection}/>
      <Newsletter />
    </div>
  );
};

export default SaleComponent;
