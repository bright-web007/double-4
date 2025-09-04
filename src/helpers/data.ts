import logo1 from '@/assets/logo1.png'
import logo2 from '@/assets/logo2.png'
import logo3 from '@/assets/logo3.png'

import img1 from '@/assets/img4.jpg'
import img2 from '@/assets/img2.jpg'
import img3 from '@/assets/img3.jpg'
import img4 from '@/assets/img4.jpg'

import Breakfast1 from '@/assets/Breakfast1.png'
import Breakfast2 from '@/assets/Breakfast2.png'
import Breakfast3 from '@/assets/Breakfast3.png'

import gift1 from '@/assets/gift1.png'
import gift2 from '@/assets/gift2.png'

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
      desc: 'Every bite feels like home made with love, tradition, and the freshest ingredients for that true homemade taste.',
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
    subtitle: string;
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
      subtitle:''
    },
    {
      img: Breakfast2,
      title: 'Brunch Menu',
      desc: 'Take your time and savor the best of both worlds. Our brunch menu brings together hearty flavors.',
      buttons: [
        {
          label: 'View Menu',
          actionType: 'navigate',
          path: '',
        },
      ],
      subtitle:''
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
      subtitle: ''
    },
  ];



  export const RewardLayer: Item[] = [
    {
      img: gift1,
      title: 'Your Daily Ritual, Rewarded',
      subtitle: 'Join the Double Four Rewards',
      desc:'Every sip, every bite, every visit brings you closer to exclusive perks. Earn points on every purchase and unlock special rewards designed just for our community. Loyalty has never tasted so good.',
      buttons: [
        {
          label: 'Learn More',
          actionType: 'navigate',
          path: '',
        },
      ],
      
    },
    {
      img: gift2,
      title: 'Give the Gift of Double Four',
      subtitle: 'GET A DOUBLE FOUR DIGITAL GIFT CARD',
      desc:'Treat your loved ones to the Double Four experience. Whether it’s coffee, pastries, or their favorite picks, our digital gift cards make it easy to spread joy—instantly and effortlessly.',
      buttons: [
        {
          label: 'Get a Gift Card',
          actionType: 'navigate',
          path: '',
        },
      ],
      
    },
  ];


  export const gridimages = [
    {
      img: img1,
    },
    {
      img: img2,
    },
    {
      img: img3,
    },
    {
      img: img4,
    },
  ];