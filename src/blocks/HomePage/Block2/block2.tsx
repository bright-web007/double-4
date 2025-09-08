import React from 'react'
import { items } from '@/helpers/data'
import Image from 'next/image'

const block2 = () => {
    return (
        <div className="grid grid-cols-1 px-[24px] py-[50px] bg-[#F5EBE9] sm:py-[70px] md:py-[90px] xl:grid-cols-3">
            {items.map((item, index) => (
                <div
                    key={index}
                    className="relative flex flex-col items-center text-center p-4 gap-[10px] px-[9%] sm:gap-[14px] sm:px-[17%] md:px-[23%] lg:px-[24%] lg:gap-[16px] xl:gap-[10px] xl:px-[16%] 2xl:px-[18%]"
                >
                    <Image
                        src={item.img}
                        alt={item.title}
                        width={48}
                        height={48}
                        className="sm:w-[70px] sm:h-[70px] lg:w-[90px] lg:h-[90px] xl:h-[48px] xl:w-[48px]"
                    />
                    <h2 className="text-[20px] font-Archivo leading-[30px] font-light text-[#3A2B28] sm:text-[26px] sm:leading-[30px] lg:text-[32px] lg:leading-[35px] xl:text-[24px] xl:leading-[30px]">
                        {item.title}
                    </h2>
                    <p className="text-[16px] font-Archivo leading-[22px] font-light text-[#3B2D2A] sm:text-[20px] sm:leading-[30px] lg:text-[26px] lg:leading-[30px] xl:text-[16px] xl:leading-[22px]">
                        {item.desc}
                    </p>

                    {/* Line with dots */}
                    {index < items.length - 1 && (
                        <>
                            {/* Mobile & tablet: line BELOW */}
                            <div className="flex items-center justify-center w-[132px] my-[32px] md:w-[278.53px] lg:my-[36px] xl:hidden">
                                <div className="w-2 h-2 rounded-full bg-[#3A2B284F]" />
                                <div className="flex-1 h-[1px] bg-[#3A2B284F]" />
                                <div className="w-2 h-2 rounded-full bg-[#3A2B284F]" />
                            </div>

                            {/* XL: vertical centered line BESIDE */}
                            <div className="hidden xl:flex absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-[80px]">
                                <div className="flex items-center w-full">
                                    <div className="w-2 h-2 rounded-full bg-[#3A2B284F]" />
                                    <div className="flex-1 h-[1px] bg-[#3A2B284F]" />
                                    <div className="w-2 h-2 rounded-full bg-[#3A2B284F]" />
                                </div>
                            </div>
                        </>
                    )}
                </div>
            ))}
        </div>

    )
}

export default block2
