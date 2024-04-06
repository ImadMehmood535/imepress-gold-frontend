import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const Shopsidebar = ({ categoryitem }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Toggle the state
  };

  return (
    <div className="Shopsidebar">
      <div className="w-full py-6 pb-8">
        <div className="relative transition-all">
          <button
            type="button"
            className="flex flex-wrap justify-between items-center w-full text-[#121212] font-bold text-xl"
            onClick={toggleDropdown}
          >
            Products Type
            <FaAngleDown />
          </button>

          {isOpen && (
            <div className="p-4 max-w-lg mx-auto">
              {categoryitem.map((category) => (
                <details key={category.id} className="mb-2">
                  <summary className="flex items-center font-bold cursor-pointer  ">
                    <span className="font-semibold">{category.name}</span>
                    <button className="ml-auto">
                    <FaAngleDown className="svg-icon"/>
                    </button>
                  </summary>
                  {category.subCategories.length > 0 && (
                    <ul className="ml-8 space-y-4">
                      {category.subCategories.map((subCategory, index) => (
                        <li key={index}>
                          {subCategory.subCategories &&
                          subCategory.subCategories.length > 0 ? (
                            <details className="mb-2">
                              <summary className="bg-gray-100 p-3 rounded-lg cursor-pointer shadow">
                                <span className="font-semibold">
                                  {subCategory.name}
                                </span>
                              </summary>
                              <div className="bg-white p-4">
                                <span className="font-semibold">
                                  Content for {subCategory.name}
                                </span>
                              </div>
                            </details>
                          ) : (
                            <span className="font-semibold">
                              {subCategory.name}
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </details>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shopsidebar;
