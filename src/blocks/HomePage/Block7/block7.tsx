import React from 'react'
import Image from "next/image";

type OpeningHour = {
    day: string;
    time: string;
  };
const block7 = () => {
    const hours: OpeningHour[] = [
        { day: "Monday", time: "CLOSED" },
        { day: "Tuesday", time: "11AM - 9PM" },
        { day: "Wednesday", time: "11AM - 9PM" },
        { day: "Thursday", time: "11AM - 9PM" },
        { day: "Friday", time: "11AM - 9PM" },
        { day: "Saturday", time: "11AM - 9PM" },
        { day: "Sunday", time: "11AM - 9PM" },
    ]
    return (
        <div className="relative pt-[40px] pb-[80px] px-[16px] sm:pb-[120px] sm:pt-[70px] sm:px-[20px] md:pb-[114px] md:pt-[115px] md:px-[114px] lg:px-[130px] xl:pb-[114px] xl:pt-[115px] xl:px-[114px] 2xl:px-[145px]">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="https://double-4.s3.eu-north-1.amazonaws.com/coffecup.webp"
                    alt="Coffee background"
                    fill
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                />
            </div>

            {/* Overlay to darken */}
            <div className="absolute inset-0 bg-[#3A2B28C4]/90"></div>

            {/* Content */}
            <div className="relative flex flex-col gap-[67px] xl:grid xl:grid-cols-2">
                <div className="flex flex-col gap-[12px]">
                    {/* Visit us */}
                    <p className="text-[#7AD3FB] text-[12px] font-Archivo font-semibold tracking-[2.8%] sm:text-[14px] lg:text-[16px] xl:text-[14px]">
                        VISIT US
                    </p>

                    {/* Heading */}
                    <h2 className="text-[36px] leading-[120%] font-light font-Archivo text-[#FFFFFF] sm:text-[40px] lg:text-[55px] xl:text-[40px] ">OPENING HOURS</h2>

                    {/* Subtitle */}
                    <p className="text-[#DED1CE] text-[16px] leading-[24px] font-CreatoDisplay font-normal sm:text-[24px] sm:leading-[32px] md:text-[16px] md:leading-[24px] lg:text-[20px] lg:leading-[32px] xl:text-[23px] xl:leading-[28px]">
                        Drop by for your favorite brews and bites. We’re here to serve you fresh coffee and a warm
                        atmosphere every day of the week
                    </p>
                </div>

                {/* Hours list */}
                <div className="text-left">
                    {hours.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-row items-center text-[12px] gap-[10px] leading-[19.2px] text-[#FFFFFF] sm:text-[24px]"
                        >
                            {/* Day */}
                            <span className="whitespace-nowrap">{item.day}:</span>

                            {/* Divider line */}
                            <span className="flex-1 border-b border-[#D5D5D54D] mx-2 my-3 sm:my-[25px]"></span>

                            {/* Time */}
                            <span className="whitespace-nowrap font-medium">{item.time}</span>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default block7