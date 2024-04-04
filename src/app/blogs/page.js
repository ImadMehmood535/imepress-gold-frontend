import Blogs from "@/components/Blogs";
import React from "react";

export const metadata = {
  title: "Blog",
};

const Index = () => {
  return (
    <div className="w-full">
      <Blogs />
    </div>
  );
};

export default Index;
