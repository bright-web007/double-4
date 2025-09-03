'use client';
import React from 'react'
import Image from 'next/image'
import ArrowRight from '@/assets/Arrow-right.png'
import { MenuLayer } from '@/helpers/data'
import { Button } from '@/components/ui/button';

const block4 = () => {
    return (
        <div className="px-[24px] py-[50px] bg-[#FFFFFF] flex flex-col gap-[67px]">
            {/* Heading */}
            <div className="text-center text-[24px] flex flex-col gap-[40px] justify-center items-center ">
                <Button className="text-12px] leading-[100%] font-Archivo font-semibold bg-[#7AD3FB33] text-[#3A2B28] tracking-[2.8%]">OUR MENU</Button>
                <h3 className="text-[40px] leading-[120%] font-Archivo font-light text-[#3A2B28]">
                    Explore the deliciousness
                </h3>
            </div>

            {/* Mapping Menu Items */}
            <div className="grid grid-cols-1 rounded-6">
                {MenuLayer.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col rounded-6 gap-[0px]"
                    >
                        <Image
                            src={item.img}
                            alt={item.title}
                            width={398}
                            height={286}
                            className=""
                        />

                        <div className="bg-[#3A2B28] pb-[20px] pt-[16px] pl-[12px] pr-[12px] flex flex-col gap-[2.8px]">
                            <h3 className="text-[20px] leading-[28px] font-Archivo font-normal text-[#FFFFFF]">
                                {item.title}
                            </h3>
                            <p className="text-[14px] leading-[20px] font-CreatoDisplay font-normal text-[#C2C2C2]">
                                {item.desc}
                            </p>

                            {item.buttons?.map((btn, i) => (
                                <div key={i} className="w-full flex justify-start">
                                    <Button
                                        onClick={() => {
                                            if (btn.actionType === "navigate" && btn.path) {
                                                window.location.href = btn.path;
                                            }
                                        }}
                                        className="text-[14px] leading-[28px] font-Archivo font-normal text-[#C2C2C2] w-[32%] text-left"
                                    >
                                        {btn.label}
                                        <Image
                                            src={ArrowRight}
                                            alt="arrow right"
                                            className="w-[19px] h-[19px]"
                                        />
                                    </Button>
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