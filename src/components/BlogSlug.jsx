"use client";
import { API } from "@/api";
import { errorToast } from "@/hooks/useToast";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Editor } from "primereact/editor";

const BlogSlug = ({ slug }) => {
  const [blog, setBlog] = useState(null);

  const getData = async () => {
    try {
      const response = await API.getSingleBlog(slug);
      setBlog(response?.data?.data);
    } catch (error) {
      errorToast(error?.response?.data?.message, "Can not fetch blog");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="myContainer py-12 flex flex-col gap-8">
      <Image
        src={blog?.imageUrl}
        width={2000}
        height={1000}
        alt={blog?.imageUrl}
        className="w-full rounded-md"
      />
      <Editor
        value={blog?.description}
        readOnly
        style={{ height: "100%" }}
        headerTemplate={<></>}
      />
    </div>
  );
};

export default BlogSlug;
