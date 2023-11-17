"use client";
import React, { useEffect, useState } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { formValidations } from "@/db/formValidations";
import FormError from "./FormError";
import Link from "next/link";

const ReqContactForm = ({ formSubmit }) => {
  const [isEmail, setIsEmail] = useState(0);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const paymentMethod = watch("payment_method");

  useEffect(() => {
    setIsEmail(paymentMethod);
  }, [paymentMethod]);

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
          <span>පලමු නම</span>
          <input
            id="first_name"
            name="first_name"
            type="text"
            {...register("first_name", {
              required: formValidations.name.required.message,
              pattern: {
                value: formValidations.name.pattern.stringPattern,
                message: formValidations.name.pattern.message,
              },
            })}
            className="w-full px-4 py-2 mt-2 rounded-md outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-teal-300"
          />
          {errors.first_name ? (
            <FormError error={errors.first_name.message} />
          ) : null}
        </div>
        <div className="mt-5">
          <span>අවසාන නම</span>
          <input
            id="last_name"
            name="last_name"
            type="text"
            {...register("last_name", {
              required: formValidations.name.required.message,
              pattern: {
                value: formValidations.name.pattern.stringPattern,
                message: formValidations.name.pattern.message,
              },
            })}
            className="w-full px-4 py-2 mt-2 rounded-md outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-teal-300"
          />
          {errors.last_name ? (
            <FormError error={errors.last_name.message} />
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
            <option value={0}>Bank transfer</option>
            <option value={1}>Online</option>
          </select>
        </div>
        {isEmail == 1 ? (
          <div className="mt-5">
            <span className="font-semibold text-red-600 ">
              විද්‍යුත් තැපැල් ලිපිනය
            </span>
            <input
              id="email"
              name="email"
              type="email"
              {...register("email", {
                required: formValidations.email.required.message,
              })}
              className="w-full px-4 py-2 mt-2 rounded-md outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-teal-300"
            />
            {errors.email ? <FormError error={errors.email.message} /> : null}
          </div>
        ) : null}

        <div className="flex items-center mt-8">
          <input
            id="acceptPolicy"
            name="acceptPolicy"
            {...register("acceptPolicy", {
              required: "අපගෙ කොන්දෙසි වලට එකග විය යුතුයී.",
            })}
            type="checkbox"
            className="w-5 h-5 border border-gray-400 cursor-pointer"
          />
          <div className="ml-2 ">
            I Accept the{" "}
            <Link
              href={"/terms-and-conditions"}
              className="inline-block text-lg text-purple-500 transition duration-300 opacity-75 hover:opacity-100"
            >
              Terms
            </Link>{" "}
            of Use &{" "}
            <Link
              href={"/privacy-policy"}
              className="inline-block text-lg text-purple-500 transition duration-300 opacity-75 hover:opacity-100"
            >
              Privacy Policy
            </Link>{" "}
          </div>
        </div>
        {errors.acceptPolicy ? (
          <FormError error={errors.acceptPolicy.message} />
        ) : null}

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
