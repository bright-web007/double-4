'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { navLinks } from '@/helpers/data';
import { useRouter } from 'next/navigation';

const Footer = () => {
  const router = useRouter();
  const [value, setValue] = useState('');

  const handleClick = () => {
    alert(`You entered: ${value}`);
  };

  return (
    <div className="bg-[#3A2B28] px-[16px] py-[40px] flex flex-col gap-[24px] md:px-[114px] md:py-[114px]">
      <div className="flex flex-col gap-6 text-[#EBEBEB] xl:w-[full] items-center">
        <Image
          src="https://double-4.s3.eu-north-1.amazonaws.com/footerlogo.webp"
          alt="Icon"
          height={140.84}
          width={98.45}
          className="w-[98.45px] h-[140.84px] object-contain sm:w-[140.45px] sm:h-[180.84px] md:w-[98.45px] lg:w-[140.45px] lg:h-[180.84px] xl:w-[140.84px] xl:h-[98.45px] 2xl:w-[140.45px] 2xl:h-[180.84px]"
        />
        <Image
          src="https://double-4.s3.eu-north-1.amazonaws.com/double4name.webp"
          alt="Icon"
          width={295.99}
          height={28.87}
          className="w-[295.99px] h-[28.87px] object-contain sm:w-[330.99px] sm:h-[38.87px] md:w-[295.99px] md:h-[28.87px] lg:h-[38.87px] lg:w-[330.99px] xl:h-[28.87px] xl:w-[295.99px]"
        />
        <div className="text-[10.34px] leading-[100%] font-light font-Archivo sm:text-[16px] md:text-[10.34px] lg:text-[16px] xl:text-[10.34px] xl:leading-[21px] ">
          <p>CAFE</p>
        </div>
      </div>

      <div className="flex flex-col gap-[24px] w-full xl:w-[489px]">
        <p className="text-[16px] font-CreatoDisplay text-[#DED1CE] leading-[21px] font-normal sm:text-[24px] sm:leading-[28px] md:text-[15px] md:leading-[26px] lg:text-[20px] lg:leading-[28px] xl:text-[16px] xl:leading-[21px] ">
          Subscribe to our newsletter for the latest updates on features and releases.
        </p>

        <div className="flex flex-col items-center gap-[16px]">
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Your Email Here"
            className="text-[14px] leading-[100%] font-CreatoDisplay font-normal border-[0.5px] border-[#DED1CE] text-[#FFFFFF99] rounded-[4px] px-[16px] py-[12px] w-full focus:outline-none focus:ring-2 focus:ring-blue-400 sm:text-[18px] sm:px-[16px] sm:py-[20px] md:px-[16px] md:py-[12px] lg:px-[16px] lg:py-[20px] xl:px-[16px] xl:py-[12px] 2xl:px-[16px] 2xl:py-[20px]"
          />
          <button
            onClick={handleClick}
            className="bg-[#7AD3FB] w-full text-[#3A2B28] text-[16px] leading-[21px] font-CreatoDisplay font-normal px-[24px] py-[12px] rounded-[4px] hover:bg-blue-600 transition sm:text-[18px] sm:py-[20px] md:px-[16px] md:py-[12px] lg:px-[16px] lg:py-[20px] xl:px-[16px] xl:py-[12px] 2xl:px-[16px] 2xl:py-[20px]"
          >
            Join
          </button>
        </div>

        <div>
          <p className="text-[#D2D2D2] text-[12px] leading-[21px] font-CreatoDisplay font-normal sm:text-[18px] sm:leading-[24px] md:text-[12px] md:leading-[21px] lg:text-[18px] lg:leading-[24px] xl:text-[12px] xl:leading-[21px] ">
            By subscribing, you consent to our privacy policy and receive updates.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-[40px] w-full">
        <div className="text-[16px] text-[#DED1CE] leading-[21px] font-CreatoDisplay font-normal underline flex flex-col gap-[12px] sm:text-[24px] sm:gap-[18px] md:gap-[12px] md:text-[16px] md:leading-[21px] lg:text-[24px] lg:gap-[18px] lg:leading-[21px] xl:text-[16px] xl:leading-[21px] xl:gap-[12px] ">
          <p>Company Address</p>
          <p>United Kingdom</p>
          <p>(216) 456-8906</p>
        </div>


        <div className="flex gap-[24px] text-[#EBEBEB] ">
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >

            <Icon icon="circum:facebook" className="w-[18.37px] h-[18.37px] sm:w-[38px] sm:h-[38px] md:w-[18.37px] md:h-[18.37px] lg:w-[38px] lg:h-[38px] xl:w-[18.37px] xl:h-[18.37px]" />
          </a>

          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon="line-md:instagram" className="w-[18.37px] h-[18.37px] sm:w-[38px] sm:h-[38px] md:w-[18.37px] md:h-[18.37px] lg:w-[38px] lg:h-[38px] xl:w-[18.37px] xl:h-[18.37px]" />
          </a>

          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon="fa-brands:tiktok" className="w-[18.37px] h-[18.37px] sm:w-[38px] sm:h-[38px] md:w-[18.37px] md:h-[18.37px] lg:w-[38px] lg:h-[38px] xl:w-[18.37px] xl:h-[18.37px]" />
          </a>

        </div>
      </div>

      <hr className="border-[#564542] h-[3px]" />

      <div>
        <div className="flex flex-col w-full gap-[16px] text-[16px] leading-[21px] font-normal cursor-pointer text-[#DED1CE] whitespace-nowrap sm:text-[25px] sm:gap-[27px] md:gap-[16px] md:text-[16px] md:leading-[21px] lg:text-[25px] lg:gap-[27px] lg:leading-[21px] xl:text-[16px] xl:leading-[21px] xl:gap-[16px] xl:grid xl:grid-cols-6">
          {navLinks.map(item => (
            <React.Fragment key={item.name}>
              <a
                href={item.link}
                className=""
              >
                {item.name}
              </a>
            </React.Fragment>
          ))}
        </div>
      </div>

      <hr className="border-[#564542] h-[3px] xl:h-[5px]" />

      <div>
        <p className="text-[14px] leading-[23px] font-CreatoDisplay font-normal text-[#DED1CE] sm:text-[20px] sm:leading-[28px] md:text-[14px] md:leading-[23px] lg:text-[18px] lg:leading-[22px] xl:text-[14px] xl:leading-[21px] xl:w-[478px] 2xl:text-[13.5px] 2xl:leading-[21px]">
          Double four is more than just coffee it’s a community. From handcrafted brews to thoughtful experiences,
          we’re here to make every visit memorable. Join us in-store or online to sip, savor, and stay connected.
        </p>
      </div>

      <div>
        <p className="text-[#574643] text-[10px] font-CreatoDisplay font-normal leading-[16px] text-center sm:text-[14px] sm:leading-[23px]  md:text-[10px] md:leading-[16px] lg:text-[14px] lg:leading-[23px] xl:text-[12px] xl:leading-[21px] ">
          Copyright © {new Date().getFullYear()} Double four. All Rights Reserved.
        </p>
      </div>

    </div>
  );
};

export default Footer;

