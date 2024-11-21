// Hero.tsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import HeroItem from "./HeroItems";

function Hero() {
  const heroItems = [
    {
      label1: "Hot and Tasty Coffee",
      label2: "coding",
      label3: "with caffeine and code.",
      src: "/images/1.png",
      text1: "Hey Coder",
      text2: "Hey Coffee",
    },
    {
      label1: "Citys best brew",
      label2: "coding ",
      label3: "with caffeine and code.",
      src: "/images/3.png",
      text1: "Hey Coder",
      text2: "Hey Coffee",
    },
    {
      label1: "Finest brew",
      label2: "fueling  ",
      label3: "code with caffeine.",
      src: "/images/4.png",
      text1: "Hey Coder",
      text2: "Hey Coffee",
    },
    {
      label1: "Boldest brew",
      label2: "fueling  ",
      label3: "code with caffeine.",
      src: "/images/5.png",
      text1: "Hey Coder",
      text2: "Hey Coffee",
    },
  ];

  return (
    <div className="hero-section">
      <div className="hero-container">
        <Swiper
          pagination={{ dynamicBullets: true }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {heroItems.map((item, index) => (
            <SwiperSlide key={index}>
              <HeroItem
                label1={item.label1}
                label2={item.label2}
                label3={item.label3}
                src={item.src}
                text1={item.text1}
                text2={item.text2}
              ></HeroItem>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Hero;
