'use client'
import Masonry from 'react-masonry-css';
import Image from 'next/image'

interface GalleryImage {
  src: string;
  baseH: number;
}

export default function block12() {
  const files: string[] = [
    "Break1.webp",
    "Break2.webp",
    "Break3.webp",
    "Break4.webp",
    "Break5.webp",
    "Break6.webp",
  ];

  const images: GalleryImage[] = files.map((file) => ({
    src: `https://double-4.s3.eu-north-1.amazonaws.com/${file}`,
    baseH:
      file === 'Break2.webp' ||
      file === 'Break3.webp'  ||
      file === 'Break6.webp'
        ? 200
        : 236,
  }));

  const breakpointColumnsObj = {
    default: 3,
    1279: 2,
  };

  // helpers for heights
  const baseHeightClass = (h: number) => {
    if (h === 200) return 'h-[200px]';
    if (h === 236) return 'h-[236px]';
    return 'h-auto';
  };

  const mdHeightClass = (h: number) => {
    if (h === 416) return 'md:h-[416px]';
    if (h === 534) return 'md:h-[534px]';
    return '';
  };

  const xlHeightClass = (h: number) => {
    if (h === 416) return 'xl:h-[416px]';
    if (h === 534) return 'xl:h-[534px]';
    return '';
  };

  return (
    <div className="px-[16px] py-[16px] bg-[#3A2B28] md:px-[24px] md:py-[24px]">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex gap-[16px] md:gap-[24px]"
        columnClassName="flex flex-col gap-[16px] md:gap-[24px]"
      >
        {images.map((img, i) => {
          const col = i % 3;
          const row = Math.floor(i / 3);

          let h: number;
          if (row % 2 === 0) {
            h = col === 1 ? 416 : 534;
          } else {
            h = col === 1 ? 534 : 416;
          }

          const baseClass = baseHeightClass(img.baseH);
          const mdClass = mdHeightClass(h);
          const xlClass = xlHeightClass(h);

          return (
            <div
              key={i}
              className={`relative w-full ${baseClass} ${mdClass} ${xlClass} overflow-hidden`}
            >
              <Image
                src={img.src}
                alt=""
                fill
                className={`object-cover transform transition-transform duration-300 ease-in-out hover:scale-110`}
              />
            </div>
          );
        })}
      </Masonry>
    </div>
  );
}
