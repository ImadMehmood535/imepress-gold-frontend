import Banner from "@/components/Banner";
import Benefits from "@/components/Benefits";
import DailySale from "@/components/DailySale";
import Featurecollection from "@/components/Featurecollection";
import Homecateg from "@/components/Homecateg";
import Saletimer from "@/components/Saletimer";
import Instafeeds from "@/components/Instafeeds";
import { dailysaledata } from "@/data/dailysaledata";
import { topsaledata } from "@/data/topsaledata";
import Newsletter from "@/components/Newsletter";

export const metadata = {
  title: "Home Page",
};

export default function Home() {
  return (
    <>
      <Banner />
      <Homecateg />
      <DailySale data={dailysaledata} title="Daily Sale" exp="Top sale on this week"/>
      <Featurecollection/>
      <Saletimer/>
      <Benefits/>
      <DailySale data={topsaledata} title="Looks You’ll Love" exp="Top sale on this week"/>
      <Instafeeds/>
      <Newsletter/>
    </>
  );
}
