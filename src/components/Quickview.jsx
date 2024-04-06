import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import Image from "next/image";
import { feature_item1, popupimage } from "@/assets";
import { FaStar } from "react-icons/fa";

const Quickview = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="Quickview">
      <Button onPress={onOpen}>Open Modal</Button>
      <Modal
        backdrop="blur"
        size="5xl"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              {/* <ModalHeader className="flex flex-col gap-1">
                Modal Title
              </ModalHeader> */}
              <ModalBody className="py-0 px-0 rounded-none">
                <div className="flex flex-wrap flex-col sm:flex-row">
                  <div className="popup-image-area py-10 px-5 bg-[#F7F7F7] w-full sm:w-6/12">
                    <Image
                      src={popupimage}
                      alt="popupimage"
                      width={450}
                      className=""
                    />
                  </div>
                  <div className="popup-content-area w-full sm:w-6/12 py-10 px-5">
                    <h4 className="text-[#121212] capitalize text-4xl font-semibold mb-4">
                      vintage dress women
                    </h4>
                    {/* rating area */}
                    <div className="rating flex flex-wrap gap-2 items-center mb-4">
                      <ul className="flex flex-wrap gap-1">
                        <li>
                          <FaStar className="text-base" />
                        </li>
                        <li>
                          <FaStar className="text-base" />
                        </li>
                        <li>
                          <FaStar className="text-base" />
                        </li>
                        <li>
                          <FaStar className="text-base" />
                        </li>
                        <li>
                          <FaStar className="text-base" />
                        </li>
                      </ul>
                      <span className="">(10)</span>
                    </div>
                    {/* price area */}
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="saleprice">
                        <h4 className="text-[#DB4444] text-xl">
                          $ <spam>68.00</spam>
                        </h4>
                      </div>
                      <div className="regprice">
                        <h4 className="text-[#A0A0A0] text-lg line-through">
                          $ <spam>68.00</spam>
                        </h4>
                      </div>
                    </div>
                    {/* short description */}
                    <div className="description mb-4">
                      <p className="">
                        Two cargo pockets with snap button closure. The model is
                        185 cm tall and is wearing a size 40.
                      </p>
                    </div>
                    {/* variations area */}
                    <div className="variation-title mb-4">
                      <div className="flex flex-wrap gap-3 mb-3">
                        <h6 className="font-semibold text-xl">Size :</h6>
                        <span className="font-normal text-xl">M</span>
                      </div>
                      <ul className="flex flex-wrap gap-3 items-center">
                        <li className="border w-12 h-12 flex items-center justify-center font-bold rounded hover:bg-[#121212] transition hover:text-white">
                          XS
                        </li>
                        <li className="border w-12 h-12 flex items-center justify-center font-bold rounded hover:bg-[#121212] transition hover:text-white">
                          XS
                        </li>
                        <li className="border w-12 h-12 flex items-center justify-center font-bold rounded hover:bg-[#121212] transition hover:text-white">
                          XS
                        </li>
                        <li className="border w-12 h-12 flex items-center justify-center font-bold rounded hover:bg-[#121212] transition hover:text-white">
                          XS
                        </li>
                      </ul>
                    </div>
                    {/* variations area */}
                    <div className="variation-title mb-4">
                      <div className="flex flex-wrap gap-3 mb-3">
                        <h6 className="font-semibold text-xl">Colors: :</h6>
                        <span className="font-normal text-xl">Blue</span>
                      </div>
                      <ul className="flex flex-wrap gap-3 items-center">
                        <li
                          className={`border w-12 h-12 flex items-center justify-center font-bold bg-slate-600 rounded hover:bg-[#121212] transition hover:text-white`}
                        ></li>
                        <li
                          className={`border w-12 h-12 flex items-center justify-center font-bold bg-slate-600 rounded hover:bg-[#121212] transition hover:text-white`}
                        ></li>
                        <li
                          className={`border w-12 h-12 flex items-center justify-center font-bold bg-slate-600 rounded hover:bg-[#121212] transition hover:text-white`}
                        ></li>
                        <li
                          className={`border w-12 h-12 flex items-center justify-center font-bold bg-slate-600 rounded hover:bg-[#121212] transition hover:text-white`}
                        ></li>
                      </ul>
                    </div>
                    {/* quantity area */}
                    <div className="variation-title mb-4">
                      <h6 className="font-semibold text-xl mb-3">Quantity</h6>
                      <div className="flex flex-wrap gap-3 mb-3">
                        <div className="flex items-center justify-center rounded-xl overflow-hidden">
                          <button
                            className="flex h-11 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500  active:ring-gray-500"
                            onClick={() => handleDecrement(item?.id)}
                          >
                            −
                          </button>
                          <div className="flex h-11 w-11 cursor-text items-center justify-center border-t border-b active:ring-gray-500">
                            1
                          </div>
                          <button
                            className="flex h-11 w-8 cursor-pointer items-center justify-center border duration-100 text-white  bg-[#121212] hover:text-[#121212] hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500  active:ring-gray-500"
                            onClick={() => handleIncrement(item?.id)}
                          >
                            +
                          </button>
                        </div>
                        <button className=" font-semibold transition text-sm bg-[#121212] text-white rounded hover:text-white uppercase py-3 px-9">
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </ModalBody>
              {/* <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter> */}
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Quickview;
