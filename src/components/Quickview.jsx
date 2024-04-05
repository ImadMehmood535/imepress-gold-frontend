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
                  <div className="popup-image-area py-10 px-5 bg-[#F7F7F7] w-6/12">
                    <Image src={popupimage} alt="popupimage" width={450} className=""/>
                  </div>
                  <div className="popup-content-area w-6/12 py-10 px-5">
                    <h4 className="text-[#121212] capitalize text-4xl font-semibold mb-4">vintage dress women</h4>
                    <div className="flex flex-wrap"></div>
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
