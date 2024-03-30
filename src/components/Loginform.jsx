"use client";
import { Button } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Loginform = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const [isShow, setIsShow] = useState(false);

  const handleShow = (isShow) => {
    setIsShow(!isShow);
  };
  return (
    <>
      <div className="formarea">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="field-wrapper">
            <label>
              Username or email address<span className="text-red-700">*</span>
            </label>
            <div className="field-container">
              <input
                type="text"
                name="email"
                {...register("email", { required: true })}
              />
              {errors?.email && (
                <p className="text-sm text-red-800">Email is required</p>
              )}
            </div>
          </div>
          <div className="field-wrapper">
            <label>
              Password<span className="text-red-700">*</span>
            </label>
            <div className="field-container relative">
              <input
                type={isShow ? "text" : "password"}
                name="password"
                {...register("password", { required: true })}
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center  leading-5 text-3xl">
                {isShow ? (
                  <FaEye
                    onClick={() => handleShow(isShow)}
                    className="cursor-pointer"
                  />
                ) : (
                  <FaEyeSlash
                    onClick={() => handleShow(isShow)}
                    className="cursor-pointer"
                  />
                )}
              </div>
              {errors?.password && (
                <p className="text-sm text-red-800">Password is required</p>
              )}
            </div>
          </div>
          <div className="field-wrapper">
            <div className="flex justify-between">
              <label className="block text-gray-500 font-bold my-4">
                <input
                  type="checkbox"
                  name="checkbox"
                  className="leading-loose text-pink-600"
                />
                <span className="py-2 text-sm text-gray-600 leading-snug">
                  {" "}
                  Remember Me{" "}
                </span>
              </label>
              <label className="block text-gray-500  my-4">
                <a
                  href="#"
                  className="cursor-pointer tracking-tighter text-[#121212] border-b-2 border-[#121212] hover:border-[#A0A0A0]"
                >
                  <span>Forgot Your Password?</span>
                </a>
              </label>
            </div>
          </div>
          <div className="field-container">
            <Button
              type="submit"
              className="w-[100%] h-[58px] text-1xl bg-zinc-950 text-white rounded-full"
            >
              Login
            </Button>
          </div>
          <div className="field-wrapper">
            <div className="flex justify-center gap-2">
              <label className="block text-[#A0A0A0] font-normal my-4 ">
                <span className="py-2 text-sm  leading-snug text-base">
                  {" "}
                  Not a member?{" "}
                </span>
              </label>
              <label className="block text-gray-500  my-4">
                <a
                  href="#"
                  className="cursor-pointer tracking-tighter text-[#121212] border-b-2 border-[#121212] hover:border-[#A0A0A0]"
                >
                  <span>Register</span>
                </a>
              </label>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Loginform;
