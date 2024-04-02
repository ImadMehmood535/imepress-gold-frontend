import {
  instafeed1,
  instafeed2,
  instafeed3,
  instafeed4,
  instafeed5,
} from "@/assets";
import Image from "next/image";
import React from "react";
import { FaInstagram } from "react-icons/fa6";

const Instafeeds = () => {
  return (
    <div className="Instafeeds py-12">
      <div className="container w-full px-5 xl:w-[80%] mx-auto">
        <h2 className="text-center text-3xl md:text-4xl mb-8">
          @ImepressGold On Instagram
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-5 xl:grid-cols-5 gap-2">
          <div className="feed relative flex flex-wrap items-center justify-center group/insta cursor-pointer">
            <Image
              src={instafeed1}
              alt="instafeed1"
              width={450}
              height={450}
              className="w-full"
            />
            <div className="icon py-2 px-2 rounded-lg absolute mx-auto my-auto bg-white transition hidden group-hover/insta:block">
              <FaInstagram className="text-4xl" />
            </div>
          </div>
          <div className="feed relative flex flex-wrap items-center justify-center group/insta cursor-pointer">
            <Image
              src={instafeed2}
              alt="instafeed1"
              width={450}
              height={450}
              className="w-full"
            />
            <div className="icon py-2 px-2 rounded-lg absolute mx-auto my-auto bg-white transition hidden group-hover/insta:block">
              <FaInstagram className="text-4xl" />
            </div>
          </div>
          <div className="feed relative flex flex-wrap items-center justify-center group/insta cursor-pointer">
            <Image
              src={instafeed3}
              alt="instafeed1"
              width={450}
              height={450}
              className="w-full"
            />
            <div className="icon py-2 px-2 rounded-lg absolute mx-auto my-auto bg-white transition hidden group-hover/insta:block">
              <FaInstagram className="text-4xl" />
            </div>
          </div>
          <div className="feed relative flex flex-wrap items-center justify-center group/insta cursor-pointer">
            <Image
              src={instafeed4}
              alt="instafeed1"
              width={450}
              height={450}
              className="w-full"
            />
            <div className="icon py-2 px-2 rounded-lg absolute mx-auto my-auto bg-white transition hidden group-hover/insta:block">
              <FaInstagram className="text-4xl" />
            </div>
          </div>
          <div className="feed relative flex flex-wrap items-center justify-center group/insta cursor-pointer">
            <Image
              src={instafeed5}
              alt="instafeed1"
              width={450}
              height={450}
              className="w-full"
            />
            <div className="icon py-2 px-2 rounded-lg absolute mx-auto my-auto bg-white transition hidden group-hover/insta:block">
              <FaInstagram className="text-4xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instafeeds;
