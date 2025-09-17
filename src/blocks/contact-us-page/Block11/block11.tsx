"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client/react";
import { CREATE_RESPONSE } from "@/lib/mutations";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  terms: boolean;
};

const Block11 = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [createResponse, { loading, error, data }] = useMutation(CREATE_RESPONSE);

  const onSubmit = async (formData: FormData) => {
    try {
      const variables = {
        form_uuid: process.env.NEXT_PUBLIC_FORM_UUID,
        response: {
          [process.env.NEXT_PUBLIC_FIRST_NAME_ID!]: formData.firstName,
          [process.env.NEXT_PUBLIC_LAST_NAME_ID!]: formData.lastName,
          [process.env.NEXT_PUBLIC_EMAIL_ID!]: formData.email,
          [process.env.NEXT_PUBLIC_PHONE_ID!]: formData.phone,
          [process.env.NEXT_PUBLIC_SUBJECT_ID!]: formData.subject,
          [process.env.NEXT_PUBLIC_MESSAGE_ID!]: formData.message,
          [process.env.NEXT_PUBLIC_TERMS_ID!]: formData.terms,
        },
      };

      const res = await createResponse({ variables });

      if (res.data) {
        alert("✅ Form submitted successfully!");
        reset(); // clear form only on success
      } else {
        alert("⚠️ Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("❌ Submission error:", err);
      alert("❌ Submission failed. Please try again later.");
    }
  };

  return (
    <div className="flex flex-col gap-[80px] px-[16px] py-[30px] sm:px-[26px] sm:py-[40px] md:px-[64px] md:py-[112px] xl:flex-row">
      {/* Left Section */}
      <div className="flex flex-col w-full gap-[24px] sm:gap-[32px] md:flex-row md:gap-[24px] lg:gap-[32px] xl:flex-col xl:gap-[12px]">
        {/* Email */}
        <div className="flex flex-col gap-[8px] sm:gap-[15px] w-full">
          <Icon
            icon="line-md:email"
            className="w-[32px] h-[32px] sm:w-[38px] sm:h-[38px] md:w-[32px] md:h-[32px] lg:w-[38px] lg:h-[38px] xl:w-[32px] xl:h-[32px]"
          />
          <h5 className=" text-[24px] font-Archivo font-bold leading-[120%] text-[#3A2B28] sm:text-[35px] md:text-[24px] lg:text-[35px] xl:text-[24px]">
            Email
          </h5>
          <p className=" text-[18px] font-CreatoDisplay font-normal leading-[100%] text-[#444444] sm:text-[29px] md:text-[18px] lg:text-[24px] xl:text-[18px]">
            Send us a mail
          </p>
          <a
            href="mailto:doublefour@gmail.com"
            className=" text-[18px] font-CreatoDisplay font-normal leading-[100%] underline text-[#444444] sm:text-[29px] md:text-[18px] lg:text-[24px] xl:text-[18px]"
          >
            doublefour@gmail.com
          </a>
        </div>

        <hr className="md:w-[30px] md:my-auto lg:w-[80px] xl:w-full xl:my-0"></hr>

        {/* Phone */}
        <div className="flex flex-col gap-[8px] sm:gap-[15px] w-full">
          <Icon
            icon="line-md:phone"
            className="w-[32px] h-[32px] sm:w-[38px] sm:h-[38px]  md:w-[32px] md:h-[32px] lg:w-[38px] lg:h-[38px] xl:w-[32px] xl:h-[32px]"
          />
          <h5 className=" text-[24px] font-Archivo font-bold leading-[120%] text-[#3A2B28] sm:text-[35px] md:text-[24px] lg:text-[35px] xl:text-[24px]">
            Phone
          </h5>
          <p className=" text-[18px] font-CreatoDisplay font-normal leading-[100%] text-[#444444] sm:text-[29px] md:text-[18px] lg:text-[24px] xl:text-[18px]">
            Give us a call
          </p>
          <a
            href="tel:+15550000000"
            className=" text-[18px] font-CreatoDisplay font-normal leading-[100%] text-[#444444] sm:text-[29px] md:text-[18px] lg:text-[24px] lg:leading-[180%] xl:text-[18px]"
          >
            +1 (555) 000-0000
          </a>
        </div>

        <hr className="md:w-[30px] md:my-auto lg:w-[80px] xl:w-full xl:my-0"></hr>

        {/* Location */}
        <div className="flex flex-col gap-[8px] sm:gap-[15px] w-full">
          <Icon
            icon="line-md:map-marker-alt"
            className="w-[32px] h-[32px] sm:w-[38px] sm:h-[38px]  md:w-[32px] md:h-[32px] lg:w-[38px] lg:h-[38px] xl:w-[32px] xl:h-[32px]"
          />
          <h5 className=" text-[24px] font-Archivo font-bold leading-[120%] text-[#3A2B28] sm:text-[35px] md:text-[18px] lg:text-[35px] xl:text-[24px]">
            Our Location
          </h5>
          <p className=" text-[18px] font-CreatoDisplay font-normal leading-[100%] text-[#444444] sm:text-[29px] md:text-[18px] md:leading-[150%] lg:text-[24px] xl:text-[18px]">
            123 Sample St, Sydney NSW 2000 AU
          </p>
        </div>
      </div>

      {/* Right Section - Form */}
      <div className="w-full">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-[24px] border border-[#F9FAFB] bg-[#F8F8F8A3] p-[24px]"
        >
          <div className="flex flex-col gap-[24px] md:grid md:grid-cols-2">
            {/* First Name */}
            <div className="flex flex-col gap-[8px]">
              <label className="text-[16px] font-CreatoDisplay leading-[21px] font-normal text-[#3A2B28] sm:text-[25px] sm:leading-[31px] md:text-[16px] md:leading-[21px] lg:text-[25px] lg:leading-[31px] xl:text-[16px] xl:leading-[21px]">
                First Name
              </label>
              <input
                type="text"
                placeholder="Enter first name"
                {...register("firstName", { required: "This field is required" })}
                className="w-full border border-[#D2D2D2] text-[#646464] p-[12px] text-[14px] leading-[21px] font-normal font-Archivo rounded-[8px] focus:border-blue-400 focus:ring focus:ring-blue-200 outline-none sm:p-[18px] sm:text-[20px] sm:leading-[27px] md:p-[12px] md:text-[14px] md:leading-[21px] lg:p-[18px] lg:text-[20px] lg:leading-[27px] xl:p-[12px] xl:text-[14px] xl:leading-[21px]"
              />
              {errors.firstName && (
                <span className="text-red-500 text-sm">{errors.firstName.message}</span>
              )}
            </div>

            {/* Last Name */}
            <div className="flex flex-col gap-[8px]">
              <label className="text-[16px] font-CreatoDisplay leading-[21px] font-normal text-[#3A2B28] sm:text-[25px] sm:leading-[31px] md:text-[16px] md:leading-[21px] lg:text-[25px] lg:leading-[31px] xl:text-[16px] xl:leading-[21px]">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Last name"
                {...register("lastName", { required: "This field is required" })}
                className="w-full border border-[#D2D2D2] text-[#646464] p-[12px] text-[14px] leading-[21px] font-normal font-Archivo rounded-[8px] focus:border-blue-400 focus:ring focus:ring-blue-200 outline-none sm:p-[18px] sm:text-[20px] sm:leading-[27px] md:p-[12px] md:text-[14px] md:leading-[21px]  lg:p-[18px] lg:text-[20px] lg:leading-[27px] xl:p-[12px] xl:text-[14px] xl:leading-[21px]"
              />
              {errors.lastName && (
                <span className="text-red-500 text-sm">{errors.lastName.message}</span>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col gap-[8px]">
              <label className="text-[16px] font-CreatoDisplay leading-[21px] font-normal text-[#3A2B28] sm:text-[25px] sm:leading-[31px] md:text-[16px] md:leading-[21px] lg:text-[25px] lg:leading-[31px] xl:text-[16px] xl:leading-[21px]">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter email address"
                {...register("email", { required: "This field is required" })}
                className="w-full border border-[#D2D2D2] text-[#646464] p-[12px] text-[14px] leading-[21px] font-normal font-Archivo rounded-[8px] focus:border-blue-400 focus:ring focus:ring-blue-200 outline-none sm:p-[18px] sm:text-[20px] sm:leading-[27px] md:p-[12px] md:text-[14px] md:leading-[21px]  lg:p-[18px] lg:text-[20px] lg:leading-[27px] xl:p-[12px] xl:text-[14px] xl:leading-[21px]"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">{errors.email.message}</span>
              )}
            </div>

            {/* Phone Number */}
            <div className="flex flex-col gap-[8px]">
              <label className="text-[16px] font-CreatoDisplay leading-[21px] font-normal text-[#3A2B28] sm:text-[25px] sm:leading-[31px] md:text-[16px] md:leading-[21px] lg:text-[25px] lg:leading-[31px] xl:text-[16px] xl:leading-[21px]">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Enter phone number"
                {...register("phone", { required: "This field is required" })}
                className="w-full border border-[#D2D2D2] text-[#646464] p-[12px] text-[14px] leading-[21px] font-normal font-Archivo rounded-[8px] focus:border-blue-400 focus:ring focus:ring-blue-200 outline-none sm:p-[18px] sm:text-[20px] sm:leading-[27px] md:p-[12px] md:text-[14px] md:leading-[21px]  lg:p-[18px] lg:text-[20px] lg:leading-[27px] xl:p-[12px] xl:text-[14px] xl:leading-[21px]"
              />
              {errors.phone && (
                <span className="text-red-500 text-sm">{errors.phone.message}</span>
              )}
            </div>
          </div>

          {/* Subject */}
          <div className="flex flex-col gap-[8px]">
            <label className="text-[16px] font-CreatoDisplay leading-[21px] font-normal text-[#3A2B28] sm:text-[25px] sm:leading-[31px] md:text-[16px] md:leading-[21px] lg:text-[25px] lg:leading-[31px] xl:text-[16px] xl:leading-[21px]">
              Subject
            </label>
            <input
              type="text"
              placeholder="What’s this about?"
              {...register("subject", { required: "This field is required" })}
              className="w-full border border-[#D2D2D2] text-[#646464] p-[12px] text-[14px] leading-[21px] font-normal font-Archivo rounded-[8px] focus:border-blue-400 focus:ring focus:ring-blue-200 outline-none sm:p-[18px] sm:text-[20px] sm:leading-[27px] md:p-[12px] md:text-[14px] md:leading-[21px]  lg:p-[18px] lg:text-[20px] lg:leading-[27px] xl:p-[12px] xl:text-[14px] xl:leading-[21px]"
            />
            {errors.subject && (
              <span className="text-red-500 text-sm">{errors.subject.message}</span>
            )}
          </div>

          {/* Message */}
          <div className="flex flex-col gap-[8px]">
            <label className="text-[16px] font-CreatoDisplay leading-[21px] font-normal text-[#3A2B28] sm:text-[25px] sm:leading-[31px] md:text-[16px] md:leading-[21px] lg:text-[25px] lg:leading-[31px] xl:text-[16px] xl:leading-[21px]">
              Message
            </label>
            <textarea
              placeholder="Tell us how we can help"
              rows={4}
              {...register("message", { required: "This field is required" })}
              className="w-full h-[180px]  border border-[#D2D2D2] text-[#646464]  p-[12px] text-[14px] leading-[21px] font-normal font-Archivo rounded-[8px] focus:border-blue-400 focus:ring focus:ring-blue-200 outline-none resize-none sm:p-[18px] sm:text-[20px] sm:leading-[27px] md:p-[12px] md:text-[14px] md:leading-[21px]  lg:p-[18px] lg:text-[20px] lg:leading-[27px] xl:p-[12px] xl:text-[14px] xl:leading-[21px] md:h-[180px] xl:h-[209px]"
            />
            {errors.message && (
              <span className="text-red-500 text-sm">{errors.message.message}</span>
            )}
          </div>

          {/* Terms Checkbox */}
          <label className="flex items-center gap-2 text-[16px] font-CreatoDisplay leading-[21px] font-normal text-[#3A2B28] sm:text-[20px] sm:leading-[31px] md:text-[16px] md:leading-[21px] lg:text-[25px] lg:leading-[31px] xl:text-[16px] xl:leading-[21px]">
            <input
              type="checkbox"
              {...register("terms", { required: true })}
              className="h-4 w-4 sm:h-6 sm:w-6"
            />
            I accept the Terms
          </label>
          {errors.terms && (
            <span className="text-red-500 text-sm">You must accept the terms</span>
          )}

          {/* Submit Button */}
          <button
            type="submit" disabled={loading}
            className="w-full bg-[#7AD3FB] hover:bg-blue-500 text-[#3A2B28] rounded-[4px] text-[16px] leading-[21px] font-CreatoDisplay font-normal transition-colors sm:text-[25px] sm:leading-[31px] md:text-[16px] md:leading-[21px]  lg:text-[25px] lg:leading-[31px] xl:text-[16px] xl:leading-[21px]  h-[50px] sm:h-[70px] lg:h-[80px] xl:h-[50px]"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Block11;