"use client";
import React, { useState } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { formValidations } from "@/db/formValidations";
import FormError from "./FormError";

const ReqContactForm = ({ formSubmit }) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <form onSubmit={handleSubmit(formSubmit)}>
        <div className="mt-5">
          <div className="flex items-center justify-center ">
            <div className="shrink-0"></div>
            <BsWhatsapp size={30} color="green" />
            <span className="mb-1 font-semibold text-center text-red-700 w-80">
              ඔබගෙ WhatsApp දුරකතන අංකය ලබා දෙන්න එමගින් අපි ඔබව සම්බන්ද කරගනු
              ලැබෙ
            </span>
          </div>

          <input
            id="phone"
            name="phone"
            type="tel"
            {...register("phone", {
              required: formValidations.phoneNo.required.message,
              pattern: {
                value: formValidations.phoneNo.pattern.stringPattern,
                message: formValidations.phoneNo.pattern.message,
              },
            })}
            placeholder="දුරකතන අංකය"
            className="w-full px-2 py-1 rounded-md outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-teal-300"
          />
          {errors.phone ? <FormError error={errors.phone.message} /> : null}
        </div>
        <div className="mt-5">
          <span>ඔබගෙ නම</span>
          <input
            id="full_name"
            name="full_name"
            type="text"
            {...register("full_name", {
              required: formValidations.name.required.message,
            })}
            className="w-full px-2 py-1 rounded-md outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-teal-300"
          />
          {errors.full_name ? (
            <FormError error={errors.full_name.message} />
          ) : null}
        </div>
        <div className="mt-5">
          <span>විස්තරය</span>
          <textarea
            id="description"
            name="description"
            placeholder="Message"
            {...register("description")}
            row="4"
            className="w-full px-4 py-2 mt-2 rounded-md outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-teal-300"
          ></textarea>
        </div>
        <div className="mt-5">
          <span>ගෙවිම් ක්‍රමය</span>
          <select
            id="payment_method"
            name="payment_method"
            className="w-full px-4 py-2 mt-2 rounded-md outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-teal-300"
            required
            {...register("payment_method")}
          >
            <option value={0}>Online</option>
            <option value={1}>Bank transfer</option>
          </select>
        </div>
        <div className="mt-10">
          <button
            className="w-full py-3 font-bold text-center text-white bg-green-700 rounded-lg shadow-lg hover:text-black hover:bg-green-300"
            type="submit"
          >
            සේවාව සඳහා අයදුම් කරන්න
          </button>
        </div>
      </form>
    </>
  );
};

export default ReqContactForm;
