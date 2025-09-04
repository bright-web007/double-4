// 'use client';
// import React from "react";
// import Image from "next/image";
// import { RewardLayer } from "@/helpers/data";
// import { Button } from "@/components/ui/button";

// const block5 = () => {
//   return (
//     <div className="grid grid-cols-1">
//     {RewardLayer.map((item, index) => (
//       <div
//         key={index}
//         className={`flex flex-col gap-4 px-[16px] py-[50px] 
//           ${index === 0 ? "bg-[#3A2B28]" : "bg-[#DED1CE]"}`}
//       >
//         <div className="flex flex-col gap-[16px]">
//         {/* Title */}
//         <h2 
//         className={`text-[12px] font-semibold font-Archivo leading-[100%] tracking-[2,8%] ${
//             index === 0 ? "text-[#7AD3FB] " : "text-[#3A2B28]"
//           }`}
//         >{item.title}</h2>

//         {/* Subtitle */}
//         <p
//          className={`text-[36px] font-light font-Archivo leading-[120%] ${
//             index === 0 ? "text-[#FFFFFF] " : "text-[#3A2B28]"
//           }`}
//       >{item.subtitle}</p>

//         {/* Description */}
//         <p
//          className={`text-[16px] font-normal font-CreatoDisplay leading-[24px] ${
//             index === 0 ? "text-[#DED1CE] " : "text-[#3A2B28]"
//           }`}
//         >{item.desc}</p>
         
//          </div>

//          <div className="place-items-center">
//         {/* Image */}
//         <Image
//           src={item.img}
//           alt={item.title}
          
//           className="object-contain w-full"
//         />

//         {/* Button */}
//         {item.buttons?.map((btn, i) => (
//           <Button
//             key={i}
//             onClick={() => {
//               if (btn.actionType === "navigate" && btn.path) {
//                 window.location.href = btn.path;
//               }
//             }}
//             className=" bg-[#7AD3FB] text-black px-6 py-2 w-full"
//           >
//             {btn.label}
//           </Button>
//         ))}
//         </div>
//       </div>
//     ))}
//   </div>
//   )
// }

// export default block5

// 'use client';
// import React from "react";
// import Image from "next/image";
// import { RewardLayer } from "@/helpers/data";
// import { Button } from "@/components/ui/button";

// // Import your decorative image
// import CoffeeBean from "@/assets/coffeebeans.png"; // adjust path as needed

// const block5 = () => {
//   return (
//     <div className="grid grid-cols-1">
//       {RewardLayer.map((item, index) => (
//         <div
//           key={index}
//           className={`relative flex flex-col gap-4 px-[16px] py-[50px] 
//           ${index === 0 ? "bg-[#3A2B28]" : "bg-[#DED1CE]"}`}
//         >
//           {/* Decorative Image */}
//           <Image
//             src={CoffeeBean}
//             alt="Decorative bean"
//             width={200}
//             height={94}
//             className={`absolute top-[-38.4px] ${index === 0 ? "left-[265px]" : "left-[-100px]"}`}
//           />

//           <div className="flex flex-col gap-[16px]">
//             {/* Title */}
//             <h2
//               className={`text-[12px] font-semibold font-Archivo leading-[100%] tracking-[2,8%] ${
//                 index === 0 ? "text-[#7AD3FB] " : "text-[#3A2B28]"
//               }`}
//             >
//               {item.title}
//             </h2>

//             {/* Subtitle */}
//             <p
//               className={`text-[36px] font-light font-Archivo leading-[120%] ${
//                 index === 0 ? "text-[#FFFFFF] " : "text-[#3A2B28]"
//               }`}
//             >
//               {item.subtitle}
//             </p>

//             {/* Description */}
//             <p
//               className={`text-[16px] font-normal font-CreatoDisplay leading-[24px] ${
//                 index === 0 ? "text-[#DED1CE] " : "text-[#3A2B28]"
//               }`}
//             >
//               {item.desc}
//             </p>
//           </div>

