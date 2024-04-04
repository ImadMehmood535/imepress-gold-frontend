"use client";
import React, { useEffect, useState } from "react";
import InnerpageHeader from "./InnerpageHeader";
import DisplayBlogs from "./DisplayBlogs";
import BlogsSideBar from "./BlogsSideBar";
import { errorToast } from "@/hooks/useToast";
import { API } from "@/api";

const Blogs = () => {
  const [blogs, setBlogs] = useState(null);
  const [blogKey, setBlogKey] = useState(null);

  const getData = async () => {
    try {
      const response = await API.getAllBlogs();
      setBlogs(response?.data?.data);
    } catch (error) {
      errorToast(error, "Can not fetch blogs");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <InnerpageHeader pageTitle={"Blog"} breadcrums={"Blog"} />
      <div className="py-8 flex   md:flex-nowrap   justify-between myContainer flex-wrap-reverse  gap-16 ">
        <DisplayBlogs blogs={blogs} blogName={blogKey} />
        <BlogsSideBar setBlogKey={setBlogKey} blogs={blogs} />
      </div>
    </>
  );
};

export default Blogs;
