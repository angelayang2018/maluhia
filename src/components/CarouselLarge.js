import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";

export default function CarouselLarge() {
  return (
    <div className="carousel_large">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        loop="true"
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {swiperImages.map((swiperImage, index) => (
          <SwiperSlide key={index}>
            <img src={swiperImage.img} alt={swiperImage.alt} />
            <div className = "swiper_description">
              <h2>{swiperImage.name}</h2>
              <p>{swiperImage.summary}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
      className = "mini_carousel"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        loop="true"
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
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
  {
    img: "https://i.ibb.co/dQ9xmk9/background.webp",
    alt: "Kamole Beach",
    name: "maui vista",
    summary:
      "2 Bedrooms - 2 Bathrooms - Sleeps 6 adults - Beach access and breathtaking views from lanai",
  },
  {
    img: "https://i.ibb.co/9Tb5Qst/balconyview.jpg",
    alt: "Lanai View",
    name: "hai kale",
    summary:
      " 1 Bedrooms - 1 Bathrooms - Sleeps 4 adults - Beach front",
  },
];
