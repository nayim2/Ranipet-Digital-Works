import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "./Results.css";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { assets } from "../../assets/assets";

export default function Results() {

  const swiperRef = useRef(null);

  const slides = [
    { image: assets.nayimImage1, name: "AvoSlice Pro", link: "/case-study" },
    { image: assets.nayimImage2, name: "Mode Vision", link: "/case-study" },
    { image: assets.nayimImage3, name: "Red Hat Vogue", link: "/case-study" },
    { image: assets.nayimImage4, name: "Modern Chic", link: "/case-study" },
    { image: assets.nayimImage1, name: "Urban Craft", link: "/case-study" },
    { image: assets.nayimImage3, name: "AvoSlice Pro", link: "/case-study" },
    { image: assets.nayimImage4, name: "Luxe Studio", link: "/case-study" },
    { image: assets.nayimImage2, name: "Mode Vision", link: "/case-study" },
  ];

  const handleSlideClick = (link) => {
    // 👇 Redirect to the respective link
    window.location.href = link;
  };

  return (
    <div className="carousel-container" id="results">
      <h1 className="text-center pb-8 md:pb-12 text-4xl md:text-6xl font-bold">
        Results
      </h1>
      <Swiper
      onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[EffectCoverflow, Navigation,Autoplay]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3} // 🔹 shows 5 slides visible at once
        spaceBetween={0}
        loop={true}

         autoplay={{
            delay:2000,
            disableOnInteraction:false,
          }}
        
        coverflowEffect={{
          rotate: 45, // 🔹 controls rotation of side slides
          stretch: -30, // 🔹 adjusts the tightness of spacing
          depth: 250, // 🔹 gives 3D depth
          modifier: 1.2, // 🔹 makes the rotation more dramatic
          slideShadows: false,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}

       

        speed={800}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="slide-item">
            <div
              className="slide-content cursor-pointer"
              onClick={() => handleSlideClick(slide.link)}
            >
              <img src={slide.image} alt={`slide-${index}`} />
              <h2 className="slide-title">{slide.name}</h2>
            </div>
          </SwiperSlide>
        ))}

        {/* === Custom Navigation === */}
        {/* <div className="carousel-controls">
          <button className="swiper-button-prev custom-nav">
            <span className="nav-icon">❮</span>
            <span className="nav-text">Prev</span>
          </button>
          <button className="swiper-button-next custom-nav">
            <span className="nav-text">Next</span>
            <span className="nav-icon">❯</span>
          </button>
        </div> */}
      </Swiper>

      {/* === Arrows slightly above bottom of image === */}
      {/* <div className="md:mt-4 hidden  md:flex items-center justify-center gap-10 z-10">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className=" text-white"
        >
          <MdOutlineArrowBackIos  className="text-white/90 border-2 cursor-pointer hover:border-white/60 border-white/90 h-10 w-10 rounded-full p-2 transition" />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="backdrop-blur-sm transition-all duration-300 text-white"
        >
          <MdOutlineArrowForwardIos  className="text-white/90 border-2 cursor-pointer hover:border-white/60 border-white/90 h-10 w-10 rounded-full p-2 transition" />
        </button>
      </div> */}
    </div>
  );
}
