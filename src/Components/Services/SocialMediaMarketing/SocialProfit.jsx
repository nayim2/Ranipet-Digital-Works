import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";
import { assets } from "../../../assets/assets";

const whatYouWillGet = [
  {
    title: "Stronger Brand Identity",
    desc: "Consistent visuals and messaging across all platforms. We craft your brand personality to ensure your audience recognizes and trusts you instantly, helping your business stand out with confidence.",
    img: assets.nayimImage3,
  },
  {
    title: "Audience Growth",
    desc: "Reach the right people at the right time. Our targeted strategies help you connect with potential customers who are genuinely interested in your brand, driving measurable growth over time.",
    img: assets.nayimImage3,
  },
  {
    title: "Higher Engagement",
    desc: "Create conversations and build community. We design campaigns that spark interest and interaction, ensuring your audience stays active and emotionally connected to your brand.",
    img: assets.nayimImage2,
  },
  {
    title: "Better Conversions",
    desc: "Turn followers into paying customers. By optimizing your content and ad placements, we make sure every touchpoint moves your audience closer to a confident purchase decision.",
    img: assets.nayimImage1,
  },
  {
    title: "Data-Driven Strategies",
    desc: "Campaigns optimized for maximum ROI. We analyze performance metrics continuously to refine your marketing approach and achieve steady, long-term brand success.",
    img: assets.nayimImage2,
  },
];

const SocialProfit = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => {
    setSwiperReady(true);
  }, []);

  return (
    <section className="px-6 py-8 md:px-20 text-center relative">
      <h2 className="text-3xl md:text-4xl font-semibold text-white mb-10">
        What You Will Get
      </h2>

      {/* Navigation Buttons */}
      <div
        ref={prevRef}
        className="absolute hidden md:visible left-2 md:left-8 lg:left-34 top-[42%] transform -translate-y-1/2 z-20 cursor-pointer"
      >
        <MdOutlineArrowBackIos  className="text-white/90 border-2 hover:border-white/60 border-white/90 h-8 w-8 rounded-full p-2 transition" />
      </div>
      <div
        ref={nextRef}
        className="absolute right-2 hidden md:visible md:right-8 lg:right-34 top-[42%] transform -translate-y-1/2 z-20 cursor-pointer"
      >
        <MdOutlineArrowForwardIos  className="text-white/90 border-2 hover:border-white/60 border-white/90 md:h-10 md:w-10 h-8 w-8 rounded-full p-2 transition" />
      </div>

      {/* Swiper Carousel */}
      {swiperReady && (
        <Swiper
          modules={[Navigation, Autoplay]}
          loop={true} // <-- Enable infinite loop
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          autoplay={{
            delay:2000,
            disableOnInteraction:false,
          }}
          spaceBetween={40}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="max-w-6xl mx-auto relative"
        >
          {whatYouWillGet.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center text-center relative">
                <div className="relative rounded-xl overflow-hidden  mb-5">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-72 h-56 object-cover rounded-xl"
                  />
                </div>
                <h3 className="font-bold text-lg text-white mb-3">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed max-w-xs mx-auto">
                  {item.desc}
                </p>
              </div>
            </SwiperSlide> 
          ))}
        </Swiper>
      )}
    </section>
  );
};

export default SocialProfit;
