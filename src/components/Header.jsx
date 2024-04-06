import { Header_logo } from "@/assets";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import Searcharea from "./searchArea";
import Link from "next/link";
import useProductStore from "@/store/products";
import { useRouter } from "next/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const { products , clearCart } = useProductStore();
  const [cardLength, setCardLength] = useState(0);
  const router = useRouter();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setTimeout(() => {
      setCardLength(products?.length);
    });

   }, [products]);

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
        <nav className=" py-6 px-4 md:px-12  w-full z-[99999]  bg-themePrimary-0">
          <div className="container relative  w-full  mx-auto ">
            <div className="flex flex-row items-center">
              <div className="basis-2/4 md:basis-1/6 ">
                <div className=" max-w-[80%]">
                  <Link href="/" className="cursor-pointer">
                    <Image
                      src={Header_logo}
                      alt="Header_logo"
                      width={500}
                      height={500}
                      className=" w-full md:max-w-[80%]"
                    />
                  </Link>
                </div>
              </div>
              <div className="hidden md:block md:basis-1/2">
                <Searcharea />
              </div>
              <div className="basis-2/4 md:basis-2/6 text-right">
                <ul className="text-right flex flex-wrap gap-3 flex-row-reverse items-center text-white">
                  <li>
                    <div className="lg:hidden lg:static   right-2 z-50">
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
                    </div>{" "}
                  </li>

                  <li className="relative">
                    <FiShoppingCart
                      onClick={() => router.push("/cart")}
                      className="text-2xl cursor-pointer"
                    />
                    {cardLength > 0 && (
                      <div className="w-[20px] h-[20px] flex flex-wrap items-start justify-center text-white bg-themeSecondry-0 rounded-full absolute -top-[15px] -right-[10px]">
                        {cardLength}
                      </div>
                    )}
                  </li>

                  <li>
                    <FaRegHeart className="text-2xl" />
                  </li>
                  <li>
                    <FiUser className="text-2xl" />
                  </li>
                </ul>
              </div>
            </div>

            <div className="hidden lg:block mb-3 cursor-pointer "></div>
          </div>
          <div className={`    container relative  w-full  mx-auto `}>
            <ul
              className={`lg:flex lg:flex-row flex-col lg:h-full h-[100vh] lg:pt-0 pt-16  items-start text-white${
                isMenuOpen ? "flex" : "hidden"
              } font-medium lg:max-w-[500px] max-w-[300px] text-center pt-20 w-full lg:space-x-4 lg:space-y-0 space-y-4 lg:justify-end items-center xl:justify-start lg:items-center lg:static  top-0 right-0 text-black md:text-black   lg:bg-transparent `}
            >
              <li className="max-w-[300px] w-full">
                <Link
                  href="/"
                  className="text-white"
                  // onSetActive={() => setActiveLink("/")}
                >
                  Home
                </Link>
              </li>

              <li className="max-w-[300px] w-full">
                <Link
                  href="/sale"
                  className="text-white"
                  // onSetActive={() => setActiveLink("features")}
                >
                  Sale
                </Link>
              </li>
              <li className="max-w-[300px] w-full relative group">
                <Link
                  href="/"
                  className="text-white"
                  // onSetActive={() => setActiveLink("pricing")}
                >
                  Shop
                </Link>
              </li>
              <li className="max-w-[300px] w-full">
                <Link
                  href="/"
                  className="text-white"
                  // onSetActive={() => setActiveLink("pricing")}
                >
                  Category
                </Link>
              </li>
              <li className="max-w-[300px] w-full">
                <Link
                  href="/blogs"
                  className="text-white"
                  // onSetActive={() => setActiveLink("pricing")}
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
