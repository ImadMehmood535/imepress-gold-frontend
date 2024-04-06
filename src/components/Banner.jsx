"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { banner_img1 } from "@/assets";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="banner">
      <div className="w-full  overflow-hidden">
        <Swiper
          direction={"vertical"}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="swiper-container"
        >
          <SwiperSlide className="bg-gradient-to-r from-[#F66660] to-[#F1D979] h-[100%]">
            <div className="container px-5 xl:px-0 xl:w-[80%] mx-auto h-full flex flex-col md:flex-row  items-center text-white">
              <div className="basis-full md:basis-2/4 ">
                <h4 className="text-base pb-5 Urbanist-Medium">New Trend 2024</h4>
                <h1 className="text-3xl xl:text-6xl font-medium  w-full md:w-[550px] pb-9">
                  Sale Off Up To 30% On Cosmetics
                </h1>
                <Link href="maito:" className="text-base uppercase border border-white px-11 py-4 table rounded-md hover:bg-themePrimary-0 hover:border-themePrimary-0 transition-all">
                  Explore now
                </Link>
              </div>
              <div className="basis-full md:basis-2/4 xl:px-10">
                <Image
                  src={banner_img1}
                  alt="banner_image"
                  width={500}
                  height={500}
                  className="w-full"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-gradient-to-r from-[#F66660] to-[#F1D979] h-[100%]">
            <div className="container px-5 xl:px-0 xl:w-[80%] mx-auto h-full flex flex-col md:flex-row  items-center text-white">
              <div className="basis-full md:basis-2/4 ">
                <h4 className="text-base pb-5 Urbanist-Medium">New Trend 2024</h4>
                <h1 className="text-3xl xl:text-6xl font-medium  w-full md:w-[550px] pb-9">
                  Sale Off Up To 30% On Cosmetics
                </h1>
                <Link href="maito:" className="text-base uppercase border border-white px-11 py-4 table rounded-md hover:bg-themePrimary-0 hover:border-themePrimary-0 transition-all">
                  Explore now
                </Link>
              </div>
              <div className="basis-full md:basis-2/4 xl:px-10">
                <Image
                  src={banner_img1}
                  alt="baenner"
                  width={500}
                  height={500}
                  className="w-full"
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
