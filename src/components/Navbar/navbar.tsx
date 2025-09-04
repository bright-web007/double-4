'use client';

import Image from 'next/image';
import logo from '@/assets/icons/double4-icon.png';
import { Icon } from '@iconify/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import NavigationModal from '@/components/Navbar/NavigationModal';

const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="font-monserrat bg-transparent z-40 flex justify-between pt-[12px] px-[24px] md:px-[40px] xl:px-[100px]">
        <div className="pt-[10px]">
          <Image
            src={logo}
            alt="Double 4 Logo"
            width={38.81}
            height={55.52}
            onClick={() => router.push('/')}
            className="cursor-pointer md:h-[61.3333px] xl:w-[37.22] xl:h-[53.24]"
          />
        </div>

        <div className="flex items-center justify-center h-[60px]">
          {/* Mobile Menu Button */}
          <div
            className="group flex items-center h-full cursor-pointer md:hidden"
            onClick={() => setIsOpen(true)}
          >
            <Icon
              icon="line-md:menu"
              className="text-white w-[38.869px] h-[43.442px] md:w-7 md:h-7 cursor-pointer group-hover:hidden"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center justify-center font-Archivo text-white gap-[24px] text-[16px] leading-[120%] font-medium">
            <p onClick={() => router.push('/')} className="cursor-pointer">
              Home
            </p>
            <p onClick={() => router.push('/menu')} className="cursor-pointer">
              Menu
            </p>
            <p onClick={() => router.push('/gallery')} className="cursor-pointer">
              Gallery
            </p>
            <p onClick={() => router.push('/reward')} className="cursor-pointer">
              Reward & Loyalty
            </p>
            <p onClick={() => router.push('/giftCard')} className="cursor-pointer">
              Get a Gift Card
            </p>
            <p onClick={() => router.push('/contact-us')}
              className="bg-[#7AD3FB] px-2 py-2 rounded cursor-pointer text-[black]">
              Contact us
            </p>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isOpen && <NavigationModal onClose={() => setIsOpen(false)} />}
    </>
  );
};

export default Navbar;
