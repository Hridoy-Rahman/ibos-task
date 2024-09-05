import React from "react";

const Hero = () => {
  return (
    <div className="bg-[url('/public/hero.png')] bg-cover bg-center h-[1024px] w-full flex items-center justify-center ">
      <div className="w-[445px] text-center flex flex-col items-center gap-2">
        <div className="bg-[#1E99F5] rounded-full p-2">
        <img
          src="/F.png"
          alt=""
         className="h-full"
        />
        </div>
        
        <img src="/FurniFlex.png" alt="" className=" px-1 py-2" />
        <p className="text-white text-[16px] font-barlow">Discover a seamless shopping experience with our curated collection of products. From fashion to electronics, we bring quality.</p>
      </div>
    </div>
  );
};

export default Hero;
