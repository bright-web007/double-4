import React from 'react'
import Block8 from '@/blocks/GalleryPage/Block8/block8'
import Block7 from '@/blocks/GalleryPage/Block7/block7'
import Block9 from '@/blocks/GalleryPage/Block9/block9'
import type { Metadata } from 'next';
import { Meta_Tags } from '@/helpers/data';

export const metadata: Metadata = {
  title: `Gallery | ${Meta_Tags.siteName}`,
  description: `${Meta_Tags.description}`,
  metadataBase: new URL(`${Meta_Tags.siteUrl}`),
  openGraph: {
    title: `Gallery | ${Meta_Tags.siteName}`,
    description: `${Meta_Tags.description}`,
    url: `/gallery`,
    siteName: `${Meta_Tags.siteName}`,
    images: [
      {
        url: 'https://double-4.s3.eu-north-1.amazonaws.com/double4-icon.webp',
        width: 1200,
        height: 630,
        alt: `${Meta_Tags.siteName} Gallery`,
      },
    ],
    type: 'website',
  },
};
const page = () => {
  return (
    <div>
      <Block8 />
      <Block9 />
      <Block7 />
    </div>
  )
}

export default page