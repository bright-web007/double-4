import React from 'react'
import Image from "next/image";

const block5 = () => {
  return (
    <div className="bg-[#3A2B28] flex flex-col xl:flex-row">
      <div className="relative w-full  overflow-hidden px-[16px] pt-[71px] pb-[20px] md:px-[142px] md:pt-[86px] xl:px-[96px] xl:pt-[151px]">
        <Image
          src='https://double-4.s3.eu-north-1.amazonaws.com/coffeebeans.webp'
          alt='Decorative coffee'
          width={350}
          height={350}
          className=" absolute left-[245px] xl:rotate-75 xl:h-[280px] xl:w-[280px] xl:left-[-15%] top-[-240.4px] xl:top-[-170.4px] h-[350px] w-[350px] sm:left-[420px] sm:top-[-225.4px] md:left-[72%] md:top-[-225.4px] lg:left-[78%]"
        />


        <div className="flex flex-col gap-[16px]">
          {/* Title */}
          <h2
            className="text-[12px] font-semibold font-Archivo uppercase leading-[100%] tracking-[2.8%] sm:text-[16px] md:text-[14px] lg:text-[18px] xl:text-[14px] 2xl:text-[16px] text-[#7AD3FB]"
          >
            A Perfect Gift, Anytime
          </h2>

          {/* Subtitle */}
          <p
            className="text-[36px] font-light font-Archivo uppercase leading-[120%] sm:text-[55px] md:text-[36px] lg:text-[48px] xl:text-[36px] 2xl:text-[43px] text-[#FFFFFF]"
          >
            GIVE THE GIFT OF DOUBLE FOUR
          </p>

          {/* Description */}
          <p
            className="text-[16px] font-normal font-CreatoDisplay leading-[24px] sm:text-[23px] sm:leading-[32px] md:text-[16px] md:leading-[24px] lg:text-[25px] lg:leading-[38px] xl:text-[16px] xl:leading-[24px] xl:font-light 2xl:text-[21px] 2xl:leading-[32px] text-[#DED1CE]"
          >
            Share the flavors and experiences of Double Four with friends and loved ones. Our Gift Cards are available as physical cards and can be purchased directly in-store.Perfect for any occasion — ask our team for details during your next visit.
          </p>

            <h2
              className="text-[16px] font-semibold font-Archivo leading-[100%] tracking-[2.8%] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[16px] 2xl:text-[16px] text-[#7AD3FB]"
            >
              Ask in - store today!
            </h2>
        </div>
      </div>


          <div className="w-full">
            <div className="relative w-full h-[437px] overflow-hidden sm:h-[700px]">
              <Image
                src="https://double-4.s3.eu-north-1.amazonaws.com/giftSecImage.webp"
                alt="Decorative coffee"
                fill
                className="object-cover"
              />

              {/* Gradient overlay */}
              <div
                className="absolute pointer-events-none w-full h-[300px] top-[-15px] left-0 bg-gradient-to-b from-[#3A2B28]/2000 to-transparent blur-[8px]  xl:blur-[-20px] xl:w-[100px] md:h-full xl:top-0 xl:left-[-5px] xl:bg-gradient-to-r xl:from-[#3A2B28]/2000 xl:to-transparent"
              />
            </div>
          </div>



    </div >
  )
}

export default block5