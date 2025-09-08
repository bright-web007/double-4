'use client'
import React from 'react'
import Link from "next/link"
import { navLinks } from "@/helpers/data"
import Image from 'next/image'
import { Icon } from '@iconify/react';
import { useRouter } from 'next/navigation';


interface NavigationModalProps {
  onClose: () => void;
}

const NavigationModal: React.FC<NavigationModalProps> = ({ onClose }) => {
    const router = useRouter();

  return (
    <div className="fixed inset-0 z-50">
      {/* Background overlay with blur */}
      <div
        className="absolute inset-0 bg-[#3A2B28C9]/50 backdrop-blur-sm"
        onClick={onClose} // 
      ></div>

      {/* Modal content */}
      <div className="absolute top-0 left-0 w-full bg-[#3A2B28] shadow-lg animate-slideDown">
        {/* Header */}
        <div className="font-Archivo flex justify-between items-center pt-[12px] px-[24px] md:px-[64px] xl:px-[100px]">
          <div className="pt-[10px]">
            <Image
              src="https://double-4.s3.eu-north-1.amazonaws.com/double4-icon.webp"
              alt="Double 4 Logo"
              width={38.81}
              height={55.52}
              onClick={() => router.push('/')}
              className="cursor-pointer sm:h-[100px] sm:w-[70px]"
            />
          </div>

          <button
            onClick={onClose}
            className="cursor-pointer"
            aria-label="Close"
          >
            <Icon
              icon="mdi:close"
              className="text-white w-[38.869px] h-[43.442px] sm:h-[80px] sm:w-[60px] md:w-10 md:h-10"
            />
          </button>
        </div>

        {/* Navigation links */}
        <nav className="flex flex-col text-[18px] leading-[120%] font-medium font-Archivo gap-[28px] py-[24px] px-[16px] sm:text-[32px] sm:gap-[38px] sm:py-[40px] sm:px-[25px] md:pb-[64px] md:pt-[24px] md:px-[64px] md:gap-[55px]">
          {navLinks.map((item) => (
            item.name === "Contact-us" ? (
              <Link
                key={item.name}
                href={item.link}
                className="bg-[#7AD3FB] text-black font-medium hover:bg-[#5bc9f8] transition text-center py-2 rounded-[4px] sm:py-3"
                onClick={onClose}
              >
                {item.name}
              </Link>
            ) : (
              <Link
                key={item.name}
                href={item.link}
                className="hover:text-[#7AD3FB] transition text-[#FFFFFF]"
                onClick={onClose}
              >
                {item.name}
              </Link>
            )
          ))}
        </nav>
      </div>
    </div>
  );
};

export default NavigationModal;
