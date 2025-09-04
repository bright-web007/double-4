import React from 'react'
import Image from 'next/image'
import coffee from '@/assets/coffee.png'
import { Button } from '@/components/ui/button';

const block3 = () => {
    return (
        <div className="py-[50px] px-[16px] bg-[#3A2B28] sm:px-[32px] sm:py-[120px] md:px-[64px] md:py-[114px] lg:px-[90px] lg:py-[130px] xl:p-[114px]">
            <div className="flex flex-col gap-[24px] sm:gap-[80px] md:gap-[120px] xl:flex-row">
                <Image
                    src={coffee}
                    alt="coffee image"
                    className="w-full"
                />
                <div className="flex flex-col gap-[24px] lg:gap-[35px] xl:w-[100%] xl:gap-[24px] xl:mt-[4%] 2xl:mt-[5%]">
                    <div className="flex flex-col gap-[16px]">
                    <span className="text-[12px] leading-[100%] font-Archivo font-semibold text-[#7AD3FB] tracking-[2.8%] sm:text-[15px] md:text-[14px] lg:text-[17px]">ABOUT DOUBLE 4</span>
                    <span className="text-[40px] leading-[120%] font-Archivo text-[#FFFFFF] sm:text-[60px] md:text-[40px] lg:text-[50px] xl:text-[40px]">WHY WE ARE THE BEST FOR EVERYONE</span>
                    </div>

                    <p className="text-[16px] leading-[24px] font-CreatoDisplay font-normal text-[#FFFFFF] sm:text-[18px] sm:leading-[24px] md:text-[16px] md:leading-[24px] lg:text-[20px] lg:leading-[28px] xl:text-[16px] xl:leading-[24px]">At Double 4, we believe coffee is more than a drink  it’s a ritual. That’s why we pair our handcrafted brews with thoughtfully prepared meals, served in a space designed for calm and connection. Whether you’re here for a quiet moment, a casual brunch, or your daily pick-me-up, Double 4 is where quality and comfort meet.</p>
                   <Button className="bg-[#7AD3FB] w-full font-Archivo leading-[100%] h-[50px] text-[16px] sm:text-[20px] sm:h-[65px] md:text-[16px] md:h-[50px] lg:text-[19px] lg:h-[60px] xl:text-[16px] xl:h-[50px]">
                    Discover our menu
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default block3