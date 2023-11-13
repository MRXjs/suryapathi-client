"use client";
import React, { useState } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { useRouter } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { districts, gender, nameCategorys } from "@/db/selecterOptions";
import { useForm } from "react-hook-form";
import { formValidations } from "@/db/formValidations";
import FormError from "./FormError";
import { toastError } from "./toast";
import { babyNameCreate } from "../api/babyName";
import LoadingScreen from "./LoadingScreen";

const BabyNameReqForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formHandler = async (data) => {
    if (data.payment_method == 1) {
      const payment_status = false;
      const formData = {
        birthday: `${data.birthYear}-${data.birthMonth}-${data.birthDay}`,
        birthtime: data.birthTime,
        gender: JSON.parse(data.gender),
        city: JSON.parse(data.district),
        expected_name: data.nameCategory,
        description: data.description,
        phone: data.phoneNo,
        name: data.name,
        payment_method: JSON.parse(data.payment_method),
        payment_status,
      };
      setIsLoading(true);
      await babyNameCreate(formData, router);
      setIsLoading(false);
    } else {
      toastError("දැනට ඔබට Online ක්‍රමයට ගෙවිමට නොහැක");
    }
  };

  return (
    <>
      {isLoading ? <LoadingScreen /> : null}
      <Navbar />
      <div
        className="flex items-center justify-center "
        style={{ backgroundImage: "linear-gradient(115deg, #9F7AEA, #FEE2FE)" }}
      >
        <div className="m-2 mt-20 bg-white rounded-lg shadow-lg">
          <h1 className="my-4 text-3xl text-center ">පහත තොරතුරු ලබාදෙන්න</h1>
          <form className="p-5 mt-10 " onSubmit={handleSubmit(formHandler)}>
            <div className="mt-5">
              <span>උපන් දිනය</span>
              <div className="grid grid-cols-3 gap-2">
                <input
                  type="number"
                  id="birthYear"
                  name="birthYear"
                  {...register("birthYear", {
                    required: formValidations.birthDay.required.yearMessage,
                    maxLength: 4,
                  })}
                  placeholder="අවුරුද්ද"
                  className="w-full px-4 py-2 mt-2 rounded-md outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-teal-300"
                />
                <input
                  type="number"
                  id="birthMonth"
                  name="birthMonth"
                  {...register("birthMonth", {
                    required: formValidations.birthDay.required.monthMessage,
                    maxLength: 2,
                  })}
                  placeholder="මාසය"
                  className="w-full px-4 py-2 mt-2 rounded-md outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-teal-300"
                />
                <input
                  type="number"
                  id="birthDay"
                  name="birthDay"
                  {...register("birthDay", {
                    required: formValidations.birthDay.required.dayMessage,
                    maxLength: 2,
                  })}
                  placeholder="දිනය"
                  className="w-full px-4 py-2 mt-2 rounded-md outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-teal-300"
                />
              </div>
              {errors.birthYear ? (
                <FormError error={errors.birthYear.message} />
              ) : null}
              {errors.birthMonth || errors.birthDay ? (
                <FormError
                  error={
                    errors.birthMonth
                      ? errors.birthMonth.message
                      : errors.birthDay.message
                  }
                />
              ) : null}
            </div>

            <div className="mt-5">
              <span>උපන් වෙලාව</span>
              <input
                step="2"
                type="time"
                id="birthTime"
                name="birthTime"
                {...register("birthTime", {
                  required: formValidations.birthTime.required.message,
                })}
                className="w-full px-4 py-2 mt-2 rounded-md outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-teal-300"
              />
              {errors.birthTime ? (
                <FormError error={errors.birthTime.message} />
              ) : null}
            </div>

            <div className="mt-5">
              <span>උපන් ස්තානය</span>
              <select
                id="district"
                name="district"
                {...register("district", {
                  validate: (fieldValue) => {
                    return (
                      fieldValue !== "0" || "ඔබ ජීවත්වන දිස්ත්‍රීකය තෝරාගන්න."
                    );
                  },
                })}
                className="w-full px-4 py-2 mt-2 rounded-md outline-none cursor-pointer ring-1 ring-gray-300 focus:ring-2 focus:ring-teal-300"
              >
                {districts.map((district, index) => (
                  <option key={index} value={index} className="cursor-pointer">
                    {district.value}
                  </option>
                ))}
              </select>
              {errors.district ? (
                <FormError error={errors.district.message} />
              ) : null}
            </div>
            <div className="mt-5">
              <span>ස්ත්‍රී/ පුරුශ බව</span>
              <select
                id="gender"
                name="gender"
                {...register("gender", {
                  validate: (fieldValue) => {
                    return fieldValue !== "0" || "ඔබ Gender එක තෝරාගන්න.";
                  },
                })}
                className="w-full px-4 py-2 mt-2 rounded-md outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-teal-300"
              >
                {gender.map((gender, index) => (
                  <option key={index} value={index}>
                    {gender.value}
                  </option>
                ))}
              </select>
              {errors.gender ? (
                <FormError error={errors.gender.message} />
              ) : null}
            </div>
            <div className="mt-5">
              <span>බලාපොරොත්තු වන නම්</span>
              <select
                name="nameCategory"
                id="nameCategory"
                {...register("nameCategory")}
                className="w-full px-4 py-2 mt-2 rounded-md outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-teal-300"
              >
                {nameCategorys.map((item, index) => (
                  <option key={index} value={item.value}>
                    {item.value}
                  </option>
                ))}
              </select>
            </div>
            <h1 className="mt-8 text-xl font-semibold text-center">
              ඇමතුම් විස්තර
            </h1>
            <div className="mt-5">
              <div className="flex items-center justify-center ">
                <div className="shrink-0"></div>
                <BsWhatsapp size={30} color="green" />
                <span className="mb-1 font-semibold text-center text-red-700 w-80">
                  ඔබගෙ WhatsApp දුරකතන අංකය ලබා දෙන්න එමගින් අපි ඔබව සම්බන්ද
                  කරගනු ලැබෙ
                </span>
              </div>
              <input
                id="phoneNo"
                name="phoneNo"
                {...register("phoneNo", {
                  required: formValidations.phoneNo.required.message,
                  pattern: {
                    value: formValidations.phoneNo.pattern.stringPattern,
                    message: formValidations.phoneNo.pattern.message,
                  },
                })}
                placeholder="දුරකතන අංකය"
                className="w-full px-4 py-2 mt-2 rounded-md outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-teal-300"
              />
              {errors.phoneNo ? (
                <FormError error={errors.phoneNo.message} />
              ) : null}
            </div>
            <div className="mt-5">
              <span>ඔබගෙ නම</span>
              <input
                id="name"
                name="name"
                {...register("name", {
                  required: formValidations.name.required.message,
                })}
                placeholder="සම්පුර්න නම"
                className="w-full px-4 py-2 mt-2 rounded-md outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-teal-300"
              />
              {errors.name ? <FormError error={errors.name.message} /> : null}
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
              {errors.description ? (
                <FormError error={errors.description.message} />
              ) : null}
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
            <div className="mt-5">
              <button
                className="w-full py-3 font-bold text-center text-white bg-purple-500 rounded-lg"
                type="submit"
              >
                ඉදිරියට යන්න
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BabyNameReqForm;
