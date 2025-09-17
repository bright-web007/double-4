import React from 'react'
import Image from 'next/image'

const block10 = () => {
    return (
        <div className="relative h-[80vh] overflow-hidden mt-[-80px] pt-[40px] pb-[80px] px-[16px] sm:pb-[120px] sm:pt-[70px] sm:px-[20px] md:pb-[114px] md:pt-[115px] md:px-[114px] lg:px-[130px] xl:pb-[114px] xl:pt-[115px] xl:px-[114px] 2xl:px-[145px]">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="https://double-4.s3.eu-north-1.amazonaws.com/contactbg.webp"
                    alt="Contact-us page background"
                    fill
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                />
            </div>

            {/* Overlay to darken */}
            <div className="absolute inset-0 bg-[#3A2B28C4]/50"></div>

            {/* Content */}
            <div className="relative z-10 px-4 py-3 flex flex-col gap-8 items-center justify-center h-full ">
                <div className="flex flex-col gap-[12px]">
                    <h1 className="flex flex-col gap-[24px] text-center xl:w-[450px]">

                        <span className="text-[#FFFFFF] text-[60px] leading-[107%] font-Archivo font-semibold tracking-[2.8%] sm:text-[90px] md:text-[80px] lg:text-[60px] xl:text-[80px]">
                            Contact Us
                        </span>

                        <span className="text-[18px] leading-[150%] font-normal font-CreatoDisplay text-[#FFFFFF] sm:text-[32px] md:text-[20px] lg:text-[30px] xl:text-[18px] xl:leading-[150%]">
                            Let’s connect and make your Double Four experience seamless. Whether it’s an inquiry, or special request, we’re ready to assist you.
                        </span>
                    </h1>
                </div>

            </div>
        </div>
    )
}

export default block10