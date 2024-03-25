import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Controller } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import { useState } from "react";

export default function Carousel() {
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);

  return (
    <div className="carousel">
      <Swiper
        modules={[Navigation, Controller]}
        loop="true"
        slidesPerView={1}
        navigation
        
        onSwiper={setFirstSwiper}
        controller={{ control: secondSwiper }}
      >
        {swiperImages.map((swiperImage, index) => (
          <SwiperSlide key={index}>
            <img src={swiperImage.img} alt={swiperImage.alt} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        modules={[Navigation, Controller]}
        loop="true"
        slidesPerView={1}
        navigation
        onSwiper={setSecondSwiper}
        controller={{ control: firstSwiper }}
      >
        {swiperImages.map((swiperImage, index) => (
          <SwiperSlide key={index}>
            <img src={swiperImage.img} alt={swiperImage.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

const swiperImages = [
  { img: "https://i.ibb.co/8zYS30j/bbq.jpg", alt: "BBQ Grill" },
  { img: "https://i.ibb.co/9Tb5Qst/balconyview.jpg", alt: "Lanai View" },
  { img: "https://i.ibb.co/8zYS30j/bbq.jpg", alt: "BBQ Grill" },
  { img: "https://i.ibb.co/9Tb5Qst/balconyview.jpg", alt: "Lanai View" },
  { img: "https://i.ibb.co/8zYS30j/bbq.jpg", alt: "BBQ Grill" },
  { img: "https://i.ibb.co/9Tb5Qst/balconyview.jpg", alt: "Lanai View" },
];
