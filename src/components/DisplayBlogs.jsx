"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const DisplayBlogs = ({ blogs, blogName }) => {
  const filteredBlogs = blogName
    ? blogs?.filter((item) =>
        item?.name?.toLowerCase().startsWith(blogName?.toLowerCase())
      )
    : blogs;

  return (
    <div className="w-full flex flex-col gap-6">
      {filteredBlogs?.map((item, index) => {
        return (
          <div
            key={index}
            className="w-full max-w-[800px] flex flex-col gap-4 :"
          >
            <Image
              src={item?.imageUrl}
              alt="image"
              width={1000}
              height={600}
              className=" w-full"
            />

            <h3 className="font-medium">
              <Link href={`blogs/${item?.slug}`}> {item?.name}</Link>
            </h3>
            <p>
              by <span className="text-black">Imepress Gold</span> |{" "}
              <span className="text-black -mt-3">{item?.date}</span>
            </p>
            <p>{item?.shortDescription}</p>
            <Link
              href={`blogs/${item?.slug}`}
              className="font-bold underline text-black cursor-pointer"
            >
              Read More
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayBlogs;
