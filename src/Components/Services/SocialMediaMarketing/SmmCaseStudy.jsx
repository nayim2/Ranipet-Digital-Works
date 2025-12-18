import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";
import './Socialmedia.css'
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { assets } from "../../../assets/assets";

export default function SmmCaseStudy() {


    const slides = [
    { image: assets.nayimImage1, name: "AvoSlice Pro" },
    { image: assets.nayimImage2, name: "Luxe Studio" },
    { image: assets.nayimImage1, name: "Mode Vision" },
    { image: assets.nayimImage3, name: "Red Hat Vogue" },
    { image: assets.nayimImage4, name: "Modern Chic" },
    { image: assets.nayimImage3, name: "Modern Chic" },
    { image: assets.nayimImage2, name: "AvoSlice Pro" },
    { image: assets.nayimImage1, name: "Luxe Studio" },
    { image: assets.nayimImage3, name: "Mode Vision" },
    { image: assets.nayimImage3, name: "Red Hat Vogue" },
    { image: assets.nayimImage2, name: "Modern Chic" },
    { image: assets.nayimImage4, name: "Modern Chic" },
  ];


  const swiperRef = useRef(null);

  return (
    <section className="text-white py-12">
      <h2 className="text-center text-4xl md:text-5xl font-bold text-white">
        Case Studies
      </h2>

      <div className="relative max-w-7xl mx-auto">
        <Swiper
          modules={[EffectCoverflow, Pagination,Autoplay]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={4}
          loop={true}

           autoplay={{
            delay:2000,
            disableOnInteraction:false,
          }}



          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 250,
            modifier: 1,
            slideShadows: false,
          }}
          className="swiper_container"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="w-[260px] sm:w-[300px]">
              <div className="overflow-hidden shadow-lg cursor-pointer relative transition-transform duration-300 hover:scale-[1.02]">
                <img
                  src={slide.image}
                  alt={slide.name}
                  className="md:w-full md:h-100 object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* === Arrows slightly above bottom of image === */}
        {/* <div className="absolute bottom-4 hidden md:flex left-1/2 -translate-x-1/2 flex items-center  justify-center gap-8 md:gap-18 z-10">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <MdOutlineArrowBackIos size={26} className="text-white/90 border-2 cursor-pointer hover:border-white/60 border-white/90 h-10 w-10 rounded-full p-2 transition" />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
          >
            <MdOutlineArrowForwardIos size={30} className="text-white/90 border-2 cursor-pointer hover:border-white/60 border-white/90 h-10 w-10 rounded-full p-2 transition" />
          </button>
        </div> */}

        {/* Pagination below carousel */}
        <div className="custom-pagination flex justify-center gap-1 mt-6 text-gray-100"></div>
      </div>
    </section>
  );
}
