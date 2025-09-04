import React from 'react'
import { Button } from '@/components/ui/button';
import homehero from '@/assets/background/homehero.png'

const block1 = () => {
  return (
    <div className="h-[100vh] overflow-hidden relative mt-[-80px]">
    {/* Background container */}
    <div className="absolute inset-0 flex flex-col animate-slide-vertical">
      {/* Layer 1 */}
      <div
        className="h-[100%] w-full bg-cover bg-center bg-no-repeat relative animate-scroll-right xl:h-[100%]"
        style={{ backgroundImage: `url(${homehero.src})` }}
      >
        {/* Overlay (optional tint, not blur) */}
        <div className="absolute inset-0  bg-black/45" />
      </div>
  
      {/* Layer 2 */}
      <div
        className="h-[100%] w-full bg-cover bg-center bg-no-repeat relative animate-scroll-left xl:h-[100%]"
        style={{ backgroundImage: `url(${homehero.src})` }}
      >
        <div className="absolute inset-0  bg-black/45" />
      </div>
  
      {/* Layer 3 */}
      <div
        className="h-[100%] w-full bg-cover bg-center bg-no-repeat relative animate-scroll-right xl:h-[100%]"
        style={{ backgroundImage: `url(${homehero.src})` }}
      >
        <div className="absolute inset-0  bg-black/45" />
      </div>
    </div>
  
    {/* Hero Content */}
    <div className="relative z-10 px-4 py-3 flex flex-col gap-8 items-center justify-center h-full sm:gap-15 md:px-22 lg:px-39 lg:gap-23 xl:px-10 xl:gap-[40px]">
      <div className="flex flex-col gap-3 sm:gap-5 md:text-center lg:gap-5 xl:gap-[24px] 2xl:gap-[18px]">
        <h1 className="font-semibold font-Archivo text-[55px] leading-[105%] sm:text-[90px] lg:text-[120px] xl:text-[80px] 2xl:text-[70px]">
          <span className="text-white">Good Food, Great </span>
          <span className="text-[#7AD3FB] italic font-normal">Coffee</span>
        </h1>
        <p className="text-[15px] leading-[21px] font-normal text-white font-CreatoDisplay sm:text-[23px] sm:leading-[30px] lg:text-[27px] lg:leading-[31px] xl:px-[21%] xl:text-[20px] 2xl:text-[18px]">
          Experience exceptional coffee and thoughtfully prepared meals in a calm, welcoming space.
        </p>
      </div>
      <div className="w-full xl:px-[29%] 2xl:px-[34%]">
      <Button className="text-[16px] h-[50px] font-CreatoDisplay font-normal bg-[#7AD3FB] w-full rounded-md sm:h-[70px] sm:text-[30px] lg:h-[80px] xl:h-[50px] xl:text-[16px]">
        View Menu
      </Button>
      </div>
    </div>
  </div>

  )
}

export default block1