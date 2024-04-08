import BlogSlug from "@/components/BlogSlug";

import React from "react";

export const metadata = {
  title: "Blog ",
};

const Index = ({ params }) => {
  return <BlogSlug slug = {params.slug} />;
};

export default Index;
