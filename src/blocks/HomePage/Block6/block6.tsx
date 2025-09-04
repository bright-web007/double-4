import React from 'react'
import Image from 'next/image'
import { gridimages } from '@/helpers/data'
import { Button } from '@/components/ui/button'

const block6 = () => {
    return (
        <div className="flex flex-col items-center gap-[67px] px-[16px] pt-[40px] pb-[80px] md:px-[120px] md:py-[100px] xl:p-[114px] 2xl:p-[90px]">
            {/* Title */}
            <div className="text-center flex flex-col gap-[20px] justify-center items-center ">
                <Button className="text-[12px] leading-[100%] font-Archivo font-semibold bg-[#7AD3FB33] text-[#3A2B28] tracking-[2.8%] sm:text-[14px] md:text-[12px] lg:text-[20px] xl:text-[14px]">GALLERY</Button>
                <h3 className="text-[40px] leading-[120%] font-Archivo font-light text-[#3A2B28] sm:text-[65px] md:text-[40px] lg:text-[60px] xl:text-[40px] 2xl:text-[47px]">
                EXPLORE THE FOOD & AMBIENCE
                </h3>
            </div>
          
          <div className="flex flex-col gap-[24px] text-center items-center sm:gap-[32px]">
            {/* Grid Images */}
            <div className="grid grid-cols-2 gap-[4px]">
                {gridimages.map((item, index) => (
                    <div key={index} className="relative w-full">
                        <Image
                            src={item.img}
                            alt={`Food ${index + 1}`}
                            className="object-cover w-full h-[197px] sm:h-[290px] md:h-[258px]"
                        />
                    </div>
                ))}
            </div>
            <p className="text-[16px] leading-[100%] font-CreatoDisplay font-medium text-[#3A2B28] sm:text-[24px] md:text-[16px] lg:text-[24px] xl:text-[16px]">
                View full gallery
                </p>
            </div>
        </div>
    )
}

export default block6