"use client";
import { Button } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import React, { useState } from "react";

const Loginform = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
              <input type="email" name="email"  {...register("email", { required: true })} />
            </div>
          </div>
          <div className="field-wrapper">
            <label>
              Password<span className="text-red-700">*</span>
            </label>
            <div className="field-container">
              <input
                type="password"
                name="password"
                {...register("password", { required: true })}
              />
              {errors?.password && (
                <p className="text-sm text-red-800">This field is required</p>
              )}
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
        </form>
      </div>
    </>
  );
};

export default Loginform;
