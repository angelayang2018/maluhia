import { Swiper, SwiperSlide } from "swiper/react";
import {Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css/scrollbar';
import "swiper/css";

export default function Carousel() {
  return (
    <div className = "carousel">
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    loop = "true"
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    
  >
    {swiperImages.map((swiperImage, index) => (
          <SwiperSlide key={index}>
            <img src={swiperImage.img} alt={swiperImage.alt} />
          </SwiperSlide>
        ))}
    
  </Swiper>

  <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    loop = "true"
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    
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
