"use client";

import { Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import styles from "./welcome.module.scss";
import { useRef } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { useRouter } from "next/navigation";
interface SwiperRefProps {
  slidePrev: () => void;
  slideNext: () => void;
}

const slides = [
  {
    title: "Unlock the Power Of Future AI",
    description: "Chat with the smartest AI. Experience power of AI with us",
    image: "/images/png/rocket.png",
  },
  {
    title: "Ask Anything",
    description: "Get instant answers about your fintech",
    image: "/images/png/rocket.png",
  },
  {
    title: "Smart Insights",
    description: "Understand your finances with AI",
    image: "/images/png/rocket.png",
  },
];

const WelcomeComponent = () => {
  const swiperRef = useRef<null | SwiperRefProps>(null);
  const router = useRouter();

  return (
    <div className={styles.container}>
      <button className={styles.skip} onClick={() => router.push("chat")}>
        Skip
      </button>

      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        navigation
        spaceBetween={20}
        slidesPerView={1}
        style={{ width: "100%" }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className={styles.slide}>
              <img src={slide.image} alt="" className={styles.image} />

              <h1>{slide.title}</h1>
              <p>{slide.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={styles.actions}>
        <FiArrowLeft size={18} onClick={() => swiperRef.current?.slidePrev()} />

        <FiArrowRight
          size={18}
          onClick={() => swiperRef.current?.slideNext()}
        />
      </div>
    </div>
  );
};

export default WelcomeComponent;
