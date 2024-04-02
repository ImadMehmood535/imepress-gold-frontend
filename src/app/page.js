import Banner from "@/components/Banner";
import DailySale from "@/components/DailySale";
import Homecateg from "@/components/Homecateg";

export const metadata = {
  title: "Home Page",
};

export default function Home() {
  return (
    <>
      <Banner />
      <Homecateg />
      <DailySale />
    </>
  );
}
