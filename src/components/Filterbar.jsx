"use client";
import { Filter, Grid_2, Grid_3, Grid_4 } from "@/assets";
import { RiArrowDropDownLine } from "react-icons/ri";
import Image from "next/image";
import React, { useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Checkbox,
} from "@nextui-org/react";
import Shopsidebar from "./Shopsidebar";
import { categoryitem } from "@/data/categoryitem";
import { IoCloseSharp } from "react-icons/io5";

const Filterbar = ({
  setOption,
  option,
  setIsChecked,
  isChecked,
  sorting,
  setSorting,
}) => {
  const [isfilterbar, setIsfilterbar] = useState(false);

  const handleMenuToggle = () => {
    console.log(isfilterbar);
    setIsfilterbar(!isfilterbar);
  };

  const [selectedKeys, setSelectedKeys] = React.useState(
    new Set([`${sorting}`])
  );

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  const handleChange = () => {
    setIsChecked((prevState) => !prevState); 
  };
  return (
    <div className="Filterbar">
      <div
        className={`filter-side-bar  w-full sm:w-1/5  left-0 top-0 bg-white p-4 h-[100vh] fixed z-[998] transition-left ${
          isfilterbar ? "-left-96 hidden" : "left-0 block"
        } `}
      >
        <IoCloseSharp className="text-2xl  text-black z-[999]" onClick={handleMenuToggle}/>
        <Shopsidebar categoryitem={categoryitem} />
      </div>
      <div className=" w-full ">
        <div className="flex flex-wrap items-center justify-between">
          <div className=" flex flex-wrap gap-3 flex-row">
            <button
              id="filter"
              onClick={handleMenuToggle}
              className="text-black font-medium text-lg px-5 py-2.5 text-center inline-flex items-center"
            >
              <Image
                src={Filter}
                alt="Filter"
                width={30}
                height={24}
                className=" pr-1"
              />
              Filter{" "}
            </button>
            <div className="view-list">
              <Button
                id="filter"
                className={`text-black font-medium text-lg px-0 py-0 bg-transparent text-center inline-flex items-center  min-w-9 ${
                  option === 2 ? "active" : ""
                }`}
                onClick={() => setOption(2)}
              >
                <Image
                  src={Grid_2}
                  alt="Grid_2"
                  width={30}
                  className=" pr-1 w-auto h-full"
                />
              </Button>
              <Button
                id="filter"
                className={`text-black font-medium text-lg px-0 py-0 bg-transparent text-center inline-flex items-center  min-w-9 ${
                  option === 3 ? "active" : ""
                }`}
                type="button"
              >
                <Image
                  src={Grid_3}
                  alt="Grid_3"
                  width={30}
                  onClick={() => setOption(3)}
                  height={24}
                  className=" pr-1 w-auto h-full"
                />
              </Button>
              <Button
                id="filter"
                className={`text-black font-medium text-lg px-0 py-0 bg-transparent text-center inline-flex items-center  min-w-9 ${
                  option === 4 ? "active" : ""
                }`}
                type="button"
              >
                <Image
                  src={Grid_4}
                  alt="Grid_4"
                  width={30}
                  onClick={() => setOption(4)}
                  className=" pr-1 w-auto h-full"
                />
              </Button>
            </div>
            <div className="flex items-center">
              <Checkbox
                id="checked-checkbox"
                type="checkbox"
                onChange={handleChange}
                className=" text-blue-600  border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 "
              >
                {`Show only products on sale ${isChecked}`}
              </Checkbox>
            </div>
          </div>
          <div className="">
            <Dropdown>
              <DropdownTrigger>
                <Button
                  variant="bordered"
                  className="capitalize rounded-md py-1 px-4 border-gray-300 w-52 flex flex-wrap justify-between"
                >
                  {selectedValue}
                  <RiArrowDropDownLine />
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Single selection example"
                variant="flat"
                disallowEmptySelection
                selectionMode="single"
                selectedKeys={selectedKeys}
                onSelectionChange={(keys) => {
                  setSelectedKeys(keys);
                  setSorting(Array.from(keys)[0]);
                }}
              >
                <DropdownItem key="a to z">A - Z</DropdownItem>
                <DropdownItem key="z to a">Z - A</DropdownItem>
                {/* <DropdownItem key="number">Sale</DropdownItem>
                <DropdownItem key="date"></DropdownItem>
                <DropdownItem key="single_date">Single Date</DropdownItem>
                <DropdownItem key="iteration">Iteration</DropdownItem> */}
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filterbar;
