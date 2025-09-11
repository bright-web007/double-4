import React from 'react'
import Block10 from '@/blocks/contact-us-page/Block10/block10'
import Block11 from '@/blocks/contact-us-page/Block11/block11'
import Block7 from '@/blocks/contact-us-page/Block7/block7'
import Block12 from '@/blocks/contact-us-page/Block12/block12'
import type { Metadata } from 'next';
import { Meta_Tags } from '@/helpers/data';

export const metadata: Metadata = {
  title: `Contact-us | ${Meta_Tags.siteName}`,
  description: `${Meta_Tags.description}`,
  metadataBase: new URL(`${Meta_Tags.siteUrl}`),
  openGraph: {
    title: `Contact-us | ${Meta_Tags.siteName}`,
    description: `${Meta_Tags.description}`,
    url: `/contact-us`,
    siteName: `${Meta_Tags.siteName}`,
    images: [
      {
        url: 'https://double-4.s3.eu-north-1.amazonaws.com/double4-icon.webp',
        width: 1200,
        height: 630,
        alt: `${Meta_Tags.siteName} Contact-us`,
      },
    ],
    type: 'website',
  },
};

const page = () => {
  return (
    <div>
      <Block10 />
      <Block11 />
      <Block12 />
      <Block7 />
    </div>
  )
}

export default page