//           <div className="place-items-center">
//             {/* Image */}
//             <Image
//               src={item.img}
//               alt={item.title}
//               className="object-contain w-full"
//             />

//             {/* Button */}
//             {item.buttons?.map((btn, i) => (
//               <Button
//                 key={i}
//                 onClick={() => {
//                   if (btn.actionType === "navigate" && btn.path) {
//                     window.location.href = btn.path;
//                   }
//                 }}
//                 className=" bg-[#7AD3FB] text-black px-6 py-2 w-full"
//               >
//                 {btn.label}
//               </Button>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default block5;


'use client';
import React from "react";
import Image from "next/image";
import { RewardLayer } from "@/helpers/data";
import { Button } from "@/components/ui/button";
import CoffeeBean1 from "@/assets/coffeebeans.png";
import CoffeeBean2 from "@/assets/coffeebeans2.png";

const block5 = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2">
      {RewardLayer.map((item, index) => (
        <div
          key={index}
          className={`relative flex flex-col gap-4 px-[16px] py-[50px] sm:px-[20px]  md:py-[100px] md:px-[171px] lg:py-[150px] lg:px-[250px] xl:py-[100px] xl:px-[100px] 2xl:py-[80px] 2xl:px-[120px]
          ${index === 0 ? "bg-[#3A2B28]" : "bg-[#DED1CE]"} overflow-hidden`}
        >
          {/* Decorative Image - Different for each container */}
          <Image
            src={index === 0 ? CoffeeBean1 : CoffeeBean2}
            alt="Decorative bean"
            className={`absolute  ${index === 0 ? "left-[245px] top-[-240.4px] h-[350px] w-[350px] sm:left-[420px] sm:top-[-225.4px] md:left-[72%] md:top-[-225.4px] lg:left-[78%] xl:left-[70%]" 
              : "left-[-58px] top-[-50.4px] h-[100px] w-[100px] md:left-[-40px] md:top-[-40.4px]"}`}
          />

          <div className="flex flex-col gap-[16px]">
            {/* Title */}
            <h2
              className={`text-[12px] font-semibold font-Archivo leading-[100%] tracking-[2,8%] sm:text-[16px] md:text-[14px] lg:text-[16px] xl:text-[14px] 2xl:text-[16px] ${
                index === 0 ? "text-[#7AD3FB]" : "text-[#3A2B28]"
              }`}
            >
              {item.title}
            </h2>

            {/* Subtitle */}
            <p
              className={`text-[36px] font-light font-Archivo leading-[120%] sm:text-[55px] md:text-[36px] lg:text-[43px] xl:text-[36px] 2xl:text-[43px]  ${
                index === 0 ? "text-[#FFFFFF]" : "text-[#3A2B28]"
              }`}
            >
              {item.subtitle}
            </p>

            {/* Description */}
            <p
              className={`text-[16px] font-normal font-CreatoDisplay leading-[24px] sm:text-[23px] sm:leading-[32px] md:text-[14px] md:leading-[24px] lg:text-[23px] lg:leading-[32px] xl:text-[14px] xl:leading-[24px] 2xl:text-[23px] 2xl:leading-[32px] ${
                index === 0 ? "text-[#DED1CE]" : "text-[#3A2B28]"
              }`}
            >
              {item.desc}
            </p>
          </div>

          <div className="place-items-center">
            {/* Main Image */}
            <Image
              src={item.img}
              alt={item.title}
              className="object-contain w-full"
            />

            {/* Button */}
            {item.buttons?.map((btn, i) => (
              <Button
                key={i}
                onClick={() => {
                  if (btn.actionType === "navigate" && btn.path) {
                    window.location.href = btn.path;
                  }
                }}
                className=" bg-[#7AD3FB] text-[16px] leading-[100%] text-black px-6 py-2 w-full sm:h-[70px] sm:text-[24px] md:text-[16px] md:h-[50px] lg:h-[70px] lg:text-[24px] xl:text-[16px] xl:h-[50px] 2xl:h-[70px] 2xl:text-[24px] "
              >
                {btn.label}
              </Button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default block5;
