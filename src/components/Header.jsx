"use client";
import { Header_logo } from "@/assets";
import Image from "next/image";
import { useState } from "react";
import { Link } from "react-scroll";
import { FaArrowRightLong } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header">
      <div className="container sm:max-w-[100%] ">
        <div className="top-bar bg-themeSecondry-0 flex flex-wrap items-center justify-center py-2 text-center sm:text-left">
          <p className="text-themePrimary-0-0">
            Free Delivery on orders over $80. Don’t miss discount.{" "}
          </p>
          <span className="font-bold flex flex-wrap items-center text-sm text-themePrimary-0 ml-2">
            SALE OFF <FaArrowRightLong className="ml-2" />
          </span>
        </div>
        <nav className=" py-6 px-4 md:px-12  w-full z-[99999] fixed bg-themePrimary-0">
          <div className="container relative  w-full  mx-auto ">
            <div className="lg:hidden lg:static absolute  right-2 z-50">
              <button
                onClick={handleMenuToggle}
                className="text-white focus:outline-none"
              >
                {isMenuOpen ? (
                  <svg
                    className="w-8 h-8"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="black"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-8 h-8"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="black"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>

            <div className="flex flex-row items-center">
              <div class="basis-2/4 md:basis-1/4">
                <div className="max-w-[200px]">
                  <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    className="cursor-pointer"
                  >
                    <Image
                      src={Header_logo}
                      alt="Header_logo"
                      width={500}
                      height={500}
                      className="max-w-[150px] w-full"
                    />
                  </Link>
                </div>
              </div>
              <div class="hidden md:block md:basis-1/2">03</div>
              <div class="basis-2/4 md:basis-1/4 text-right">
                <ul className="text-right flex flex-wrap gap-3 flex-row-reverse items-center text-white">
                  <li>
                    <RxHamburgerMenu className="text-2xl" />
                  </li>
                  <li className="relative">
                    <FiShoppingCart className="text-2xl" />{" "}
                    <div className="w-[20px] h-[20px] flex flex-wrap items-start justify-center text-white bg-themeSecondry-0 rounded-full absolute -top-[15px] -right-[10px]">
                      1
                    </div>
                  </li>
                  <li>
                    <FaRegHeart  className="text-2xl" />
                  </li>
                </ul>
              </div>

              {/* <ul
                className={`lg:flex lg:flex-row flex-col lg:h-full h-[100vh] lg:pt-0 pt-16 px-4 items-start ${
                  isMenuOpen ? "flex" : "hidden"
                } font-medium lg:max-w-[500px] max-w-[300px] text-center pt-20 w-full lg:space-x-4 lg:space-y-0 space-y-4 lg:justify-end items-center xl:justify-start lg:items-center lg:static fixed top-0 right-0 text-black md:text-black bg-white/90 lg:bg-transparent `}
              >
                <li className="max-w-[300px] w-full">
                  <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    activeClass="text-[#FF5555]"
                    className={`cursor-pointer opacity-100 hover:text-webRed-0 ${
                      activeLink === "home" ? "font-extrabold" : ""
                    }`}
                    onSetActive={() => setActiveLink("home")}
                  >
                    Home
                  </Link>
                </li>

                <li className="max-w-[300px] w-full">
                  <Link
                    to="features"
                    spy={true}
                    smooth={true}
                    activeClass="text-[#FF5555]"
                    className={`cursor-pointer opacity-100 hover:text-webRed-0 ${
                      activeLink === "features" ? "font-extrabold" : ""
                    }`}
                    onSetActive={() => setActiveLink("features")}
                  >
                    Features
                  </Link>
                </li>
                <li className="max-w-[300px] w-full relative group">
                  <Link
                    to="aboutUs"
                    spy={true}
                    smooth={true}
                    activeClass="text-[#FF5555]"
                    className={`cursor-pointer opacity-100 hover:text-webRed-0 ${
                      activeLink === "aboutUs" ? "font-extrabold" : ""
                    }`}
                    onSetActive={() => setActiveLink("pricing")}
                  >
                    <div className="flex gap-2 items-center justify-center">
                      <span> About us </span>
                    </div>
                  </Link>
                </li>
                <li className="max-w-[300px] w-full">
                  <Link
                    to="pricing"
                    spy={true}
                    smooth={true}
                    activeClass="text-[#FF5555]"
                    className={`cursor-pointer opacity-100 hover:text-webRed-0 ${
                      activeLink === "pricing" ? "" : ""
                    }`}
                    onSetActive={() => setActiveLink("pricing")}
                  >
                    Pricing
                  </Link>
                  {activeLink === "pricing" && (
                    <hr className="border-primaryColor-0 w-[30%] mx-auto  " />
                  )}
                  <div className="block lg:hidden py-20 cursor-pointer ">
                    
                  </div>
                </li>
              </ul> */}
            </div>

            <div className="hidden lg:block mb-3 cursor-pointer "></div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
