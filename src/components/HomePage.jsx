"use client";
import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import Homecateg from "./Homecateg";
import DailySale from "./DailySale";
import { dailysaledata } from "@/data/dailysaledata";
import Featurecollection from "./Featurecollection";
import Saletimer from "./Saletimer";
import Benefits from "./Benefits";
import Instafeeds from "./Instafeeds";
import Newsletter from "./Newsletter";
import { topsaledata } from "@/data/topsaledata";
import { API } from "@/api";
import { errorToast } from "@/hooks/useToast";
import Loader from "./Loader";

const HomePage = () => {
  const [homeCategData, setHomeCategData] = useState(null);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    let response;
    try {
      response = await API.getCategorirs();
      setHomeCategData(response?.data?.data);
      setLoading(false);
    } catch (error) {
      errorToast(error, "Can not fetch data");
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Banner />

      {loading ? (
        <Loader />
      ) : (
        <>
          <Homecateg data={homeCategData} />
          <DailySale
            data={dailysaledata}
            title="Daily Sale"
            exp="Top sale on this week"
          />
          <Featurecollection />
          <Saletimer />
          <Benefits />
          <DailySale
            data={topsaledata}
            title="Looks You’ll Love"
            exp="Top sale on this week"
          />
          <Instafeeds />
          <Newsletter />
        </>
      )}
    </>
  );
};

export default HomePage;
