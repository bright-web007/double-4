'use client';
import React from 'react'
import Image from 'next/image'
import { MenuLayer } from '@/helpers/data'
import { Button } from '@/components/ui/button';

const block4 = () => {
    return (
        <div className="px-[24px] py-[50px] bg-[#FFFFFF] flex flex-col gap-[67px] md:px-[64px] md:py-[114px] xl:px-[112px]">
            {/* Heading */}
            <div className="text-center flex flex-col gap-[40px] justify-center items-center ">
                <Button className="text-[14px] leading-[100%] font-Archivo font-semibold bg-[#7AD3FB33] text-[#3A2B28] tracking-[2.8%] lg:text-[20px] xl:text-[14px]">OUR MENU</Button>
                <h3 className="text-[40px] leading-[120%] font-Archivo font-light text-[#3A2B28] sm:text-[60px] lg:text-[90px] xl:text-[40px] 2xl:text-[50px]">
                    Explore the deliciousness
                </h3>
            </div>

            {/* Mapping Menu Items */}
            <div className="grid grid-cols-1 xl:grid-cols-3">
                {MenuLayer.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col"
                    >
                        <Image
                            src={item.img}
                            alt={item.title}
                            height={286}
                            width={398}
                            className="w-full h-[286px]"
                        />

                        <div className="bg-[#3A2B28] pb-[20px] pt-[16px] pl-[12px] pr-[12px] flex flex-col gap-[2.8px] sm:gap-[4px] md:gap-[8px] lg:gap-[12px] xl:gap-[8px] xl:border-r-[1px] border-[#686868]">
                            <h3 className="text-[20px] leading-[28px] font-Archivo font-normal text-[#FFFFFF] sm:text-[23px] sm:leading-[31px] lg:text-[30px] lg:leading-[38px] xl:text-[20px] xl:leading-[28px] 2xl:text-[22px] 2xl:leading-[30px]">
                                {item.title}
                            </h3>
                            <p className="text-[14px] leading-[20px] font-CreatoDisplay font-normal text-[#C2C2C2] sm:text-[22px] sm:leading-[30px] md:text-[20px] md:leading-[26px] lg:text-[28px] lg:leading-[38px] xl:text-[15px] xl:leading-[23px] 2xl:text-[18px] 2xl:leading-[24px]">
                                {item.desc}
                            </p>

                            {item.buttons?.map((btn, i) => (
                                <div key={i} className="w-full flex justify-start">
                                    <span
                                        onClick={() => {
                                            if (btn.actionType === "navigate" && btn.path) {
                                                window.location.href = btn.path;
                                            }
                                        }}
                                        className="text-[14px] leading-[28px] font-Archivo font-normal text-[#C2C2C2] flex flex-row  items-center justify-center sm:text-[20px] sm:leading-[28px] md:text-[22px] md:leading-[30px] lg:text-[26px] lg:leading-[34px] xl:text-[16px] xl:leading-[28px]"
                                    >
                                        {btn.label}
                                        <Image
                                            src="https://double-4.s3.eu-north-1.amazonaws.com/Arrow-right.webp"
                                            alt="arrow right"
                                            width={19}
                                            height={19}
                                            className="w-[19px] h-[19px] justify-center sm:h-[22px] sm:w-[22px] md:h-[25px] md:w-[25px] lg:h-[28px] lg:w-[28px] xl:h-[19px] xl:w-[19px]"
                                        />
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default block4