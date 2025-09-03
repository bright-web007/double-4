import logo1 from '@/assets/logo1.png'
import logo2 from '@/assets/logo2.png'
import logo3 from '@/assets/logo3.png'

import Breakfast1 from '@/assets/Breakfast1.png'
import Breakfast2 from '@/assets/Breakfast2.png'
import Breakfast3 from '@/assets/Breakfast3.png'

import { StaticImageData } from 'next/image';

  export const items = [
    {
      img: logo1,
      title: 'Authentic Flavors',
      desc: 'Experience dishes crafted with care, bringing the rich and vibrant flavors straight to your table.',
    },
    {
      img: logo2,
      title: 'Homemade Delights',
      desc: 'Experience dishes crafted with care, bringing the rich and vibrant flavors straight to your table.',
    },
    {
      img: logo3,
      title: 'Friendly Atmosphere',
      desc: 'More than just a meal, Double 4 offers a warm and welcoming space where great food meets great company.',
    },
  ];

 

export type Button = {
    label: string;
    actionType: 'navigate';
    path?: string;
  };
  
  export type Item = {
    img: StaticImageData;
    title: string;
    desc: string;
    buttons?: Button[];
  };
  export const MenuLayer: Item[] = [
    {
      img: Breakfast1,
      title: 'Breakfast Menu',
      desc: 'Start your day the right way with our fresh breakfast offerings.',
      buttons: [
        {
          label: 'View Menu',
          actionType: 'navigate',
          path: '',
        },
      ],
    },
    {
      img: Breakfast2,
      title: 'Brunch Menu',
      desc: 'Take your time and savor the best of both worlds. Our brunch menu brings together hearty flavors and light bites.',
      buttons: [
        {
          label: 'View Menu',
          actionType: 'navigate',
          path: '',
        },
      ],
    },
    {
      img: Breakfast3,
      title: 'Drink Menu',
      desc: 'From handcrafted coffee to refreshing sips, our drinks menu has something for every mood.',
      buttons: [
        {
          label: 'View Menu',
          actionType: 'navigate',
          path: '',
        },
      ],
    },
  ];