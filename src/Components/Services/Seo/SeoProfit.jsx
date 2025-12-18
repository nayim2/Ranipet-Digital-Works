import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";
import { assets } from "../../../assets/assets";

const whatYouWillGet = [
  {
    title: "Proven Ranking Results",
    desc: "Our SEO strategies consistently deliver measurable ranking improvements across multiple industries — helping your business reach the top of search results and stay there.",
    img: assets.social, // Replace with your actual SEO-related image
  },
  {
    title: "Customized Strategies",
    desc: "We don’t believe in one-size-fits-all SEO. Every campaign is tailored to your business goals, audience, and industry for maximum long-term performance.",
    img: assets.social, // Replace with your own image
  },
  {
    title: "Transparent Reporting",
    desc: "Stay fully informed with detailed, real-time tracking of your keyword rankings, traffic growth, and campaign progress — complete transparency, every step of the way.",
    img: assets.social, // Replace with your image
  },
  {
    title: "White-Hat SEO Practices",
    desc: "We strictly follow Google’s guidelines and ethical SEO standards to ensure sustainable rankings and protect your site’s credibility for the long run.",
    img: assets.social, // Replace with your own image
  },
];

const SeoProfit = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => {
    setSwiperReady(true);
  }, []);

  return (
    <section className="px-6 md:px-20 text-center relative">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-10">
            What You Will Get
          </h2>
    
          {/* Navigation Buttons */}
          <div
            ref={prevRef}
            className="absolute left-2 md:left-8 lg:left-34 top-[42%] transform -translate-y-1/2 z-20 cursor-pointer"
          >
            <MdOutlineArrowBackIos  className="text-white/90 border-2 border-white/90 h-10 w-10 rounded-full p-2 transition" />
          </div>
          <div
            ref={nextRef}
            className="absolute right-2 md:right-8 lg:right-34 top-[42%] transform -translate-y-1/2 z-20 cursor-pointer"
          >
            <MdOutlineArrowForwardIos  className="text-white/90 border-2 border-white/90 h-10 w-10 rounded-full p-2 transition" />
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

export default SeoProfit;
