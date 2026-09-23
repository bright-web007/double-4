import React from 'react'
import Block1 from '@/blocks/HomePage/Block1/block1'
import Block2 from '@/blocks/HomePage/Block2/block2'
import Block3 from '@/blocks/HomePage/Block3/block3'
import Block4 from '@/blocks/HomePage/Block4/block4'
import Block5 from '@/blocks/HomePage/Block5/block5'
import Block6 from '@/blocks/HomePage/Block6/block6'
import Block7 from '@/blocks/HomePage/Block7/block7'
import type { Metadata } from 'next';
import { Meta_Tags } from '@/helpers/data';

export const metadata: Metadata = {
  title: `Home | ${Meta_Tags.siteName}`,
  description: `${Meta_Tags.description}`,
  metadataBase: new URL(`${Meta_Tags.siteUrl}`),
  robots: {
    index: false, // hide from Google
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  openGraph: {
    title: `Home | ${Meta_Tags.siteName}`,
    description: `${Meta_Tags.description}`,
    url: `/`,
    siteName: `${Meta_Tags.siteName}`,
    images: [
      {
        url: 'https://double-4.s3.eu-north-1.amazonaws.com/double4-icon.webp',
        width: 1200,
        height: 630,
        alt: `${Meta_Tags.siteName} Home`,
      },
    ],
    type: 'website',
  },
};
const page = () => {
  return (
    <div>
      <Block1 />
      <Block2 />
      <Block3 />
      <Block4 />
      <Block5 />
      <Block6 />
      <Block7 />
    </div>
  )
}

export default page