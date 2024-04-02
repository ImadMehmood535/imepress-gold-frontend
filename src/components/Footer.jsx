import Link from "next/link";
import { LuPhoneIncoming } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
import {
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaPinterestP,
  FaFacebookF,
} from "react-icons/fa";
import React from "react";
import { Footer_Logo, payment_methods } from "@/assets";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="footer border-t-1 border-[#E5E5E5]">
      <div className="container xl:w-[80%] mx-auto">
        <footer className=" text-start text-neutral-600 lg:text-left ">
          <div className="mx-6 py-10 text-center md:text-left  dark:border-neutral-500 lg:justify-between">
            <div className="grid-1 grid gap-8 md:grid-cols-5 lg:grid-cols-5">
              <div className="">
                <div className="w-full md:max-w-[80%]">
                  <Link href="home" className="cursor-pointer">
                    <Image
                      src={Footer_Logo}
                      alt="Header_logo"
                      width={500}
                      height={500}
                      className=" w-full md:max-w-[80%] mb-5 md:mb-9"
                    />
                  </Link>
                </div>
                <div className="flex justify-center">
                  <a className="mr-6 cursor-pointer">
                    <FaFacebookF className="fill-[#121212] hover:fill-[#ecca63]" />
                  </a>
                  <a className="mr-6 cursor-pointer">
                    <FaInstagram className="fill-[#121212] hover:fill-[#ecca63]" />
                  </a>
                  <a className="mr-6 cursor-pointer">
                    <FaYoutube className="fill-[#121212] hover:fill-[#ecca63]" />
                  </a>
                  <a className="mr-6 cursor-pointer">
                    <FaTwitter className="fill-[#121212] hover:fill-[#ecca63]" />
                  </a>
                  <a className="mr-6 cursor-pointer">
                    <FaPinterestP className="fill-[#121212] hover:fill-[#ecca63]" />
                  </a>
                </div>
              </div>
              <div className="">
                <h6 className="mb-4 flex justify-center font-semibold  md:justify-start">
                  Collection
                </h6>
                <ul className="text-[#616161] space-y-2 text-sm">
                  <li>
                    <Link href="/">Clothing</Link>{" "}
                  </li>
                  <li>
                    <Link href="/">Tops</Link>{" "}
                  </li>
                  <li>
                    <Link href="/">Sweaters</Link>{" "}
                  </li>
                  <li>
                    <Link href="/">Dresses</Link>{" "}
                  </li>
                  <li>
                    <Link href="/">Shoes</Link>{" "}
                  </li>
                </ul>
              </div>

              <div className="">
                <h6 className="mb-4 flex justify-center font-semibold  md:justify-start">
                  Collection
                </h6>
                <ul className="text-[#616161] space-y-2 text-sm">
                  <li>
                    <Link href="/">Career at Gougi</Link>{" "}
                  </li>
                  <li>
                    <Link href="/">About Gougi</Link>{" "}
                  </li>
                  <li>
                    <Link href="/">Contact Us</Link>{" "}
                  </li>
                  <li>
                    <Link href="/">Gift Cards</Link>{" "}
                  </li>
                  <li>
                    <Link href="/">Blog</Link>{" "}
                  </li>
                </ul>
              </div>

              <div className="">
                <h6 className="mb-4 flex justify-center font-semibold  md:justify-start">
                  Need Help
                </h6>
                <ul className="text-[#616161] space-y-2 text-sm">
                  <li>
                    <Link href="/">Order Status</Link>{" "}
                  </li>
                  <li>
                    <Link href="/">Shipping & Delivery</Link>{" "}
                  </li>
                  <li>
                    <Link href="/">FAQ & Helps</Link>{" "}
                  </li>
                  <li>
                    <Link href="/">Terms & Conditions</Link>{" "}
                  </li>
                  <li>
                    <Link href="/">Legal & Privacy</Link>{" "}
                  </li>
                </ul>
              </div>
              {/* <!-- Contact section --> */}
              <div>
                <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                  Exclusive Services
                </h6>
                <p className="mb-4 flex items-center justify-center md:justify-start space-x-2 text-[#616161]">
                  <LuPhoneIncoming className="text-base" />
                  <span className="">
                    {" "}
                    <Link href="tel:+1 666 8888" className="text-base">
                      {" "}
                      Call Us: +1 666 8888{" "}
                    </Link>
                  </span>
                </p>
                <p className="mb-4 flex items-center justify-center md:justify-start space-x-2 text-[#616161]">
                  <MdOutlineMail className="text-base" />
                  <span className="">
                    <Link href="maito:" className="text-base">
                      Send us an email
                    </Link>
                  </span>
                </p>
                <p className="mb-4 flex items-center justify-center md:justify-start space-x-2 text-[#616161]">
                  <HiOutlineLocationMarker className="text-base" />
                  <span className="">
                    <Link href="/" className="text-base">
                      {" "}
                      See our stores{" "}
                    </Link>
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* <!--Copyright section--> */}
          <div className="flex items-center md:justify-between justify-center  p-6 ">
            <div className="mr-12 hidden lg:block">
              <span>
                © 2024 <strong>Imepress Gold</strong>. All Rights Reserved.
              </span>
            </div>

            <div className="flex justify-center">
              <Image
                src={payment_methods}
                alt="payment_methods"
                width={200}
                height={50}
              />
    
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
