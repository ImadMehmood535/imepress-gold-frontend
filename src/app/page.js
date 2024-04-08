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
import HomePage from "@/components/HomePage";

export const metadata = {
  title: "Imepress Gold",
};

export default function Home() {
  return (
    <>
      <HomePage />
    </>
  );
}
