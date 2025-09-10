import { StaticImageData } from 'next/image';

  export const items = [
    {
      img: "https://double-4.s3.eu-north-1.amazonaws.com/logo1.webp",
      title: 'Authentic Flavors',
      desc: 'Experience dishes crafted with care, bringing the rich and vibrant flavors straight to your table.',
    },
    {
      img: "https://double-4.s3.eu-north-1.amazonaws.com/logo2.webp",
      title: 'Homemade Delights',
      desc: 'Every bite feels like home made with love, tradition, and the freshest ingredients for that true homemade taste.',
    },
    {
      img: "https://double-4.s3.eu-north-1.amazonaws.com/logo3.webp",
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
    img: StaticImageData|string;
    title: string;
    subtitle: string;
    desc: string;
    buttons?: Button[];
  };
  export const MenuLayer: Item[] = [
    {
      img: "https://double-4.s3.eu-north-1.amazonaws.com/Breakfast.webp",
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
      img: "https://double-4.s3.eu-north-1.amazonaws.com/Breakfast2.webp",
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
      img: "https://double-4.s3.eu-north-1.amazonaws.com/Breakfast3.webp",
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
      img: "https://double-4.s3.eu-north-1.amazonaws.com/gift1.webp",
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
      img: "https://double-4.s3.eu-north-1.amazonaws.com/gift2.webp",
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
      img: "https://double-4.s3.eu-north-1.amazonaws.com/img1.webp",
    },
    {
      img: "https://double-4.s3.eu-north-1.amazonaws.com/img2.webp",
    },
    {
      img: "https://double-4.s3.eu-north-1.amazonaws.com/img3.webp",
    },
    {
      img: "https://double-4.s3.eu-north-1.amazonaws.com/img4.webp",
    },
  ];

  export const navLinks = [
    { name: 'Home', link: '/' },
    { name: 'Menu', link: '/menu' },
    { name: 'Gallery', link: '/gallery' },
    { name: 'Reward & Loyalty', link: '/reward' },
    { name: 'Get a Gift Card', link: '/giftCard' },
    { name: 'Contact-us', link: '/contact-us' },
  ];