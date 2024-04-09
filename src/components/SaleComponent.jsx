"use client";
import Filterbar from "@/components/Filterbar";
import Newsletter from "@/components/Newsletter";
import Productarea from "@/components/Productarea";
import Salebanner from "@/components/Salebanner";
import { dailysaledata } from "@/data/dailysaledata";
import React, { useState } from "react";
import Quickview from "./Quickview";
import { featurecollection } from "@/data/featurecollection";
import { API } from "@/api";
import { errorToast } from "@/hooks/useToast";
import { useEffect } from "react";

const SaleComponent = () => {
  const [option, setOption] = useState(4);
  const [isChecked, setIsChecked] = useState(false);
  const [sorting, setSorting] = useState("All");
  const [salesData, setSalesData] = useState(null);

  const getData = async () => {
    try {
      const response = await API.getProductsQueryParams("isSale");
      setSalesData(response?.data?.data);
    } catch (error) {
      errorToast(error, "Can not fetch sale products");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="sale">
      <Salebanner />
      <div className="shop-area py-24 container w-full px-5 xl:w-[80%] mx-auto overflow-x-hidden">
        
        <Filterbar
          setOption={setOption}
          option={option}
          setIsChecked={setIsChecked}
          isChecked={isChecked}
          sorting={sorting}
          setSorting={setSorting}
        />

        {salesData && (
          <Productarea
            data={salesData}
            option={option}
            isChecked={isChecked}
            sorting={sorting}
          />
        )}
      </div>
      <Quickview data={featurecollection} />
      <Newsletter />
    </div>
  );
};

export default SaleComponent;
