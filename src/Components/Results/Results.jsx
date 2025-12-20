import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Custom CSS
import "./Results.css";

// Swiper modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { assets } from "../../assets/assets";



const resultsData = [
  {
    id: 1,
    image: assets.client1,
    title: "Student Success Story",
    desc: "Placed as Full Stack Developer",
  },
  {
    id: 2,
    image: assets.client1,
    title: "Live Project Result",
    desc: "Completed Real-Time Application",
  },
  {
    id: 3,
    image: assets.client1,
    title: "Internship Achievement",
    desc: "Selected for Paid Internship",
  },
  {
    id: 4,
    image: assets.client1,
    title: "Career Growth",
    desc: "Switched Career into IT",
  },
];

const Results = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (swiper, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <section className="results-section">
      <h2 className="results-title">Our Results</h2>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="resultsSwiper"
      >
        {resultsData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="result-card">
              <img src={item.image} alt={item.title} />
              <div className="result-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Autoplay Progress */}
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </section>
  );
};

export default Results;
