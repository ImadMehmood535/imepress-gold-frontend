"use client";
import { Button } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FaCloudUploadAlt } from "react-icons/fa";

const Signupform = () => {
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
          <div className="grid-cols-1 grid md:grid-cols-2 gap-4 mb-2">
            <div className="field-wrapper">
              <label>
                First Name<span className="text-red-700">*</span>
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
                Last Name<span className="text-red-700">*</span>
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
          </div>
          <div className="grid-cols-1 grid md:grid-cols-2 gap-4 mb-2">
            <div className="field-wrapper">
              <label>
                email address<span className="text-red-700">*</span>
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
                Phone Number<span className="text-red-700">*</span>
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
          </div>
          <div className="grid-cols-1 grid gap-4 mb-2">
            <div className="field-wrapper">
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer "
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <FaCloudUploadAlt className="text-3xl text-gray-500 dark:text-gray-400" />
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input id="dropzone-file" type="file" className="hidden" />
                </label>
              </div>
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

export default Signupform;
