"use client";
import { useState } from "react";
import React from "react";
import { Icon } from "@iconify/react";

const Block11 = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    terms: false,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
  
    // Narrowing so TS knows when "checked" is valid
    if (type === "checkbox") {
      const { checked } = e.target as HTMLInputElement;
      setFormData({
        ...formData,
        [name]: checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: { [key: string]: string } = {};
    Object.entries(formData).forEach(([key, value]) => {
      if ((typeof value === "string" && !value.trim()) || value === false) {
        newErrors[key] = "This field is required";
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log("Form submitted:", formData);
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
          onSubmit={handleSubmit}
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
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter first name"
                className="w-full border border-[#D2D2D2] text-[#D2D2D2] p-[12px] text-[14px] leading-[21px] font-normal font-Archivo rounded-[8px] focus:border-blue-400 focus:ring focus:ring-blue-200 outline-none sm:p-[18px] sm:text-[20px] sm:leading-[27px] md:p-[12px] md:text-[14px] md:leading-[21px] lg:p-[18px] lg:text-[20px] lg:leading-[27px] xl:p-[12px] xl:text-[14px] xl:leading-[21px]"
              />
              {errors.firstName && (
                <span className="text-red-500 text-sm">{errors.firstName}</span>
              )}
            </div>

            {/* Last Name */}
            <div className="flex flex-col gap-[8px]">
              <label className="text-[16px] font-CreatoDisplay leading-[21px] font-normal text-[#3A2B28] sm:text-[25px] sm:leading-[31px] md:text-[16px] md:leading-[21px] lg:text-[25px] lg:leading-[31px] xl:text-[16px] xl:leading-[21px]">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last name"
                className="w-full border border-[#D2D2D2] text-[#D2D2D2] p-[12px] text-[14px] leading-[21px] font-normal font-Archivo rounded-[8px] focus:border-blue-400 focus:ring focus:ring-blue-200 outline-none sm:p-[18px] sm:text-[20px] sm:leading-[27px] md:p-[12px] md:text-[14px] md:leading-[21px]  lg:p-[18px] lg:text-[20px] lg:leading-[27px] xl:p-[12px] xl:text-[14px] xl:leading-[21px]"
              />
              {errors.lastName && (
                <span className="text-red-500 text-sm">{errors.lastName}</span>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col gap-[8px]">
              <label className="text-[16px] font-CreatoDisplay leading-[21px] font-normal text-[#3A2B28] sm:text-[25px] sm:leading-[31px] md:text-[16px] md:leading-[21px] lg:text-[25px] lg:leading-[31px] xl:text-[16px] xl:leading-[21px]">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email address"
                className="w-full border border-[#D2D2D2] text-[#D2D2D2] p-[12px] text-[14px] leading-[21px] font-normal font-Archivo rounded-[8px] focus:border-blue-400 focus:ring focus:ring-blue-200 outline-none sm:p-[18px] sm:text-[20px] sm:leading-[27px] md:p-[12px] md:text-[14px] md:leading-[21px]  lg:p-[18px] lg:text-[20px] lg:leading-[27px] xl:p-[12px] xl:text-[14px] xl:leading-[21px]"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">{errors.email}</span>
              )}
            </div>

            {/* Phone Number */}
            <div className="flex flex-col gap-[8px]">
              <label className="text-[16px] font-CreatoDisplay leading-[21px] font-normal text-[#3A2B28] sm:text-[25px] sm:leading-[31px] md:text-[16px] md:leading-[21px] lg:text-[25px] lg:leading-[31px] xl:text-[16px] xl:leading-[21px]">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
                className="w-full border border-[#D2D2D2] text-[#D2D2D2] p-[12px] text-[14px] leading-[21px] font-normal font-Archivo rounded-[8px] focus:border-blue-400 focus:ring focus:ring-blue-200 outline-none sm:p-[18px] sm:text-[20px] sm:leading-[27px] md:p-[12px] md:text-[14px] md:leading-[21px]  lg:p-[18px] lg:text-[20px] lg:leading-[27px] xl:p-[12px] xl:text-[14px] xl:leading-[21px]"
              />
              {errors.phone && (
                <span className="text-red-500 text-sm">{errors.phone}</span>
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
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="What’s this about?"
              className="w-full border border-[#D2D2D2] text-[#D2D2D2] p-[12px] text-[14px] leading-[21px] font-normal font-Archivo rounded-[8px] focus:border-blue-400 focus:ring focus:ring-blue-200 outline-none sm:p-[18px] sm:text-[20px] sm:leading-[27px] md:p-[12px] md:text-[14px] md:leading-[21px]  lg:p-[18px] lg:text-[20px] lg:leading-[27px] xl:p-[12px] xl:text-[14px] xl:leading-[21px]"
            />
            {errors.subject && (
              <span className="text-red-500 text-sm">{errors.subject}</span>
            )}
          </div>

          {/* Message */}
          <div className="flex flex-col gap-[8px]">
            <label className="text-[16px] font-CreatoDisplay leading-[21px] font-normal text-[#3A2B28] sm:text-[25px] sm:leading-[31px] md:text-[16px] md:leading-[21px] lg:text-[25px] lg:leading-[31px] xl:text-[16px] xl:leading-[21px]">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us how we can help"
              rows={4}
              className="w-full h-[180px]  border border-[#D2D2D2] text-[#D2D2D2]  p-[12px] text-[14px] leading-[21px] font-normal font-Archivo rounded-[8px] focus:border-blue-400 focus:ring focus:ring-blue-200 outline-none resize-none sm:p-[18px] sm:text-[20px] sm:leading-[27px] md:p-[12px] md:text-[14px] md:leading-[21px]  lg:p-[18px] lg:text-[20px] lg:leading-[27px] xl:p-[12px] xl:text-[14px] xl:leading-[21px] md:h-[180px] xl:h-[209px]"
            />
            {errors.message && (
              <span className="text-red-500 text-sm">{errors.message}</span>
            )}
          </div>

          {/* Terms Checkbox */}
          <label className="flex items-center gap-2 text-[16px] font-CreatoDisplay leading-[21px] font-normal text-[#3A2B28] sm:text-[20px] sm:leading-[31px] md:text-[16px] md:leading-[21px] lg:text-[25px] lg:leading-[31px] xl:text-[16px] xl:leading-[21px]">
            <input
              type="checkbox"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
              className="h-4 w-4 sm:h-6 sm:w-6"
            />
            I accept the Terms
          </label>
          {errors.terms && (
            <span className="text-red-500 text-sm">{errors.terms}</span>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-400 hover:bg-blue-500 text-[#3A2B28] py-[12px] rounded-[4px] text-[16px] leading-[21px] font-CreatoDisplay font-normal transition-colors sm:text-[25px] sm:leading-[31px] sm:py-[18px] md:text-[16px] md:leading-[21px] md:p-[12px] lg:text-[25px] lg:leading-[31px] lg:py-[18px] xl:text-[16px] xl:leading-[21px] xl:p-[12px]"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Block11;
